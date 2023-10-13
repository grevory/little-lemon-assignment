/* eslint-disable testing-library/no-unnecessary-act */
import { render, screen, fireEvent, act } from "@testing-library/react";
import * as bookingForm from "./BookingForm";
const { BookingForm } = bookingForm;

const getNextDays = (currentDate = new Date(), daysToAdd = 1) => {
	const nextDate = new Date(currentDate);
	nextDate.setDate(currentDate.getDate() + daysToAdd);
	return nextDate;
};

const mockToday = new Date().toLocaleDateString("en-CA");
let mockTomorrow = getNextDays().toLocaleDateString("en-CA");
const mockAvailableTimes = { [mockToday]: ["17:00", "18:00"] };

test("Renders the BookingForm heading", () => {
	const onSubmit = jest.fn();
	const onDateChange = jest.fn();
	render(
		<BookingForm
			availableTimes={mockAvailableTimes}
			onSubmit={onSubmit}
			onDateChange={onDateChange}
		/>
	);
	const headingElement = screen.getByText("Book");
	expect(headingElement).toBeInTheDocument();
});

describe("Form entry", () => {
	test("Should be a valid", async () => {
		const onSubmit = jest.fn();
		const onDateChange = jest.fn();
		render(
			<BookingForm
				availableTimes={mockAvailableTimes}
				onSubmit={onSubmit}
				onDateChange={onDateChange}
			/>
		);

		const dateInput = screen.getByLabelText("Choose date");
		const timeInput = screen.getByLabelText("Choose time");
		const guestsInput = screen.getByLabelText("Number of guests");
		const occasionInput = screen.getByLabelText("Occasion");
		const submitButton = screen.getByText("Book");

		fireEvent.change(dateInput, { target: { value: mockTomorrow } });
		fireEvent.change(timeInput, { target: { value: "17:00" } });
		fireEvent.change(guestsInput, { target: { value: "3" } });
		fireEvent.change(occasionInput, { target: { value: "birthday" } });

		expect(onDateChange).toHaveBeenCalled();
		await act(() => {
			expect(submitButton).not.toBeDisabled();
		});
	});

	describe("Bad date value", () => {
		test("Should be invalid", async () => {
			const onSubmit = jest.fn();
			const onDateChange = jest.fn();
			render(
				<BookingForm
					availableTimes={mockAvailableTimes}
					onSubmit={onSubmit}
					onDateChange={onDateChange}
				/>
			);

			const dateInput = screen.getByLabelText("Choose date");
			const timeInput = screen.getByLabelText("Choose time");
			const guestsInput = screen.getByLabelText("Number of guests");
			const occasionInput = screen.getByLabelText("Occasion");
			const submitButton = screen.getByText("Book");

			await act(async () => {
				await fireEvent.change(dateInput, {
					target: { value: "1" },
				});
				await fireEvent.blur(dateInput);
				await fireEvent.change(timeInput, {
					target: { value: "1:00" },
				});
				await fireEvent.blur(timeInput);
				await fireEvent.change(guestsInput, { target: { value: "3" } });
				await fireEvent.change(occasionInput, {
					target: { value: "birthday" },
				});

				expect(submitButton).toBeDisabled();
			});
		});
	});
});

test("Read and write to Local Storage", async () => {
	const onSubmit = jest.fn();
	const onDateChange = jest.fn();

	render(
		<BookingForm
			availableTimes={mockAvailableTimes}
			onSubmit={onSubmit}
			onDateChange={onDateChange}
		/>
	);

	const dateInput = screen.getByLabelText("Choose date");
	const timeInput = screen.getByLabelText("Choose time");
	const guestsInput = screen.getByLabelText("Number of guests");
	const occasionInput = screen.getByLabelText("Occasion");

	await act(async () => {
		await fireEvent.change(dateInput, {
			target: { value: mockToday },
		});
		await fireEvent.change(timeInput, { target: { value: "17:00" } });
		await fireEvent.change(guestsInput, { target: { value: "3" } });
		await fireEvent.change(occasionInput, {
			target: { value: "birthday" },
		});

		bookingForm.handleFormikSubmit(onSubmit)({ test: true });
		expect(onSubmit).toHaveBeenCalled();
		expect(localStorage.getItem).toHaveBeenCalled();
		expect(localStorage.setItem).toHaveBeenCalledWith(
			"Bookings",
			JSON.stringify({
				test: true,
			})
		);
	});
});

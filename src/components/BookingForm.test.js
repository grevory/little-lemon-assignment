import { render, screen, fireEvent } from "@testing-library/react";
import { BookingForm } from "./BookingForm";

const mockDate = new Date().toISOString().split("T")[0];
const mockAvailableTimes = { mockDate: ["17:00", "18:00"] };

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

test("Submits booking form", () => {
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
	fireEvent.change(dateInput, { target: { value: mockDate } });
	const timeInput = screen.getByLabelText("Choose time");
	fireEvent.change(timeInput, { target: { value: "17:00" } });
	const guestsInput = screen.getByLabelText("Number of guests");
	fireEvent.change(guestsInput, { target: { value: "3" } });
	const occasionInput = screen.getByLabelText("Occasion");
	fireEvent.change(occasionInput, { target: { value: "Birthday" } });
	const submitButton = screen.getByText("Book");
	fireEvent.click(submitButton);
	expect(onDateChange).toHaveBeenCalled();
	expect(onSubmit).toHaveBeenCalled();
});

test("Read and write to Local Storage", () => {
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
	fireEvent.change(dateInput, { target: { value: mockDate } });
	// expect(global.localStorage.setItem).toBeCalledWith("token");
	expect(localStorage.setItem).toHaveBeenCalledWith(
		"booking-form-date",
		mockDate
	);
	expect(localStorage.getItem).toHaveBeenCalledWith("booking-form-date");
});

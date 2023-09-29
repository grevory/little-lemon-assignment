import { render, screen, fireEvent } from "@testing-library/react";
import { BookingForm } from "./BookingForm";

const mockAvailableTimes = { "2023-10-01": ["17:00", "18:00"] };

test("Renders the BookingForm heading", () => {
	render(<BookingForm availableTimes={mockAvailableTimes} />);
	const headingElement = screen.getByText("Book");
	expect(headingElement).toBeInTheDocument();
});

test("Submits boking form", () => {
	const bookTime = jest.fn();
	render(
		<BookingForm availableTimes={mockAvailableTimes} bookTime={bookTime} />
	);
	const dateInput = screen.getByLabelText("Choose date");
	fireEvent.change(dateInput, { target: { value: "2023-10-01" } });
	const timeInput = screen.getByLabelText("Choose time");
	fireEvent.change(timeInput, { target: { value: "17:00" } });
	const guestsInput = screen.getByLabelText("Number of guests");
	fireEvent.change(guestsInput, { target: { value: "3" } });
	const occasionInput = screen.getByLabelText("Occasion");
	fireEvent.change(occasionInput, { target: { value: "Birthday" } });
	const submitButton = screen.getByText("Book");
	fireEvent.click(submitButton);
	expect(bookTime).toHaveBeenCalled();
});

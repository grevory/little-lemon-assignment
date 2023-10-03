import { useEffect, useState } from "react";
import { Button } from "./Button";

export const BookingForm = ({
	availableTimes,
	onDateChange,
	onSubmit,
	id = "booking-form",
}) => {
	const minDate = Object.keys(availableTimes)[0];

	const minGuests = 1;
	const maxGuests = 12;

	const [formValues, setFormValues] = useState(() => ({
		date: window.localStorage.getItem(`${id}-date`) || "",
		time: window.localStorage.getItem(`${id}-time`) || "",
		numGuests: window.localStorage.getItem(`${id}-numGuests`) || 2,
		occasion: window.localStorage.getItem(`${id}-occasion`) || "Birthday",
	}));

	useEffect(() => {
		for (const [key, value] of Object.entries(formValues)) {
			window.localStorage.setItem(`${id}-${key}`, value);
		}
	}, [formValues, id]);

	useEffect(() => {
		if (!availableTimes[formValues.date]) {
			onDateChange(formValues.date);
		}
	}, [availableTimes, formValues, onDateChange]);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormValues({
			...formValues,
			[name]: value,
		});
	};

	const handleDateChange = (e) => {
		onDateChange(e.target.value);
		return handleInputChange(e);
	};

	const handleSubmit = (formValues) => {
		return (e) => onSubmit(e, formValues);
	};

	return (
		<form
			style={{
				display: "grid",
				maxWidth: 200,
				gridTemplateColumns: "200px 3fr",
				gap: 20,
			}}
			id={id}
			onSubmit={(e) => {
				e.preventDefault();
			}}
		>
			<label htmlFor="res-date">Choose date</label>
			<input
				type="date"
				name="date"
				id="res-date"
				value={formValues.date}
				min={minDate}
				onChange={handleDateChange}
			/>
			<label htmlFor="res-time">Choose time</label>
			<select
				name="time"
				id="res-time"
				value={formValues.time}
				onChange={handleInputChange}
			>
				{availableTimes[formValues.date] &&
					availableTimes[formValues.date].map((timeSlot) => (
						<option key={timeSlot} value={timeSlot}>
							{timeSlot}
						</option>
					))}
			</select>
			<label htmlFor="numGuests">Number of guests</label>
			<input
				name="numGuests"
				type="number"
				placeholder="1"
				min={minGuests}
				max={maxGuests}
				id="numGuests"
				value={formValues.numGuests}
				onChange={handleInputChange}
			/>
			<label htmlFor="occasion">Occasion</label>
			<select
				name="occasion"
				id="occasion"
				value={formValues.occasion}
				onChange={handleInputChange}
			>
				<option value="Birthday">Birthday</option>
				<option value="Anniversary">Anniversary</option>
			</select>
			<Button
				aria-label="Book"
				className="secondary"
				onClick={handleSubmit(formValues)}
			>
				Book
			</Button>
		</form>
	);
};

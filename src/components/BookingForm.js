import { useEffect, useState } from "react";
import { Button } from "./Button";

export const BookingForm = ({
	availableTimes,
	onDateChange,
	onSubmit,
	id = "booking-form",
}) => {
	console.log("BookingForm availableTimes", availableTimes);
	const minDate = Object.keys(availableTimes)[0];

	const minGuests = 1;
	const maxGuests = 12;

	const [formValues, setFormValues] = useState({
		date: "",
		time: "",
		numGuests: 2,
		occasion: "Birthday",
	});

	useEffect(() => {
		for (const [key, value] of Object.entries(formValues)) {
			console.log("Setting", `${id}-${key}`, value);
			window.localStorage.setItem(`${id}-${key}`, value);
		}
	}, [formValues]);

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
			onSubmit={handleSubmit(formValues)}
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
				name="occasions"
				id="occasion"
				value={formValues.occasion}
				onChange={handleInputChange}
			>
				<option>Birthday</option>
				<option>Anniversary</option>
			</select>
			<Button aria-label="Book" type="submit" className="secondary">
				Book
			</Button>
		</form>
	);
};

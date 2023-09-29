import { useState } from "react";

export const BookingForm = ({ availableTimes, bookTime, onSubmit }) => {
	const minDate = Object.keys(availableTimes)[0];
	const maxDate = Object.keys(availableTimes)[
		Object.keys(availableTimes).length - 1
	];
	const [reservationDate, setReservationDate] = useState(minDate);
	const [reservationTime, setReservationTime] = useState("");
	const [numberOfGuests, setNumberOfGuests] = useState(2);
	const [occasion, setOccasion] = useState("Other");

	const handleSubmit = (e) => {
		e.preventDefault();
		bookTime(reservationDate, reservationTime);
		console.log(111, reservationDate, reservationTime, availableTimes);
	};

	return (
		<form
			style={{
				display: "grid",
				maxWidth: 200,
				gridTemplateColumns: "200px 3fr",
				gap: 20,
			}}
			onSubmit={handleSubmit}
		>
			<label htmlFor="res-date">Choose date</label>
			<input
				type="date"
				id="res-date"
				value={reservationDate}
				min={minDate}
				max={maxDate}
				onChange={(e) => setReservationDate(e.target.value)}
			/>
			<label htmlFor="res-time">Choose time</label>
			<select
				id="res-time"
				value={reservationTime}
				onChange={(e) => setReservationTime(e.target.value)}
			>
				{availableTimes[reservationDate].map((timeSlot) => (
					<option key={timeSlot} value={timeSlot}>
						{timeSlot}
					</option>
				))}
			</select>
			<label htmlFor="guests">Number of guests</label>
			<input
				type="number"
				placeholder="1"
				min="1"
				max="10"
				id="guests"
				value={numberOfGuests}
				onChange={(e) => setNumberOfGuests(e.target.value)}
			/>
			<label htmlFor="occasion">Occasion</label>
			<select
				id="occasion"
				value={occasion}
				onChange={(e) => setOccasion(e.target.value)}
			>
				<option>Birthday</option>
				<option>Anniversary</option>
			</select>
			<input
				aria-label="Book"
				type="submit"
				value="Book"
				className="secondary"
			/>
		</form>
	);
};

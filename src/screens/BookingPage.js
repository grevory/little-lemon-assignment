import { useReducer } from "react";
import { BookingForm } from "../components/BookingForm";

const today = new Date();

export const initializeTimes = (date) => {
	let availableTimes = {};
	const timeSlots = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
	for (let numDays = 0; numDays < 7; numDays++) {
		let initializeDate = addDays(date, numDays);
		availableTimes[formatDate(initializeDate)] = timeSlots;
	}
	// return {
	// 	[date]: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
	// };
	return availableTimes;
};

export const updateTimes = (state, action) => {
	switch (action.type) {
		case "book_time": {
			if (Object.keys(state).indexOf(action.date) < 0) {
				initializeTimes(action.date);
			}
			return {
				...state,
				[action.date]: state[action.date].filter(
					(timeSlot) => timeSlot !== action.time
				),
			};
		}
		default: {
			return state;
		}
	}
};

const formatDate = (date) => date.toISOString().split("T")[0];
const addDays = (date, days) => {
	var result = new Date(date);
	result.setDate(result.getDate() + days);
	return result;
};

const BookingPage = () => {
	const [availableTimes, dispatch] = useReducer(
		updateTimes,
		initializeTimes(today)
	);
	const bookTime = (date, time) =>
		dispatch({
			type: "book_time",
			date,
			time,
		});

	return (
		<main>
			<section className="green-area">
				<div className="container">
					<h1>Reservation</h1>
				</div>
			</section>
			<section>
				<div className="container">
					<BookingForm
						availableTimes={availableTimes}
						bookTime={bookTime}
					/>
				</div>
			</section>
		</main>
	);
};

export default BookingPage;

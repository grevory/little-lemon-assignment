import { useReducer } from "react";
import { BookingForm } from "../components/BookingForm";
import { fetchAPI, submitAPI } from "../services/mockApi";
import { useNavigate } from "react-router-dom";

const formatDate = (date) => new Date(date).toLocaleDateString("en-CA");

export const initializeTimes = (date) => fetchAPI(date);

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
		case "change_date": {
			const timeSlots =
				state[action.date] || initializeTimes(new Date(action.date));
			return {
				...state,
				[action.date]: timeSlots,
			};
		}
		default: {
			return state;
		}
	}
};

const setInitialTimes = () => {
	const date = new Date();
	return {
		[formatDate(date)]: initializeTimes(date),
	};
};

const BookingPage = () => {
	const navigate = useNavigate();
	const [availableTimes, dispatch] = useReducer(
		updateTimes,
		{},
		setInitialTimes
	);
	const dispatchBookTime = (date, time) =>
		dispatch({
			type: "book_time",
			date,
			time,
		});
	const displateChangeDate = (date) =>
		dispatch({ type: "change_date", date });

	const handleFormSubmit = (formData) => {
		console.log("SUBMIT", formData);
		submitAPI(formData);
		navigate("/reservation/confirmed");
	};

	const handleDateChange = (date) => displateChangeDate(date);

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
						bookTime={dispatchBookTime}
						onSubmit={handleFormSubmit}
						onDateChange={handleDateChange}
					/>
				</div>
			</section>
		</main>
	);
};

export default BookingPage;

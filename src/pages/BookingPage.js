import { useReducer, useEffect, useState } from "react";
import { BookingForm } from "../components/BookingForm";
import { fetchAPI, submitAPI } from "../services/mockApi";
import { useNavigate } from "react-router-dom";

const today = new Date();

const formatDate = (date) => date.toISOString().split("T")[0];
const addDays = (date, days) => {
	var result = new Date(date);
	result.setDate(result.getDate() + days);
	return result;
};

// export const initializeTimes = (date) => {
// 	let availableTimes = {};
// 	for (let numDays = 0; numDays < 7; numDays++) {
// 		let initializeDate = addDays(date, numDays);
// 		console.log("initializeDate", initializeDate);
// 		const timeSlots = fetchAPI(initializeDate);
// 		console.log("timeSlots", formatDate(initializeDate), timeSlots);
// 		availableTimes[formatDate(initializeDate)] = timeSlots;
// 	}
// 	console.log("Post Loop", availableTimes);
// 	return availableTimes;
// };

export const initializeTimes = (date) => fetchAPI(date);

export const updateTimes = (state, action) => {
	switch (action.type) {
		case "book_time": {
			if (Object.keys(state).indexOf(action.date) < 0) {
				console.log(11111, action.date);
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
			console.log(22222, action.date);
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
	console.log(33333, date);
	return {
		[formatDate(date)]: initializeTimes(date),
	};
};

const BookingPage = () => {
	const navigate = useNavigate();
	// const timeSlots = initializeTimes(today);
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

	const handleFormSubmit = (event, formData) => {
		event.preventDefault();
		console.log("SUBMIT", formData);
		submitAPI(formData);
		navigate("/reservation/confirmed");
	};

	const handleDateChange = (date) => displateChangeDate(date);

	const timeSlots = initializeTimes(today);
	console.log("availableTimes", availableTimes);
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

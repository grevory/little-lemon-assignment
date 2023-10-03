import { render, screen } from "@testing-library/react";
import { initializeTimes, updateTimes } from "./BookingPage";

const mockDate = new Date().toISOString().split("T")[0];

test("initializeTimes has the right structure", () => {
	const initialTimes = initializeTimes(new Date());
	expect(Object.keys(initialTimes).length).toBeTruthy();
});

test("updateTime should not impact original state", () => {
	const mockState = {
		[mockDate]: ["17:00", "18:00"],
	};
	expect(updateTimes(mockState, {})).toBe(mockState);
});

test("updateTime should remove one time slot", () => {
	const mockState = {
		[mockDate]: ["17:00", "18:00"],
	};
	const state = updateTimes(mockState, {
		type: "book_time",
		date: mockDate,
		time: "17:00",
	});
	expect(state[mockDate][0]).toBe("18:00");
});

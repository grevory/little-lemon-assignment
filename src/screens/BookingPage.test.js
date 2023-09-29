import { render, screen } from "@testing-library/react";
import { initializeTimes, updateTimes } from "./BookingPage";

test("initializeTimes has the right structure", () => {
	const initialTimes = initializeTimes(new Date());
	expect(Object.keys(initialTimes).length).toBe(7);
	expect(Object.keys(initialTimes)[0]).toBe(
		new Date().toISOString().split("T")[0]
	);
});

test("updateTime should not impact original state", () => {
	const mockState = {
		"2023-10-01": ["17:00", "18:00"],
	};
	expect(updateTimes(mockState, {})).toBe(mockState);
});

test("updateTime should remove one time slot", () => {
	const mockState = {
		"2023-10-01": ["17:00", "18:00"],
	};
	const state = updateTimes(mockState, {
		type: "book_time",
		date: "2023-10-01",
		time: "17:00",
	});
	expect(state["2023-10-01"][0]).toBe("18:00");
});

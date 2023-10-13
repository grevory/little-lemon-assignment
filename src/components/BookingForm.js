import { useEffect, useMemo } from "react";
import { useFormik, validateYupSchema, yupToFormErrors } from "formik";
import * as Yup from "yup";
import { Button } from "./Button";
import { ErrorMessage } from "./ErrorMessage";

export const handleFormikSubmit = (onSubmit) => (values) => {
	window.localStorage.setItem("Bookings", JSON.stringify(values));
	onSubmit(values);
};

export const BookingForm = ({ availableTimes, onDateChange, onSubmit }) => {
	const today = new Date().toLocaleDateString("en-CA");
	const initialValues = useMemo(
		() =>
			JSON.parse(window.localStorage.getItem(`Bookings`) || null) || {
				date: today,
				time: availableTimes[today][0],
				numGuests: 1,
				occasion: "birthday",
			},
		[availableTimes, today]
	);

	const formik = useFormik({
		initialValues,
		onSubmit: handleFormikSubmit(onSubmit),
		validate: (values) => {
			const validationSchema = Yup.object({
				date: Yup.date()
					.min(today, "Cannot book in the past")
					.required("Date is required"),
				time: Yup.string()
					.oneOf(availableTimes[values.date] || [])
					.required("Time is required"),
				numGuests: Yup.number()
					.min(
						1,
						"At least one person will need to be reserving table"
					)
					.max(
						10,
						"We cannot accommodate this many patrons at one table"
					)
					.required("Number of guests is required"),
				occasion: Yup.string()
					.oneOf(["birthday", "engagement", "anniversary"])
					.required("Occasion is required"),
			});
			try {
				validateYupSchema(values, validationSchema, true, this);
			} catch (err) {
				return yupToFormErrors(err); //for rendering validation errors
			}

			return {};
		},
	});

	useEffect(() => {
		const localStorageData = JSON.parse(
			window.localStorage.getItem("Bookings") || null
		);
		const prevDate = localStorageData?.date || today;

		if (prevDate !== formik.values.date) {
			onDateChange(formik.values.date);
		}
	}, [formik.values.date]);

	return (
		<form
			style={{
				display: "grid",
				maxWidth: 320,
				gridTemplateColumns: "200px 3fr",
				gap: 20,
			}}
		>
			<label htmlFor="res-date">Choose date</label>
			<input
				type="date"
				name="date"
				id="res-date"
				data-testid="dateInput"
				min={today}
				className={
					formik.errors.date && formik.touched.date
						? "input-error"
						: null
				}
				{...formik.getFieldProps("date")}
			/>
			{formik.errors.date && formik.touched.date ? (
				<ErrorMessage>{formik.errors.date}</ErrorMessage>
			) : null}
			{formik.values.date && availableTimes[formik.values.date] ? (
				<>
					<label htmlFor="res-time">Choose time</label>
					<select
						name="time"
						id="res-time"
						className={
							formik.errors.time && formik.touched.time
								? "input-error"
								: null
						}
						{...formik.getFieldProps("time")}
					>
						{availableTimes[formik.values.date] &&
							availableTimes[formik.values.date].map(
								(timeSlot) => (
									<option key={timeSlot} value={timeSlot}>
										{timeSlot}
									</option>
								)
							)}
					</select>
				</>
			) : null}
			{formik.errors.time && formik.touched.time ? (
				<ErrorMessage>{formik.errors.time}</ErrorMessage>
			) : null}
			<label htmlFor="res-numGuests">Number of guests</label>
			<input
				type="number"
				name="numGuests"
				id="res-numGuests"
				className={
					formik.errors.numGuests && formik.touched.numGuests
						? "input-error"
						: null
				}
				{...formik.getFieldProps("numGuests")}
			/>
			{formik.errors.numGuests && formik.touched.numGuests ? (
				<ErrorMessage>{formik.errors.numGuests}</ErrorMessage>
			) : null}
			<label htmlFor="occasion">Occasion</label>
			<select
				name="occasion"
				id="occasion"
				className={
					formik.errors.occasion && formik.touched.occasion
						? "input-error"
						: null
				}
				{...formik.getFieldProps("occasion")}
			>
				<option value="birthday">Birthday</option>
				<option value="engagement">Engagement</option>
				<option value="anniversary">Anniversary</option>
			</select>
			{formik.errors.occasion && formik.touched.occasion ? (
				<ErrorMessage>{formik.errors.occasion}</ErrorMessage>
			) : null}
			<Button
				aria-label="Book"
				disabled={!formik.isValid}
				type="button"
				className={`secondary ${!formik.isValid ? "disabled" : ""}`}
				onClick={() => formik.submitForm()}
			>
				Book
			</Button>
		</form>
	);
};

import * as React from "react";
import { createRoot } from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import Home from "./pages/Home";
import BookingPage from "./pages/BookingPage";
import ConfirmedBooking from "./pages/ConfirmedBookingPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<>
				<Header />
				<Home />
				<Footer />
			</>
		),
	},
	{
		path: "/about",
		element: <App />,
	},
	{
		path: "/menu",
		element: <App />,
	},
	{
		path: "/reservation",
		element: (
			<>
				<Header />
				<BookingPage />
				<Footer />
			</>
		),
	},
	{
		path: "/reservation/confirmed",
		element: (
			<>
				<Header />
				<ConfirmedBooking />
				<Footer />
			</>
		),
	},
	{
		path: "/order",
		element: <App />,
	},
	{
		path: "/login",
		element: <App />,
	},
]);

createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

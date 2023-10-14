import * as React from "react";
import { createRoot } from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import Home from "./pages/Home";
import BookingPage from "./pages/BookingPage";
import ConfirmedBooking from "./pages/ConfirmedBookingPage";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Order from "./pages/Order";
import Login from "./pages/Login";

function Layout() {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
}

const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/about",
				element: <About />,
			},
			{
				path: "/menu",
				element: <Menu />,
			},
			{
				path: "/reservation",
				element: <BookingPage />,
			},
			{
				path: "/reservation/confirmed",
				element: <ConfirmedBooking />,
			},
			{
				path: "/order",
				element: <Order />,
			},
			{
				path: "/login",
				element: <Login />,
			},
		],
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

import * as React from "react";
import { createRoot } from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import {
	createBrowserRouter,
	RouterProvider,
	Route,
	Link,
} from "react-router-dom";
import App from "./App";
import "./index.css";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
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
		element: <App />,
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

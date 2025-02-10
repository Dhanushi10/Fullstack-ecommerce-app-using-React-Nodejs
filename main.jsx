import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "/Users/dhanushivijay/Desktop/Ecommerce-fullstack-website/Frontend/app";
import "./index.css";

import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</StrictMode>
);
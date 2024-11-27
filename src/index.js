import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from "./App.js";

const root = ReactDOM.createRoot(document.getElementById("root")); // Créez un root

root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
)
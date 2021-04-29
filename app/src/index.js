import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import { reducer } from "./reducers";
import thunk from "redux-thunk";
import { BrowserRouter as Router } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
	palette: {
		primary: {
			main: "#66bb6a",
			light: "#98ee99",
			dark: "#338a3e",
			// contrastText: "",
		},
		secondary: {
			main: "#80deea",
			light: "#b4ffff",
			dark: "#4bacb8",
			// contrastText: "",
		},
	},
	typography: {
		fontFamily: [" Tahoma "],
	},
});

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
	<Router>
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<App />
			</ThemeProvider>
		</Provider>
	</Router>,

	document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

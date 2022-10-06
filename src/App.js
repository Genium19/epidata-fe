import { BrowserRouter, Route, Routes } from "react-router-dom";

// views
import Home from "./views/Home";
import About from "./views/About";
import Foods from "./views/Foods";
import FilteredFoods from "./views/FilteredFoods";

// components
import NavBar from "./components/NavBar";


// styles
import "./App.css";

function App() {
	return (
		<BrowserRouter>
			{/* Header Area */}
			<div>
				<NavBar />
			</div>
			{/* Route Area */}
			<Routes>
				<Route element={<Home/>} exact path="/" />
				<Route element={<About/>} path="/About" />
				<Route element={<Foods/>} path="/Foods" />
				<Route element={<FilteredFoods/>} path="/FilteredFoods/:slug" />
			</Routes>

		</BrowserRouter>
	);
}

export default App;
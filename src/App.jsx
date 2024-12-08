import "./App.css";
import {BrowserRouter, Route, Routes} from "react-router";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import {CartProvider} from "./context/CartContext";

function App() {
	return (
		<CartProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="*" element={<h1>Not Found</h1>} />
				</Routes>
			</BrowserRouter>
		</CartProvider>
	);
}

export default App;

import "./App.css";
import React from "react";
import ReactDOM from "react-dom"; // Necesario para el portal
import { BrowserRouter, Route, Routes } from "react-router"; // Asegúrate de usar "react-router-dom"
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import CharacterInfo from "./pages/CharacterInfo";
import { FavoritesProvider } from "./context/FavoritesContext";
import Navbar from "./components/navbar/Navbar"; // Importamos el Navbar

function App() {
  return (
    <FavoritesProvider>
      <BrowserRouter>
        <Navbar /> {/* Coloca el Navbar aquí, no necesitas ReactDOM.createPortal */}
        <div id="root">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/info/:id" element={<CharacterInfo />} />
            <Route path="*" element={<h1>Not Found</h1>} />
          </Routes>
        </div>
      </BrowserRouter>
    </FavoritesProvider>
  );
}

export default App;


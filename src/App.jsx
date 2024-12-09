import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router"; 
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import CharacterInfo from "./pages/CharacterInfo";
import CommentsPage from "./pages/CommentsPage";
import { FavoritesProvider } from "./context/FavoritesContext";
import Navbar from "./components/navbar/Navbar"; 

function App() {
  return (
    <FavoritesProvider>
      <BrowserRouter>
        <Navbar />
        <div id="root">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/info/:id" element={<CharacterInfo />} />
            <Route path="/comments" element={<CommentsPage />} />
            <Route path="*" element={<h1>Not Found</h1>} />
          </Routes>
        </div>
      </BrowserRouter>
    </FavoritesProvider>
  );
}

export default App;


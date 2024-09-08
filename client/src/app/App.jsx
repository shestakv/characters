import { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "../widgets/navbar/Navbar";
import UniversesPage from "../pages/universes/UniversesPage";
import { axiosRequest } from "../services/axiosInstance";
import CharactersPage from "../pages/characters/CharactersPage";

function App() {
  const [universes, setUniverses] = useState([]);
  const [characters, setCharacters] = useState([]);

  const getAllUniverses = async () => {
    try {
      const response = await axiosRequest.get("/universes");
      if (response.status === 200) {
        setUniverses(response.data.universes);
      }
    } catch ({ response }) {
      console.log(response.data.message);
    }
  };

  const getAllCharacters = async () => {
    try {
      const response = await axiosRequest.get("/characters");
      console.log(response);
      
      if (response.status === 200) {
        setCharacters(response.data.characters);
      }
    } catch ({ response }) {
      console.log(response.data.message);
    }
  };

  useEffect(() => {
    getAllUniverses();
    getAllCharacters();
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/universes"
          element={
            <UniversesPage universes={universes} setUniverses={setUniverses} />
          }
        />
        <Route
          path="/characters"
          element={
            <CharactersPage
              characters={characters}
              setCharacters={setCharacters}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;

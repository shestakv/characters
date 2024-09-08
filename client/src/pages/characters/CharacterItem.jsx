import React, { useEffect, useState } from "react";
import { axiosRequest } from "../../services/axiosInstance";
import "./Character.css";
// import CharacterFormUpdate from "./CharacterFormUpdate";
function CharacterItem({ character, setCharacters }) {
  const [showFormUpdate, setShowUpdateForm] = useState(false);
  const [universe, setUniverse] = useState("");
  const [user, setUser] = useState("");

  const onHandleShowFormUpdate = () => {
    setShowUpdateForm((prev) => !prev);
  };

  const onHandleDelete = async () => {
    try {
      const response = await axiosRequest.delete(`/characters/${character.id}`);
      if (response.status === 200) {
        setCharacters((prev) => prev.filter((cha) => cha.id !== character.id));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onHandleGetUniverse = async () => {
    try {
      const response = await axiosRequest.get(
        `/universes/${character.universeId}`
      );
      if (response.status === 200) {
        setUniverse(response.data.universe.title);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onHandleGetUserName = async () => {
    try {
      const response = await axiosRequest.get(`/users/${character.userId}`);
      if (response.status === 200) {
        setUser(response.data.user.name);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    onHandleGetUniverse();
    onHandleGetUserName();
  }, []);

  return (
    <>
      <div className="card">
        <h3>{character.title}</h3>
        <div className="card-check">
          <div className="card-block">
            <img
              src={character.image}
              alt="character photo"
              className="card__photo"
            />
          </div>

          <div className="card-info">
            <h4>Universe: {universe}</h4>
            <p>Info: {character.info}</p>
            <p>Owner: {user}</p>
            <p>Price: {character.price}$</p>
          </div>
        </div>

        {/* {showFormUpdate && (
          <CharacterFormUpdate
            character={character}
            setCharacters={setCharacters}
          />
        )} */}
      </div>
      <div>
        <button onClick={onHandleDelete}>delete</button>
        <button onClick={onHandleShowFormUpdate}>
          {showFormUpdate ? "close Form Update" : "open Form Update"}
        </button>
      </div>
    </>
  );
}

export default CharacterItem;

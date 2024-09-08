import React, { useState } from "react";
import CharacterItem from "./CharacterItem";
// import CharacterFormAdd from "./CharacterFormAdd";
function CharactersPage({ characters, setCharacters }) {
  const [showFormAdd, setShowFormAdd] = useState(false);

  const onHandleShowAddForm = () => {
    setShowFormAdd((prev) => !prev);
  };

  return (
    <div>
      <h1>Characters</h1>

      <button onClick={onHandleShowAddForm}>
        {showFormAdd ? "close Form Add" : "open Form Add"}
      </button>
      {/* {showFormAdd && <CharacterFormAdd setCharacters={setCharacters} />} */}

      {characters &&
        characters.map((character) => (
          <CharacterItem
            key={character.id}
            character={character}
            setCharacters={setCharacters}
          />
        ))}
    </div>
  );
}

export default CharactersPage;

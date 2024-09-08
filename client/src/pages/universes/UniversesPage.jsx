import React, { useState } from "react";
import UniverseItem from "./UniverseItem";
import UniverseFormAdd from "./UniverseFormAdd";
function UniversesPage({ universes, setUniverses }) {
  const [showFormAdd, setShowFormAdd] = useState(false);

  const onHandleShowAddForm = () => {
    setShowFormAdd((prev) => !prev);
  };

  return (
    <div>
      <h1>Universes</h1>

      <button onClick={onHandleShowAddForm}>
        {showFormAdd ? "close Form Add" : "open Form Add"}
      </button>
      {showFormAdd && <UniverseFormAdd setUniverses={setUniverses} />}

      {universes &&
        universes.map((universe) => (
          <UniverseItem
            key={universe.id}
            universe={universe}
            setUniverses={setUniverses}
          />
        ))}
    </div>
  );
}

export default UniversesPage;

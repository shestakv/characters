import React, { useState } from "react";
import { axiosRequest } from "../../services/axiosInstance";
import UniverseFormUpdate from "./UniverseFormUpdate";
function UniverseItem({ universe, setUniverses }) {
  const [showFormUpdate, setShowUpdateForm] = useState(false);

  const onHandleShowFormUpdate = () => {
    setShowUpdateForm((prev) => !prev);
  };

  const onHandleDelete = async () => {
    try {
      const response = await axiosRequest.delete(`/universes/${universe.id}`);
      if (response.status === 200) {
        setUniverses((prev) => prev.filter((uni) => uni.id !== universe.id));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>
        <h3>{universe.title}</h3>
        <p>{universe.description}</p>
        <button onClick={onHandleDelete}>delete</button>
        <button onClick={onHandleShowFormUpdate}>
          {showFormUpdate ? "close Form Update" : "open Form Update"}
        </button>
        {showFormUpdate && (
          <UniverseFormUpdate universe={universe} setUniverses={setUniverses} />
        )}
      </div>
    </>
  );
}

export default UniverseItem;

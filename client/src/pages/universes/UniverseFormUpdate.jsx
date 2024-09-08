import React, { useState } from "react";
import { axiosRequest } from "../../services/axiosInstance";
function UniverseFormUpdate({ universe, setUniverses }) {
  const [newTitle, setTitle] = useState("");
  const [newDescription, setDescription] = useState("");

  const onHandleUpdate = async (e) => {
    try {
      e.preventDefault();
      const response = await axiosRequest.put(`/universes/${universe.title}`, {
        newTitle,
        newDescription,
      });
      console.log(response.data);
      if (response.status === 200) {
        setUniverses((prev) => {
          return prev.map((uni) =>
            uni.id === universe.id
              ? {
                  ...universe,
                  title: response.data.universe.title,
                  description: response.data.universe.description,
                }
              : uni
          );
        });
        setTitle("");
        setDescription("");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={onHandleUpdate}>
      <div>
        <h3>New title: </h3>
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <h3>New description: </h3>
        <input
          type="text"
          value={newDescription}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <br />
      <button type="submit">update</button>
    </form>
  );
}

export default UniverseFormUpdate;

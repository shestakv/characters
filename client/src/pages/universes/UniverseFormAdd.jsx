import React, { useState } from "react";
import { axiosRequest } from "../../services/axiosInstance";
function UniverseFormAdd({ setUniverses }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const onHandleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (title.trim() && description.trim()) {
        const response = await axiosRequest.post("/universes", {
          title,
          description,
        });
        if (response.status === 201) {
          setUniverses((prev) => [...prev, response.data.universe]);
          setTitle("");
          setDescription("");
        }
      } else alert("Fill in the blanks!");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={onHandleSubmit}>
      <div>
        <h3>Enter title: </h3>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <h3>Enter description: </h3>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <br />
      <button type="submit">Add</button>
    </form>
  );
}

export default UniverseFormAdd;

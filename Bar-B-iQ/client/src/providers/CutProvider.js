import React, { useState, createContext } from "react";

export const CutContext = createContext();

export const CutProvider = (props) => {
  const [cuts, setCuts] = useState([]);

  const getCutsByAnimalId = (id) => {
    return fetch(`/api/cut/getByAnimal/${id}`)
      .then((res) => res.json())
      .then(setCuts);
  };

  const getCutById = (id) => {
    return fetch(`/api/cut/${id}`).then((res) => res.json());
  };

  return (
    <CutContext.Provider
      value={{
        cuts,
        setCuts,
        getCutsByAnimalId,
      }}
    >
      {props.children}
    </CutContext.Provider>
  );
};

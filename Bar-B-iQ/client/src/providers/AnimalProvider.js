import React, { useState, createContext } from "react";

export const AnimalContext = createContext();

export const AnimalProvider = (props) => {
  const [animals, setAnimals] = useState([]);

  const getAllAnimals = () => {
    return fetch("/api/animal")
      .then((res) => res.json())
      .then(setAnimals);
  };

  const getAnimalById = (id) => {
    return fetch(`/api/animal/${id}`).then((res) => res.json());
  };

  return (
    <AnimalContext.Provider
      value={{
        animals,
        setAnimals,
        getAllAnimals,
        getAnimalById,
      }}
    >
      {props.children}
    </AnimalContext.Provider>
  );
};

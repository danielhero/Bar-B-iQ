import React, { useContext, useEffect } from "react";
import { AnimalContext } from "../../providers/AnimalProvider";
import { Animal } from "./Animal";

export const AnimalList = () => {
  const { animals, getAllAnimals, getAnimalById } = useContext(AnimalContext);

  useEffect(() => {
    getAllAnimals();
  }, []);

  return (
    <>
      <div>
        {animals.map((animal) => (
          <Animal key={animal.id} animal={animal} />
        ))}
      </div>
    </>
  );
};

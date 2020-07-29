import React, { useContext, useEffect } from "react";
import { AnimalContext } from "../../providers/AnimalProvider";
import { Animal } from "./Animal";
import { useHistory } from "react-router-dom";
import { Button } from "reactstrap";

export const AnimalList = () => {
  const { animals, getAllAnimals, getAnimalById } = useContext(AnimalContext);
  const history = useHistory();

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
      <Button
        onClick={(e) => {
          history.push("/");
        }}
      >
        Back
      </Button>
    </>
  );
};

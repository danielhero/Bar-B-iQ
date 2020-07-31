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
        <h2>Meat Selection</h2>
      </div>
      <div>
        {animals.map((animal) => (
          <Animal key={animal.id} animal={animal} />
        ))}
      </div>
      <div>
        <Button
          onClick={(e) => {
            history.push("/");
          }}
        >
          Back
        </Button>
      </div>
    </>
  );
};

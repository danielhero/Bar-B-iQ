import React, { useContext, useEffect } from "react";
import { AnimalContext } from "../../providers/AnimalProvider";
import { Animal } from "./Animal";
import { useHistory } from "react-router-dom";
import { Button } from "reactstrap";
import "./Animal.css";

export const AnimalList = () => {
  const { animals, getAllAnimals } = useContext(AnimalContext);
  const history = useHistory();

  useEffect(() => {
    getAllAnimals();
  }, []);

  return (
    <>
      <body className="animalPage">
        <div>
          <h2 className="animalHeader">Meat Selection</h2>
        </div>
        <div className="animalList">
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
      </body>
    </>
  );
};

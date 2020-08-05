import React from "react";
import { Card, CardImg, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

export const Animal = ({ animal }) => {
  return (
    <>
      <Link to={`/cut/getByAnimal/${animal.id}`}>
        <Card className="eachAnimal">
          <CardImg
            className="animalIcon"
            src={animal.animalImage}
            alt={animal.animalType}
          />
          <CardBody>
            <h5 className="animalName">{animal.animalType}</h5>
          </CardBody>
        </Card>
      </Link>
    </>
  );
};

import React from "react";
import { Card, CardImg, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

export const Animal = ({ animal }) => {
  return (
    <>
      <Card hoverable className="">
        <CardImg top src={animal.animalImage} alt={animal.animalType} />
        <CardBody>
          <Link to={`cut/`}>
            <h3 strong>{animal.animalType}</h3>
          </Link>
        </CardBody>
      </Card>
    </>
  );
};

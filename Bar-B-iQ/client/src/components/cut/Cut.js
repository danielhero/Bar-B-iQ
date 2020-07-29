import React from "react";
import { Card, CardImg, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

export const Cut = ({ cut }) => {
  return (
    <>
      <Link to={`/doneness/getByCut/:id`}>
        <Card hoverable="true" className="">
          <CardImg src={cut.cutImage} alt={cut.cutType} />
          <CardBody>
            <h3>{cut.cutType}</h3>
          </CardBody>
        </Card>
      </Link>
    </>
  );
};

import React from "react";
import { Card, CardImg, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

export const Cut = ({ cut }) => {
  return (
    <>
      <Link to={`/doneness/getByCut/${cut.id}`}>
        <Card className="eachCut">
          <CardImg className="cutImage" src={cut.cutImage} alt={cut.cutType} />
          <CardBody>
            <h3 className="cutInfo">{cut.cutType}</h3>
            <p className="cutInfo"> approx. {cut.weight}</p>
          </CardBody>
        </Card>
      </Link>
    </>
  );
};

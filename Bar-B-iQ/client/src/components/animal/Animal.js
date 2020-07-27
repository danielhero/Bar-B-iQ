import React from "react";
import { Card, CardImg, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

const Animal = ({ animal }) => {
  return (
    <Card hoverable className="">
      <CardImg top src={animal.image} alt={animal.name} />
      <CardBody>
        <Link to={`/posts/${post.id}`}>
          <strong>{post.title}</strong>
        </Link>
        <h5>{animal.name}</h5>
      </CardBody>
    </Card>
  );
};

export default Animal;

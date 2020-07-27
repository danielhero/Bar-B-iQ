import React, { useContext, useEffect, useRef } from "react";
import { AnimalContext } from "../../providers/AnimalProvider";
import Animal from "./Animal";
import { CardBody, Card } from "reactstrap";

const PostList = () => {
  const { animals, getAllAnimals, getAnimalById } = useContext(AnimalContext);

  useEffect(() => {
    getAllAnimals();
  }, []);

  return (
    <>
      <Card className="container">
        <Card img>
          <CardBody>
            {animals.map((animal) => (
              <Animal key={animal.id} animal={animal} />
            ))}
          </CardBody>
        </div>
      </Card>
    </>
  );
};

export default PostList;

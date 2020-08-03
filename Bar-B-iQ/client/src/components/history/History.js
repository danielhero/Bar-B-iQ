import React, { useState, useContext } from "react";
import { Card, CardTitle, CardBody, Modal, Button, CardImg } from "reactstrap";
import { HistoryContext } from "../../providers/HistoryProvider";
import { Link } from "react-router-dom";

export const History = ({ history }) => {
  const { updateHistory, deleteHistory } = useContext(HistoryContext);
  const date = new Date(history.dateCooked);
  const [deleteModal, setDeleteModal] = useState(false);
  const toggleDelete = () => setDeleteModal(!deleteModal);

  return (
    <>
      <Card className="">
        <CardTitle>
          <CardImg
            src={history.doneness.cut.cutImage}
            alt={history.doneness.cut.cutType}
          />
        </CardTitle>
        <Link to={`/doneness/getByCut/${history.doneness.cut.id}`}>
          <CardBody>
            <h5>{history.doneness.cut.animal.animalType}</h5>
            What:{" "}
            <p>
              {history.doneness.cut.cutType}, {history.doneness.cut.weight}
            </p>
            <p>
              How: {history.doneness.donenessChoice}
              <ul>
                <li>{history.doneness.cookTime} minutes</li>
                <li>{history.doneness.temperature} °F</li>
              </ul>
            </p>
            <p>Grilled On: {date.toLocaleDateString()}</p>
          </CardBody>
        </Link>
        <Button color="danger" onClick={toggleDelete}>
          Delete
        </Button>
      </Card>
      <Modal isOpen={deleteModal}>
        <div>
          Delete this past grill history?
          <br />
          <br />
          <Button
            color="danger"
            onClick={(e) => {
              e.preventDefault();
              deleteHistory(history.id);
            }}
          >
            Yes, delete
          </Button>
          <Button color="secondary" onClick={toggleDelete}>
            Go back
          </Button>
        </div>
      </Modal>
    </>
  );
};

import React, { useState, useContext } from "react";
import { Card, CardTitle, CardBody, Modal, Button, CardImg } from "reactstrap";
import { HistoryContext } from "../../providers/HistoryProvider";

export const History = ({ history }) => {
  const { deleteHistory } = useContext(HistoryContext);
  const date = date.parse(history.dateCooked);
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
        <CardBody>
          <h5>{history.doneness.cut.animal.animalType}</h5>
          What: <p>{history.doneness.cut.cutType}</p>
          <p>
            How: {history.doneness.donenessChoice}
            <ul>
              <li>{history.doneness.cookTime} minutes</li>
              <li>{history.doneness.temperature} °F</li>
            </ul>
          </p>
          <p>Grilled On: {date.toLocaleDateString()}</p>
        </CardBody>
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

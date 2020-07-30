import React, { useState, useContext } from "react";
import { Card, CardTitle, CardBody, Modal, Button } from "reactstrap";
import { HistoryContext } from "../../providers/HistoryProvider";

export const History = ({ history }) => {
  const { deleteHistory } = useContext(HistoryContext);

  const [deleteModal, setDeleteModal] = useState(false);
  const toggleDelete = () => setDeleteModal(!deleteModal);

  return (
    <>
      <Card className="">
        <CardBody>
          <CardTitle>
            <h5>{history.dateCreated}</h5>
          </CardTitle>
          <p></p>
          <p></p>
          <p></p>
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
              deleteNote(history.id);
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

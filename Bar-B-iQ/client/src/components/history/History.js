import React, { useState, useContext } from "react";
import { Card, CardTitle, CardBody, Modal, Button, CardImg } from "reactstrap";
import { HistoryContext } from "../../providers/HistoryProvider";
import { Link } from "react-router-dom";
import { EditHistoryForm } from "../history/EditHistoryForm";
import "./History.css";

export const History = ({ history }) => {
  const { deleteHistory } = useContext(HistoryContext);
  const date = new Date(history.dateCooked);

  const [editModal, setEditModal] = useState(false);
  const toggleEdit = () => setEditModal(!editModal);

  const [deleteModal, setDeleteModal] = useState(false);
  const toggleDelete = () => setDeleteModal(!deleteModal);

  return (
    <>
      <Card className="eachHistory">
        <CardTitle>
          <CardImg
            src={history.doneness.cut.cutImage}
            alt={history.doneness.cut.cutType}
          />
        </CardTitle>
        <Link to={`/doneness/getByCut/${history.doneness.cut.id}`}>
          <CardBody className="historyContent">
            <h4 className="cutName">
              {history.doneness.cut.animal.animalType}
            </h4>
            <p>
              Cut: {history.doneness.cut.cutType}, {history.doneness.cut.weight}
            </p>
            <div>
              How: {history.doneness.donenessChoice}
              <ul>
                <li>{history.doneness.cookTime} minutes</li>
                <li>{history.doneness.temperature} °F</li>
              </ul>
            </div>
            <p>Grilled On: {date.toLocaleDateString()}</p>
            <p>Comment: {history.comment}</p>
          </CardBody>
        </Link>
        <div className="historyButtons">
          <Button
            className="editCommentButton"
            color="secondary"
            onClick={toggleEdit}
          >
            Comment
          </Button>
          <Button
            className="deleteHistoryButton"
            color="danger"
            onClick={toggleDelete}
          >
            Delete
          </Button>
        </div>
      </Card>
      <Modal isOpen={editModal}>
        <EditHistoryForm toggle={toggleEdit} history={history} />
      </Modal>
      <Modal isOpen={deleteModal}>
        <div className="delete">
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
          <Button className="cancel" color="secondary" onClick={toggleDelete}>
            Go back
          </Button>
        </div>
      </Modal>
    </>
  );
};

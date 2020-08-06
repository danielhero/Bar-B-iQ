import React, { useState, useContext } from "react";
import { Card, CardTitle, CardBody, Modal, Button } from "reactstrap";
import { NoteContext } from "../../providers/NoteProvider";
import { EditNoteForm } from "./EditNoteForm";
import "./Note.css";

export const Note = ({ note }) => {
  const { deleteNote } = useContext(NoteContext);

  const [editModal, setEditModal] = useState(false);
  const toggleEdit = () => setEditModal(!editModal);

  const [deleteModal, setDeleteModal] = useState(false);
  const toggleDelete = () => setDeleteModal(!deleteModal);

  return (
    <>
      <Card className="eachNote">
        <CardBody>
          <CardTitle>
            <h5>{note.title}</h5>
          </CardTitle>
          <p className="noteText">{note.text}</p>
        </CardBody>
        <div className="noteButtons">
          <Button
            className="editNoteButton"
            color="primary"
            onClick={toggleEdit}
          >
            Edit
          </Button>
          <Button
            className="deleteNoteButton"
            color="secondary"
            onClick={toggleDelete}
          >
            Delete
          </Button>
        </div>
      </Card>
      <Modal isOpen={editModal}>
        <EditNoteForm toggle={toggleEdit} note={note} />
      </Modal>
      <Modal isOpen={deleteModal}>
        <div className="delete">
          Delete note?
          <br />
          <br />
          <Button
            color="danger"
            onClick={(e) => {
              e.preventDefault();
              deleteNote(note.id);
            }}
          >
            Yes, delete
          </Button>
          <Button className="cancel" color="secondary" onClick={toggleDelete}>
            No, go back
          </Button>
        </div>
      </Modal>
    </>
  );
};

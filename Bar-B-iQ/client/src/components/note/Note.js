import React, { useState, useContext } from "react";
import { Card, CardTitle, CardBody, Modal, Button } from "reactstrap";
import { NoteContext } from "../../providers/NoteProvider";
import { EditNoteForm } from "./EditNoteForm";

export const Note = ({ note }) => {
  const { deleteNote } = useContext(NoteContext);

  const [editModal, setEditModal] = useState(false);
  const toggleEdit = () => setEditModal(!editModal);

  const [deleteModal, setDeleteModal] = useState(false);
  const toggleDelete = () => setDeleteModal(!deleteModal);

  return (
    <>
      <Card className="">
        <CardBody>
          <CardTitle>
            <h5>{note.title}</h5>
          </CardTitle>
          <p>{note.text}</p>
        </CardBody>
        <Button color="secondary" onClick={toggleEdit}>
          Edit
        </Button>
        <Button color="danger" onClick={toggleDelete}>
          Delete
        </Button>
      </Card>
      <Modal isOpen={editModal}>
        <EditNoteForm toggle={toggleEdit} note={note} />
      </Modal>
      <Modal isOpen={deleteModal}>
        <div>
          Are you sure you want to delete this note?
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
          <Button color="secondary" onClick={toggleDelete}>
            No, go back
          </Button>
        </div>
      </Modal>
    </>
  );
};

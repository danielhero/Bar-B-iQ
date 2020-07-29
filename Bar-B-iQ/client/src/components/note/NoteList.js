import React, { useContext, useEffect, useState } from "react";
import { NoteContext } from "../../providers/NoteProvider";
import { useHistory } from "react-router-dom";
import { Note } from "./Note";
import { NewNoteForm } from "./NewNoteForm";
import { Button, Modal } from "reactstrap";

export const NoteList = () => {
  const { notes, getNotesByUser } = useContext(NoteContext);
  const [newNoteModal, setNoteModal] = useState(false);
  const history = useHistory();
  const userStorage = JSON.parse(sessionStorage.getItem("user"));
  const toggleNewNoteModal = () => setNoteModal(!newNoteModal);

  useEffect(() => {
    getNotesByUser(userStorage.id);
  }, []);

  if (!notes) {
    return (
      <>
        <Button color="primary" onClick={toggleNewNoteModal}>
          Add Note
        </Button>
        <div className="">
          <h2>NOTEBOOK IS EMPTY</h2>
        </div>
        <Modal isOpen={newNoteModal}>
          <NewNoteForm toggle={toggleNewNoteModal} />
        </Modal>
      </>
    );
  } else {
    return (
      <>
        <Button color="primary" onClick={toggleNewNoteModal}>
          Add Note
        </Button>
        <div className="">
          {notes.map((note) => (
            <Note key={note.id} note={note} />
          ))}
        </div>
        <Button
          onClick={(e) => {
            history.push("/");
          }}
        >
          Back
        </Button>
        <Modal isOpen={newNoteModal}>
          <NewNoteForm toggle={toggleNewNoteModal} />
        </Modal>
      </>
    );
  }
};

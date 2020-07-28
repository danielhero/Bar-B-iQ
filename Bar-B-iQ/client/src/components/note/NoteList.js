import React, { useContext, useEffect, useState } from "react";
import { NoteContext } from "../../providers/NoteProvider";
import { Note } from "./Note";
import { useParams } from "react-router-dom";
import { NewNoteForm } from "./NewNoteForm";
import { Button, Modal } from "reactstrap";

export const NoteList = () => {
  const { notes, getNotesByUserId } = useContext(NoteContext);
  const [newNoteModal, setNoteModal] = useState(false);
  const userStorage = JSON.parse(sessionStorage.getItem("user"));
  const toggleNewNoteModal = () => setNoteModal(!newNoteModal);

  useEffect(() => {
    getNotesByUserId(userStorage.id);
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
        <Modal isOpen={newNoteModal}>
          <NewNoteForm toggle={toggleNewNoteModal} />
        </Modal>
      </>
    );
  }
};

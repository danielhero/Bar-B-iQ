import React, { useContext, useEffect, useState } from "react";
import { NoteContext } from "../../providers/NoteProvider";
import { Note } from "./Note";
import { NewNoteForm } from "./NewNoteForm";
import { Button, Modal } from "reactstrap";

export const NoteList = () => {
  const { notes, getNotesByUserId } = useContext(NoteContext);
  const [newNoteModal, setNoteModal] = useState(false);

  const toggleNewNoteModal = () => setNoteModal(!newNoteModal);

  useEffect(() => {
    getNotesByUserId();
  }, []);

  return (
    <>
      <Button color="primary" onClick={toggleNewNoteModal}>
        Add Note
      </Button>
      <Modal isOpen={newNoteModal}>
        <NewNoteForm toggle={toggleNewNoteModal} />
      </Modal>
      <div className="noteContainer">
        <div className="row justify-content-center">
          <div className="cards-column">
            {notes.map((note) =>
              note.isDeleted ? null : <Note key={note.id} note={note} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

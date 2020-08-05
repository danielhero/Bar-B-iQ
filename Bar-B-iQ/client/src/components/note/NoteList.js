import React, { useContext, useEffect, useState } from "react";
import { NoteContext } from "../../providers/NoteProvider";
import { useHistory } from "react-router-dom";
import { Note } from "./Note";
import { NewNoteForm } from "./NewNoteForm";
import { Button, Modal } from "reactstrap";
import "./Note.css";

export const NoteList = () => {
  const { notes, getNotesByUser } = useContext(NoteContext);
  const [newNoteModal, setNoteModal] = useState(false);
  const history = useHistory();
  const userStorage = JSON.parse(sessionStorage.getItem("user"));
  const toggleNewNoteModal = () => setNoteModal(!newNoteModal);

  useEffect(() => {
    getNotesByUser(userStorage.id);
  }, []);

  if (notes.length > 0) {
    return (
      <>
        <body className="noteComponent">
          <div className="noteHeader">
            <h2 className="noteBookName">GrillBook</h2>
            <Button
              className="addNoteButton"
              color="primary"
              onClick={toggleNewNoteModal}
            >
              Add Note
            </Button>
          </div>
          <div className="noteList">
            {notes.map((note) => (
              <Note className="eachNote" key={note.id} note={note} />
            ))}
          </div>
          <Button
            className="backButton"
            onClick={(e) => {
              history.push("/");
            }}
          >
            Back
          </Button>
          <Modal isOpen={newNoteModal}>
            <NewNoteForm toggle={toggleNewNoteModal} />
          </Modal>
        </body>
      </>
    );
  } else {
    return (
      <>
        <body className="noteComponent">
          <div className="noteHeader">
            <h2 className="noteBookName">GrillBook</h2>
            <Button
              className="addNoteButton"
              color="primary"
              onClick={toggleNewNoteModal}
            >
              Add Note
            </Button>
          </div>
          <div className="emptyNoteList">
            <h2 className="emptyNoteMessage">GRILLBOOK IS EMPTY</h2>
          </div>
          <Button
            className="backButton"
            onClick={(e) => {
              history.push("/");
            }}
          >
            Back
          </Button>
          <Modal isOpen={newNoteModal}>
            <NewNoteForm toggle={toggleNewNoteModal} />
          </Modal>
        </body>
      </>
    );
  }
};

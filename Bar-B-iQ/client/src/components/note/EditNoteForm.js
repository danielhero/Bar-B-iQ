import React, { useContext, useState } from "react";
import { NoteContext } from "../../providers/NoteProvider";
import { Button } from "reactstrap";

export const EditNoteForm = (props) => {
  const { updateNote } = useContext(NoteContext);

  const [updatedNote, setNote] = useState(props.note);

  const handleControlledInputChange = (event) => {
    const newNote = Object.assign({}, updatedNote);
    newNote[event.target.name] = event.target.value;
    setNote(newNote);
  };

  const editNote = () => {
    updateNote(updatedNote).then(props.toggle);
  };

  return (
    <form className="newNoteForm">
      <fieldset>
        <div className="form-group">
          <label htmlFor="title">
            Title:
            <input
              type="text"
              name="title"
              required
              autoFocus
              className="form-control"
              placeholder="Edit title"
              defaultValue={props.note.title}
              onChange={handleControlledInputChange}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="text">
            Note:
            <input
              type="textbox"
              name="text"
              required
              autoFocus
              className="form-control"
              placeholder="Edit Note"
              defaultValue={props.note.text}
              onChange={handleControlledInputChange}
            />
          </label>
        </div>
      </fieldset>
      <Button
        color="primary"
        onClick={(e) => {
          e.preventDefault();
          editNote();
        }}
      >
        Save Updates
      </Button>
      <Button onClick={props.toggle}>Cancel</Button>
    </form>
  );
};

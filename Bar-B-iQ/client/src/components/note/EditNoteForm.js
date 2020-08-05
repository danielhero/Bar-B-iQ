import React, { useContext, useState } from "react";
import { NoteContext } from "../../providers/NoteProvider";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

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
    <Form className="newNoteForm">
      <FormGroup>
        <Label htmlFor="title">Title:</Label>
        <Input
          type="text"
          name="title"
          id="noteTitle"
          placeholder="Enter note header"
          defaultValue={props.note.title}
          onChange={handleControlledInputChange}
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="text">Note:</Label>
        <Input
          type="textarea"
          name="text"
          required
          autoFocus
          className="form-control"
          placeholder="Edit Note"
          defaultValue={props.note.text}
          onChange={handleControlledInputChange}
        />
      </FormGroup>
      <Button
        color="primary"
        onClick={(e) => {
          e.preventDefault();
          editNote();
        }}
      >
        Save Updates
      </Button>
      <Button className="cancel" onClick={props.toggle}>
        Cancel
      </Button>
    </Form>
  );
};

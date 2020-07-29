import React, { useContext, useRef } from "react";
import { NoteContext } from "../../providers/NoteProvider";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { useHistory } from "react-router-dom";

export const NewNoteForm = (props) => {
  const { addNote } = useContext(NoteContext);

  const title = useRef("");
  const text = useRef("");

  const history = useHistory();

  const constructNewNote = () => {
    return addNote({
      title: title.current.value,
      text: text.current.value,
    }).then(() => {
      history.push("/note/getByUser");
    });
  };

  return (
    <Form className="noteForm">
      <FormGroup>
        <Label htmlFor="title">Note Header</Label>
        <Input
          type="text"
          name="title"
          id="noteTitle"
          placeholder="Enter note header"
          innerRef={title}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="text">Notes</Label>
        <Input
          type="textbox"
          name="text"
          id="noteText"
          placeholder="Enter notes here"
          innerRef={text}
          required
        />
      </FormGroup>
      <Button
        color="primary"
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          constructNewNote().then(props.toggle);
        }}
      >
        Submit
      </Button>
      <Button onClick={props.toggle}>Cancel</Button>
    </Form>
  );
};

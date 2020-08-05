import React, { useContext, useState } from "react";
import { HistoryContext } from "../../providers/HistoryProvider";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

export const EditHistoryForm = (props) => {
  const { updateHistory } = useContext(HistoryContext);

  const [updatedHistory, setHistory] = useState(props.history);

  const handleControlledInputChange = (event) => {
    const newHistory = Object.assign({}, updatedHistory);
    newHistory[event.target.name] = event.target.value;
    setHistory(newHistory);
  };

  const editHistory = () => {
    updateHistory(updatedHistory).then(props.toggle);
  };

  return (
    <Form className="editHistoryForm">
      <FormGroup>
        <Label htmlFor="comment">Comment:</Label>
        <Input
          type="textarea"
          name="comment"
          autoFocus
          className="form-control"
          placeholder="Edit comment"
          defaultValue={props.history.comment}
          onChange={handleControlledInputChange}
        />
      </FormGroup>
      <Button
        className="editCommentButton"
        color="primary"
        onClick={(e) => {
          e.preventDefault();
          editHistory();
        }}
      >
        Save Comment
      </Button>
      <Button className="cancel" onClick={props.toggle}>
        Cancel
      </Button>
    </Form>
  );
};

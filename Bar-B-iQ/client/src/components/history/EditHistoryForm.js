import React, { useContext, useState } from "react";
import { HistoryContext } from "../../providers/HistoryProvider";
import { Button } from "reactstrap";

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
    <form className="newHistoryForm">
      <fieldset>
        <div className="form-group">
          <label htmlFor="comment">
            Comment:
            <input
              type="text"
              name="comment"
              autoFocus
              className="form-control"
              placeholder="Edit comment"
              defaultValue={props.history.comment}
              onChange={handleControlledInputChange}
            />
          </label>
        </div>
      </fieldset>
      <Button
        color="primary"
        onClick={(e) => {
          e.preventDefault();
          editHistory();
        }}
      >
        Save Comment
      </Button>
      <Button onClick={props.toggle}>Cancel</Button>
    </form>
  );
};

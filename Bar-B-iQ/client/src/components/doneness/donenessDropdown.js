import React, { useContext, useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { DonenessContext } from "../../providers/DonenessProvider";
import { CutContext } from "../../providers/CutProvider";
import { Doneness } from "./doneness";
import { Timer } from "../Timer";
import {
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { HistoryContext } from "../../providers/HistoryProvider";

export const DonenessDropdown = () => {
  const { doneness, getDonenessByCutId } = useContext(DonenessContext);
  const [donenessId, setDonenessId] = useState(null);
  const [singleDoneness, setSingleDoneness] = useState({});
  const [cut, setCut] = useState({});
  const { getCutById } = useContext(CutContext);
  const { addHistory } = useContext(HistoryContext);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    getDonenessByCutId(id);
    getCutById(id).then(setCut);
  }, []);

  const donenessValues = (id, donenessObject) => {
    setDonenessId(id);
    setSingleDoneness(donenessObject);
  };

  const constructNewHistory = (donenessId) => {
    const newHistoryObject = {
      donenessId: donenessId,
      dateCooked: new Date(),
    };
    return addHistory(newHistoryObject);
  };

  return (
    <>
      <UncontrolledDropdown>
        <DropdownToggle caret>How do you like it?</DropdownToggle>
        <DropdownMenu value={donenessId} type="select">
          {doneness.map((oneDoneness) => {
            return (
              <DropdownItem
                key={oneDoneness.id}
                value={oneDoneness.id}
                onClick={(e) => {
                  donenessValues(oneDoneness.id, oneDoneness);
                }}
              >
                {oneDoneness.donenessChoice}
              </DropdownItem>
            );
          })}
        </DropdownMenu>
      </UncontrolledDropdown>
      <div>
        <Doneness key={donenessId} doneness={singleDoneness} />
      </div>
      <div>
        <Button
          onClick={(e) => {
            history.push(`/cut/getByAnimal/${cut.animalId}`);
          }}
        >
          Back
        </Button>
      </div>
      <div>
        <Button
          color="primary"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            constructNewHistory(donenessId);
          }}
        >
          Save
        </Button>
      </div>
      <div>
        <Timer />
      </div>
    </>
  );
};

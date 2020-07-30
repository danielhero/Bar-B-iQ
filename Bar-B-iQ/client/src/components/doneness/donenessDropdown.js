import React, { useContext, useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { DonenessContext } from "../../providers/DonenessProvider";
import { CutContext } from "../../providers/CutProvider";
import { Doneness } from "./doneness";
import {
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

export const DonenessDropdown = () => {
  const { doneness, getDonenessByCutId } = useContext(DonenessContext);
  const [donenessId, setDonenessId] = useState(null);
  const [singleDoneness, setSingleDoneness] = useState({});
  const [cut, setCut] = useState({});
  const { getCutById } = useContext(CutContext);
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
        <Button>Timer</Button>
      </div>
    </>
  );
};

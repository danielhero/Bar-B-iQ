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
  const [donenessValue, setDonenessValue] = useState(null);
  const { cuts } = useContext(CutContext);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    getDonenessByCutId(id);
  }, []);

  return (
    <>
      <UncontrolledDropdown>
        <DropdownToggle caret>How do you like it?</DropdownToggle>
        <DropdownMenu value={donenessValue} type="select">
          {/* {doneness.map((doneness) => {
            return (
              <DropdownItem
                key={doneness.id}
                value={doneness.id}
                onClick={(e) => {
                  setDonenessValue(doneness.id);
                }}
              >
                {doneness.donenessChoice}
              </DropdownItem>
            );
          })} */}
        </DropdownMenu>
      </UncontrolledDropdown>
      <div>
        <Doneness key={doneness.id} doneness={doneness} />
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
    </>
  );
};

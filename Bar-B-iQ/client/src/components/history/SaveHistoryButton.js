import React, { useContext, useRef, useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { DonenessContext } from "../../providers/DonenessProvider";
import { HistoryContext } from "../../providers/HistoryProvider";
import { Doneness } from "./doneness";
import {
  Button,
} from "reactstrap";

export default SaveHistoryButton = () => {
    const { addHistory } = useContext(HistoryContext)

    

    const constructNewHistory = {= () => {
        return addHistory({
          donenessId: donenessId.current.value,
          cutId: cutId.current.value,
          AnimalId: animalId.current.value,
          dateCreated: new Date(),
          userId: userId.current.value,
        }).then(() => {
          history.push("/note/getByUser");
        });
      };

    
}
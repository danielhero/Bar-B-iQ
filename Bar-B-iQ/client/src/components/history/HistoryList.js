import React, { useContext, useEffect, useState } from "react";
import { HistoryContext } from "../../providers/HistoryProvider";
import { useHistory } from "react-router-dom";
import { History } from "./History";
import { Button, Modal } from "reactstrap";

export const HistoryList = () => {
  const { histories, getHistoryByUser } = useContext(HistoryContext);
  const urlHistory = useHistory();
  const userStorage = JSON.parse(sessionStorage.getItem("user"));

  useEffect(() => {
    getHistoryByUser(userStorage.id);
  }, []);

  if (!histories) {
    return (
      <>
        <div className="">
          <h2>NO GRILLING HISTORY</h2>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="">
          {histories.map((history) => (
            <History key={history.id} history={history} />
          ))}
        </div>
        <Button
          onClick={(e) => {
            urlHistory.push("/");
          }}
        >
          Back
        </Button>
      </>
    );
  }
};

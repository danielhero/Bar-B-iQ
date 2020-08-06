import React, { useState, createContext, useContext } from "react";
import { UserContext } from "./UserProvider";

export const HistoryContext = createContext();

export const HistoryProvider = (props) => {
  const [histories, setHistories] = useState([]);
  const { getToken } = useContext(UserContext);

  const getHistoryByUser = () =>
    getToken().then((token) =>
      fetch(`/api/history/getByUser/`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((resp) => resp.json())
        .then(setHistories)
    );

  const addHistory = (history) => {
    return getToken().then((token) =>
      fetch("/api/history", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(history),
      }).then((resp) => {
        if (resp.ok) {
          alert("Choices have been saved to your History");
        } else {
          alert("Need to choose a doneness option first!");
        }
      })
    );
  };

  const updateHistory = (history) => {
    return getToken().then((token) =>
      fetch(`/api/history/${history.id}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(history),
      }).then((resp) => {
        if (resp.ok) {
          getHistoryByUser();
        } else {
          throw new Error("Unauthorized");
        }
      })
    );
  };

  const deleteHistory = (id) => {
    return getToken().then((token) =>
      fetch(`/api/history/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((resp) => {
        if (resp.ok) {
          getHistoryByUser();
        } else {
          throw new Error("Unauthorized");
        }
      })
    );
  };
  return (
    <HistoryContext.Provider
      value={{
        histories,
        setHistories,
        getHistoryByUser,
        addHistory,
        updateHistory,
        deleteHistory,
      }}
    >
      {props.children}
    </HistoryContext.Provider>
  );
};

import React, { useState, createContext, useContext } from "react";
import { UserContext } from "./UserProvider";

export const NoteContext = createContext();

export const NoteProvider = (props) => {
  const [notes, setNotes] = useState([]);
  const { getToken } = useContext(UserContext);

  const getNotesByUser = () =>
    getToken().then((token) =>
      fetch(`/api/note/getByUser/`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((resp) => resp.json())
        .then(setNotes)
    );

  const addNote = (note) => {
    return getToken().then((token) =>
      fetch("/api/note", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(note),
      }).then((resp) => {
        if (resp.ok) {
          getNotesByUser();
        } else {
          throw new Error("Unauthorized");
        }
      })
    );
  };

  const updateNote = (note) => {
    return getToken().then((token) =>
      fetch(`/api/note/${note.id}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(note),
      }).then((resp) => {
        if (resp.ok) {
          getNotesByUser();
        } else {
          throw new Error("Unauthorized");
        }
      })
    );
  };

  const deleteNote = (id) => {
    return getToken().then((token) =>
      fetch(`/api/note/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((resp) => {
        if (resp.ok) {
          getNotesByUser();
        } else {
          throw new Error("Unauthorized");
        }
      })
    );
  };
  return (
    <NoteContext.Provider
      value={{
        notes,
        setNotes,
        getNotesByUser,
        addNote,
        updateNote,
        deleteNote,
      }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

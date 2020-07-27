import React, { useState, createContext } from "react";

export const NoteContext = createContext();

export const NoteProvider = (props) => {
  const [notes, setNotes] = useState([]);

  const getNotesByUserId = (id) => {
    return fetch(`/api/note/getByUser/${id}`)
      .then((res) => res.json())
      .then(setNotes);
  };

  const getNoteById = (id) => {
    return fetch(`/api/note/${id}`).then((res) => res.json());
  };

  const addNote = (note) => {
    return fetch("/api/note", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    }).then(getNotesByUserId);
  };

  const updateNote = (note) => {
    return fetch(`/api/note/${note.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    }).then(getNotesByUserId);
  };

  const deleteNote = (id) => {
    return fetch(`/api/note/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(getNotesByUserId);
  };

  return (
    <NoteContext.Provider
      value={{
        notes,
        setNotes,
        getNotesByUserId,
        getNoteById,
        addNote,
        updateNote,
        deleteNote,
      }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

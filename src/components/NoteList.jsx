import React, { useEffect, useState } from "react";
import noteServices from "../services/notes/noteServices";
import { Note } from "./Note";

export const NotesList = ({ notes, setNotes }) => {
  const handleNoteDeleted = () => {};
  return (
    <div>
      {notes.length > 0 ? (
        notes.map((note) => (
          <div key={note.id}>
            <Note note={note} onUpdate={setNotes} onDelete={setNotes} />
          </div>
        ))
      ) : (
        <p>Empty List</p>
      )}
    </div>
  );
};

import { useState } from "react";
import { useEffect } from "react";
import noteServices from "../services/notes/noteServices.js";

export const useNotes = () => {
  const [notes, setNotes] = useState([]);
  const handleAddNote = (note) => {
    setNotes(note);
  };
  const handleGetNotes = () => {
    noteServices.getAllNotes().then((notes) => {
      setNotes(notes.notes);
    });
  };
  useEffect(() => {
    handleGetNotes();
  }, []);
  return { notes, handleAddNote };
};

import noteServices from "../services/notes/noteServices";
import { useUpdate } from "../hooks/useUpdate";
import { UpdateNoteForm } from "./UpdateNoteForm";

export const Note = ({ note, onUpdate, onDelete }) => {
  const { update, setVisible } = useUpdate();
  const handleDelete = () => {
    noteServices
      .deleteNote(note.id)
      .then(() => {
        noteServices.getAllNotes().then((notes) => {
          onDelete(notes.notes);
        });
      })
      .catch((error) => {
        console.error("Error deleting note:", error);
      });
  };
  const handleUpdate = () => {
    setVisible(true);
  };

  return (
    <div>
      <h3>{note.name}</h3>
      <p>{note.description}</p>
      <p>Important: {note.important ? "Yes" : "No"}</p>
      <p>Status: {note.status}</p>
      <p>Due Date: {note.due_date}</p>
      <button onClick={handleUpdate}>Update</button>
      <button onClick={handleDelete}>Delete</button>
      {update && (
        <UpdateNoteForm
          onNoteCreated={onUpdate}
          setVisible={setVisible}
          id={note.id}
          note={note}
        />
      )}
    </div>
  );
};

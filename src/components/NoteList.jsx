import { Note } from "./Note";

export const NotesList = ({ notes, setNotes }) => {
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

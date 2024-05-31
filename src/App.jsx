import { CreateNoteForm } from "./components/CreateNoteForm";
import { NotesList } from "./components/NoteList";
import { useNotes } from "./hooks";
function App() {
  const { notes, handleAddNote } = useNotes();
  return (
    <>
      <h1>NOTEKEEPER-APP</h1>
      <CreateNoteForm onNoteCreated={handleAddNote} note={notes} />
      <NotesList notes={notes} setNotes={handleAddNote} />
    </>
  );
}

export default App;

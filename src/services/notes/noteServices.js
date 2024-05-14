const baseUrl = `${import.meta.env.VITE_NOTES_API_URL}`;

const getAllNotes = () => {
  return fetch(baseUrl).then((response) => response.json());
};

const createNote = (newNote) => {
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: newNote.id ? newNote.id.toString() : Date.now().toString(),
      name: newNote.name,
      number: newNote.number,
    }),
  }).then((response) => response.json());
};

const updateNote = ({
  id,
  name,
  number,
  description,
  important,
  status,
  due_date,
  created_at,
}) => {
  return fetch(`${baseUrl}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      number: number,
      description: description,
      important: important,
      status: status,
      due_date: due_date,
      created_at: created_at,
    }),
  }).then((response) => response.json());
};

const deleteNote = (id) => {
  return fetch(`${baseUrl}/${id}`, {
    method: "DELETE",
  }).then((response) => response.json());
};

export default {
  getAllNotes,
  createNote,
  updateNote,
  deleteNote,
};

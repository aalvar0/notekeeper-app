import React from "react";
import { useForm } from "../hooks/useForm";
import noteServices from "../services/notes/noteServices";
import validateEnum from "../helpers/validation/validateEnum";
import validateNonEmpty from "../helpers/validation/validateNonEmpty";
import validateType from "../helpers/validation/validateType";
import { useUpdateForm } from "../hooks/useUpdateForm";

export const UpdateNoteForm = ({ onNoteCreated, setVisible, id, note }) => {
  const { update, valuesUpdate, handleChangeUpdate, resetFormUpdate } =
    useUpdateForm({
      name: note.name,
      description: note.description,
      important: note.important,
      status: note.status,
      due_date: note.due_date,
    });
  const { values, handleChange, resetForm } = useForm({
    name: "",
    description: "",
    important: false,
    status: "pending",
    due_date: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      (validateEnum(values.status),
      validateNonEmpty(values),
      validateType(values))
    ) {
      noteServices
        .updateNote(
          id,
          values.name,
          values.description,
          values.important,
          values.status,
          values.due_date,
        )
        .then(() => {
          noteServices.getAllNotes().then((notes) => {
            onNoteCreated(notes.notes);
          });
        })
        .catch((error) => {
          console.error("Error creating note:", error);
        })
        .finally(() => {
          setVisible(false);
        });
    } else {
      console.log(
        validateEnum(values.status),
        validateNonEmpty(values),
        validateType(values),
      );
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Description:
          <textarea
            name="description"
            value={values.description}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Important:
          <input
            type="checkbox"
            name="important"
            checked={values.important}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Status:
          <select
            name="status"
            value={values.status}
            onChange={handleChange}
            required
          >
            <option value="pending">Pending</option>
            <option value="in_progress">In Progress</option>
            <option value="done">Done</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Due Date:
          <input
            type="date"
            name="due_date"
            value={values.due_date}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <button type="submit">Create Note</button>
    </form>
  );
};

import React from "react";
import { useForm } from "../hooks/useForm";
import noteServices from "../services/notes/noteServices";
import validateEnum from "../helpers/validation/validateEnum";
import validateNonEmpty from "../helpers/validation/validateNonEmpty";
import validateType from "../helpers/validation/validateType";

export const CreateNoteForm = ({ onNoteCreated, note }) => {
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
        .createNote(values)
        .then((newNote) => {
          if (onNoteCreated) {
            onNoteCreated([...note, newNote]);
          }
          resetForm();
        })
        .catch((error) => {
          console.error("Error creating note:", error);
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

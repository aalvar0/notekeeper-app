function validateType(note) {
  const expectedTypes = {
    name: "string",
    description: "string",
    important: "boolean",
    status: "string",
    due_date: "string",
  };
  if (typeof note.name !== expectedTypes.name) {
    return false;
  }
  if (typeof note.description !== expectedTypes.description) {
    return false;
  }
  if (typeof note.important !== expectedTypes.important) {
    return false;
  }
  if (typeof note.status !== expectedTypes.status) {
    return false;
  }
  if (typeof note.due_date !== expectedTypes.due_date) {
    return false;
  }
  return true;
}

const myNote = {
  title: "Example Note",
  content: "This is an example note content.",
  priority: 1,
  isCompleted: false,
};

console.log(validateType(myNote));

export default validateType;

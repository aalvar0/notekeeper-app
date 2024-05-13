function validateType(note) {
  const expectedTypes = {
    title: "string",
    content: "string",
    priority: "number",
    isCompleted: "boolean",
  };
  if (typeof note.title !== expectedTypes.title) {
    return false;
  }
  if (typeof note.content !== expectedTypes.content) {
    return false;
  }
  if (typeof note.priority !== expectedTypes.priority) {
    return false;
  }
  if (typeof note.isCompleted !== expectedTypes.isCompleted) {
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

exports.validateType = validateType;

function validateEnum(enumValue) {
  const enumValues = ["pending", "in_progress", "done"];
  return enumValues.includes(enumValue);
}

console.log(validateEnum("pending"));

export default validateEnum;

function validateNonEmpty(property) {
  return typeof property === "string" && property.trim() !== "";
}

export default validateNonEmpty;

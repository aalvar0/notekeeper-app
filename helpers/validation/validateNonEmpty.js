function validateNonEmpty(property) {
  return typeof property === "string" && property.trim() !== "";
}

module.exports = validateNonEmpty;

import { useState } from "react";

export const useUpdateForm = (initialValues) => {
  const [valuesUpdate, setValuesUpdate] = useState(initialValues);

  const handleChangeUpdate = (event) => {
    const { name, value, type, checked } = event.target;
    setValuesUpdate({
      ...valuesUpdate,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const resetFormUpdate = () => {
    setValuesUpdate(initialValues);
  };

  return {
    valuesUpdate,
    handleChangeUpdate,
    resetFormUpdate,
  };
};

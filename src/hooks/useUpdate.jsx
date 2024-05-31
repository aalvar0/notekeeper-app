import { useState } from "react";

export const useUpdate = () => {
  const [update, setUpdate] = useState(false);
  const setVisible = (form) => {
    setUpdate(form);
  };
  return { update, setVisible };
};

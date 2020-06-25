import { useState } from "react";

//26 nr.27 in TodoForm.js
export default (initialValue) => {
  //  Объявляем новую переменную состояния "value"
  const [value, setValue] = useState(initialValue);

  return {
    value,
    onChange: (event) => {
      setValue(event.target.value);
    },
    reset: () => setValue(""),
  };
};

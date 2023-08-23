import { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ on_new_category }) => {
  const [inputValue, setInputValue] = useState("");

  const on_input_chage = ({ target }) => {
    setInputValue(target.value);
  };

  const on_submit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;
    /* setCategories((category) => [...category, inputValue]); */
    setInputValue("");
    on_new_category(inputValue.trim());
  };

  return (
    <form onSubmit={on_submit}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={on_input_chage}
      />
    </form>
  );
};

import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GitExpertApp = () => {
  const [categories, setCategories] = useState(["One punch", "Dragon ball"]);

  const on_add_category = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };
  /* setCategories([...newCategory, "Tate no yuusha"]); */

  return (
    <>
      <h1> GifExpertApp</h1>
      <AddCategory
        /* setCategories={setCategories}  */
        on_new_category={on_add_category}
      />
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};

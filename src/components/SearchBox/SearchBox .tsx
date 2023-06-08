import React from "react";
import css from "./SearchBox.module.scss";

const SearchBox: React.FC<TSearchBox> = ({ searchByName }) => {

  const textValue = (e: { target: { value: string; }; }) => {
    searchByName(e.target.value);
  };

  return (
    <input className={css.input} placeholder="Search" onChange={textValue} />
  );
};

export default SearchBox;

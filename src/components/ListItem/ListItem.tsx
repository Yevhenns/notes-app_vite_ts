import React from "react";
import { Inote, TShowNote } from "../../types/types";
import css from "./ListItem.module.scss";

const ListItem: React.FC<Inote & TShowNote> = ({ id, text, date, showNote }) => {
  const shortText = text.slice(0, 10).concat("...");

  return (
    <li className={css.listItem} onClick={() => showNote(id)}>
      <p>{date}</p>
      <p>{shortText}</p>
    </li>
  );
};

export default ListItem;

import React from "react";
import ListItem from "../ListItem/ListItem";
import { TSideBar } from "../../types/types";
import css from "./Sidebar.module.scss";

const Sidebar: React.FC<TSideBar> = ({ notesAll, showNote, filterValue }) => {
  const filteredArray = notesAll.filter((item) =>
    item.text.toLowerCase().includes(filterValue)
  );

  return (
    <div className={css.sidebar}>
      <ul className={css.sidebarList}>
        {filteredArray.map(({ id, text, date }) => {
          return (
            <ListItem
              key={id}
              id={id}
              text={text}
              showNote={showNote}
              date={date}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;

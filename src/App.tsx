import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import {
  addNewItem,
  deleteItem,
  editText,
  getNotesAll,
} from "./redux/notesSlice";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { INoteItem } from "./types/types";
import css from "./App.module.scss";

const App: React.FC = () => {
  const [currentNote, setCurrentNote] = useState({} as INoteItem);
  const [editMode, setEditMode] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [currentText, setCurrentText] = useState(null as null | string);
  const [filterValue, setFilterValue] = useState("");
  const [menu, setMenu] = useState(false);

  const notesAll = useAppSelector(getNotesAll);

  const dispatch = useAppDispatch();

  const currentNoteLength = Object.keys(currentNote).length;
  const currentNoteId = currentNote.id;

  useEffect(() => {
    if (notesAll.length === 0 || currentNoteLength === 0) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [notesAll.length, currentNoteLength]);

  useEffect(() => {
    if (currentText !== null) {
      const id = currentNoteId;
      const text = currentText;
      dispatch(editText({ text, id }));
    }
  }, [currentNoteId, currentText, dispatch]);

  const burgerMenu = (isMenuOpen: boolean) => {
    setMenu(isMenuOpen);
  };

  const addNewNote = (newItem: INoteItem) => {
    dispatch(addNewItem(newItem));
    setCurrentText(null);
  };

  const showNote = (id: string) => {
    const currentEl = notesAll.find((element) => element.id === id);
    if (currentEl !== undefined) {
      setCurrentNote(currentEl);
      setEditMode(false);
      setCurrentText(null);
    }
  };

  const deleteNote = () => {
    dispatch(deleteItem(currentNoteId));
    setCurrentNote({} as INoteItem);
  };

  const enableEdit = () => {
    if (currentNoteLength > 0) {
      setEditMode(true);
      setCurrentText(currentNote.text);
    }
  };

  const getText = (text: string) => {
    setCurrentText(text);
  };

  const searchByName = (searchText: string) => {
    setFilterValue(searchText.toLowerCase());
  };

  return (
    <div className={css.wrapper}>
      <Header
        burgerMenu={burgerMenu}
        editMode={editMode}
        currentText={currentText}
        currentNoteLength={currentNoteLength}
        searchByName={searchByName}
        addNewNote={addNewNote}
        deleteNote={deleteNote}
        enableEdit={enableEdit}
        disabled={disabled}
      />
      <Main
        menu={menu}
        notesAll={notesAll}
        searchByName={searchByName}
        showNote={showNote}
        filterValue={filterValue}
        currentNote={currentNote}
        editMode={editMode}
        getText={getText}
        currentNoteLength={currentNoteLength}
      />
    </div>
  );
};

export default App;

import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import HeaderButtonSet from "../HeaderButtonSet/HeaderButtonSet";
import SearchBox from "../SearchBox/SearchBox ";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import css from "./Header.module.scss";

const Header: React.FC<THeader> = ({
  burgerMenu,
  editMode,
  currentText,
  currentNoteLength,
  searchByName,
  addNewNote,
  deleteNote,
  enableEdit,
  disabled,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const beforeTablet = useMediaQuery({ query: "(max-width: 479px)" });
  const tablet = useMediaQuery({ query: "(min-width: 480px)" });

  useEffect(() => {
    if (tablet) setIsMenuOpen(false);
  }, [tablet]);

  useEffect(() => {
    burgerMenu(isMenuOpen);
  }, [burgerMenu, isMenuOpen]);

  useEffect(() => {
    if (editMode) {
      setIsMenuOpen(true);
    }
  }, [editMode]);

  useEffect(() => {
    if (currentText === null || currentNoteLength === 0) {
      setIsMenuOpen(false);
    }
  }, [currentNoteLength, currentText]);

  const toggleMenu = () => setIsMenuOpen((value) => !value);

  return (
    <header className={css.header}>
      <HeaderButtonSet
        addNewNote={addNewNote}
        deleteNote={deleteNote}
        enableEdit={enableEdit}
        disabled={disabled}
      />
      {beforeTablet && (
        <IconButton color="inherit" onClick={toggleMenu}>
          {!isMenuOpen ? (
            <MenuIcon sx={{ fontSize: "40px" }} />
          ) : (
            <CloseIcon sx={{ fontSize: "40px" }} />
          )}
        </IconButton>
      )}
      {tablet && <SearchBox searchByName={searchByName} />}
    </header>
  );
};

export default Header;

import React from "react";
import { useMediaQuery } from "react-responsive";
import SearchBox from "../SearchBox/SearchBox ";
import Sidebar from "../Sidebar/Sidebar";
import Workspace from "../Workspace/Workspace";
import { Box } from "@mui/material";
import { TMain } from "../../types/types";
import css from "./Main.module.scss";

const Main: React.FC<TMain> = ({
  menu,
  notesAll,
  searchByName,
  showNote,
  filterValue,
  currentNote,
  editMode,
  getText,
  currentNoteLength,
}) => {
  const beforeTablet = useMediaQuery({ query: "(max-width: 479px)" });
  const tablet = useMediaQuery({ query: "(min-width: 480px)" });

  return (
    <main className={css.mainContainer}>
      {menu && beforeTablet && (
        <Box
          sx={{
            height: "100vh",
            padding: "20px",
            backgroundColor: "azure",
          }}
        >
          <Workspace
            currentNote={currentNote}
            editMode={editMode}
            getText={getText}
            currentNoteLength={currentNoteLength}
          />
        </Box>
      )}
      {!menu && beforeTablet && notesAll.length !== 0 && (
        <>
          <SearchBox searchByName={searchByName} />
          <Sidebar
            notesAll={notesAll}
            showNote={showNote}
            filterValue={filterValue}
          />
        </>
      )}
      {tablet && (
        <>
          <Sidebar
            notesAll={notesAll}
            showNote={showNote}
            filterValue={filterValue}
          />
          <Workspace
            currentNote={currentNote}
            editMode={editMode}
            getText={getText}
            currentNoteLength={currentNoteLength}
          />
        </>
      )}
    </main>
  );
};

export default Main;

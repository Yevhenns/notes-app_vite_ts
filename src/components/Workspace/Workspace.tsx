import React from "react";
import { TWorkspace } from "../../types/types";
import css from "./Workspace.module.scss";

const Workspace: React.FC<TWorkspace> = ({
  currentNote,
  editMode,
  getText,
  currentNoteLength,
}) => {
  const { text, date } = currentNote;

  const textValue = (e: { target: { value: string } }) => {
    getText(e.target.value);
  };

  return (
    <div className={css.wrapper}>
      {currentNoteLength > 0 && (
        <>
          <p>{date}</p>
          {editMode === false && currentNoteLength > 0 ? (
            <p className={css.noteText}>{text}</p>
          ) : (
            <textarea
              className={css.textarea}
              onChange={textValue}
              defaultValue={text}
              placeholder="Your text..."
            />
          )}
        </>
      )}
    </div>
  );
};

export default Workspace;

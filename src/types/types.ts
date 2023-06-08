export interface INoteItem {
  id: string;
  text: string;
  date: string;
}

export interface INotes {
  notesAll: INoteItem[];
  disabled: boolean;
  editMode: boolean;
  currentText: null | string;
  currentNoteLength: number;
  menu: boolean;
  filterValue: string;
  currentNote: { text: string; date: string };
  showNote: (id: string) => void;
  addNewNote: (newItem: INoteItem) => void;
  deleteNote: () => void;
  enableEdit: () => void;
  searchByName: (searchText: string) => void;
  burgerMenu: (isMenuOpen: boolean) => void;
  getText: (text: string) => void;
}

export type TShowNote = Pick<INotes, "showNote">;

export type THeaderButtonSet = Pick<
  INotes,
  "addNewNote" | "deleteNote" | "enableEdit" | "disabled"
>;

export type TSearchBox = Pick<INotes, "searchByName">;

export type THeader = Omit<
  INotes,
  "notesAll" | "menu" | "filterValue" | "currentNote" | "showNote" | "getText"
>;

export type TMain = Omit<
  INotes,
  | "disabled"
  | "currentText"
  | "addNewNote"
  | "deleteNote"
  | "enableEdit"
  | "burgerMenu"
>;

export type TSideBar = Pick<INotes, "notesAll" | "showNote" | "filterValue">;

export type TWorkspace = Pick<
  INotes,
  "currentNote" | "editMode" | "getText" | "currentNoteLength"
>;

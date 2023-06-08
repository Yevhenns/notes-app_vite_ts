interface INoteItem {
  id: string;
  text: string;
  date: string;
}

type TNotes = {
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
};

type TShowNote = Pick<TNotes, "showNote">;

type THeaderButtonSet = Pick<
  TNotes,
  "addNewNote" | "deleteNote" | "enableEdit" | "disabled"
>;

type TSearchBox = Pick<TNotes, "searchByName">;

type THeader = Omit<
  TNotes,
  "notesAll" | "menu" | "filterValue" | "currentNote" | "showNote" | "getText"
>;

type TMain = Omit<
  TNotes,
  | "disabled"
  | "currentText"
  | "addNewNote"
  | "deleteNote"
  | "enableEdit"
  | "burgerMenu"
>;

type TSideBar = Pick<TNotes, "notesAll" | "showNote" | "filterValue">;

type TWorkspace = Pick<
  TNotes,
  "currentNote" | "editMode" | "getText" | "currentNoteLength"
>;

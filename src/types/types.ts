export interface Inote {
    id: string;
    text: string;
    date: string
}

export interface INotes {
    disabled: boolean;
    showNote: (id: string) => void;
    addNewNote: (newItem: Inote) => void;
    deleteNote: () => void;
    enableEdit: () => void;
    searchByName: (searchText: string) => void;
    burgerMenu:
}

export type TShowNote = Pick<INotes, 'showNote'>

export type THeaderButtonSet = Pick<INotes, 'addNewNote' | 'deleteNote' | 'enableEdit' | 'disabled'>

export type TSearchBox = Pick<INotes, 'searchByName'>

export type THeader = Pick<INotes, 'burgerMenu'>
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notesAll: [] as INoteItem[],
};

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNewItem(state, action: { payload: INoteItem }) {
      state.notesAll = [...state.notesAll, action.payload];
    },
    deleteItem(state, action: { payload: string }) {
      state.notesAll = state.notesAll.filter(
        (item) => item.id !== action.payload
      );
    },
    editText(state, action: { payload: { id: string; text: string } }) {
      const currentItemIndex = state.notesAll.findIndex(
        (element) => element.id === action.payload.id
      );
      const currentItem = state.notesAll.find(
        (element) => element.id === action.payload.id
      );
      if (currentItem) {
        currentItem.text = action.payload.text;
        const newArray = [...state.notesAll];
        newArray.splice(currentItemIndex, 1, currentItem);
      }
    },
  },
});

export const notesReducer = notesSlice.reducer;

export const getNotesAll = (state: { notes: { notesAll: INoteItem[] } }) =>
  state.notes.notesAll;

export const { addNewItem } = notesSlice.actions;
export const { deleteItem } = notesSlice.actions;
export const { editText } = notesSlice.actions;

import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer, PERSIST } from "redux-persist";
import { notesReducer } from "./notesSlice";
import { useDispatch } from "react-redux";

const persistConfig = {
  key: "notes",
  storage,
};

export const store = configureStore({
  reducer: {
    notes: persistReducer(persistConfig, notesReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [PERSIST],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export const persistor = persistStore(store);

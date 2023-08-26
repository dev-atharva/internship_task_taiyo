import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AppState {
  isContactModalOpen: boolean;
  contacts: Contact[];
}

export interface Contact {
  id: string;
  first_name: string;
  last_name: string;
  status: boolean;
}

const initialState: AppState = {
  isContactModalOpen: false,
  contacts: [],
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    openModal: (state) => {
      state.isContactModalOpen = true;
    },
    closeModal: (state) => {
      state.isContactModalOpen = false;
    },
    addContact: (state, action: PayloadAction<Contact>) => {
      state.contacts.push(action.payload);
    },
    deleteContact: (state, action: PayloadAction<string>) => {
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== action.payload
      );
    },
    editContact: (state, action: PayloadAction<Contact>) => {
      const editedContact = action.payload;
      const index = state.contacts.findIndex(
        (contact) => contact.id === editedContact.id
      );
      if (index !== -1) {
        state.contacts[index] = editedContact;
      }
    },
  },
});

export const { openModal, closeModal, addContact, deleteContact, editContact } =
  appSlice.actions;

const store = configureStore({
  reducer: appSlice.reducer,
});

export default store;

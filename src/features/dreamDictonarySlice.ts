import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface dreamDictonary {
  BlogId: number;
  BlogTitle: string;
}

const initialState: dreamDictonary = {
  BlogId: 0,
  BlogTitle: "",
};

export const dreamDictonarySlice = createSlice({
  name: "dreamDictonary",
  initialState,
  reducers: {
    data: (state, action: PayloadAction<{ id: number; title: string }>) => {
      state.BlogId = action.payload.id;
      state.BlogTitle = action.payload.title;
    },
    deleteData: (state) => {
      state.BlogId = 0;
      state.BlogTitle = "";
    },
  },
});

export const { data, deleteData } = dreamDictonarySlice.actions;

export default dreamDictonarySlice.reducer;

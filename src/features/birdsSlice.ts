import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: Birds = {
  Id: 0,
  BirdMyanmarName: "",
  BirdEnglishName: "",
  Description: "",
  ImagePath: "",
};

export const birdsSlice = createSlice({
  name: "birds",
  initialState,
  reducers: {
    data: (state, action: PayloadAction<Birds>) => {
      state.Id = action.payload.Id;
      state.BirdEnglishName = action.payload.BirdEnglishName;
      state.BirdMyanmarName = action.payload.BirdMyanmarName;
      state.Description = action.payload.Description;
      state.ImagePath = action.payload.ImagePath;
    },
  },
});

export const {data} = birdsSlice.actions;
export default birdsSlice.reducer;

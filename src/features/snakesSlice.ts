import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface snakeSlice {
  Id: number;
  MMName: string;
  EngName: string;
  Detail: string;
  IsPoison: string;
  IsDanger: string;
}

const initialState: snakeSlice = {
  Id: 0,
  MMName: "",
  EngName: "",
  Detail: "",
  IsPoison: "",
  IsDanger: "",
};

export const snakeSlice = createSlice({
  name: "snake",
  initialState,
  reducers: {
    data: (state, action: PayloadAction<Snakes>) => {
      state.Id = action.payload.Id;
      state.MMName = action.payload.MMName;
      state.EngName = action.payload.EngName;
      state.Detail = action.payload.Detail;
      state.IsPoison = action.payload.IsPoison;
      state.IsDanger = action.payload.IsDanger;
    },
  },
});

export const { data } = snakeSlice.actions;
export default snakeSlice.reducer;

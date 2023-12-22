import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface MyanmarMonths {
  Id: number;
  MonthMm: string;
  MonthEn: string;
  FestivalMm: string;
  FestivalEn: string;
  Description: string;
  Detail: string;
}

const initialState: MyanmarMonths = {
  Id: 0,
  MonthMm: "",
  MonthEn: "",
  FestivalMm: "",
  FestivalEn: "",
  Description: "",
  Detail: "",
};

export const myanmarMonthSlice = createSlice({
  name: "myanmarMonths",
  initialState,
  reducers: {
    data: (state, action: PayloadAction<MyanmarMonths>) => {
      state.Id = action.payload.Id;
      state.MonthMm = action.payload.MonthMm;
      state.MonthEn = action.payload.MonthEn;
      state.FestivalEn = action.payload.FestivalEn;
      state.FestivalMm = action.payload.FestivalMm;
      state.Description = action.payload.Description;
      state.Detail = action.payload.Detail;
    },
    deleteData: (state) => {
      state.Id = 0;
      state.MonthMm = "";
      state.MonthEn = "";
      state.FestivalEn = "";
      state.FestivalMm = "";
      state.Description = "";
      state.Detail = "";
    },
  },
});

export const { data, deleteData } = myanmarMonthSlice.actions;
export default myanmarMonthSlice.reducer;

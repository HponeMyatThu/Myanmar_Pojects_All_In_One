import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface myanmarProverbs {
  ProverbId: number;
  ProverbName: string;
  ProverbDesp: string;
  TitleId: number;
  TitleName: string;
}

const initialState: myanmarProverbs = {
  TitleId: 0,
  TitleName: "",
  ProverbId: 0,
  ProverbName: "",
  ProverbDesp: "",
};

export const myanmarProverbsSlice = createSlice({
  name: "myanmarProverbs",
  initialState,
  reducers: {
    data: (state, action: PayloadAction<myanmarProverbs>) => {
      state.TitleId = action.payload.TitleId;
      state.TitleName = action.payload.TitleName;
    },
    dataBody: (
      state,
      action: PayloadAction<{ id: number; name: string; des: string }>
    ) => {
      console.log(action.payload);
      state.ProverbId = action.payload.id;
      state.ProverbName = action.payload.name;
      state.ProverbDesp = action.payload.des;
    },
    // deleteData: (state) => {
    //   state.TitleId= 0,
    //   state.TitleName= "",
    //   state.ProverbId= 0,
    //   state.ProverbName= "",
    //   state.ProverbDesp= "",
    // },
  },
});

export const { data, dataBody } = myanmarProverbsSlice.actions;
export default myanmarProverbsSlice.reducer;

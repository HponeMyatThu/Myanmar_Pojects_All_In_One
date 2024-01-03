import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface zodiaceSlice {
  Id: number;
  Name: string;
  MyanmarMonth: string;
  ZodiacSignImageUrl: string;
  ZodiacSign2ImageUrl: string;
  Dates: string;
  Elements: string;
  ElementImageUrl: string;
  LifePurpose: string;
  Loyal: string;
  RepresentativeFlower: string;
  Angry: string;
  Character: string;
  PrettyFeatures: string;
  Traits: TraitsDataTypes[];
}

const initialState: zodiaceSlice = {
  Id: 0,
  Name: "",
  MyanmarMonth: "",
  ZodiacSignImageUrl: "",
  ZodiacSign2ImageUrl: "",
  Dates: "",
  Elements: "",
  ElementImageUrl: "",
  LifePurpose: "",
  Loyal: "",
  RepresentativeFlower: "",
  Angry: "",
  Character: "",
  PrettyFeatures: "",
  Traits: [],
};

export const zodiaceSlice = createSlice({
  name: "zodiac",
  initialState,
  reducers: {
    data: (state, action: PayloadAction<ZodiacSignsDetail>) => {
      state.Id = action.payload.Id;
      state.Name = action.payload.Name;
      state.MyanmarMonth = action.payload.MyanmarMonth;
      state.ZodiacSignImageUrl = action.payload.ZodiacSignImageUrl;
      state.ZodiacSign2ImageUrl = action.payload.ZodiacSign2ImageUrl;
      state.Dates = action.payload.Dates;
      state.Elements = action.payload.Elements;
      state.ElementImageUrl = action.payload.ElementImageUrl;
      state.LifePurpose = action.payload.LifePurpose;
      state.Loyal = action.payload.Loyal;
      state.RepresentativeFlower = action.payload.RepresentativeFlower;
      state.Angry = action.payload.Angry;
      state.Character = action.payload.Character;
      state.PrettyFeatures = action.payload.PrettyFeatures;
      state.Traits = action.payload.Traits;
    },
  },
});

export const { data } = zodiaceSlice.actions;
export default zodiaceSlice.reducer;
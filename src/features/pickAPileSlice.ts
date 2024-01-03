import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface pickAPile {
  QuestionId: number;
  QuestionName: string;
  QuestionDesp: string;
  Answer: PickAPile_Answers[];
  Result: PickAPile_Answers;
}

const initialState: pickAPile = {
  QuestionId: 0,
  QuestionName: "",
  QuestionDesp: "",
  Answer: [],
  Result: {
    QuestionId: 0,
    AnswerId: 0,
    AnswerDesp: "",
    AnswerImageUrl: "",
    AnswerName: "",
  },
};

export const pickAPileSlice = createSlice({
  name: "pickAPile",
  initialState,
  reducers: {
    dataReadMore: (
      state,
      action: PayloadAction<pickAPile>
    ) => {
      state.QuestionId = action.payload.QuestionId;
      state.QuestionName = action.payload.QuestionName;
      state.QuestionDesp = action.payload.QuestionDesp;
    },
    datawhole: (state, action: PayloadAction<PickAPile_Answers[]>) => {
      state.Answer = action.payload;
    },
    dataPicture: (state, action: PayloadAction<PickAPile_Answers>) => {
      state.Result.QuestionId = action.payload.QuestionId;
      state.Result.AnswerId = action.payload.AnswerId;
      state.Result.AnswerName = action.payload.AnswerName;
      state.Result.AnswerDesp = action.payload.AnswerDesp;
      state.Result.AnswerImageUrl = action.payload.AnswerImageUrl;
    },
    dataClear: (state) => {
      state.QuestionId = 0;
      state.QuestionName = '';
      state.QuestionDesp = '';
    },
  },
});

export const { dataReadMore, dataPicture, datawhole, dataClear } = pickAPileSlice.actions;
export default pickAPileSlice.reducer;

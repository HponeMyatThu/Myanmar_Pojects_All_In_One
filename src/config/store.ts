import { reduxStorage } from "../utils/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import bayDinReducer from "../features/bayDinSlice";
import dreamDictonaryReducer from "../features/dreamDictonarySlice";
import myanmarMonthsReducer from "../features/myanmarMonthsSlice";
import myanmarProverbsReducer from "../features/myanmarProverbsSlice";

export const store = configureStore({
  reducer: {
    bayDin: bayDinReducer,
    dreamDictonary: dreamDictonaryReducer,
    myanmarMonths: myanmarMonthsReducer,
    myanmarProverbs: myanmarProverbsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

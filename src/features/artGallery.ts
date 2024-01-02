import { PayloadAction, createSlice } from "@reduxjs/toolkit";


export interface artGallerySlice {
    ArtistId: number;
}

const initialState: artGallerySlice = {
    ArtistId: 0,
};

export const artGallerySlice = createSlice({
    name: 'artGallery',
    initialState,
    reducers: {
        ArtistId: (state, action: PayloadAction<number>) => {
            state.ArtistId = action.payload;
        },
    },
});

export const {ArtistId} = artGallerySlice.actions;
export default artGallerySlice.reducer;
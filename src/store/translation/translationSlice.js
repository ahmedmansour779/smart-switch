// translationSlice.js
import { createSlice } from '@reduxjs/toolkit';
import translations from './translations.json';

const initialState = {
    language: 'en',
    translations: translations['en'],
};

export const translation = createSlice({
    name: 'translation',
    initialState,
    reducers: {
        setLanguage: (state, action) => {
            state.language = action.payload;
            state.translations = translations[action.payload];
        },
    },
});

export const { setLanguage } = translation.actions;

export default translation.reducer;
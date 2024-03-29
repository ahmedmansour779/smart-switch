import { configureStore } from "@reduxjs/toolkit";
import translationReducer from './translation/translationSlice';

const store = configureStore({
    reducer: {
        translations: translationReducer
    },
});

export default store;
import { configureStore } from "@reduxjs/toolkit";
import githubSlice from './github/githubSlice'
import themeSlice from "./theme/themeSlice.js";

export const store = configureStore({
    reducer: {
        github: githubSlice,
        theme: themeSlice
    }
})
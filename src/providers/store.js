import { configureStore } from "@reduxjs/toolkit";
import fileReducer from "../states/slices/fileSlices";

const store = configureStore({
    reducer: {
        file: fileReducer,
    },
});

export default store;
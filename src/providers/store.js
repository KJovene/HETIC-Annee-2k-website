import { configureStore } from "@reduxjs/toolkit";
import fileReducer from "../states/slices/fileSlices";


// Je créé un conteneur de stockage pour mon application
const store = configureStore({
    reducer: {
        file: fileReducer,
    },
});

export default store;
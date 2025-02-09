import { createSlice } from '@reduxjs/toolkit';
import { getAllFiles, addFile, deleteFile } from '../../controllers/filecontroller';

// Je crée un slice Redux pour gérer l'état des fichiers
const fileSlice = createSlice({
    name: 'file',
    initialState: [],
    reducers: {
        // Je définis un reducer pour mettre à jour l'état avec les fichiers récupérés
        setFiles: (state, action) => {
            console.log("Setting files in state:", action.payload);
            return action.payload;
        },
        // Je définis un reducer pour ajouter un fichier à l'état
        addFile: (state, action) => {
            const newFile = addFile(action.payload.fileName, action.payload.content);
            state.push(newFile);
        },
        // Je définis un reducer pour supprimer un fichier de l'état
        deleteFile: (state, action) => {
            deleteFile(action.payload.fileName);
            return state.filter(file => file.Title !== action.payload.fileName);
        },
    },
});

// J'exporte les actions et le reducer
export const { setFiles, addFile: addFileAction, deleteFile: deleteFileAction } = fileSlice.actions;
export default fileSlice.reducer;
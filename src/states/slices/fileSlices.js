import { createSlice } from '@reduxjs/toolkit';
import { getAllFiles, addFile, editFile, deleteFile } from '../../controllers/filecontroller';

const fileSlice = createSlice({
    name: 'file',
    initialState: getAllFiles(),
    reducers: {
        setFiles: (state, action) => {
            return action.payload;
        },
        addFileAction: (state, action) => {
            const { fileName, content } = action.payload;
            const newFile = addFile(fileName, content);
            state.push(newFile);
        },
        deleteFileAction: (state, action) => {
            const { fileName } = action.payload;
            deleteFile(fileName);
            return state.filter(file => file.Title !== fileName);
        },
        editFileAction: (state, action) => {
            const { fileName, newFileName, newContent } = action.payload;
            editFile(fileName, newFileName, newContent);
            const fileIndex = state.findIndex(file => file.Title === fileName);
            if (fileIndex !== -1) {
                state[fileIndex] = { Title: newFileName, Content: newContent };
            }
        }
    }
});

export const { setFiles, addFileAction, editFileAction, deleteFileAction } = fileSlice.actions;
export default fileSlice.reducer;
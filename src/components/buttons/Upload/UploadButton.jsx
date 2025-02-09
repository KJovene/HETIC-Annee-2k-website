import React from "react";
import { useDispatch } from "react-redux";
import { addFileAction } from "../../../states/slices/fileSlices";

// Bouton d'upload
const UploadButton = () => {
    const dispatch = useDispatch();

    const FileUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const content = e.target.result;
                dispatch(addFileAction({ fileName: file.name, content: content }));
            }
            reader.readAsText(file);
        }
    };

    return (
        <input type="file" onChange={FileUpload} accept=".md" />
    );
};

// Export du bouton
export default UploadButton;
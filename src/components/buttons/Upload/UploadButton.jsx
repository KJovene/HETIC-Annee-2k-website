import React from "react";
import { useDispatch } from "react-redux";
import { addFileAction } from "../../../states/slices/fileSlices";

// Bouton d'upload spécifique à la page d'édition
const UploadButtonEdit = ({ onFileUpload }) => {
    const dispatch = useDispatch();
    const FileUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const content = e.target.result;
                if (onFileUpload) {
                    onFileUpload(file.name, content); // j'appelle la fonction onFileUpload pour mettre à jour le contenu dans le local storage
                }else{
                    dispatch(addFileAction({ fileName: file.name, content: content })); // Dispatch l'action pour ajouter le fichier
                }
            }
            reader.readAsText(file);
        }
    };

    return (
        <div className="group flex items-center bg-gray-300 border border-solid border-black px-2 py-1 cursor-pointer hover:bg-gray-400">
        <input
            type="file"
            onChange={FileUpload}
            accept=".md"
            id="file-upload"
            style={{ display: "none" }}
        />
        <label htmlFor="file-upload" className="group-hover:text-white">
            Importer
        </label>
    </div>   
    );
};

// Export du bouton
export default UploadButtonEdit;
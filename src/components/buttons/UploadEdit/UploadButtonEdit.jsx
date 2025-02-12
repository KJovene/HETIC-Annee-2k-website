import React from "react";
import "./UploadButtonEdit-module.css";

// Bouton d'upload spécifique à la page d'édition
const UploadButtonEdit = ({ onFileUpload }) => {
    const FileUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const content = e.target.result;
                if (onFileUpload) {
                    onFileUpload(file.name, content); // j'appelle la fonction onFileUpload pour mettre à jour le contenu dans le local storage
                }
            }
            reader.readAsText(file);
        }
    };

    return (
        <div className="uploadButtonContainer">
            <input
                type="file"
                onChange={FileUpload}
                accept=".md"
                id="file-upload-edit"
                style={{ display: "none" }}
            />
            <label htmlFor="file-upload-edit" className="uploadButtonLabelEdit">
                Importer
            </label>
        </div>    
    );
};

// Export du bouton
export default UploadButtonEdit;
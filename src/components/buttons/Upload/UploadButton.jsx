import React from "react";
import { useDispatch } from "react-redux";
import { addFileAction } from "../../../states/slices/fileSlices";

// Bouton d'upload
const UploadButton = ( { onFileUpload }) => {
    const dispatch = useDispatch();
    const FileUpload = (e) => { // Fonction pour gérer l'upload de fichier
        const file = e.target.files[0]; // Récupère le fichier (en l'occurence le premier fichier)
        if (file) {
            const reader = new FileReader(); // Crée un objet FileReader
            reader.onload = (e) => { // Quand le fichier est chargé
                const content = e.target.result; // Récupère le contenu du fichier
                dispatch(addFileAction({ fileName: file.name, content: content })); // Dispatch l'action pour ajouter le fichier
            }
            reader.readAsText(file); // Lit le contenu du fichier
        }
    };

    return (
        <div className="uploadButtonContainer">
            <input
                type="file"
                onChange={FileUpload}
                accept=".md"
                id="file-upload"
                style={{ display: "none" }}
            />
            <label htmlFor="file-upload" className="uploadButtonLabel">
                Importer
            </label>
        </div>    
    );
};

// Export du bouton
export default UploadButton;
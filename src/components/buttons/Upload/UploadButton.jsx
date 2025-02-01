import React from "react";
import { addFile } from "../../../controllers/filecontroller";

// Bouton d'upload
const UploadButton = ({ setFiles }) => {
    const FileUpload = (e) => { // Fonction de récupération du fichier
        const file = e.target.files[0]; // Récupération du fichier, Index 0 car 1 seul fichier

        if (file) { // Si il existe un fichier
            const fileReader = new FileReader(); // Création d'une instance du fichier
            fileReader.onload = (event) => { // Création d'une fonction de lecteur du contenu du fichier
                const fileText = event.target.result; // Récupération du contenu du fichier
                setFiles(fileText); // Mise à jour du contenu du fichier
                
                addFile(file.name, fileText); // Ajout du fichier à la session storage
            };
            fileReader.readAsText(file); // Lecture du contenu du fichier
        };
    };
    // Retourne un input type file 
    return (
            <input type="file" id="upload-cta" accept=".md" onChange={FileUpload} />
    );
};

// Export du bouton
export default UploadButton;
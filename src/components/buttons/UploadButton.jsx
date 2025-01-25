import React from "react";

// Bouton d'upload
const UploadButton = ({ setContent }) => {
    const FileUpload = (e) => { // Fonction de récupération du fichier
        const file = e.target.files[0]; // Récupération du fichier

        if (file) { // Si il existe un fichier
            const FileReader = new FileReader(); // Création d'un nouveau fichier
            FileReader.onload = (loadEvent) => { // Création d'une fonction de lecteur du contenu du fichier
                const FileText = loadEvent.target.result; // Récupération du contenu du fichier
                setContent(FileText); // Mise à jour du contenu du fichier
            };
        };
    };
    // Retourne un input type file 
    return (
        <div>
            <label htmlFor="upload cta">Import</label>
            <input type="file" id="upload cta" onChange={FileUpload} />
        </div>
    );
};

// Export du bouton
export default UploadButton;

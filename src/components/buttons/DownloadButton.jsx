import React from "react";

// Bouton de téléchargement
const DownloadButton = ({ content }) => { // Prend en paramètre le contenu du fichier
    const DownloadFile = (e) => { // Fonction de téléchargement du fichier
        const fileBlob = new Blob([content], { type: "text/markdown" }); // Création d'un blob du fichier
        const fileUrl = URL.createObjectURL(fileBlob); // Création d'une URL temporaire du fichier
        const fileLink = document.createElement('a'); // Récupération du lien du fichier
        fileLink.href = fileUrl; // Mise à jour du lien du fichier
        fileLink.download = "file.md"; // Nom du fichier à télécharger
        document.body.appendChild(fileLink); // Ajout du lien dans le body du document
        fileLink.click(); // Clic sur le lien
    };
    // Retourne un bouton de téléchargement
    return (
        <button onClick={DownloadFile}>Download</button>
    );
};

// Export du bouton
export default DownloadButton;
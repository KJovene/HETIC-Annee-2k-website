import React from "react";

// Bouton de téléchargement
const DownloadButton = ({ content }) => { // Prend en paramètre le contenu du fichier
    const DownloadFile = () => { // Fonction de téléchargement du fichier
            const fileBlob = new Blob([content], { type: "text/markdown" }); // Création d'un blob du fichier
            const fileUrl = URL.createObjectURL(fileBlob); // Création d'une URL temporaire du fichier
            const fileLink = document.createElement('a'); // Création d'un élément <a> temporaire
            fileLink.href = fileUrl; // Mise à jour du lien du fichier
            fileLink.download = "file.md"; // Nom du fichier à télécharger
            document.body.appendChild(fileLink); // Ajout de l'élément <a> au DOM
            fileLink.click(); // Simuler un clic sur l'élément <a>
            document.body.removeChild(fileLink); // Suppression de l'élément <a> du DOM
    }

    // Retourne un bouton de téléchargement
    return (
        <button onClick={DownloadFile}>Download</button>
    );
};

// Export du bouton
export default DownloadButton;
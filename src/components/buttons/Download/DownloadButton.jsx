import React from "react";
import { getAllFiles } from "../../../controllers/filecontroller";
import { getFile } from "../../../controllers/filecontroller";

// Bouton de téléchargement
const DownloadButton = ({ fileName , content }) => { // Prend en paramètre le contenu du fichier
    const DownloadFile = () => { // Fonction de téléchargement du fichier
        const file = getFile(fileName); // Récupération du fichier par son nom
        if (file) {
            const fileBlob = new Blob([file.Content], { type: "text/markdown" }); // Création d'un blob du fichier
            const fileUrl = URL.createObjectURL(fileBlob); // Création d'une URL temporaire du fichier
            const fileLink = document.createElement('a'); // Création d'un élément <a> temporaire
            fileLink.href = fileUrl; // Mise à jour du lien du fichier
            fileLink.download = `${file.Title}.md`; // Nom du fichier à télécharger
            document.body.appendChild(fileLink); // Ajout de l'élément <a> au DOM
            fileLink.click(); // Simuler un clic sur l'élément <a>
            document.body.removeChild(fileLink); // Suppression de l'élément <a> du DOM
        } else {
            console.error("File not found in sessionStorage.");
        }

    };
    // Retourne un bouton de téléchargement
    return (
        <button onClick={DownloadFile}>Download</button>
    );
};
// Export du bouton
export default DownloadButton;
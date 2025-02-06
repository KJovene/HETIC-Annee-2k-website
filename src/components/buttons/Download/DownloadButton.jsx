import React from "react";
import { getFile } from "../../../controllers/filecontroller";

// Ceci est le composant pour le bouton de téléchargement
const DownloadButton = ({ fileName }) => {
    console.log("Received fileName in DownloadButton:", fileName);

    const downloadFile = () => {
        console.log("Attempting to download file:", fileName); 
        const file = getFile(fileName); // Récupère le fichier à partir du localStorage
        if (!file) {
            console.error("File not found in localStorage.");
            return;
        }
        const element = document.createElement("a"); // Je crée un élément <a> pour le téléchargement
        const fileBlob = new Blob([file.Content], { type: "text/plain" }); // Je crée un Blob à partir du contenu du fichier
        element.href = URL.createObjectURL(fileBlob); // Je crée une URL à partir du Blob
        element.download = file.Title; // Je définis le nom du fichier
        // Je simule un clic sur l'élément <a> pour déclencher le téléchargement
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element); // Je supprime l'élément <a> après le téléchargement
    };

    return (
        <button onClick={downloadFile}>Download</button>
    );
};

export default DownloadButton;
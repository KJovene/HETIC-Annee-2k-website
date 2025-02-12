import React from "react";
import { getFile } from "../../../controllers/filecontroller";

// Ceci est le composant pour le bouton de téléchargement
const DownloadButton = ({ fileName }) => {
    const downloadFile = () => {
        const file = getFile(fileName); // Récupère le fichier à partir du localStorage
        if (!file) {
            return;
        }
        const element = document.createElement("a"); // Je crée un élément <a> pour le téléchargement
        const fileBlob = new Blob([file.Content], { type: "text/plain" }); // Je crée un Blob à partir du contenu du fichier
        element.href = URL.createObjectURL(fileBlob); // Je crée une URL à partir du Blob
        // Je définis l'attribut download pour forcer le téléchargement en markdown
        element.download = `${file.Title}.md`;
        // Je simule un clic sur l'élément <a> pour déclencher le téléchargement
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element); // Je supprime l'élément <a> après le téléchargement
    };

    return (
        <button onClick={downloadFile}>Télécharger</button>
    );
};

export default DownloadButton;
import React from "react";
import { useState } from "react";
import { marked } from "marked";
import DownloadButton from "../components/buttons/DownloadButton";

// Téléchargement de fichier
const DownloadController = () => { 
    let filetodownload = sessionStorage.getItem("files"); 
    filetodownload = JSON.parse(filetodownload);
    filetodownload = filetodownload[filetodownload.length - 1];
    const [content, setContent] = useState(filetodownload);
    if (!filetodownload) {
        sessionStorage.setItem("files", JSON.stringify([{"Title": "Exemple de fichier", "Content": "Ce fichier est un exemple de fichier markdown."}]));
    }


    return (
        <div>
            <DownloadButton content={content} />
        </div>
    );
};

export default DownloadController;
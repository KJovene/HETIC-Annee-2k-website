import React from "react";
import { useState } from "react";
import { marked } from "marked";
import UploadButton from "../components/buttons/UploadButton";

// Ajout de fichier
const Addfile = () => {

    let filetostore = sessionStorage.getItem("files"); // Récupération des fichiers stockés
    if (!filetostore) {
        sessionStorage.setItem("files", JSON.stringify([{"Title": "Exemple de fichier", "Content": "Ce fichier est un exemple de fichier markdown."}]));
        filetostore = sessionStorage.getItem("files");
    }
    filetostore = JSON.parse(filetostore);
    filetostore = filetostore[filetostore.length - 1].Content;

    const [content, setContent] = useState(filetostore);

    const renderMarkdown = (content) => {
        const htmlContent = marked(content); // Conversion du contenu en HTML
        return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />; // Retourne le contenu HTML
    };


    return (
        <div>
            <UploadButton setContent={setContent} />
            {renderMarkdown(filetostore)}
        </div>
    );
};

export default Addfile;
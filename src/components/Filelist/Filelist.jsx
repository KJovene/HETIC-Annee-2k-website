import React from "react";
import DownloadButton from "../buttons/Download/DownloadButton";
import DeleteButton from "../buttons/Delete/DeleteButton";

// Ceci est le composant pour afficher la liste des fichiers
const FileList = ({ files }) => {
    console.log("Files passed to FileList:", files);

    if (!Array.isArray(files)) { // Si files n'est pas un tableau, on retourne null
        return null;
    }
    return (
        <div>
            <h1>File List</h1>
            <ul>
                {files.map((file, index) => ( 
                    <li key={index}>
                        {file.Title}
                        <DownloadButton fileName={file.Title} />
                        <DeleteButton fileName={file.Title}/>  
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FileList;
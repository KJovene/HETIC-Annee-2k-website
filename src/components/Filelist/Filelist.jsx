import React from "react";
import DownloadButton from "../buttons/Download/DownloadButton";
import DeleteButton from "../buttons/Delete/DeleteButton";
import EditButton from "../buttons/Edit/EditButton";
import UploadButton from "../buttons/Upload/UploadButton";
import NewFileButton from "../buttons/NewFileButton/NewFileButton";
import "./FileList-module.css";

// Ceci est le composant pour afficher la liste des fichiers
const FileList = ({ files }) => {
    if (!Array.isArray(files)) { // Si files n'est pas un tableau, on retourne null
        return null;
    }
    return (
        <div className="list-container">
            <div className="header-list">
                <h2>Markdown</h2>
            </div>
            <div className="file-actions">
                <h3>Mes fichiers</h3>
                <div className="btn">
                    <NewFileButton />
                    <UploadButton />
                </div>
            </div>
            <ul className="file-list">
                {files.map((file, index) => (
                    <li key={index}>
                        <span>{file.Title}</span>
                        <span>{file.Date}</span>
                        <span className="individual-file-actions">
                            <EditButton fileName={file.Title} />  
                            <DownloadButton fileName={file.Title} />
                            <DeleteButton fileName={file.Title} />
                        </span> 
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FileList;
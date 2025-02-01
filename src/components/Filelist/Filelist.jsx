import React from "react";
import DownloadButton from "../buttons/Download/DownloadButton";
import DeleteButton from "../buttons/Delete/DeleteButton";

const Filelist = ({ files, setFiles }) => {
    if (!Array.isArray(files)) {
        return null;
    }
    return (
        <div>
            <h1>File List</h1>
            <ul>
                {files.map((file, index) => {
                    return (
                        <li key={index}>
                            {file.Title}
                            <DownloadButton fileName={file.Content} />
                            <DeleteButton fileName={file.Title} setFiles={setFiles} />  
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Filelist;
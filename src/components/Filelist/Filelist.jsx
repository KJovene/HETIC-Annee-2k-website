import React from "react";
import DownloadButton from "../buttons/Download/DownloadButton";

const Filelist = ({ files }) => {
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
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Filelist;
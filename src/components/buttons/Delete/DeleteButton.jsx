import React from "react";
import { deleteFile, getAllFiles } from "../../../controllers/filecontroller";

const DeleteButton = ({ fileName, setFiles }) => {
    const DeleteFile = () => {
        deleteFile(fileName);
        setFiles(getAllFiles());
    };

    return (
        <button onClick={DeleteFile}>Delete</button>
    );
};

export default DeleteButton;

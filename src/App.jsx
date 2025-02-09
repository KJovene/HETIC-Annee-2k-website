import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UploadButton from "./components/buttons/Upload/UploadButton";

import FileList from "./components/Filelist/Filelist.jsx";
import { getAllFiles } from "./controllers/filecontroller.js";
import { setFiles } from "./states/slices/fileSlices.js";

// Ceci est le composant principal de l'application
const App = () => {
    const dispatch = useDispatch();
    const files = useSelector(state => state.file); // J'utilise useSelector pour accéder à l'état des fichiers dans Redux

    // J'utilise useEffect pour déclencher l'action fetchFiles lorsque le composant est monté
    useEffect(() => {
        dispatch(setFiles(getAllFiles()));
    }, []);

    // J'utilise useEffect pour surveiller les changements dans l'état des fichiers
    useEffect(() => {
    }, [files]);

    return (
        <div>
            <h1>File Upload</h1>
            <UploadButton />
            <FileList files={files} />
        </div>
    );
}

export default App;
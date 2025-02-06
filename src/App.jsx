import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UploadButton from "./components/buttons/Upload/UploadButton";
import { fetchFiles } from "./slices/fileSlices";
import FileList from "./components/Filelist/Filelist.jsx";

// Ceci est le composant principal de l'application
const App = () => {
    const dispatch = useDispatch();
    const files = useSelector(state => state.file); // J'utilise useSelector pour accéder à l'état des fichiers dans Redux
    console.log("Files in App component:", files);

    // J'utilise useEffect pour déclencher l'action fetchFiles lorsque le composant est monté
    useEffect(() => {
        dispatch(fetchFiles());
    }, [dispatch]);

    // J'utilise useEffect pour surveiller les changements dans l'état des fichiers
    useEffect(() => {
        console.log("Files in App component after fetch:", files); 
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
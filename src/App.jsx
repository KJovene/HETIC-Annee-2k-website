import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { getAllFiles } from "./controllers/filecontroller.js";
import { setFiles } from "./states/slices/fileSlices.js";
import FileList from "./components/filelist/FileList";
import EditWindow from "./components/Editwindow/EditWindow";

// Ceci est le composant principal de l'application
const App = () => {
    const dispatch = useDispatch();
    const files = useSelector(state => state.file); // J'utilise useSelector pour accéder à l'état des fichiers dans Redux

    // J'utilise useEffect pour déclencher l'action fetchFiles lorsque le composant est monté
    useEffect(() => {
        dispatch(setFiles(getAllFiles()));
    }, [dispatch]);

    // J'utilise useEffect pour surveiller les changements dans l'état des fichiers
    useEffect(() => {
    }, [files]);

    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<FileList files={files} />} />
                    <Route path="/edit/:fileName" element={<EditWindow />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
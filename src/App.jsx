// Importation des composants
import UploadButton from "./components/buttons/Upload/UploadButton";
import React from "react";
import { useState , useEffect } from "react";
import { getAllFiles } from "./controllers/filecontroller";
import FileList from "./components/Filelist/Filelist";
// Appel du composant bouton d'upload
const App = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
      setFiles(getAllFiles());
  }, []);

  return (
      <div>
          <UploadButton setFiles={setFiles} />
          <FileList files={files} setFiles={setFiles} />
      </div>
  );
};



export default App;
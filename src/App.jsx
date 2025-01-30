// Importation des composants
import DownloadButton from "./components/buttons/DownloadButton";
import UploadButton from "./components/buttons/UploadButton";
import React from "react";
import { useState , useEffect } from "react";
import { marked } from "marked";
import { getAllFiles } from "./controllers/filecontroller";

// Appel du composant bouton d'upload
const App = () => {
  const [content, setContent] = useState(""); // Création d'un état de base pour le contenu du fichier
  useEffect(
    () => {
      const files = getAllFiles();
      if (files.length > 0) {
        const lastFile = files[files.length - 1];
        setContent(lastFile.Content);
    }
  }, []);
  return (
    <div>
      <UploadButton setContent={setContent} />
      <div>{content}</div>
      <DownloadButton content={content} />
    </div>
  );

};



export default App;
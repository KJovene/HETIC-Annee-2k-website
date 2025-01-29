// Importation des composants
import DownloadButton from "./components/buttons/DownloadButton";
import UploadButton from "./components/buttons/UploadButton";
import Addfile from "./controllers/Addfile";
import DownloadController from "./controllers/Downloadfile";
import React from "react";
import { useState } from "react";
import { marked } from "marked";

// Appel du composant bouton d'upload
const App = () => {
  const [content, setContent] = useState(""); // Création d'un état de base pour le contenu du fichier
  return (
    <div>
      <Addfile />
      <DownloadController />
    </div>
  );

};



export default App;
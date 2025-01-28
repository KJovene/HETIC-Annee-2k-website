import UploadButton from "./components/buttons/UploadButton";
import DownloadButton from "./components/buttons/DownloadButton";
import React from "react";
import { useState } from "react";


// Appel du composant bouton d'upload
const App = () => {
  const [content, setContent] = useState("Nabil The Greatest"); // Création d'un état de base pour le contenu du fichier 
  // content est le contenu du fichier et setContent est le paramètre de mise à jour du contenu du fichier
  
  return (
    <div>
      <UploadButton setContent={setContent} />
      <DownloadButton content={content} />
      <div>{content}</div>
    </div>
  );

};



export default App;
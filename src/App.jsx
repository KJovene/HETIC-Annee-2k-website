import UploadButton from "./components/buttons/UploadButton";
import DownloadButton from "./components/buttons/DownloadButton";
import React from "react";
import { useState } from "react";


// Appel du composant bouton d'upload
const App = () => {
  const [content, setContent] = useState(""); // Création d'un état de base pour le contenu du fichier 
  // content est le contenu du fichier et setContent est le paramètre de mise à jour du contenu du fichier
  const textContent = "Nabil The Greatest"; // Contenu du fichier texte
  
  return (
    <div>
      <UploadButton setContent={setContent} />
      <DownloadButton content={textContent} />
      <div>{textContent}</div>
    </div>
  );

};



export default App;
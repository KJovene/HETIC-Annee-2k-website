import UploadButton from "./components/buttons/UploadButton";
import React from "react";
import { useState } from "react";


// Appel du composant bouton d'upload
const App = () => {
  const [content, setContent] = useState(""); // Création d'un état pour le contenu du fichier
  
  return (
    <div>
      <UploadButton setContent={setContent} /> {/* Appel du composant bouton d'upload */}
      <div>{content}</div> {/* Affichage du contenu du fichier */}
    </div>
  );

};



export default App;
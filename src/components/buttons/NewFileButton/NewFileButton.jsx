import React from "react";
import { useNavigate } from "react-router-dom";

// Bouton pour créer un nouveau fichier
const NewFileButton = () => {
    const navigate = useNavigate();

    const handleNewFile = () => {
        navigate('/edit/new'); // Je redirige vers la page d'édition pour créer un nouveau fichier
    };

    return (
        <div className="newFileButtonContainer">
            <input
                type="text"
                onClick={handleNewFile}
                id='new-file'
                style={{ display: "none" }}
            />
            <label htmlFor="new-file" className="newFileButtonLabel">
               Créer un nouveau fichier
            </label>
        </div>  
    );
};

export default NewFileButton;
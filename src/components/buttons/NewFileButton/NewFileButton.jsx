import React from "react";
import { useNavigate } from "react-router-dom";
import DefaultButton from "../defaultButton";

// Bouton pour créer un nouveau fichier
const NewFileButton = () => {
    const navigate = useNavigate();

    const handleNewFile = () => {
        navigate('/edit/new'); // Je redirige vers la page d'édition pour créer un nouveau fichier
    };

    return (
        <DefaultButton onClick={handleNewFile}>Create</DefaultButton>
    );
};

export default NewFileButton;
import React from "react";
import { useNavigate } from "react-router-dom";

// Ceci est le composant pour le bouton d'édition
const EditButton = ({ fileName }) => {
    const navigate = useNavigate(); // J'utilise useNavigate pour la navigation entre les pages

    const openEditPage = () => {
        navigate(`/edit/${fileName}`); // Redirige vers la page d'édition
    };

    return (
        <button onClick={openEditPage}>Modifier</button>
    );
};

export default EditButton;
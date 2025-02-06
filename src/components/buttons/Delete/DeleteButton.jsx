import React from "react";
import { useDispatch } from "react-redux";
import { deleteFileAction } from "../../../slices/fileSlices"; // Assurez-vous que l'importation est correcte

// Ceci est le composant pour le bouton de suppression
const DeleteButton = ({ fileName }) => {
    const dispatch = useDispatch(); // J'utilise le hook useDispatch pour envoyer une action
    const deleteFile = () => {
        dispatch(deleteFileAction({ fileName })); // J'utilise l'action deleteFileAction pour supprimer un fichier
    };
    return (
        <button onClick={deleteFile}>Delete</button>
    );
};

export default DeleteButton;
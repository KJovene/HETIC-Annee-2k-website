import React from "react";
import { useDispatch } from "react-redux";
import { deleteFileAction } from "../../../states/slices/fileSlices";
import DefaultButton from "../defaultButton";

// Ceci est le composant pour le bouton de suppression
const DeleteButton = ({ fileName }) => {
    const dispatch = useDispatch(); // J'utilise le hook useDispatch pour envoyer une action
    const deleteFile = () => {
        dispatch(deleteFileAction({ fileName })); // J'utilise l'action deleteFileAction pour supprimer un fichier
    };
    return (
        <DefaultButton onClick={deleteFile}>Supprimer</DefaultButton>
    );
};

export default DeleteButton;
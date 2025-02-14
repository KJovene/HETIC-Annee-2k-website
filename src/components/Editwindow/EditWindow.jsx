import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { marked } from 'marked';
import { getFile } from '../../controllers/filecontroller'; 
import { editFileAction, addFileAction } from '../../states/slices/fileSlices';
import UploadButtonEdit from '../buttons/UploadEdit/UploadButtonEdit';
import './EditWindow-module.css';

// Ceci est le composant pour la page d'édition
const EditWindow = () => {
    const { fileName } = useParams(); // J'utilise useParams pour obtenir le nom du fichier à éditer depuis l'URL
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [newFileName, setNewFileName] = useState(fileName === "new" ? "" : fileName); // J'utilise un état pour le nouveau nom de fichier
    const [newContent, setNewContent] = useState(""); // J'utilise un état pour le nouveau contenu du fichier
    const [preview, setPreview] = useState(""); // J'utilise un état pour afficher un aperçu du contenu du fichier

    // J'utilise useEffect pour charger le contenu du fichier à éditer
    useEffect(() => {
        if (fileName !== "new") {
            const file = getFile(fileName);
            if (file) {
                setNewFileName(file.Title);
                setNewContent(file.Content || ""); // Assurez-vous que newContent n'est jamais undefined ou null
            }
        }
    }, [fileName]);

    // J'utilise useEffect pour mettre à jour l'aperçu du contenu du fichier en temps réel
    useEffect(() => {
        setPreview(marked(newContent)); // J'utilise la fonction marked pour convertir le contenu en markdown
    }, [newContent]);

    // Fonction pour ajouter ou éditer un fichier dans le localStorage
    const handleSave = () => { 
      if (fileName === "new") { // Si le nom du fichier est "new"
          dispatch(addFileAction({ fileName: newFileName, content: newContent })); // Dispatch l'action pour ajouter le fichier
      } else {
          dispatch(editFileAction({ fileName, newFileName, newContent })); // Dispatch l'action pour éditer le fichier
      };
      navigate('/'); // Je redirige vers la page d'accueil après la sauvegarde
  };

    // Fonction pour gérer l'upload de fichier
    const handleFileUpload = (fileName, content) => { 
        setNewFileName(fileName);
        setNewContent(content);
    }

    return (
        <div className="container">
          <div className="buttonContainer">
            <UploadButtonEdit onFileUpload={handleFileUpload} />
            <button className="saveButton" onClick={handleSave}>Sauvegarder</button>
            <button className="cancelButton" onClick={() => navigate('/')}>Cancel</button>
          </div>
      
          <div className="editorContainer">
            <div className="markdownSection">
              <div className="sectionTitle">Markdown</div>
              <input
                type="text"
                className="input"
                value={newFileName}
                onChange={(e) => setNewFileName(e.target.value)}
                placeholder='Nom du fichier'
              />
              <textarea
                className="textarea"
                value={newContent}
                onChange={(e) => setNewContent(e.target.value)}
                placeholder='Contenu du fichier'
              />
            </div>
      
            {/* Flèche */}
            <div className="arrow">➡️</div>
      
            {/* Zone Prévisualisation */}
            <div className="previewSection">
              <div className="sectionTitle">Prévisualisation</div>
              <div
                className="previewContent"
                dangerouslySetInnerHTML={{ __html: preview }}
              />
            </div>
          </div>
        </div>
    );
};

export default EditWindow;
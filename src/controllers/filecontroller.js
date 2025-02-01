// Fonction pour récupérer un fichier par son nom
export const getFile = (fileName) => {
    const storedFiles = sessionStorage.getItem("files");
    if (!storedFiles) {
        console.error("No files found in sessionStorage.");
        return null;
    }
    const files = JSON.parse(storedFiles);
    console.log("Files in sessionStorage:", files);
    const file = files.find(file => file.Title === fileName);
    if (!file) {
        console.error(`File with name ${fileName} not found.`);
    }
    return file;
};

// Fonction pour récupérer tous les fichiers
export const getAllFiles = () => { 
    const storedFiles = sessionStorage.getItem("files"); // Récupération des fichiers stockés
    const files = JSON.parse(storedFiles); // Conversion des fichiers en JSON
    if (files === null) { // Si il n'y a pas de fichiers stockés, retrourne un tableau vide
        return [];
    }
    return files; // Retourne tous les fichiers
};

// Fonction pour modifier le contenu d'un fichier existant
export const editFile = (fileName, newContent) => { // Paramètres = Nom du fichier, Nouveau contenu
    const storedFiles = sessionStorage.getItem("files"); // Récupération des fichiers stockés
    const files = JSON.parse(storedFiles); // Conversion des fichiers en JSON
    const file = files.find(file => file.Title === fileName); // Récupération du fichier correspondant au nom
    if (file) { // Si le fichier existe
        file.Content = newContent; // Mise à jour du contenu
        file.Title = fileName; // Mise à jour du nom
        sessionStorage.setItem("files", JSON.stringify(files)); // Mise à jour des fichiers stockés
        return file; // Retourne le fichier
    }
    return null; // Retourne null si le fichier n'existe pas
};

// Fonction pour ajouter un nouveau fichier
export const addFile = (fileName, content) => { // Paramètres = Nom du fichier, Contenu
    const storedFiles = sessionStorage.getItem("files"); // Récupération des fichiers stockés
    let files = []; // Création d'un tableau vide
    if (storedFiles) { // Si il y a des fichiers stockés, convertit ces derniers en JSON
        files = JSON.parse(storedFiles); 
    }
    let newFileName = fileName; // Création d'une variable pour le nom du fichier
    let counter = 1; // Création d'un compteur pour les doublons
    while (files.some(file => file.Title === newFileName)) { // Tant que le nom du fichier existe déjà
        newFileName = `${fileName} (${counter})`; // Ajout d'un numéro pour le différencier
        counter++;
    }
    const file = { Title: newFileName, Content: content }; // Création d'un objet fichier
    files.push(file); // Ajout du fichier au tableau
    sessionStorage.setItem("files", JSON.stringify(files)); // Mise à jour des fichiers stockés
    return file; // Retourne le fichier
};

// Fonction pour supprimer un fichier
export const deleteFile = (fileName) => { // Paramètre = Nom du fichier
    const storedFiles = sessionStorage.getItem("files"); // Récupération des fichiers stockés
    const files = JSON.parse(storedFiles); // Conversion des fichiers en JSON
    const newFiles = files.filter(file => file.Title !== fileName); // Création d'un nouveau tableau sans le fichier à supprimer
    sessionStorage.setItem("files", JSON.stringify(newFiles)); // Mise à jour des fichiers stockés
    return newFiles; // Retourne le nouveau tableau
};

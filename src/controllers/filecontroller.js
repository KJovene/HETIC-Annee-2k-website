// Fonction pour récupérer un fichier par son nom
export const getFile = (fileName) => { 
    const storedFiles = localStorage.getItem("files"); // Je récupère les fichiers stockés dans localStorage dans la clé "files"
    if (!storedFiles) { // Si aucun fichier n'est trouvé, je renvoie une erreur
        return null;
    }
    const files = JSON.parse(storedFiles); // Je parse les fichiers stockés afinb de les manipuler
    const file = files.find(file => file.Title === fileName); // Je cherche le fichier avec le nom donné
    if (!file) { // Si aucun fichier n'est trouvé alors je renvoie une erreur
        console.error(`File with name ${fileName} not found.`);
    }
    return file;
};

// Fonction pour récupérer tous les fichiers
export const getAllFiles = () => { 
    const storedFiles = localStorage.getItem("files"); 
    if (!storedFiles) { // Si aucun fichier n'est trouvé, je renvoie un tableau vide
        return [];
    }
    try { // J'essaie de parser les fichiers stockés
        const files = JSON.parse(storedFiles);
        return Array.isArray(files) ? files : []; // Si les fichiers sont bien un tableau, je les renvoie, sinon je renvoie un tableau vide
    } catch (error) { // Si une erreur survient, je renvoie un tableau vide
        console.error("Error parsing JSON from localStorage:", error);
        return [];
    }
};

// Fonction pour ajouter un nouveau fichier
export const addFile = (fileName, content) => { 
    const storedFiles = localStorage.getItem("files");
    let files = []; // Je crée un tableau vide pour stocker les fichiers
    if (storedFiles) { // Si des fichiers sont déjà stockés, je les récupère et je les parse
        files = JSON.parse(storedFiles);
    }
    let newFileName = fileName; // Je crée une variable pour le nouveau nom de fichier
    let counter = 1; // Je crée un compteur pour ajouter un numéro au nom du fichier si un fichier avec le même nom existe déjà
    while (files.some(file => file.Title === newFileName)) {
        newFileName = `${fileName} (${counter})`;
        counter++;
    }
    const file = { Title: newFileName, Content: content, Date: new Date().toLocaleDateString() }; // Utilisez toLocaleDateString() pour obtenir une chaîne de caractères
    files.push(file); // J'ajoute le nouveau fichier au tableau de fichiers
    localStorage.setItem("files", JSON.stringify(files)); // Je stocke les fichiers dans localStorage
    return file;
};

// Fonction pour supprimer un fichier
export const deleteFile = (fileName) => {
    const storedFiles = localStorage.getItem("files");
    if (storedFiles) {
        let files = JSON.parse(storedFiles);
        files = files.filter(file => file.Title !== fileName); // Je filtre les fichiers pour supprimer celui avec le nom donné
        localStorage.setItem("files", JSON.stringify(files)); // Je stocke les fichiers mis à jour dans localStorage
        return files;
    }
    return [];
};

// Fonction pour éditer un fichier
export const editFile = (fileName, newFileName, newContent) => {
    const storedFiles = localStorage.getItem("files");
    if (storedFiles) {
        let files = JSON.parse(storedFiles);
        files = files.map(file =>
            file.Title === fileName ? { Title: newFileName, Content: newContent } : file
        );
        localStorage.setItem("files", JSON.stringify(files));
        return files;
    }
    return [];
};
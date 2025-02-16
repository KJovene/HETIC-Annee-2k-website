export const getFile = (fileName) => { 
    const storedFiles = localStorage.getItem("files");
    if (!storedFiles) {
        return null;
    }
    const files = JSON.parse(storedFiles);
    const file = files.find(file => file.title === fileName);
    if (!file) {
        console.error(`File with name ${fileName} not found.`);
    }
    return file;
};


export const getAllFiles = () => { 
    const storedFiles = localStorage.getItem("files"); 
    if (!storedFiles) {
        return [];
    }
    try {
        const files = JSON.parse(storedFiles);
        return Array.isArray(files) ? files : [];
    } catch (error) {
        console.error("Error parsing JSON from localStorage:", error);
        return [];
    }
};


export const addFile = (fileName, content) => { 
    const storedFiles = localStorage.getItem("files");
    let files = [];
    if (storedFiles) {
        files = JSON.parse(storedFiles);
    }
    let newFileName = fileName;
    let counter = 1;
    while (files.some(file => file.title === newFileName)) {
        newFileName = `${fileName} (${counter})`;
        counter++;
    }
    const file = { title: newFileName, Content: content, Date: new Date().toLocaleDateString() };
    files.push(file);
    localStorage.setItem("files", JSON.stringify(files));
    return file;
};


export const deleteFile = (fileName) => {
    const storedFiles = localStorage.getItem("files");
    if (storedFiles) {
        let files = JSON.parse(storedFiles);
        files = files.filter(file => file.title !== fileName);
        localStorage.setItem("files", JSON.stringify(files));
        return files;
    }
    return [];
};


export const editFile = (fileName, newFileName, newContent) => {
    const storedFiles = localStorage.getItem("files");
    if (storedFiles) {
        let files = JSON.parse(storedFiles);
        files = files.map(file =>
            file.title === fileName ? { title: newFileName, Content: newContent } : file
        );
        localStorage.setItem("files", JSON.stringify(files));
        return files;
    }
    return [];
};
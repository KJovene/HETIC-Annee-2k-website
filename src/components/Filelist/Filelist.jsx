import { useEffect, useState } from "react";
import DownloadButton from "../buttons/Download/DownloadButton";
import DeleteButton from "../buttons/Delete/DeleteButton";
import EditButton from "../buttons/Edit/EditButton";
import UploadButton from "../buttons/Upload/UploadButton";
import NewFileButton from "../buttons/NewFileButton/NewFileButton";
import { getAllFiles } from "../../controllers/filecontroller";
import { useSelector } from "react-redux";
import Box from "../boxes/Box";

const FileList = () => {
    const [files, setFiles] = useState([]);
    const filesDispatch = useSelector(state => state.file);

    useEffect(()=> {setFiles(getAllFiles())}, [filesDispatch])

    return (
        <Box title={"Markdown"} className="w-1/2">
            <div className="flex items-center gap-2">
                <h3>My files</h3>
                <div className="flex gap-3">
                    <NewFileButton />
                    <UploadButton />
                </div>
            </div>
            <ul className="list-none p-0 max-h-full">
                {files.map((file, index) => (
                    <li key={index} className="flex justify-between items-center p-2 border-b border-gray-300">
                        <span className="w-full">{file.title}</span>
                        <span className="w-full ml-2 text-sm text-gray-600">{file.Date}</span>
                        <span className="flex w-full gap-2">
                            <EditButton fileName={file.title} />  
                            <DownloadButton fileName={file.title} />
                            <DeleteButton fileName={file.title} />
                        </span> 
                    </li>
                ))}
            </ul>
        </Box>
    );
}

export default FileList;

import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

import { marked } from 'marked';

import { getFile } from '../controllers/filecontroller'; 
import { editFileAction, addFileAction } from '../states/slices/fileSlices';

import UploadButton from '../components/buttons/Upload/UploadButton';
import DefaultButton from '../components/buttons/defaultButton';

marked.setOptions({
  breaks: true,
});

const Editpage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { fileName } = useParams();
  const [newFileName, setNewFileName] = useState(fileName === "new" ? "" : fileName);
  const [newContent, setNewContent] = useState("");
  const [preview, setPreview] = useState("");

  useEffect(() => {
    if (fileName !== "new") {
      const file = getFile(fileName);
      if (file) {
        setNewFileName(file.title);
        setNewContent(file.Content || "");
      }
    } 
  }, [fileName]);

  useEffect(() => {
    setPreview(marked(newContent));
  }, [newContent]);

  const handleSave = () => {
    if (fileName === "new") {
      dispatch(addFileAction({ fileName: newFileName ? newFileName : "file", content: newContent }));
    } else {
      dispatch(editFileAction({ fileName, newFileName: newFileName ? newFileName : "file", newContent }));
    }
    navigate('/');
  };

  const handleFileUpload = (fileName, content) => {
    setNewFileName(fileName);
    setNewContent(content);
  };

  return (
    <div className="flex flex-col p-5 font-inter">
      <div className="flex justify-center gap-2.5 py-5">
        <UploadButton onFileUpload={handleFileUpload} />
        <DefaultButton onClick={handleSave}>Save</DefaultButton>
        <DefaultButton onClick={() => navigate('/')}>Cancel</DefaultButton>
      </div>

      <div className="flex w-full  min-h-[50vh] h-full gap-5">
        <div className="flex flex-col w-full border-2 border-solid border-gray-600">
          <span className="flex justify-center text-2xl p-2.5 bg-gray-600 text-white">
              <h2>
                Markdown
              </h2>
            </span>
          <input
            type="text"
            className="p-5 text-lg border-none bg-gray-300 text-center"
            value={newFileName}
            onChange={(e) => setNewFileName(e.target.value)}
            placeholder='Nom du fichier'
          />
          <textarea
            className="w-full h-full p-2.5 text-lg border-none bg-white resize-none"
            defaultValue={newContent}
            onChange={(e) => {setNewContent(e.target.value)}}
            placeholder='Contenu du fichier'
          />
        </div>

        <div className="self-center text-2xl">➡️</div>

        <div className="flex flex-col w-full border-2 border-solid border-gray-600">
          <span className="flex justify-center text-2xl p-2.5 bg-gray-600 text-white">
            <h2>
              Preview
            </h2>
          </span>
          <div
            className="w-full overflow-y-auto p-2.5"
            dangerouslySetInnerHTML={{ __html: preview }}
          />
        </div>
      </div>
    </div>
  );
};

export default Editpage;
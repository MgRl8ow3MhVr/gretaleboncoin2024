import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import "./MyDropzone.css";

// source https://react-dropzone.js.org/

function MyDropzone(props) {
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      props.loadFiles(acceptedFiles);
      setFiles(
        acceptedFiles.map((file) => {
          return { ...file, preview: URL.createObjectURL(file) };
        })
      );
    },
  });

  return (
    <section className="container">
      <div {...getRootProps({ className: "dropzone" })} className="dropZone">
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
      <aside className="thumbsContainer">
        {files.map((file) => (
          <div className="thumb" key={file.name}>
            <div className="thumbInner">
              <img src={file.preview} className="imgdrop" alt="preview" />
            </div>
          </div>
        ))}
      </aside>
    </section>
  );
}

export default MyDropzone;

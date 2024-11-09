import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

// const MyDropzone = props => {
//   const onDrop = useCallback(acceptedFiles => {
//     console.log(acceptedFiles);
//     props.loadFile(acceptedFiles[0]);
//   }, []);
//   const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

//   return (
//     <div {...getRootProps()}>
//       <input {...getInputProps()} />
//       {isDragActive ? (
//         <p>Drop the files here ...</p>
//       ) : (
//         <p>Drag 'n' drop some files here, or click to select files</p>
//       )}
//     </div>
//   );
// };

const MyDropzone = props => {
  const previewsArray = [];
  const onDrop = useCallback(acceptedFiles => {
    console.log("droped files :", acceptedFiles);
    props.loadFiles(acceptedFiles); // Load all files in the state for future axios uplad

    acceptedFiles.forEach(async file => {
      const reader = new FileReader();
      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = async () => {
        // Do whatever you want with the file contents
        console.log("1file ", file);
        const binaryStr = await reader.result;
        props.loadPreviews(binaryStr);
      };
      await reader.readAsDataURL(file);
    });
  }, []);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div className="dropZone" {...getRootProps()}>
      <input {...getInputProps()} />
      {props.previewsPhotos.map(photo => {
        return <img src={photo} className="imageDropzone" alt="preview"></img>;
      })}

      {/* <img src="" className="imageDropzone" alt="image"></img> */}
      <p>Drag 'n' drop some files here, or click to select files</p>
    </div>
  );
};

export default MyDropzone;

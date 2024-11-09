import React, { useState } from "react";
import axios from "axios";
import MyDropzone from "../components/MyDropzone";

const Upload = props => {
  const { token, apiAddress } = props;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [filesPhoto, setFilesPhoto] = useState([]); //Array of files
  return (
    <div className="publish formpage">
      <form
        onSubmit={async event => {
          event.preventDefault();
          //formadata va permettre de preparer le fichier pour pouvoir l'envoyer

          try {
            const data = new FormData(); // cree une variable data qui est un objet de type FormData
            data.append("title", title); //permet d'inserer title dans data
            data.append("description", description);
            data.append("price", price);
            // data.append("files", filesPhoto); // attention files pour l'API Reacteur moi je nomme Photo
            filesPhoto.map((filePhoto, index) => {
              data.append(`photo${index}`, filePhoto);
            });
            // data.append("photos", filesPhoto[0]); // Inserer le fichier 'file' selectionné par l'utilisateur
            console.log("publish attempt");

            const response = await axios.post(apiAddress + "/publish", data, {
              headers: {
                Authorization: `Bearer ${token}`
              }
            });
            console.log(response.data);
            alert("Well Done !");
          } catch (error) {
            console.log(error.message);
            alert("Error");
          }
        }}
      >
        <h1>Déposer une annonce</h1>
        <hr></hr>
        <h2>Titre de l'annonce*</h2>
        <input
          type="text"
          value={title}
          onChange={event => {
            setTitle(event.target.value);
          }}
        ></input>
        <h2>Texte de l'annonce*</h2>
        <input
          type="text"
          value={description}
          onChange={event => {
            setDescription(event.target.value);
          }}
        ></input>
        <h2>Prix*</h2>
        <input
          type="text"
          value={price}
          onChange={event => {
            setPrice(event.target.value);
          }}
        ></input>
        <h2>Photo*</h2>
        {/* VERSION INPUT */}
        {/* <input
          type="file"
          multiple={true} //permet de secetionner plusieurs fichiers
          // n'a pas de value
          onChange={event => {
            // type file on utilise event target files. Voir ce que Value donne pour tester
            //tableau
            setFilesPhoto(event.target.files);
          }}
        ></input> */}

        {/* ANCIENNE VERSION DE DROPZONE */}
        {/* <MyDropzone
          loadFiles={photos => {
            setFilesPhoto(photos);
          }}
          loadPreviews={photo => {
            let temp = previewsPhotos;
            console.log("temp bfor push", temp);
            temp.push(photo);
            console.log("temp after push", temp);
            setPreviews(temp);
          }}
          previewsPhotos={previewsPhotos}
        ></MyDropzone> */}

        {/* NOUVELLE VERSION DE DROPZONE */}

        <MyDropzone
          loadFiles={photos => {
            setFilesPhoto(photos);
          }}
        ></MyDropzone>

        <input type="submit" value="valider"></input>
      </form>
    </div>
  );
};
export default Upload;

import React, { useState } from "react";
import axios from "axios";
import MyDropzone from "../components/Dropzone/MyDropzone";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import SimpleUpload from "../components/Dropzone/SimpleUpload";

import { apiUrl, store_id } from "../config";

const Upload = ({ token, username }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [filesPhoto, setFilesPhoto] = useState([]); //Array of files
  const navigate = useNavigate();

  return (
    <div className="publish formpage">
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          //formadata va permettre de preparer le fichier pour pouvoir l'envoyer

          try {
            const data = new FormData(); // cree une variable data qui est un objet de type FormData
            data.append("title", title); //permet d'inserer title dans data
            data.append("description", description);
            data.append("price", price);
            data.append("store_id", store_id);
            data.append("creator", username);

            filesPhoto.map((filePhoto) => {
              data.append(`files[]`, filePhoto);
            });

            const response = await axios.post(apiUrl + "/product", data, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            });
            toast(
              "L'objet a bien été mis en ligne. Vous allez être redirigé vers l'accueil"
            );
            // alert(
            //   "L'objet a bien été mis en ligne. Vous allez être redirigé vers l'accueil"
            // );
            navigate("/");
          } catch (error) {
            console.log(error.message);
            alert("Il y a eu une erreur");
          }
        }}
      >
        <h1>Déposer une annonce</h1>
        <hr></hr>
        <h2>Titre de l'annonce*</h2>
        <input
          type="text"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        ></input>
        <h2>Texte de l'annonce*</h2>
        <input
          type="text"
          value={description}
          onChange={(event) => {
            setDescription(event.target.value);
          }}
        ></input>
        <h2>Prix*</h2>
        <input
          type="text"
          value={price}
          onChange={(event) => {
            setPrice(event.target.value);
          }}
        ></input>
        <h2>Photo*</h2>
        <MyDropzone
          loadFiles={(photos) => {
            console.log("photos", photos);
            setFilesPhoto(photos);
          }}
        ></MyDropzone>
        <SimpleUpload
          loadFiles={(photos) => {
            console.log("photos", photos);
            setFilesPhoto(photos);
          }}
        />

        <input type="submit" value="valider"></input>
      </form>
    </div>
  );
};
export default Upload;

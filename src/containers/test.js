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
          //
        }}
      >
        <input></input>
        <h2>Texte de l'annonce*</h2>
        <input></input>
        <h2>Prix*</h2>
        <input></input>
        <h2>Photo*</h2>
        <input type="submit" value="valider"></input>
      </form>
    </div>
  );
};
export default Upload;

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { apiUrl } from "../config";
import { toast } from "react-toastify";

import { store_id } from "../config";

const login = async (email, password, loginOK, unshowmodal) => {
  try {
    const response = await axios.post(apiUrl + "/auth/login", {
      email: email,
      password: password,
    });
    const token = response.data.authToken;

    const response2 = await axios.get(
      // apiUrl + `/auth/me?store_id=3`,
      apiUrl + `/auth/me?store_id=${store_id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!response2.data.name) {
      throw new Error(response2.data.payload);
    }
    const userName = response2.data.name;

    loginOK(userName, token);

    unshowmodal();
  } catch (e) {
    // alert("Authent Error" + e.message);
    toast("erreur d'authentification" + e.message, { type: "error" });
  }
};

const LogBoxModal = (props) => {
  const { loginOK, unshowmodal, apiAddress } = props;
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  return (
    <>
      <div>
        <div className="blackbox" onClick={unshowmodal}></div>
        <form
          className="formlogbox"
          onSubmit={(event) => {
            event.preventDefault();
            login(email, password, loginOK, unshowmodal, apiAddress);
          }}
        >
          <h1>Connexion</h1>
          <hr></hr>
          <h2>email *</h2>

          <input
            value={email}
            type="email"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          ></input>
          <h2>mot de passe *</h2>

          <input
            type="text"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          ></input>
          <input type="submit" value="Se connecter" />

          <hr></hr>

          <button
            onClick={() => {
              unshowmodal();
              navigate("/signup");
            }}
          >
            Creer un compte
          </button>
        </form>
      </div>
    </>
  );
};
export default LogBoxModal;

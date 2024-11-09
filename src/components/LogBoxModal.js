import React, { useState } from "react";
import axios from "axios";
// import { useHistory } from "react-router-dom";
// import { CSSTransition } from "react-transition-group";

const login = async (email, password, loginOK, unshowmodal, apiAddress) => {
  try {
    const response = await axios.post(apiAddress + "/login", {
      email: email, //farid@lereacteur.io
      password: password, //azerty
    });
    loginOK(response.data.account.username, response.data.token);
    unshowmodal();
  } catch (error) {
    alert("Authent Error");
  }
};

const LogBoxModal = (props) => {
  // const history = useHistory();
  const { loginOK, unshowmodal, apiAddress } = props;
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <>
      {/* <CSSTransition classNames="dialog" timeout={300}> */}
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
              // history.push("/signup");
            }}
          >
            Creer un compte
          </button>
        </form>
      </div>
      {/* </CSSTransition> */}
    </>
  );
};
export default LogBoxModal;

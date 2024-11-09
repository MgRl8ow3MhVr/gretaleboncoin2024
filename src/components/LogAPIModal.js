import React, { useState } from "react";

const LogAPIModal = (props) => {
  const { unshowmodal, changeAPI } = props;
  const [api, setApi] = useState();

  return (
    <>
      <div>
        <div className="blackbox" onClick={unshowmodal}></div>
        <form
          className="formlogbox"
          onSubmit={(event) => {
            event.preventDefault();
            alert(`API Address changed to  ${api}`);
            changeAPI(api);
            unshowmodal();
          }}
        >
          <h1>Select API Address</h1>
          <hr></hr>
          <h2>address *</h2>

          <input
            value={api}
            type="text"
            onChange={(event) => {
              setApi(event.target.value);
            }}
          ></input>

          <input type="submit" value="Se connecter" />
        </form>
      </div>
      {/* </CSSTransition> */}
    </>
  );
};
export default LogAPIModal;

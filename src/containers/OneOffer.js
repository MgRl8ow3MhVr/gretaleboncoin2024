import React, { useState, useEffect } from "react";
import axios from "axios";
import Carrousel from "../components/Carrousel";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { Link, useParams } from "react-router-dom";
import { apiUrl } from "../config";

const OneOffer = () => {
  const obj = useParams();
  console.log(obj);
  const id = obj.id;

  const [dataoffer, setDataoffer] = useState({ id: null });

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(apiUrl + "/product/" + id);
      console.log("resp", response.data);
      setDataoffer(response.data);
    };
    fetchData();
  }, []);

  if (dataoffer.id === null) {
    return <div>loading</div>;
  } else {
    const created = new Date(dataoffer.created_at);

    return (
      <>
        <div className="oneoffer">
          <div className="descriptionblock">
            <Carrousel photos={dataoffer.photos} />
            <hr />

            <ul>
              <span>{dataoffer.title}</span>
              <br />
              <span>{dataoffer.price} €</span>
              <br />
              <span>
                Annonce créée le {created.getDay()} {created.getMonth()}{" "}
                {created.getFullYear()} à {created.getHours()} h et{" "}
                {created.getMinutes()}mn
              </span>
            </ul>
            <h2>Description</h2>
            <p>{dataoffer.description}</p>
          </div>
          <div className="rightside">
            <Link to="/">
              <div className="back">
                <KeyboardReturnIcon />
                Retour à la recherche
              </div>
            </Link>
            <div className="userInfos">
              <div>{dataoffer.creator}</div>
              <div>xxx Annonces en ligne</div>
              <span className="orangeBox">Acheter</span>
            </div>
          </div>
        </div>
      </>
    );
  }
};
export default OneOffer;

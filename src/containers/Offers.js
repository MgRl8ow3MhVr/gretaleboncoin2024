//import libraries
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

//import components
import Pages from "../components/Pages";
import SearchBar from "../components/SearchBar";
import OffersItem from "../components/OffersItem";

import { apiUrl } from "../config";

// creation d'un tableau des pages

const Offers = () => {
  const [pageNum, setpageNum] = useState(1); //current page
  const [data, setData] = useState({ count: 0, offers: [] });
  const [searchTerm, setsearchTerm] = useState("");

  //Fecth Data only at first load
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        apiUrl + "/product?" + "page=" + pageNum
      );
      setData(response.data);
    };
    fetchData();
  }, [pageNum, searchTerm]);

  // Here starts the render

  return (
    <>
      <SearchBar
        goSearch={(input) => {
          setsearchTerm(input);
          setpageNum(1);
        }}
      />
      <div className="offers">
        {data.items &&
          data.items.map((oneoffer, index) => {
            return (
              <Link key={index} to={"/oneoffer/" + oneoffer.id}>
                <OffersItem {...oneoffer} />
              </Link>
            );
          })}
        {data.items && (
          <Pages
            itemsPerPage={5}
            offersNumber={data.itemsTotal}
            setpageNum={setpageNum}
          />
        )}
      </div>
    </>
  );
};
export default Offers;
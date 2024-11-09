import React from "react";

const Pages = props => {
  const { itemsPerPage, offersNumber, setpageNum } = props;
  // Build an array of pages
  const pagesArr = [];
  for (let i = 1; i < Math.floor(offersNumber / itemsPerPage) + 2; i++) {
    pagesArr.push(i);
  }

  return (
    <ul className="pages">
      {pagesArr.map((pageNumber, index) => {
        return (
          <li
            key={index}
            onClick={() => {
              setpageNum(pageNumber);
            }}
          >
            {pageNumber}
          </li>
        );
      })}
    </ul>
  );
};
export default Pages;

import React from "react";

const Pages = ({ pageTotal, setpageNum, pageNum }) => {
  // Build an array of pages
  const pagesArr = [];
  for (let i = 1; i < pageTotal; i++) {
    pagesArr.push(i);
  }

  return (
    <ul className="pages">
      pages
      {pagesArr.map((i) => {
        return (
          <li
            key={i}
            onClick={() => {
              setpageNum(i);
            }}
            style={{ fontSize: pageNum === i ? "30px" : "20px" }}
          >
            {i}
          </li>
        );
      })}
    </ul>
  );
};
export default Pages;

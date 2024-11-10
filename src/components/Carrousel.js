import React, { useState } from "react";

const Carrousel = ({ photos }) => {
  const [imgNum, setImgNum] = useState(0);
  const totalImages = photos.length;

  return (
    <div className="carrousel">
      {/* //main image */}

      <img src={photos[imgNum]?.url} alt="pic" />
      {/* //previews */}
      <div className="previews">
        {photos.map((photo, index) => {
          return (
            <div
              onClick={() => {
                setImgNum(index);
              }}
            >
              <img src={photo?.url} alt="pic" />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Carrousel;

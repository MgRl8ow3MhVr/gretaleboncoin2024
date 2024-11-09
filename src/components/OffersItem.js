import React from "react";

const OffersItem = ({ created_at, photos, price, sold, title }) => {
  const created = new Date(created_at);
  console.log(created);
  return (
    <div className="offersitem">
      <picture>
        {photos && photos[0] && <img src={photos[0].url} alt="pic" />}
      </picture>
      <nav>
        <span>{title}</span>
        <span>{price} €</span>
        <span>
          Annonce créée le {created.getDay()} {created.getMonth()}{" "}
          {created.getFullYear()} à {created.getHours()} h et{" "}
          {created.getMinutes()}mn
        </span>
      </nav>
    </div>
  );
};
export default OffersItem;

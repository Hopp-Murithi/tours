import React, { useState } from "react";

const SingleTour = ({ id, name, info, image, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img" />
      <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h4>{name}</h4>
        <p>{readMore ? info : `${info.substring(0, 200)}...`}</p>
        <button
          type="button"
          className="info-btn"
          onClick={() => setReadMore(!readMore)}
        >
          {readMore ? "Show less" : "Read more"}
        </button>
      </div>
      <button className="delete-btn" onClick={() => removeTour(id)}>
        Remove Tour
      </button>
    </article>
  );
};

export default SingleTour;

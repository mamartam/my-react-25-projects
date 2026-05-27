import styles from "./StarRating.module.scss";
import { useState } from "react";
import { FaStar } from "react-icons/fa";

function StarRating({ numberOfStart = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(getCurrectIndex) {
    setRating(getCurrectIndex);
  }

  function handleMouseEnter(getCurrectIndex) {
    setHover(getCurrectIndex);
  }
  function handleMouseLeave() {
    setHover(rating);
  }
  return (
    <div className="star-rating">
      {[...Array(numberOfStart)].map((_, index) => {
        index += 1;
        let color = index <= (hover || rating) ? "active" : "inactive";

        return (
          <FaStar
            key={index}
            className={styles[color]}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave()}
            size={40}
          />
        );
      })}
    </div>
  );
}

export default StarRating;

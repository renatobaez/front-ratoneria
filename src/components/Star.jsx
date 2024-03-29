/* eslint-disable react/jsx-key */
import { useState } from "react";
import { FaStar } from "react-icons/fa";
//commit fix
function Star() {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  return (
    <div className="flex flex-row justify-center mb-3">
      {[...Array(5)].map((_, index) => {
        const currentRating = index + 1;
        return (
          <label key={index}>

            {" "}
            {/* Agregar key */}

            <input
              className="hidden"
              type="radio"
              name="rating"
              value={currentRating}
              onClick={() => setRating(currentRating)}
            />
            <FaStar
              className="cursor-pointer"
              size={35}
              color={currentRating <= (hover || rating) ? "#ffa31a" : "#808080"}
              onMouseEnter={() => setHover(currentRating)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
}
export default Star;

import { useState } from "react";
import { FaStar } from "react-icon/fa";

function Star() {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  return (
    <div>
      {[...Array(5)].map((star, index) => {
        const currentRating = index + 1;
        return(
          <label>
            <input className="hidden"
              type="radio"
              name="rating"
              value={currentRating}
              onClick={() => setRating(currentRating)}
            />
            <FaStar className="cursor-pointer"
              size={50}
              color={currentRating <= (hover || rating) ? "porange" : "pgrey"}
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
import { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';

function Star({ paramRating }) {
  const [rating, setRating] = useState(paramRating);
  const [hover, setHover] = useState(null);

  useEffect(() => {
    setRating(paramRating);
  }, [paramRating]);

  const handleClick = (newRating) => {
    setRating(newRating);
  };

  return (
    <div className="flex flex-row justify-center mb-3">
      {[...Array(5)].map((_, index) => {
        const currentRating = index + 1;
        return (
          <label key={index}>
            <input
              className="hidden"
              type="radio"
              name="rating"
              value={currentRating}
              onClick={() => handleClick(currentRating)}
            />
            <FaStar
              className="cursor-pointer"
              size={35}
              color={currentRating <= (hover || rating) ? '#ffa31a' : '#808080'}
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

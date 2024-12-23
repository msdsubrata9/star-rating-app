import { StarIcon } from "@heroicons/react/16/solid";
import { useState } from "react";

function App() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-blue-600 mb-8">
        Star Ratings
      </h1>
      <div className="flex justify-center gap-4">
        {[1, 2, 3, 4, 5].map((num, index) => (
          <button
            key={index}
            onClick={() => setRating(num)}
            onMouseOver={() => setHover(num)}
            onMouseLeave={() => setHover(rating)}
            className={`transition-colors focus:outline-none ${
              num <= (hover || rating) ? "text-yellow-500" : "text-gray-400"
            }`}
          >
            <StarIcon className="w-20 h-20" />
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import "./Card.css";

const Card = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="card-body" onClick={handleFlip}>
      <div className={`card ${isFlipped ? "flipped" : ""}`}>
        {/* front */}
        <div className="card-front">
          <p>front</p>
        </div>
        {/* back */}
        <div className="card-back">
          <p>back</p>
        </div>
      </div>
    </div>
  );
};

export default Card;

import React from "react";

const SimpsonCard = ({ simpson }) => {
  console.log(simpson);
  return (
    <div>
      {simpson.map((simpson) => {
        return (
          <div key={simpson.character}>
            <div className="card">
              <p className="name">{simpson.character}</p>
              <img className="photo" src={simpson.image} alt="Simpson Avatar" />
              <p>{simpson.quote}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SimpsonCard;

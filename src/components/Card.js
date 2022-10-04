import React from 'react';

const Card = (props) => {
  return (
    <div className="card" onClick={() => props.onClick(props.number)}>
      {props.number}
    </div>
  );
};

export default Card;
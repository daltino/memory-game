import React from 'react';

const PlayNumber = (props) => (
  <button
    className="number"
    style={{ backgroundColor: colors[props.status] }}
    onClick={() => props.onClick(props.number, props.status)}>
    {props.status === 'started' ? '' : props.number}
  </button>
);

const colors = {
  available: 'lightgray',
  used: 'lightgreen',
  wrong: 'lightcoral',
};

export default PlayNumber;
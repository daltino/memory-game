import React, { useState } from 'react';
import utils from '../math-utils';
import Card from './Card';
import Game from './Game';

export function App({ initialData }) {
  const [numCards, setNumCards] = useState(4);
  const [showMenu, setShowMenu] = useState(true);
  const [gameId, setGameId] = useState(1);

  const startGame = (number) => {
    setNumCards(number);
    setShowMenu(false);
  };

  const startNewGame = () => {
    setShowMenu(true);
    setGameId(gameId + 1);
  };

  return (
    <div>
      <h1>{initialData.appName}</h1>
      {showMenu ? 'Pick the number of cards you want to play' : ''}

      {showMenu === true ?
        <div>
          {utils.range(1, 3).map(num =>
            <Card number={num * 4} key={num * 4} onClick={startGame} />
          )}
        </div>
        :
        null
      }

      {showMenu ? '' : <Game key={gameId} numCards={numCards} startNewGame={startNewGame} />}
      <br />
      <br />
    </div>
  );
}

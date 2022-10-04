import React, { useState, useEffect } from 'react';
import PlayNumber from './PlayNumber';
import PlayAgain from './PlayAgain';
import TurnRecord from './TurnRecord';

const API = 'http://localhost:4242';
const DEFAULT_QUERY = '/get-random-numbers/';

const useGameState = (numCards) => {
  const [sortedNums, setSortedNums] = useState([]);
  const [numOfCards] = useState(numCards);
  const [availableCards, setAvailableCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [gameState, setGameState] = useState('not-started');
  const [history, setHistory] = useState([]);

  useEffect(() => {
    if (!sortedNums.length) {
      fetch(API + DEFAULT_QUERY + numCards)
        .then(response => response.json())
        .then(data => {
          setAvailableCards(data.randomNumbers);
          const numbers = [...data.randomNumbers];
          setSortedNums(() => numbers.sort((n1, n2) => n1 - n2));
        });
    }
  });

  return {
    sortedNums,
    numOfCards,
    availableCards,
    gameState,
    history,
    selectedCards,
    setGameState,
    setSelectedCards,
    setHistory,
  };
};

const Game = (props) => {
  const {
    sortedNums,
    numOfCards,
    availableCards,
    gameState,
    selectedCards,
    history,
    setGameState,
    setSelectedCards,
    setHistory,
  } = useGameState(props.numCards);

  const numberStatus = (number) => {
    if (selectedCards.includes(number)) {
      return 'used';
    }
    if (gameState === 'started') {
      return 'started';
    }
    return 'available';
  };

  const onNumberClick = (number, currentStatus) => {
    if (gameState === 'not-started' || currentStatus === 'used' || selectedCards.includes(number)) {
      return '';
    }

    // store clicked num card in history
    setHistory(history.concat({ number, timestamp: Date.now() }));

    // clone the picked cards so that the selectedCards state
    // would be refreshed and re-rendering would occur
    const cards = [...selectedCards];

    // get the last idx of the selectedCard and use that
    // to compare the sorted list if they match the current number
    const nextIdx = selectedCards.length;
    if (sortedNums[nextIdx] === number) {
      cards.push(number);
      setSelectedCards(cards);

      if (nextIdx === (numOfCards - 1)) {
        setGameState('finished');
      }
    }
  };

  const playGame = () => {
    setGameState('started');
  };

  return (
    <div className='game'>
      <div className="help">
        Pick the numbers in ascending order
      </div>
      <div className="game-box">
        <div className="control-box">
          {gameState === 'finished' ? (
            <PlayAgain onClick={props.startNewGame} gameState={gameState} />
          ) : ''}
        </div>
        <div className="number-box">
          {
            availableCards.map(number =>
              <PlayNumber
                key={number}
                status={numberStatus(number)}
                number={number}
                onClick={onNumberClick}
              />)
          }
        </div>

        <div>
          {
            (sortedNums.length && gameState === 'not-started') ? 
              <button className="button" onClick={playGame}>Play Game</button> : ''
          }
        </div>

        {
          gameState === 'finished' ? (
            <>
              <h4>Turns History</h4>
              <div>Made <strong>{history.length}</strong> moves</div>
              <div className="history-box">
                {
                  history.map((record, idx) =>
                    <TurnRecord
                      key={idx}
                      number={record.number}
                      timestamp={record.timestamp} 
                    />)
                }
              </div>
            </>
          ) : ''
        }
      </div>
    </div>
  );
};

export default Game;

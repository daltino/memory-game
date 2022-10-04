# Memory Game by Dalton Whyte

In this game, a player is presented with a number of cards. Each card has a number on one side and is blank (empty) from the other side. To start the game, the player is asked to choose the number of cards to play (4, 8 or 12). After that, they will see the cards on the screen with random numbers displayed on them and one button “Play”.
When they click the play button, cards should be flipped to the blank side. The player is then asked to click on the cards in ascending order of the numbers that are on the other side.

Example turn:

- Player chooses 4 cards.
- Cards are displayed with numbers: 34, 10, 12, 45.
- Cards are flipped to the blank side.
- Player click on the 10 cards followed by 12, 35, 45
- Player wins.

## Using the app

```
# Install dependencies
npm install

# To start the app for development (watchers for node/webpack)
npm start

# To open the app in browser (default is localhost:4242)
npx reactful open

# To run all tests
npm test

# To build for production
npm run build-all

# To start the app for production
npm run prod-start
```

## License

memory-game is MIT licensed

# TicTacToe-React-and-Javascript
## Simple Tic-Tac-Toe project using JavaScript, CSS, and React
  - Created the Project using the command npm create-react-app
  - Implemented tic-tac-toe using Javascript and React
  - Styled the Project using CSS

## How To Use the App
  The highlighted player on the scoreboard is the one making their turn in the tic-tac-toe, if any player achieves a row of 3 of their symbol they are anounced as the winner and their score increases. If all squares are filled and neither player has yet achieved a connect 3 a draw is anounced. Once the game is won or drawn the players can view the board until the Reset Board button is pressed, Now the board is reset to be empty and the player who did not make the last move will go first. The score can be reset at any time with the reset score button which also resets the board and allows X to go first.
  
## Session Information and Score Storage
  Uses localStorage to store the running score count as well as the current game state so when the application is closed and reopened the previous state will be remembered

## Running Instructions
  - Clone the Repositiory from Github into a local Folder
  - Ensure Node.js is installed on your machine https://nodejs.org/en
  - Navigate into the /tic-tac-toe/ folder in the terminal
  - To obtain nesecarry node modules run the command npm -i
  - Run the command npm start

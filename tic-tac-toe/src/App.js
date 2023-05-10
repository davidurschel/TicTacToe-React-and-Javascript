import React, {useState, useEffect} from 'react';

import './App.css';

import {Board} from "./components/Board";
import {Score} from "./components/Score";
import {ButtonBoard} from './components/ButtonBoard';
import {Winner} from './components/Winner';

function App() {

  const WIN_CONDITIONS = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]

  const [winText, setWinText] = useState(() => {
    const data = JSON.parse(localStorage.getItem('WIN_MESSAGE'));
    return data
  });

  const [board, setBoard] = useState(() => {
    const data = JSON.parse(localStorage.getItem('CURRENT_BOARD_STATE'));
    if(data !== null){return data};
    return Array(9).fill(null);
  });

  const [xTurn, setXTurn] = useState(() => {
    const data = JSON.parse(localStorage.getItem('IS_X_TURN'));
    if(data !== null){return data};
    return true;
  });

  const [scores, setScores] = useState(() => {
    const data = JSON.parse(localStorage.getItem('CURRENT_SCORE'));
    if(data !== null){return data};
    return {xScore:0, oScore:0};
  });

  const [gameOver, setGameOver] = useState(() => {
    const data = JSON.parse(localStorage.getItem('GAME_OVER'));
    if(data !== null){return data};
    return false;
  });

  useEffect(() => {
    localStorage.setItem('WIN_MESSAGE', JSON.stringify(winText))
  }, [winText])

  useEffect(() => {
    localStorage.setItem('CURRENT_BOARD_STATE', JSON.stringify(board))
  }, [board])

  useEffect(() => {
    localStorage.setItem('IS_X_TURN', JSON.stringify(xTurn))
  }, [xTurn])

  useEffect(() => {
    localStorage.setItem('CURRENT_SCORE', JSON.stringify(scores))
  }, [scores])

  useEffect(() => {
    localStorage.setItem('GAME_OVER', JSON.stringify(gameOver))
  }, [gameOver])
  

  const handleBoxClick = (boxIdx => {
    const updatedBoard = board.map((value, idx) =>{
      if(idx === boxIdx){
        return xTurn === true ? "X" : "O";
      } else {
        return value;
      }
    })
    
    setXTurn(!xTurn);
    setBoard(updatedBoard);

    const winner = checkWinner(updatedBoard)
    if(winner){
      if(winner === "O"){
        let {oScore} = scores;
        oScore +=1
        setScores({...scores, oScore})
        setWinText("The winner is O")
      } else {
        let {xScore} = scores;
        xScore +=1
        setScores({...scores, xScore})
        setWinText("The winner is X")
      }
    }else if(!updatedBoard.includes(null)){
      setGameOver(true);
      setWinText("The game is a Draw")
    }
  })

  const checkWinner = (board) => {
    for(let i=0; i < WIN_CONDITIONS.length; i++){
      const[x,y,z] = WIN_CONDITIONS[i];
      if (board[x] && board[x] === board[y] && board[x] === board[z]) {
        setGameOver(true);
        return board[x];
      }
    }
  }

  const resetBoard = () => {
    setGameOver(false);
    setBoard(Array(9).fill(null));
  }

  const gameOverNotification = () => {

  }

  const resetScore = () => {
    resetBoard()
    setXTurn(true)
    setScores({xScore:0, oScore:0});
  }

  return (
    <div className="App">
      <Score scores={scores} xTurn={xTurn}/>
      <Board board={board} onClick={gameOver ? gameOverNotification : handleBoxClick} gameOver={gameOver}/>
      <ButtonBoard resetBoard={resetBoard} resetScore={resetScore}/>
      {gameOver && 
        <Winner winText={winText} />
      }
    </div>
  );
}

export default App;

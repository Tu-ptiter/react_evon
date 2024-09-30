import React, {useState} from 'react';
import Board from './Board';
import './GameStyle.scss';
import { calculateWinner } from '../../helper';

const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const[xIsNext, setXIsNext]= useState(true);
    const winner = calculateWinner(board);

    const handelOnClick =(index) =>{
        const boardCopy = [...board];
        if(winner || boardCopy[index]) return ;
        boardCopy[index] = xIsNext ? "X": "O";
        setBoard(boardCopy);
        setXIsNext((xIsNext)=> !xIsNext);



    }
    const handleResetGame = () =>{
         setBoard(Array(9).fill(null))
    }

    return (
        <div>
            <Board cells ={board} onClick={handelOnClick}></Board>
            <div className='game-winner'>
                {winner ? `Winner is ${winner}`:""}

            </div>
            <button onClick={handleResetGame} className="game-reset">reset game</button>
        </div>
    );
};

export default Game;
import React from "react";
import { useState } from "react";
import './Game.css'
import { calculateWinner } from "../helper";
import Board from './Board'

const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null))
    const [xIsNext, setXIsNext] = useState(true)
    const winner = calculateWinner(board)

    const handleClick = (index) => {
        const boardCopy = [...board]
        if (winner || boardCopy[index]) return null
        boardCopy[index] = xIsNext ? 'X' : 'O'
        setBoard(boardCopy)
        setXIsNext(!xIsNext)
    }

    const startNewGame = () => {
        return(
            <button className="start__btn" onClick={() => setBoard(Array(9).fill(null))}>ReGame</button>
        )
    }

    return(
        <div className="wrapper">
            {startNewGame()}
            <Board squares={board} click={handleClick}/> 
            <p className="game__info">
                {winner ? 'Winner ' + winner : 'Turn' + ( xIsNext ? 'X' : 'O')}
            </p>
        </div>
    )
}

export default Game
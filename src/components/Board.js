import React from "react";
import Square from "./Square";
import './Board.css'


const Board = ({squares, click}) => {
    return(
        <div className="board">
          {
            squares.map((square, i) => (
                <Square  key={i} value={square} onClick={() => click(i)} />
            ))
          }
        </div>
    )
}

export default Board
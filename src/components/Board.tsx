import { useContext, useEffect } from "react";
import Confetti from "react-confetti";

import { WinContext } from "../context/GameContext";
import { calculateWinner, calculateWinningRow } from "../lib/utils";
import { Square } from "./Square";
import { ToggleGroup } from "./ui/toggle-group";

type BoardProps = {
  xIsNext: boolean;
  squares: Array<string>;
  onPlay: (nextSquares: Array<string>) => void;
};

const Board = ({ xIsNext, squares, onPlay }: BoardProps) => {
  const { incrementWin } = useContext(WinContext);
  function handleClick(i: number) {
    if (calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }

  useEffect(() => {
    const winner = calculateWinner(squares);
    if (winner) {
      incrementWin(winner === "X" ? "blueTeam" : "redTeam");
    }
  }, [incrementWin, squares]);

  const winner = calculateWinner(squares);
  const winningRow = calculateWinningRow(squares);

  let status;
  if (winner) {
    status =
      winner === "X"
        ? "The winner is the Blue team."
        : "The winner is the Read team.";
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <>
      {!!winner && <Confetti numberOfPieces={3000} recycle={false} />}
      {Array.from({ length: 3 }).map((_, rowIndex) => (
        <ToggleGroup type="single" key={rowIndex} className="gap-3 mb-4">
          {Array.from({ length: 3 }).map((_, colIndex) => {
            const index = rowIndex * 3 + colIndex;
            return (
              <Square
                key={colIndex}
                index={index}
                handleClick={handleClick}
                value={squares[index] as string}
                win={winningRow.includes(index)}
              />
            );
          })}
        </ToggleGroup>
      ))}
      <div className="text-2xl font-bold">{status}</div>
    </>
  );
};

export default Board;

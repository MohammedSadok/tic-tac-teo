import { Repeat2, Undo2 } from "lucide-react";
import { HTMLAttributes, useState } from "react";
import Board from "./Board";
import { Button } from "./ui/button";

export const Game: React.FC<HTMLAttributes<HTMLDivElement>> = () => {
  const [history, setHistory] = useState<Array<Array<string>>>([
    Array(9).fill(null),
  ]);

  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares: Array<string>) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  const goToPreviousMove = () => {
    if (currentMove > 0) {
      setCurrentMove(currentMove - 1);
    }
  };
  const replay = () => {
    if (currentMove > 0) {
      setCurrentMove(0);
    }
  };

  return (
    <div>
      <div className="flex justify-between flex-1 gap-3 mb-4">
        <Button variant="default" onClick={goToPreviousMove}>
          Return
          <Undo2 size={24} strokeWidth={2} className="ml-3" />
        </Button>
        <Button variant="secondary" onClick={replay}>
          Replay
          <Repeat2 size={24} strokeWidth={2} className="ml-3" />
        </Button>
      </div>
      <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
    </div>
  );
};

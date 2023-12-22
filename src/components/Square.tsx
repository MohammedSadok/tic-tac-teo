import { Circle, X } from "lucide-react";
import { cn } from "../lib/utils";
import { ToggleGroupItem } from "./ui/toggle-group";

export type SquareProps = {
  index: number;
  handleClick: (index: number) => void;
  value: string;
  win: boolean;
};

export function Square({ index, handleClick, value, win }: SquareProps) {
  return (
    <ToggleGroupItem
      key={index}
      onClick={() => handleClick(index)}
      disabled={!!value}
      className={cn(
        "border-2 disabled:bg-gray-300 w-24 h-24",
        value == "X" && win && "disabled:bg-blue-500 disabled:opacity-1",
        value == "O" && win && "disabled:bg-red-500 disabled:opacity-1"
      )}
    >
      {value == "X" && <X size={60} strokeWidth={3.5} />}
      {value == "O" && <Circle size={50} strokeWidth={3.5} />}
    </ToggleGroupItem>
  );
}

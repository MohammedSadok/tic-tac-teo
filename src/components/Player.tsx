import { Circle, X } from "lucide-react";
import { useContext } from "react";
import { WinContext } from "../context/GameContext";

type Props = {
  src: string;
  team: "blueTeam" | "redTeam";
};

const Player = ({ src, team }: Props) => {
  const { wins } = useContext(WinContext);
  const teamWins = team === "blueTeam" ? wins.blueTeam : wins.redTeam;
  return (
    <div className="flex flex-col items-center justify-center flex-1 gap-10">
      <div className="flex items-center justify-center">
        <img src={src} alt="" className="w-64" />
        {team === "blueTeam" ? (
          <X size={50} strokeWidth={4} />
        ) : (
          <Circle size={50} strokeWidth={4} />
        )}
      </div>
      <h1 className="text-5xl font-bold">{teamWins} Win </h1>
    </div>
  );
};

export default Player;

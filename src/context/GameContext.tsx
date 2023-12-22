import { createContext, useCallback, useState } from "react";

interface WinContextType {
  wins: {
    blueTeam: number;
    redTeam: number;
  };
  incrementWin: (team: "blueTeam" | "redTeam") => void;
}
const winContextInitiated: WinContextType = {
  wins: { blueTeam: 0, redTeam: 0 },
  incrementWin: () => null,
};
export const WinContext = createContext<WinContextType>(winContextInitiated);

export const WinProvider = ({ children }: { children: React.ReactNode }) => {
  const [wins, setWins] = useState({ blueTeam: 0, redTeam: 0 });

  const incrementWin = useCallback(
    (team: "blueTeam" | "redTeam") => {
      setWins((prevWins) => ({ ...prevWins, [team]: prevWins[team] + 1 }));
    },
    [setWins]
  );

  const contextValue: WinContextType = {
    wins,
    incrementWin,
  };

  return (
    <WinContext.Provider value={contextValue}>{children}</WinContext.Provider>
  );
};

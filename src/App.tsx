import blueTeam from "./assets/blue.png";
import redTeam from "./assets/red.png";
import { Game } from "./components/Game";
import { MainNav } from "./components/MainNav";
import Player from "./components/Player";
import { WinProvider } from "./context/GameContext";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <WinProvider>
        <div className="flex items-center h-16 px-4 border-b">
          <MainNav className="mx-6" />
        </div>
        <div className="flex items-center justify-around w-screen mt-16">
          <Player src={blueTeam} team="blueTeam" />
          <Game className="flex-2" />
          <Player src={redTeam} team="redTeam" />
        </div>
      </WinProvider>
    </ThemeProvider>
  );
}

export default App;

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
        <body className="flex flex-col w-screen h-screen">
          <div className="flex items-center h-16 px-4 border-b">
            <MainNav className="mx-6" />
          </div>
          <main className="flex items-center justify-around flex-1 w-screen h-auto my-auto">
            <Player src={blueTeam} team="blueTeam" />
            <Game className="flex-2" />
            <Player src={redTeam} team="redTeam" />
          </main>
          <footer className="w-screen py-5 font-thin text-center bg-gray-300 bg-dark dark:bg-white">
            <p className="text-xl font-semibold text-white dark:text-black">
              © 2023 Mohammed sadok project ✨🎮
            </p>
          </footer>
        </body>
      </WinProvider>
    </ThemeProvider>
  );
}

export default App;

import { useState } from 'react';
import StartGame from './components/StartGame';
import GamePlay from './components/GamePlay';

function App() {
  const [isGame, setIsGame] = useState(false)  ;

  const toggleGame = () => {
    setIsGame(prev => !prev);
  };

  return (
    <>
      {
        isGame ? <GamePlay /> : <StartGame toggle={toggleGame} />
      }
    </>
  );
}

export default App;

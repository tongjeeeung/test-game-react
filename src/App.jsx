import './App.css'
import { Game } from './components/game/game';
import { useDispatch } from 'react-redux';
import { setColors } from './services/appSlice';

function App() {
  const dispatch = useDispatch();
  dispatch(setColors([
    "#FF0000",
    "#00FF00",
    "#0000FF",
    "#FFA500",
    "#FFFF00",
    "#800080",
    "#FFC0CB",
    "#40E0D0",
    "#E6E6FA",
    "#FFD700",
    "#8B4513",
    "#FFBF00"
  ]));

  return <Game></Game>
}

export default App

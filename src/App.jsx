import "./App.css";
import { Game } from "./components/game/game";
import { useDispatch } from "react-redux";
import { setColors } from "./services/appSlice";

function App() {
  const dispatch = useDispatch();
  dispatch(
    setColors([
      "#B22222",
      "#FFA500",
      "#32CD32",
      "#800080",
      "#FFC0CB",
      "#40E0D0",
      "#E6E6FA",
      "#6A5ACD",
    ]),
  );

  return <Game></Game>;
}

export default App;

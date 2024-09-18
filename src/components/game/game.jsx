import { useState } from "react"
import './game.css'
import { Card } from "../card/card";
import { useSelector } from 'react-redux';
import { getColors } from "../../services/appSlice";

export const Game = () => {
  const [colors, setColor] = useState(useSelector(getColors));
  const [randIndex, setRandIndex] = useState(Math.floor(Math.random() * (3)));
  const [gameColors, setGameColors] = useState([...colors.slice(0, 3), colors.slice(0, 3)[randIndex]].sort(() => Math.random() - 0.5))
  const [openArray, setopenArray] = useState([]);
  const [level, setLevel] = useState(1);

  const openCard = (card) => {
    if (card !== openArray[0]) {
      card.style.backgroundColor = `${gameColors[card.id]}`;
      setopenArray([...openArray, card]);
      if (openArray.length === 1) {
        if (openArray[0].style.backgroundColor === card.style.backgroundColor) {
          setLevel(level + 1)
          setRandIndex(Math.floor(Math.random() * (3)));
          setColor([...colors].sort(() => Math.random() - 0.5));
          setGameColors([...colors.slice(0, 3), colors.slice(0, 3)[randIndex]].sort(() => Math.random() - 0.5))
          setTimeout(() => {alert(`new level ${level + 1}`)}, 200)
        }
        setTimeout(closeCards, 500);
        setTimeout(() => { card.style.backgroundColor = ``}, 500);
      }
    }
  }

  function closeCards() {
    openArray.map(item => {
      item.style.backgroundColor = ``;
    })
    setopenArray([]);
  }

  if(level === 8) {
    return (
      <h1 className="end">Конец игры</h1>
    )
  }
  return (
    <div className='box'>
      <ul className='list'>
        {gameColors.map((item, index) => {
          return <Card openCard={openCard} id={index} key={index}/>
        })}
      </ul>
    </div>
  )
}
import { useState } from "react";
import "./game.css";
import { Card } from "../card/card";
import { useSelector } from "react-redux";
import { getColors } from "../../services/appSlice";

export const Game = () => {
  const arr = useSelector(getColors).reduce((arr, color) => {
    arr.push(color, color);
    return arr;
  }, []); //получаем и удваиваем цвета

  const [colors] = useState(arr.slice().sort(() => Math.random() - 0.5)); //перемешиваем цвета
  const [openColors, setOpenColors] = useState([]); //массив открытых цветов
  const [currentColors, setCurrentColors] = useState([]); //массив нажатых цветов

  const openCard = (card) => {
    const cardColor = colors[card.id];

    if (!openColors.includes(cardColor) && !currentColors.includes(card)) {
      //проверяем не открыт ли этот цвет
      card.style.backgroundColor = cardColor;
      setCurrentColors([...currentColors, card]);

      if (currentColors.length === 1) {
        //проверяем, открыта ли первая карточка
        if (currentColors[0].style.backgroundColor === card.style.backgroundColor) {
          //сравниваем цвет карточек
          setOpenColors((prev) => [...prev, cardColor]);
          setCurrentColors([]);
          setTimeout(() => {
            currentColors[0].style.backgroundColor = "rgb(62, 55, 55)";
            card.style.backgroundColor = "rgb(62, 55, 55)";
          }, 200);
          document.documentElement.style.setProperty("--shadow", cardColor);
        } else {
          //закрываем карточки, если их цвета не совпали
          setTimeout(() => {
            closeCards();
            card.style.backgroundColor = "";
          }, 200);
        }
      }
    }
  };

  function closeCards() {
    currentColors.forEach((item) => {
      item.style.backgroundColor = ``;
    });
    setCurrentColors([]);
  }

  if (openColors.length === 8) {
    return <h1 className="end">Конец игры</h1>;
  }
  return (
    <div className="box">
      <ul className="list">
        {colors.map((color, index) => (
          <Card openCard={openCard} id={index} key={index} />
        ))}
      </ul>
    </div>
  );
};

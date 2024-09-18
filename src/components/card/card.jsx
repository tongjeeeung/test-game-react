import { useRef } from "react";
import PropTypes from "prop-types";

export const Card = ({ openCard, id }) => {
  const refCard = useRef(null);

  return (
    <li className="card notOpen" ref={refCard} onClick={() => openCard(refCard.current)} id={String(id)}></li>
  )
}

Card.propTypes = {
  openCard: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

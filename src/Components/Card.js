import React from 'react';

const Card = ({ card, onMoveCard }) => {
  return (
    <div className="card">
      {card.content}
      <button onClick={() => onMoveCard(card.id, 'prev')}>←</button>
      <button onClick={() => onMoveCard(card.id, 'next')}>→</button>
    </div>
  );
};

export default Card;

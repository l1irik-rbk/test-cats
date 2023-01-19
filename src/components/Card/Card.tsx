import React, { useState } from 'react';

import CardInfo from '../CardInfo/CardInfo';
import CardStatus from '../CardStatus/CardStatus';
import { useAppDispatch } from '../../Redux/hooks';
import { setSelected } from '../../Redux/slices/appSlice';
import { ICard } from '../../types';
import './Card.scss';

const Card = React.memo(({ card }: { card: ICard }) => {
  const [mousePosition, setMousePosition] = useState(false);
  const dispatch = useAppDispatch();

  const {
    cardID,
    status: { available, selected },
  } = card;

  const isSelected = selected.selected;
  const isNotAvailable = !available.available;
  const selectedText = selected.selectedText;
  const isNotAvailableText = available.availableText;

  const handleCard = (cardID: number) => {
    if (isNotAvailable) return;

    dispatch(setSelected(cardID));
    setMousePosition(false);
  };

  const handleMouseEnter = () => {
    setMousePosition(true);
  };

  const handleMouseLeave = () => {
    setMousePosition(false);
  };

  return (
    <div className="card__container">
      <CardInfo
        card={card}
        isSelected={isSelected}
        isNotAvailable={isNotAvailable}
        handleCard={handleCard}
        mousePosition={mousePosition}
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
      />

      <CardStatus
        isSelected={isSelected}
        isNotAvailable={isNotAvailable}
        cardID={cardID}
        selectedText={selectedText}
        isNotAvailableText={isNotAvailableText}
        handleCard={handleCard}
        mousePosition={mousePosition}
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
      />
    </div>
  );
});

export default Card;

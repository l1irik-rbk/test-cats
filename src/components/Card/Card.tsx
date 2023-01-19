import React from 'react';

import { MIN } from '../../helpers/constants';
import { setClass } from '../../helpers/setClass';
import { useAppDispatch } from '../../Redux/hooks';
import { setSelected } from '../../Redux/slices/appSlice';
import { ICard } from '../../types';
import CardInfo from '../CardInfo/CardInfo';
import CardStatus from '../CardStatus/CardStatus';

import './Card.scss';

const Card = React.memo(({ card }: { card: ICard }) => {
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
  };

  return (
    <div className="card__container">
      <CardInfo
        card={card}
        isSelected={isSelected}
        isNotAvailable={isNotAvailable}
        handleCard={handleCard}
      />

      <CardStatus
        isSelected={isSelected}
        isNotAvailable={isNotAvailable}
        cardID={cardID}
        selectedText={selectedText}
        isNotAvailableText={isNotAvailableText}
        handleCard={handleCard}
      />
    </div>
  );
});

export default Card;

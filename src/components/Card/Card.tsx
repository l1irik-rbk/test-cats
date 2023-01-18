import React from 'react';

import { MIN } from '../../helpers/constants';
import { ICard } from '../../types';
import './Card.scss';

const Card = ({ card }: { card: ICard }) => {
  const { cardDescription, cardTitle, cardSubtitle, cardWeight, cardInfo } = card;
  console.log(card);
  return (
    <div className="card">
      <div className="card__content">
        <p className="card__content-description">{cardDescription}</p>
        <h4 className="card__content-title">{cardTitle}</h4>
        <h5 className="card__content-subtitle">{cardSubtitle}</h5>
        {cardInfo.map(({ cardInfoID, cardInfoNumber, cardInfoText }) => (
          <p key={cardInfoID} className="card__content-amount">
            <span className="card__content-amount__counter">
              {cardInfoNumber > MIN ? `${cardInfoNumber} ` : ''}
            </span>
            {cardInfoText}
          </p>
        ))}

        <img className="card__content-image" src="./assets/cat.png" alt="cat" />
        <div className="card__content-weight">
          {cardWeight} <span className="card__content-weight__units">кг</span>
        </div>
      </div>
    </div>
  );
};

export default Card;

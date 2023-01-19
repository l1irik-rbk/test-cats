import React, { useState } from 'react';

import { MIN } from '../../helpers/constants';
import { setClass } from '../../helpers/setClass';
import { ICardInfo } from '../../types';
import './CardInfo.scss';

const CardInfo = React.memo(
  ({
    card,
    isSelected,
    isNotAvailable,
    handleCard,
    mousePosition,
    handleMouseEnter,
    handleMouseLeave,
  }: ICardInfo) => {
    const {
      cardID,
      cardDescription,
      cardSelectedHoverDescription,
      cardTitle,
      cardSubtitle,
      cardWeight,
      cardInfo,
    } = card;

    const handleClick = () => {
      handleCard(cardID);
    };

    return (
      <div
        className={`card ${
          mousePosition && !isSelected && !isNotAvailable ? 'card--hover' : ''
        }  ${setClass(isNotAvailable, 'card--disabled')} ${setClass(
          isSelected,
          'card--selected'
        )} ${mousePosition && isSelected && !isNotAvailable ? 'card--selected-hover' : ''}`}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="card__content">
          <p
            className={`card__content-description ${
              mousePosition && isSelected && !isNotAvailable
                ? 'card__content-description--selected-hover'
                : ''
            } ${setClass(isNotAvailable, 'disabled-text')}`}
          >
            {mousePosition && isSelected && !isNotAvailable
              ? cardSelectedHoverDescription
              : cardDescription}
          </p>
          <h4 className={`card__content-title ${setClass(isNotAvailable, 'disabled-text')}`}>
            {cardTitle}
          </h4>
          <h5 className={`card__content-subtitle ${setClass(isNotAvailable, 'disabled-text')}`}>
            {cardSubtitle}
          </h5>
          {cardInfo.map(({ cardInfoID, cardInfoNumber, cardInfoText }) => (
            <p
              key={cardInfoID}
              className={`card__content-amount ${setClass(isNotAvailable, 'disabled-text')}`}
            >
              <span className="card__content-amount__counter">
                {cardInfoNumber > MIN ? `${cardInfoNumber} ` : ''}
              </span>
              {cardInfoText}
            </p>
          ))}

          <img
            className={`card__content-image ${setClass(
              isNotAvailable,
              'card__content-image--disabled'
            )}`}
            src="./assets/cat.png"
            alt="cat"
          />
          <div
            className={`card__content-weight ${
              mousePosition && !isSelected && !isNotAvailable ? 'card__content-weight--hover' : ''
            } ${setClass(isNotAvailable, 'card__content-weight--disabled')} ${setClass(
              isSelected,
              'card__content-weight--selected'
            )} ${
              mousePosition && isSelected && !isNotAvailable
                ? 'card__content-weight--selected-hover'
                : ''
            }`}
          >
            {cardWeight} <span className="card__content-weight__units">кг</span>
          </div>
        </div>
      </div>
    );
  }
);

export default CardInfo;

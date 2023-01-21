import React from 'react';

import { MIN_GIFTS } from '../../helpers/constants';
import { setClass } from '../../helpers/setClass';
import { setElementClasses } from '../../helpers/setElementClasses';
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

    const cardClassesArr = [
      'card',
      mousePosition && !isSelected && !isNotAvailable ? 'card--hover' : '',
      setClass(isNotAvailable, 'card--disabled'),
      setClass(isSelected, 'card--selected'),
      mousePosition && isSelected && !isNotAvailable ? 'card--selected-hover' : '',
    ];
    const descriptionClassesArr = [
      'card__content-description',
      mousePosition && isSelected && !isNotAvailable
        ? 'card__content-description--selected-hover'
        : '',
      setClass(isNotAvailable, 'disabled-text'),
    ];
    const titleClassesArr = ['card__content-title', setClass(isNotAvailable, 'disabled-text')];
    const subtitleClassesArr = [
      'card__content-subtitle',
      setClass(isNotAvailable, 'disabled-text'),
    ];
    const amountClassesArr = ['card__content-amount', setClass(isNotAvailable, 'disabled-text')];
    const imageClassesArr = [
      'card__content-image',
      setClass(isNotAvailable, 'card__content-image--disabled'),
    ];
    const weightClassesArr = [
      'card__content-weight',
      mousePosition && !isSelected && !isNotAvailable ? 'card__content-weight--hover' : '',
      setClass(isNotAvailable, 'card__content-weight--disabled'),
      setClass(isSelected, 'card__content-weight--selected'),
      mousePosition && isSelected && !isNotAvailable ? 'card__content-weight--selected-hover' : '',
    ];

    const cardClasses = setElementClasses(cardClassesArr);
    const cardDescClasses = setElementClasses(descriptionClassesArr);
    const cardTitleClasses = setElementClasses(titleClassesArr);
    const cardSubtitleClasses = setElementClasses(subtitleClassesArr);
    const cardAmountClasses = setElementClasses(amountClassesArr);
    const cardImageClasses = setElementClasses(imageClassesArr);
    const cardWeightClasses = setElementClasses(weightClassesArr);

    return (
      <div
        className={cardClasses}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="card__content">
          <p className={cardDescClasses}>
            {mousePosition && isSelected && !isNotAvailable
              ? cardSelectedHoverDescription
              : cardDescription}
          </p>
          <h4 className={cardTitleClasses}>{cardTitle}</h4>
          <h5 className={cardSubtitleClasses}>{cardSubtitle}</h5>
          {cardInfo.map(({ cardInfoID, cardInfoNumber, cardInfoText }) => (
            <p key={cardInfoID} className={cardAmountClasses}>
              <span className="card__content-amount__counter">
                {cardInfoNumber > MIN_GIFTS ? `${cardInfoNumber} ` : ''}
              </span>
              {cardInfoText}
            </p>
          ))}
          <img className={cardImageClasses} src="./assets/cat.png" alt="cat" />
          <div className={cardWeightClasses}>
            {cardWeight} <span className="card__content-weight__units">кг</span>
          </div>
        </div>
      </div>
    );
  }
);

export default CardInfo;

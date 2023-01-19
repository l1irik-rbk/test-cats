import React from 'react';

import { ICardStatus } from '../../types';
import './CardStatus.scss';

const CardStatus = React.memo(
  ({
    cardID,
    isSelected,
    isNotAvailable,
    selectedText,
    isNotAvailableText,
    handleCard,
    mousePosition,
    handleMouseEnter,
    handleMouseLeave,
  }: ICardStatus) => {
    const handleClick = () => {
      handleCard(cardID);
    };

    return (
      <div className="card__status">
        {isNotAvailable ? (
          <p className="card__status-text card__status-text--available">{isNotAvailableText}</p>
        ) : isSelected ? (
          <p className="card__status-text">{selectedText}</p>
        ) : (
          <p className="card__status-text">
            Чего сидишь? Порадуй котэ,{' '}
            <button
              className={`card__status-btn ${mousePosition ? 'card__status-btn--hover' : ''}`}
              onClick={handleClick}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              купи.
            </button>
          </p>
        )}
      </div>
    );
  }
);
export default CardStatus;

import { ICard } from '../types';

export const CARDS: ICard[] = [
  {
    cardID: 1,
    cardDescription: 'Сказочное заморское яство',
    cardSelectedHoverDescription: 'Котэ не одобряет?',
    cardTitle: 'Нямушка',
    cardSubtitle: 'с фуа-гра',
    cardInfo: [
      { cardInfoID: 11, cardInfoNumber: 10, cardInfoText: 'порций' },
      { cardInfoID: 12, cardInfoNumber: 1, cardInfoText: 'мышь в подарок' },
    ],
    cardWeight: '0,5',
    status: {
      selected: {
        selected: false,
        selectedText: 'Печень утки разварная с артишоками.',
      },
      available: {
        available: true,
        availableText: 'Печалька, с фуа-гра закончился.',
      },
    },
  },
  {
    cardID: 2,
    cardDescription: 'Сказочное заморское яство',
    cardSelectedHoverDescription: 'Котэ не одобряет?',
    cardTitle: 'Нямушка',
    cardSubtitle: 'с рыбой',
    cardInfo: [
      { cardInfoID: 11, cardInfoNumber: 40, cardInfoText: 'порций' },
      { cardInfoID: 12, cardInfoNumber: 2, cardInfoText: 'мыши в подарок' },
    ],
    cardWeight: '2',
    status: {
      selected: {
        selected: true,
        selectedText: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
      },
      available: {
        available: true,
        availableText: 'Печалька, с рыбой закончился.',
      },
    },
  },
  {
    cardID: 3,
    cardDescription: 'Сказочное заморское яство',
    cardSelectedHoverDescription: 'Котэ не одобряет?',
    cardTitle: 'Нямушка',
    cardSubtitle: 'с курой',
    cardInfo: [
      { cardInfoID: 11, cardInfoNumber: 100, cardInfoText: 'порций' },
      { cardInfoID: 12, cardInfoNumber: 5, cardInfoText: 'мышей в подарок' },
      { cardInfoID: 13, cardInfoNumber: 0, cardInfoText: 'заказчик доволен' },
    ],
    cardWeight: '5',
    status: {
      selected: {
        selected: false,
        selectedText: 'Филе из цыплят с трюфелями в бульоне.',
      },
      available: {
        available: false,
        availableText: 'Печалька, с курой закончился.',
      },
    },
  },
];

export const MIN_GIFTS = 1;

import React from 'react';

import Card from '../Card/Card';
import { useAppSelector } from '../../Redux/hooks';

import './App.scss';

const App = () => {
  const { cards } = useAppSelector((state) => state.app);

  return (
    <section className="cards">
      <div className="container">
        <h1 className="cards__title">Ты сегодня покормил кота?</h1>
        <div className="cards__container">
          {cards.map((card) => (
            <Card key={card.cardID} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default App;

import React from 'react';
import Loading from '../loading/loading';

const Start = ({ handleStartGame, className }) => (
    <div className='start__page'>
      <h1>ENGLISH PUZZLE</h1>
      <p>Click on words, collect phrases.</p>
      <p>Words can be drag and drop. Select tooltips in the menu</p>
      <button onClick={handleStartGame}>START</button>
      <div className={className}>
        <Loading />
      </div>
    </div>
);
export default Start;

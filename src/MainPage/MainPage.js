import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Start from './start';
import Game from '../game/game';
import getWords from '../action/getWords';

const MainPage = (props) => {
  const { page, level, getWords } = props;
  const [startGame, setStartGame] = useState(false);
  const [className, setClassName] = useState('loading__hidden');
  const handleStartGame = () => {
    setStartGame(false);
    setClassName('loading__visible');
  };
  useEffect(() => {
    if (className === 'loading__visible') {
      fetch(`https://afternoon-falls-25894.herokuapp.com/words?page=${page}&group=${level}`)
        .then((response) => response.json())
        .then((data) => {
          getWords(data);
          setClassName('loading__hidden');
          setStartGame(true);
        });
    }
  }, [className]);
  return (
    startGame ? <Start handleStartGame={handleStartGame} className={className}/> : <Game handleStartGame={handleStartGame}/>
  );
};
const mapStateToProps = ({ page, level }) => ({
  page,
  level,
});
export default connect(mapStateToProps, { getWords })(MainPage);

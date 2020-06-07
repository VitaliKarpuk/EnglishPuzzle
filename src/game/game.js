import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import changeLevel from '../action/changeLevel';
import ButtonPage from '../buttonPage/ButtonPage';
import ButtonLevel from '../buttonLevel/ButtonLevel';
import changePage from '../action/changePage';
import Loading from '../loading/loading';
import getWords from '../action/getWords';

const Game = (props) => {
  const {
    changeLevel, level, changePage, page, getWords,
  } = props;
  const [className, setClassName] = useState('loading__hidden');
  const [startGame, setStartGame] = useState(false);

  const handleLevel = (e) => {
    if (level !== +e.target.value - 1) {
      changeLevel(+e.target.value - 1);
      localStorage.setItem('level', +e.target.value - 1);
      setStartGame(false);
      setClassName('loading__visible');
    }
  };
  const handlePage = (e) => {
    if (page !== +e.target.value - 1) {
      changePage(+e.target.value - 1);
      localStorage.setItem('page', +e.target.value - 1);
      setStartGame(false);
      setClassName('loading__visible');
    }
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
    <div className='page__game'>
      <header>
        <ButtonLevel handleLevel={handleLevel} level={level} />
        <ButtonPage handlePage={handlePage} page={page} />
      </header>
      <div className={className}>
        {!startGame && <Loading />}
      </div>
    </div>

  );
};
const mapStateToProps = ({ level, page }) => ({
  level,
  page,
});
export default connect(mapStateToProps, { changeLevel, changePage, getWords })(Game);

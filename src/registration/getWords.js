import React from 'react';

const GetWords = () => {
  const handleGetWords = () => {
    fetch('https://afternoon-falls-25894.herokuapp.com/words?page=2&group=0')
      .then((response) => response.json())
      .then((data) => console.log(data));
  };
  return (
    <input type="button" name="button" value="get words" className="get__words" onClick={handleGetWords}/>
  );
};
export default GetWords;

import React from 'react';

const ButtonLevel = ({ handleLevel, level }) => {
  const arrLevel = [];
  for (let i = 1; i < 7; i += 1) {
    arrLevel.push(i);
  }
  return (
    <>
      <h3>Level</h3>
      <select name='level' onClick={handleLevel}>
        {
          arrLevel.map((item, index) => (
            (level + 1) === item ? <option value={item} key={index} selected>{item}</option> : <option value={item} key={index}>{item}</option>
          ))
        }
      </select>
    </>
  );
};

export default ButtonLevel;

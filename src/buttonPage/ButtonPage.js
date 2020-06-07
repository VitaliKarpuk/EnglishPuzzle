import React from 'react';

const ButtonPage = ({ handlePage, page }) => {
  const arrPage = [];
  for (let i = 1; i < 31; i += 1) {
    arrPage.push(i);
  }
  return (
    <>
      <h3>Page</h3>
      <select name='page' onClick={handlePage}>
        {arrPage.map((item, index) => (
          (page + 1) === item ? <option value={item} key={index} selected >{item}</option> : <option value={item} key={index} >{item}</option>
        ))}
      </select>
    </>
  );
};
export default ButtonPage;

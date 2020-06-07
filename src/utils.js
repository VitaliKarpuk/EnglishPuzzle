/* eslint-disable prefer-template */
/* eslint-disable no-useless-escape */
// eslint-disable-next-line import/prefer-default-export
export const getCookie = (name) => {
  const matches = document.cookie.match(new RegExp(
    // eslint-disable-next-line quotes
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)",
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
};

console.log(getCookie('user_id'));

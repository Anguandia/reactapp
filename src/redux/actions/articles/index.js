import * as actions from '../actionTypes';

const api = 'https://codepirates-ah-backend-staging.herokuapp.com/api/v1/';

export const getData = (url) => fetch(`${api}${url}`)
  .then((res) => res.json());

export const postData = (url, body) => fetch(`${api}/${url}`, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(body),
});

export const articlesAction = (articles) => ({
  type: actions.GetArticlesSuccess, payload: { articles },
});

export const articleAction = (article) => ({
  type: actions.GetArticleSuccess, payload: { article },
});

export const dispatchArticles = (dat, url) => async (dispatch) => {
  const res = await (dat(url));
  dispatch(articlesAction(res.data));
  return res.data;
};

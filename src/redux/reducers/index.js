import initialState from '../store/initialState';
import * as actions from '../actions/actionTypes';

const articles = (state = initialState, action) => {
  switch (action.type) {
    case actions.GetArticlesSuccess:
      return ({ ...state, ...action.payload });
    default:
      return state;
  }
};

const article = (state = initialState, action) => {
  switch (action.type) {
    case actions.GetArticleSuccess:
      return ({ ...state, ...action.payload });
    default:
      return state;
  }
};

export default { articles, article };

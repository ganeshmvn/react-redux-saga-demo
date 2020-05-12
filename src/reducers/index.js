const initialState = {
  articles: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_NEWS":
      return { ...state, loading: true };
    case "NEWS_RECEIVED":
      console.log(action.json);
      return { ...state, articles: action.articles, loading: false };
    default:
      return state;
  }
};

export default reducer;

import * as actions from "../constants/index";

export default (state = { isLoading: true, posts: [] }, action) => {
  switch (action.type) {
    case actions.START_LOADING:
      return { ...state, isLoading: true };
    case actions.END_LOADING:
      return { ...state, isLoading: false };
    case actions.FETCH_ALL:
      return {
        ...state,
        posts: action.payload.data,
        currentPage: action.payload.currentPage,
        numberOfPages: action.payload.numberOfPages,
      };
    case actions.FETCH_BY_SEARCH:
      console.log("reducers :",{ ...state, posts: action.payload.data })
      return { ...state, posts: action.payload.data };
    case actions.FETCH_POST:
      return { ...state, post: action.payload.post };
    case actions.LIKE:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === action.payload._id ? action.payload : post,
        ),
      };
    case actions.COMMENT:
      return {
        ...state,
        posts: state.posts.map((post) => {
          if (post._id === action.payload._id) {
            return action.payload;
          }
          return post;
        }),
      };
    case actions.CREATE:
      return { ...state, posts: [...state.posts, action.payload] };
    case actions.UPDATE:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === action.payload._id ? action.payload : post,
        ),
      };
    case actions.DELETE:
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== action.payload),
      };
    default:
      return state;
  }
};

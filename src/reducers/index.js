import { combineReducers } from 'redux';

import PostReducer from './reducer_posts';
import { reducer as formReducer } from 'redux-form'; //As creates a variable with that name

const rootReducer = combineReducers({
  posts: PostReducer,
  form: formReducer
});

export default rootReducer;

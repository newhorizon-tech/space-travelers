import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import missionsReducer from './ missions/missionsReducer';

const reducer = combineReducers({

  missions_reducer: missionsReducer,

});

const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

export default store;

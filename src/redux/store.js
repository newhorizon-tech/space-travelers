import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import missionsReducer from './ missions/missionsReducer';
import rocketsReducer from './rockets/rocketsSlice';

const reducer = combineReducers({
  rockets: rocketsReducer,
  missions_reducer: missionsReducer,

});

const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

export default store;

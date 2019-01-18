import {reducer as homeReducer} from '../containers/Home/store';
import { reducer as headerReducer } from '../components/Header/store';
import { reducer as translationReducer } from '../containers/Translation/store';
import { combineReducers } from 'redux';


const reducer = combineReducers({
  home: homeReducer,
  header: headerReducer,
  translation: translationReducer
})


export default reducer;
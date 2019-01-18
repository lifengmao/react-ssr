import { CHANGE_TRANSLATION_LIST } from './constants';

const defaultState = {
  translateList: []
}

export default (state = defaultState, action) => {
  switch(action.type){
    case CHANGE_TRANSLATION_LIST: 
      return {
        ...state,
        translateList: action.list
      }
    default: 
      return state
  }
}
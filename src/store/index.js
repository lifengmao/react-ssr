import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';
import thunk from 'redux-thunk';
import clientAxios from '../client/request';
import serverAxios from '../server/request';

export const getStore = (req) => {
  return createStore(reducer, applyMiddleware(thunk.withExtraArgument(serverAxios(req))));
}

export const getClientStore = () => {
  const defaultState = window.context.state;
  return createStore(reducer,defaultState, applyMiddleware(thunk.withExtraArgument(clientAxios)));
}


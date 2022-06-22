// @reduxjs/toolkit
import { legacy_createStore as createStore, applyMiddleware, compose, combineReducers } from 'redux'
import appReducer from './../modules/app/reducers'
import personalAccountReducer from './../modules/personalAccount/reducers'
import commonReducer from './reducers'
import thunk from 'redux-thunk'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

let reducers = combineReducers({
    appReducer,
    personalAccountReducer,
    commonReducer,
});

const middlewares = [thunk]
const enhancers = [applyMiddleware(...middlewares)]

export default function configStore ( initialState = {} ) {
  // const composeEnhancers =
  //   process.env.NODE_ENV !== 'production' &&
  //   typeof window === 'object' &&
  //   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  //     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ shouldHotReload: false }) : compose
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  /* eslint-enable */

  const store = createStore(
    reducers,
    initialState,
    composeEnhancers(...enhancers),
    // composeEnhancers(compose()),
  )

  return store
}

/* // src/redux/store.js
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import authReducer from './reducers/authReducer';
import dataReducer from './reducers/dataReducer'; // New reducer for handling API data

const rootReducer = combineReducers({
  auth: authReducer,
  data: dataReducer, // New reducer
  // Add other reducers here
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store; */

// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './slices/dataSlice';

const store = configureStore({
  reducer: {
    data: dataReducer,
  },
});

export default store;
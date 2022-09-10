import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import rootreducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMiddleware = createSagaMiddleware();

// Saga => Middleware : Intercepta as actions antes delas chegarem no reducer

const store = createStore(rootreducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;

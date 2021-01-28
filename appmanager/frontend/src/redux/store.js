import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'


const middleware = [thunk];

const reducers = combineReducers({

});

const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(...middleware)),
    );

export default store;
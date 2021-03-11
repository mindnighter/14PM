import {createStore, combineReducers, applyMiddleware} from 'redux';
import {homeReducer} from '../Home/duckHome';
import {singleReducer} from '../Single/duckSingle';
import {albumReducer} from '../Album/duckAlbum';
/*applyMiddleware(asyncActionsMiddleware)*/
const asyncActionsMiddleware = ({dispatch}) => (next) => (action) =>{
    if (typeof action === 'function'){
        return action(dispatch)
    }

    return next(action);
}

const reducer = combineReducers({
    home: homeReducer, 
    single: singleReducer,
    album: albumReducer
})

const store = createStore(reducer, {},  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
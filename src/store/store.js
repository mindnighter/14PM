import {createStore, applyMiddleware} from 'redux';
/*applyMiddleware(asyncActionsMiddleware)*/
const asyncActionsMiddleware = ({dispatch}) => (next) => (action) =>{
    if (typeof action === 'function'){
        return action(dispatch)
    }

    return next(action);
}

const playloadedState = [{}];

export const getPhotos = (photos) =>({
    type: 'get_photos',
    playload: photos
})

const reducer = (state, action) => {
    switch(action.type){
        case 'get_photos': return [...state, {
            photos: [ ...action.playload]
        }];
        default: return state;
    }
}

const store = createStore(reducer, playloadedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
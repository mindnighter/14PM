export const getAlbum = (album) =>({
    type: 'get_album',
    playload: album
})

const playloadedState = {
    album: {}
};

export const singleReducer = (state = playloadedState, action) => {
    switch(action.type){
        case 'get_album': return {...state, album: action.playload}
        default: return state
    }
}
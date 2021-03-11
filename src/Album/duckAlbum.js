export const getAlbumPhotos = (photos) =>({
    type: 'get_albumphotos',
    playload: photos
})

export const albumReducer = (state = null, action) => {
    switch(action.type){
        case 'get_album': return {...state, album: action.playload}
        case 'get_albumphotos': return {...state, albumPhotos: action.playload}
        default: return state
    }
}
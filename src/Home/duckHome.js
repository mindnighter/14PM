export const getPhotos = (photos) =>({
    type: 'get_photos',
    playload: photos
})

const step = 6;

export const increaseStart = (start) =>({
    type: 'increase_start',
    playload: start + step
})

export const setPhoto = (singlePhoto) =>({
    type: 'set_photo',
    playload: singlePhoto
})

export const cleanPhotos = () =>({
    type: 'clean_photos',
})

const playloadedState = {
    limit: 6,
    start: 0,
    photos: []
};

export const homeReducer = (state = playloadedState, action) => {
    switch(action.type){
        case 'get_photos': return {...state, photos:
            state.photos.concat(action.playload)
        }
        case 'increase_start': return {...state, start: action.playload}
        case 'set_photo': return {...state, singlePhoto: action.playload}
        case 'clean_photos': return {...state, photos: [], start: 0}
        default: return state
    }
}
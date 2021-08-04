import { combineReducers } from 'redux';

// actions
const songsReducer = () => {
    return [
        {
            title: 'My Way',
            duration: '2:30'
        },
        {
            title: 'all the good things',
            duration: '2:00'
        },
        {
            title: 'i want it all',
            duration: '3:40'
        },
        {
            title: 'back for more',
            duration: '1:30'
        }
    ]
}

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload
    }
    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});
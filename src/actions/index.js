// action creator

export const selectSong = (song) => {
    return {
        // the type is for creating a trigger
        // if the trigger match it will send the payload
        type: 'SONG_SELECTED',
        payload: song
    }
}

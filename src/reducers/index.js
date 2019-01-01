import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'No Scrubs', duraton: '4:35'},
        { title: 'Macarena', duraton: '2:30'},
        { title: 'All Star', duraton: '3:14'},
        { title: 'I Want it That Way', duraton: '1:45'}
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
}

export default combineReducers( {
    songs: songsReducer,
    selectedSong: selectedSongReducer
});
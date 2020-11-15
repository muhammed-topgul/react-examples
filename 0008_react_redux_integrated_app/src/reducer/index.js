import {SONG_SELECTED} from "../common/actionType";

const songsReducer = () => {
    return [
        {title: 'Araba', duration: '4.30'},
        {title: 'Yaz Yagmuru', duration: '3.45'},
        {title: 'Simarik', duration: '2.59'},
        {title: 'Cakkidi', duration: '3.25'},
    ];
}

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === SONG_SELECTED) {
        return action.payload;
    }

    return selectedSong;
}
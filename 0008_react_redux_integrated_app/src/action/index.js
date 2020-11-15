// Action Creator Class

import {SONG_SELECTED} from "../common/actionType";

export const selectSong = (song) => {
    // Return an action
    return {
        type: SONG_SELECTED,
        payload: song
    }
}
import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Dennis", duration: "4:10" },
    { title: "Leroy", duration: "2:10" },
    { title: "Remoco", duration: "4:40" },
    { title: "Robot", duration: "3:17" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});

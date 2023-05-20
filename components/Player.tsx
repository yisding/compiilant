import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const Player = () => (
  <AudioPlayer
    src="https://firebasestorage.googleapis.com/v0/b/compiilant.appspot.com/o/name_spanish.mp3?alt=media&token=7ac8be0c-9464-4743-8924-95839a6f3fb1"
    onPlay={(e) => console.log("onPlay")}
    // other props here
  />
);

export default Player;

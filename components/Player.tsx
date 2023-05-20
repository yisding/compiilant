import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { Badge } from "@/components/ui/badge";

interface PlayerProps {
  recordingURL: string;
  laws: string[];
  originalText: string;
}

const Player = ({ recordingURL, laws, originalText }: PlayerProps) => (
  <div className="flex flex-col w-[480px] m-8">
    <div>{originalText}</div>
    <AudioPlayer
      src={recordingURL}
      onPlay={(e) => console.log("onPlay")}
      // other props here
    />
    <div className="flex flex-row m-4">
      {laws.map((law, i) => (
        <Badge key={i} variant="outline">
          {law}
        </Badge>
      ))}
    </div>
  </div>
);

export default Player;

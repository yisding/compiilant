import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { Badge } from "@/components/ui/badge";
import ReactMarkdown from "react-markdown";
// @ts-ignore
import { useSpeechSynthesis } from "@readpanda/react-speech-kit";
import Image from "next/image";

interface PlayerProps {
  recordingURL?: string;
  laws: string[];
  tags: string[];
  originalText?: string;
  redactedMarkdown?: string;
  redactedText?: string;
}

const Player = ({
  recordingURL,
  laws,
  originalText,
  tags,
  redactedMarkdown,
  redactedText,
}: PlayerProps) => {
  const { speak } = useSpeechSynthesis();

  return (
    <div className="flex flex-col w-[480px] m-8 rounded-2xl border border-sky-500 p-8">
      {originalText && <div>{originalText}</div>}
      {redactedMarkdown && <ReactMarkdown>{redactedMarkdown}</ReactMarkdown>}
      {recordingURL ? (
        <AudioPlayer
          src={recordingURL}
          onPlay={(e) => console.log("onPlay")}
          // other props here
        />
      ) : (
        <div className="text-center">
        <button
          onClick={() => {
            speak({ text: redactedText, rate: 0.8 });
          }}
          className="text-center"
        >
          <Image
            src="/playsound.png"
            alt="play sound"
            height={96}
            width={96}
            className="h-16 w-16 lg:h-24 lg:w-24"
          />
        </button>
        </div>
      )}

      <div className="flex flex-row my-4">
        {tags.map((tag, i) => (
          <Badge key={i} variant="outline" className="mx-2">
            {tag}
          </Badge>
        ))}
      </div>

      <div className="flex flex-row my-4">
        {laws.map((law, i) => (
          <Badge key={i} variant="outline" className="mx-2">
            {law}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default Player;

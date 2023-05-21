import React, { useRef, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import ky from "ky";
import Image from "next/image";
import { Button } from "./ui/button";
import Player from "./Player";

const Speaky = () => {
  const { transcript, resetTranscript } = useSpeechRecognition();
  const [isListening, setIsListening] = useState(false);
  const [recording, setRecording] = useState(null);
  const [loading, setLoading] = useState(false);
  const microphoneRef = useRef(null);
  if (!SpeechRecognition.browserSupportsSpeechRecognition) {
    return (
      <div className="mircophone-container">
        Your browser does not support speech recognition. Please try this using
        Chrome or Safari.
      </div>
    );
  }
  const handleListening = () => {
    if (!isListening) {
      setIsListening(true);
      if (SpeechRecognition.browserSupportsSpeechRecognition) {
        SpeechRecognition.startListening({ continuous: true });
      } else {
        SpeechRecognition.startListening({ continuous: false });
      }
    } else {
      stopHandle();
      handleOutput();
    }
  };
  const stopHandle = () => {
    setIsListening(false);
    SpeechRecognition.stopListening();
  };
  const handleReset = () => {
    stopHandle();
    resetTranscript();
    setRecording(null);
  };
  const handleOutput = async () => {
    setLoading(true);
    //json output
    const data = await ky
      .get(`/api/pii?phrase=${encodeURIComponent(transcript)}`, {
        timeout: false,
      })
      .json();
    setRecording(data);
    setLoading(false);
  };

  return (
    <div className="text-center m-24">
      <div className="flex justify-center">
      <Image
        src={"/microphone.png"}
        className="microphone-icon"
        alt="Microphone"
        width={100}
        height={100}
        onClick={handleListening}
      />
      </div>
      {<Button onClick={handleReset}>Reset</Button>}
      {transcript && (
        <div className="microphone-result-container">
          <div className="microphone-result-text">{transcript}</div>
        </div>
      )}
      {loading && <div>Loading...</div>}
      {recording && (
        <Player
          laws={recording.laws}
          tags={recording.tags}
          redactedMarkdown={recording.redactedMarkdown}
          redactedText={recording.redactedText}
        />
      )}
    </div>
  );
};

export default Speaky;

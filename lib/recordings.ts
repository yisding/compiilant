const recordings = [
  {
    originalText: "My email address is emmafu730@gmail.com.",
    recordingURL:
      "https://firebasestorage.googleapis.com/v0/b/compiilant.appspot.com/o/name_spanish.mp3?alt=media&token=7ac8be0c-9464-4743-8924-95839a6f3fb1",
    redactedMarkdown: "My email address is [**EMAIL**].",
    redactedText: "My email address is EMAIL.",
    tags: ["email"],
    laws: [],
  },

  {
    originalText: "My name is Emma Fu.",
    recordingURL:
      "https://firebasestorage.googleapis.com/v0/b/compiilant.appspot.com/o/name_spanish.mp3?alt=media&token=7ac8be0c-9464-4743-8924-95839a6f3fb1",
    redactedMarkdown: "My name is [**NAME**].",
    redactedText: "My name is NAME.",
    tags: ["name"],
    laws: [],
  },

  {
    originalText: "I am 10 years old.",
    recordingURL:
      "https://firebasestorage.googleapis.com/v0/b/compiilant.appspot.com/o/name_spanish.mp3?alt=media&token=7ac8be0c-9464-4743-8924-95839a6f3fb1",
    redactedMarkdown: "I am [**AGE**].",
    redactedText: "I am AGE.",
    tags: ["age"],
    laws: ["COPPA"],
  },
  {
    originalText:
      "My home address is 599 El Camino Real in Sunnyvale California",
    recordingURL:
      "https://firebasestorage.googleapis.com/v0/b/compiilant.appspot.com/o/name_spanish.mp3?alt=media&token=7ac8be0c-9464-4743-8924-95839a6f3fb1",
    redactedMarkdown: "My home address is [**ADDRESS**]",
    redactedText: "My home address is ADDRESS",
    tags: ["address"],
    laws: [],
  },
];

export default recordings;
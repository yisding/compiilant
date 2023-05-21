const recordings = [
  {
    originalText: "My email address is emmafu730@gmail.com.",
    recordingURL:
      "https://firebasestorage.googleapis.com/v0/b/compiilant.appspot.com/o/Postive%20-%20email%20address.mp3?alt=media&token=823d67ba-8efd-41ba-86b1-fed95bd4afe4",
    redactedMarkdown: "My email address is [**EMAIL**].",
    redactedText: "My email address is EMAIL.",
    tags: ["email"],
    laws: [],
  },
  {
    originalText: "I am 10 years old.",
    recordingURL:
      "https://firebasestorage.googleapis.com/v0/b/compiilant.appspot.com/o/Postive%20-%20Minor%204th%20grader.mp3?alt=media&token=c9fe8ce5-a58a-469f-96ed-e2986d0ab0fa",
    redactedMarkdown: "I am [**AGE**].",
    redactedText: "I am AGE.",
    tags: ["age"],
    laws: ["COPPA"],
  },

  {
    originalText:
      "My home address is 599 El Camino Real in Sunnyvale California",
    recordingURL:
      "https://firebasestorage.googleapis.com/v0/b/compiilant.appspot.com/o/Postive%20-%20home%20address%20.mp3?alt=media&token=de37bd90-cc0e-45a3-a92e-facd9e09bd91",
    redactedMarkdown: "My home address is [**ADDRESS**]",
    redactedText: "My home address is ADDRESS",
    tags: ["address"],
    laws: [],
  },
  {
    originalText:
      "This is Michele Young. I am 56. I had a breast cancer about five years ago.",
    recordingURL:
      "https://firebasestorage.googleapis.com/v0/b/compiilant.appspot.com/o/Positive%20-%20Medical%20condition.mp3?alt=media&token=a24eba21-e5a6-4b82-9980-691a0fe3fe1f",
    redactedMarkdown:
      "This is [**NAME**]. I am [**AGE**]. I had a [**HEALTH_CONDITION**] about five years ago.",
    redactedText:
      "This is NAME. I am AGE. I had a HEALTH_CONDITION about five years ago.",
    tags: ["name", "age", "health_condition"],
    laws: ["HIPAA"],
  },
  {
    originalText:
      "I love Indian food. My husband and I always go to this Indian restaurant in Sunnyvale.",
    recordingURL:
      "https://firebasestorage.googleapis.com/v0/b/compiilant.appspot.com/o/Negative%20-%20Favorite%20food%20Indian.mp3?alt=media&token=a0d3f490-530e-4057-bcfa-f06f52dcfc68",
    redactedMarkdown:
      "I love Indian food. My husband and I always go to this Indian restaurant in Sunnyvale.",
    redactedText:
      "I love Indian food. My husband and I always go to this Indian restaurant in Sunnyvale.",
    tags: [],
    laws: [],
  },
  {
    originalText:
      "I'm planning go to the museum in Paris, if you wanna buy the ticket of the museum, you have to buy the ticket online on the website.",
    recordingURL:
      "https://firebasestorage.googleapis.com/v0/b/compiilant.appspot.com/o/Negative.m4a?alt=media&token=238c53d6-48a1-4635-8d86-ea65dfa29977",
    redactedMarkdown:
      "I'm planning go to the museum in Paris, if you wanna buy the ticket of the museum, you have to buy the ticket online on the website.",
    redactedText:
      "I'm planning go to the museum in Paris, if you wanna buy the ticket of the museum, you have to buy the ticket online on the website.",
    tags: [],
    laws: [],
  },
  {
    originalText:
      "In order to discuss our health insurance plan, I talked about my health condition with my family doctor.",
    recordingURL:
      "https://firebasestorage.googleapis.com/v0/b/compiilant.appspot.com/o/Negative3.m4a?alt=media&token=2b3a01cc-ed86-4a90-bfbf-50dfe98794fa",
    redactedMarkdown:
      "In order to discuss our health insurance plan, I talked about my health condition with my family doctor.",
    redactedText:
      "In order to discuss our health insurance plan, I talked about my health condition with my family doctor.",
    tags: [],
    laws: [],
  },
  {
    originalText:
      "My name is Takayuki Ueda, I have been having a stomach cancer since 2020, so I'm going to the hospital twice a month in London.",
    recordingURL:
      "https://firebasestorage.googleapis.com/v0/b/compiilant.appspot.com/o/Positive.m4a?alt=media&token=2eddf3dd-4c89-4f45-8c76-46afd02b02b3",
    redactedMarkdown:
      "My name is  [**NAME**], I have been having [**HEALTH_CONDITION**] since 2020, so I'm going to the hospital twice a month in [**ADDRESS**].",
    redactedText:
      "My name is NAME, I have been having HEALTH_CONDITION since 2020, so I'm going to the hospital twice a month in ADDRESS.",
    tags: ["address", "health_condition"],
    laws: ["GDPR"],
  },
  {
    originalText:
      "My name is Takayuki Ueda, living in Paris, I am 35 years old now.",
    recordingURL:
      "https://firebasestorage.googleapis.com/v0/b/compiilant.appspot.com/o/Positive2.m4a?alt=media&token=a2fe7a6b-ed59-4c5c-ab38-7b1ae648d95e",
    redactedMarkdown:
      "My name is  [**NAME**], living in [**ADDRESS**], I am [**AGE**] now.",
    redactedText: "My name is  NAME, living in ADDRESS, I am AGE now",
    tags: ["name", "address", "age"],
    laws: ["GDPR"],
  },
];
export default recordings;

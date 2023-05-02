# Voice Synthesis

This web application translates speech into Japanese speech, try it at [voicefu.com](https://voicefu.com/)

Techs:

1. Speech to text: [Whisper](https://platform.openai.com/docs/guides/speech-to-text)
2. Translation: [GPT](https://platform.openai.com/docs/guides/chat)
3. Japanese Voice Synthesis: [Voicevox](https://github.com/VOICEVOX/voicevox_engine)

[back end code](https://github.com/tylim88/Voicefu-back-end)

## Development Mode

1. This project use Firebase Firestore, please enable it in Firebase Console
2. Replace `src/firebase_/config.ts` with your Firebase config.
3. Create a `.env` file at project root and paste `VITE_BASE_URL=http://localhost:3001` into it.
4. `npm run dev` to see the website on `http://127.0.0.1:5173/`

## Production Mode

To be continued

app에서 microphone 사용을 위한 권한 요청이 필요함.

web에서 사용했던 code는 사용하지 못함. => `AudioWorkletNode` 같은 web api를 사용하지 못하기 때문에

Dom component로 접근해보려고 했으나 mic control이 안됨

`connectConversation`로 연결하면
`sendUserMessageContent`를 테스트로 진행

ws client event handler의 `conversation.updated`에서 오디오 데이터 `delta.audio`를 받아 와서
재생을 하면 되는데, 지금 재생하는 방법을 못찾음

https://platform.openai.com/docs/guides/realtime

Today, the Realtime API supports two formats:

raw 16 bit PCM audio at 24kHz, 1 channel, little-endian
G.711 at 8kHz (both u-law and a-law)

input transcript를 위한 opton
set the `input_audio_transcription` field on a `session.update` event.

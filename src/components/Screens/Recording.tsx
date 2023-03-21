import { Stack } from '@mantine/core'
import { useState } from 'react'
import { AudioRecorder } from 'react-audio-voice-recorder'

export const Recording = () => {
    const [blob, setBlob] = useState<Blob | null>(null)
    return (
        <Stack align='center' justify='center'>
            <AudioRecorder
                onRecordingComplete={(blob) => {
                    setBlob(blob)
                }}
            />
            {blob ? <audio src={URL.createObjectURL(blob)} controls /> : null}
        </Stack>
    )
}

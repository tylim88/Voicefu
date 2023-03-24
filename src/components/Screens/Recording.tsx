import { Stack } from '@mantine/core'
import { useState } from 'react'
import { AudioRecorder } from 'react-audio-voice-recorder'
import { queryClient } from '~/client'
import { useUserStore } from '~/stores'

export const Recording = () => {
    const [blob, setBlob] = useState<Blob | null>(null)
    const user = useUserStore((state) => state.user)
    return (
        <Stack align='center' justify='center'>
            <AudioRecorder
                onRecordingComplete={(blob) => {
                    if (user) {
                        setBlob(blob)
                        const formData = new FormData()
                        formData.append('userIdToken', user.uid)
                        formData.append('audioFile', blob)
                        queryClient.createTranscription.mutation({
                            body: formData,
                        })
                    }
                }}
            />
            {blob ? <audio src={URL.createObjectURL(blob)} controls /> : null}
        </Stack>
    )
}

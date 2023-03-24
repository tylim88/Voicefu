import { Stack } from '@mantine/core'
import { useState } from 'react'
import { AudioRecorder } from 'react-audio-voice-recorder'
import { queryClient } from '~/client'
import { useFirebaseStore } from '~/stores'

export const Recording = () => {
    const [blob, setBlob] = useState<Blob | null>(null)
    const auth = useFirebaseStore((state) => state.auth)
    return (
        <Stack align='center' justify='center'>
            <AudioRecorder
                onRecordingComplete={async (blob) => {
                    const idToken = await auth.currentUser
                        ?.getIdToken(true)
                        .then((idToken) => idToken)
                    if (idToken) {
                        setBlob(blob)
                        const formData = new FormData()
                        formData.append('userIdToken', idToken)
                        formData.append('audioFile', blob)
                        const body = await queryClient.createTranscription
                            .mutation({
                                body: formData,
                            })
                            .then((res) => res.body)
                    }
                }}
            />
            {blob ? <audio src={URL.createObjectURL(blob)} controls /> : null}
        </Stack>
    )
}

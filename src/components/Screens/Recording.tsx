import { Stack, Title, Text } from '@mantine/core'
import { useState } from 'react'
import { AudioRecorder } from 'react-audio-voice-recorder'
import { queryClient } from '~/client'
import { useFirebaseStore } from '~/stores'
import { notifications } from '@mantine/notifications'
import { GuideButton } from '../Buttons/Guide'

export const Recording = ({
    onRecordingComplete,
}: {
    onRecordingComplete: (body: {
        tokenUsage: number
        translatedText: string
        transcription: string
        base64Wav: string | null
    }) => void
}) => {
    const [url, setURL] = useState<string | null>(null)
    const auth = useFirebaseStore((state) => state.auth)
    return (
        <Stack align='center' justify='center' mb='1.5rem'>
            <Title mb='1.5rem' align='center'>
                Translate Speech Into Japanese
            </Title>
            <GuideButton mb='1.5rem' />
            <AudioRecorder
                onRecordingComplete={async (blob) => {
                    setURL(null)
                    notifications.show({
                        message:
                            'Translating, please wait for around 15 seconds',
                        loading: true,
                        autoClose: false,
                    })
                    try {
                        const idToken = await auth?.currentUser
                            ?.getIdToken(true)
                            .then((idToken) => idToken)
                        if (idToken) {
                            setURL(URL.createObjectURL(blob))
                            const formData = new FormData()
                            formData.append('userIdToken', idToken)
                            formData.append('audioFile', blob)
                            await queryClient.createTranscription
                                .mutation({
                                    body: formData,
                                })
                                .then((res) => {
                                    notifications.clean()
                                    if (res.status === 200) {
                                        onRecordingComplete(res.body)
                                        notifications.show({
                                            message: 'Translation is complete',
                                        })
                                    } else if (
                                        res.status === 401 ||
                                        res.status === 500
                                    ) {
                                        onRecordingComplete({
                                            tokenUsage: 0,
                                            transcription:
                                                'error: ' + res.body.message,
                                            translatedText:
                                                'error: ' + res.body.message,
                                            base64Wav: null,
                                        })
                                    }
                                    if (res.status !== 200) {
                                        notifications.show({
                                            message:
                                                'Error, please contact the author on github',
                                        })
                                    }
                                })
                        }
                    } catch (e) {
                        notifications.clean()
                        notifications.show({
                            message:
                                'Error, please contact the author on github',
                        })
                    }
                }}
            />
            {url ? (
                <>
                    <Text>Your Speech:</Text>
                    <audio src={url} controls />
                </>
            ) : null}
        </Stack>
    )
}

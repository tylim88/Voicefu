import { Center, Textarea, Stack, Text, Flex } from '@mantine/core'
import { useState, useEffect } from 'react'
import { Login } from './Login'
import { Recording } from './Recording'
import { useFirebaseStore, useUserStore } from '~/stores'
import { onSnapshot } from 'firelordjs'
import { TextWithPopover } from '../Typography'
import { Buffer } from 'buffer'

const convertBase64toURL = (base64String: string) => {
    const buffer = Buffer.from(base64String, 'base64')
    const arrayBuffer = new ArrayBuffer(buffer.length)
    const view = new Uint8Array(arrayBuffer)
    for (let i = 0; i < buffer.length; ++i) {
        view[i] = buffer[i]!
    }
    const blob = new Blob([arrayBuffer], { type: 'audio/wav' })
    const url = URL.createObjectURL(blob)
    return url
}

export const Home = () => {
    const user = useUserStore((state) => state.user)
    const [transcription, setTranscription] = useState('')
    const [tokenUsage, setTokenUsage] = useState(0)
    const [translatedText, setTranslatedText] = useState('')
    const [url, setURL] = useState<null | string>(null)
    const firebase = useFirebaseStore()
    const userStore = useUserStore()
    const [token, setToken] = useState<undefined | number>(undefined)

    useEffect(() => {
        const user = userStore.user
        return user
            ? onSnapshot(firebase.fs.users.doc(user.uid), (snapshot) => {
                  const freeToken = snapshot.data()?.freeToken
                  setToken(freeToken)
              })
            : undefined
    }, [firebase.auth?.currentUser, firebase.fs?.users, userStore.user])
    return (
        <Center h={'100%'}>
            {user ? (
                <Stack w='80%'>
                    <Recording
                        onRecordingComplete={(body) => {
                            setTranscription(body.transcription)
                            setTokenUsage(body.tokenUsage)
                            setTranslatedText(body.translatedText)
                            body.base64Wav &&
                                setURL(convertBase64toURL(body.base64Wav))
                        }}
                    />
                    <Textarea
                        label={
                            <TextWithPopover
                                text='Speech To Text&nbsp;'
                                popoverText={`Supported Speech to Text Languages: Afrikaans,
                        Arabic, Armenian, Azerbaijani,
                        Belarusian, Bosnian, Bulgarian,
                        Catalan, Chinese, Croatian, Czech,
                        Danish, Dutch, English, Estonian,
                        Finnish, French, Galician, German,
                        Greek, Hebrew, Hindi, Hungarian,
                        Icelandic, Indonesian, Italian,
                        Japanese, Kannada, Kazakh, Korean,
                        Latvian, Lithuanian, Macedonian,
                        Malay, Marathi, Maori, Nepali,
                        Norwegian, Persian, Polish,
                        Portuguese, Romanian, Russian,
                        Serbian, Slovak, Slovenian, Spanish,
                        Swahili, Swedish, Tagalog, Tamil,
                        Thai, Turkish, Ukrainian, Urdu,
                        Vietnamese, and Welsh.`}
                            />
                        }
                        value={transcription}
                        disabled
                        styles={(theme) => ({
                            input: {
                                color: `${
                                    theme.colorScheme === 'light'
                                        ? '#212529'
                                        : 'white'
                                } !important`,
                                cursor: 'auto !important',
                                opacity: `1 !important`,
                            },
                        })}
                    />
                    <Textarea
                        label={
                            <TextWithPopover
                                text='Text To Speech&nbsp;'
                                popoverText={`Only supports text to
                            Japanese speech.`}
                            />
                        }
                        value={translatedText}
                        disabled
                        styles={(theme) => ({
                            input: {
                                color: `${
                                    theme.colorScheme === 'light'
                                        ? '#212529'
                                        : 'white'
                                } !important`,
                                cursor: 'auto !important',
                                opacity: `1 !important`,
                            },
                        })}
                    />

                    {url ? (
                        <>
                            <Text>Translated Speech:</Text>
                            <Flex justify='flex-start'>
                                <audio src={url} controls />
                            </Flex>
                        </>
                    ) : null}
                    <Text>
                        1000 free tokens every month, 1 token = 0.75 word
                    </Text>
                    <Text>
                        Token reset occurs at 00:00 UTC on the first day of
                        every month
                    </Text>
                    <Text>Token Usage: {tokenUsage}</Text>
                    {token !== undefined ? (
                        <Text>Available Tokens: {token}</Text>
                    ) : null}
                    <Text>This is an open source project</Text>
                </Stack>
            ) : (
                <Login />
            )}
        </Center>
    )
}

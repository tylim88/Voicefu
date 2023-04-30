import { z } from 'zod'
import { c } from './init'

export const createTranscription = {
    method: 'POST',
    path: '/createTranscription',
    summary: 'create whisper transcription',
    contentType: 'multipart/form-data',
    responses: {
        200: z.object({
            tokenUsage: z.number().min(0),
            translatedText: z.string(),
            transcription: z.string(),
            base64Wav: z.string(),
        }),
        401: z.object({
            message: z.string(),
        }),
        500: z.object({
            message: z.string(),
        }),
    },
    body: c.body<{ audioFile: File; userIdToken: string }>(),
} as const

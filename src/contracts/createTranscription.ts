import { z } from 'zod'
import { c } from './init'

export const createTranscription = {
    method: 'POST',
    path: '/api/createTranscription',
    summary: 'create whisper transcription',
    contentType: 'multipart/form-data',
    responses: {
        200: z.object({
            translatedText: z.string(),
        }),
        401: z.object({
            message: z.string(),
        }),
    },
    body: c.body<{ audioFile: File; userIdToken: string }>(),
} as const

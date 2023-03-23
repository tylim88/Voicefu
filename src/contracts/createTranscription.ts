import { z } from 'zod'

export const createTranscription = {
    method: 'POST',
    path: '/api/createTranscription',
    summary: 'create whisper transcription',
    responses: {
        200: z.object({
            translatedText: z.string(),
        }),
        401: z.object({
            message: z.string(),
        }),
    },
    body: z.instanceof(FormData),
} as const

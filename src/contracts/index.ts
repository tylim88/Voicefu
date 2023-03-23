import { initContract } from '@ts-rest/core'
import { createTranscription } from './createTranscription'

export const c = initContract()

export const contracts = c.router({
    createTranscription,
})

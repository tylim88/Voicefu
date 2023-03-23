import { initQueryClient } from '@ts-rest/react-query'
import { initClient } from '@ts-rest/core'
import { contracts } from '~/contracts'

export const queryClient = initQueryClient(contracts, {
    baseUrl: import.meta.env.VITE_BASE_URL,
    baseHeaders: {},
})

export const client = initClient(contracts, {
    baseUrl: import.meta.env.VITE_BASE_URL,
    baseHeaders: {},
})

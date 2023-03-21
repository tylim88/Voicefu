import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const AUTO_SIGN_IN = 'autoSignIn'

export const useAutoSignInStore = create(
    persist<{
        autoSignIn: boolean
        setAutoSignIn: (value: boolean) => void
    }>(
        (set) => {
            return {
                autoSignIn: false,
                setAutoSignIn: (value: boolean) => {
                    set((state) => ({ ...state, autoSignIn: value }))
                },
            }
        },
        { name: AUTO_SIGN_IN }
    )
)

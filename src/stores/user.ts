import { create } from 'zustand'
import { User } from 'firebase/auth'

export const useUserStore = create<{
    user: User | null
    setUser: (user: User | null) => void
}>((set) => ({
    user: null,
    setUser: (user: User | null) => set((state) => ({ ...state, user })),
}))

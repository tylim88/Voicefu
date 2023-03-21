import { create } from 'zustand'
import { firebaseConfig } from '~/firebase_'
import { initializeApp, FirebaseApp, deleteApp } from 'firebase/app'
import { Auth, getAuth } from 'firebase/auth'

export const useFirebaseStore = create<{
    app: FirebaseApp
    auth: Auth | null
    initialize: () => void
}>((set) => ({
    app: null!,
    auth: null,
    initialize: () => {
        set((state) => {
            state.app && deleteApp(state.app)
            const app = initializeApp(firebaseConfig)
            return { ...state, auth: getAuth(app), app }
        })
    },
}))

import { create } from 'zustand'
import { firebaseConfig } from '~/firebase_'
import { initializeApp, FirebaseApp, deleteApp } from 'firebase/app'
import { Auth, getAuth } from 'firebase/auth'
import { Users } from '~/firebase_'
import { getFirelord, getFirestore, FirelordRef } from 'firelordjs'

export const useFirebaseStore = create<{
    app: FirebaseApp | null
    auth: Auth | null
    fs: { users: FirelordRef<Users> }
    initialize: () => void
}>((set) => ({
    app: null,
    auth: null,
    fs: null!,
    initialize: () => {
        set((state) => {
            state.app && deleteApp(state.app)
            const app = initializeApp(firebaseConfig)
            const db = getFirestore(app)
            return {
                ...state,
                auth: getAuth(app),
                app,
                fs: { users: getFirelord<Users>(db, 'Users') },
            }
        })
    },
}))

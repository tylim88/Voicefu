import { GoogleLoginButton } from 'react-social-login-buttons'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useFirebaseStore, useAutoSignInStore } from '~/stores'
import { notifications } from '@mantine/notifications'
const provider = new GoogleAuthProvider()
provider.setCustomParameters({
    prompt: 'select_account',
})
export const LoginButton = () => {
    const auth = useFirebaseStore((state) => state.auth)
    const setAutoSignIn = useAutoSignInStore((state) => state.setAutoSignIn)
    const autoSignIn = useAutoSignInStore((state) => state.autoSignIn)
    return (
        <>
            <GoogleLoginButton
                onClick={() => {
                    setAutoSignIn(true)
                    auth &&
                        signInWithPopup(auth, provider).catch((err) => {
                            setAutoSignIn(false)
                            notifications.clean()
                        })
                }}
                style={{
                    width: '350px',
                    ...(autoSignIn && {
                        pointerEvents: 'none',
                        cursor: 'not-allowed',
                    }),
                }}
            />
        </>
    )
}

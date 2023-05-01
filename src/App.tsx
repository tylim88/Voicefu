import { useState, useEffect } from 'react'
import {
    MantineProvider,
    ColorSchemeProvider,
    ColorScheme,
} from '@mantine/core'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import { useFirebaseStore, useAutoSignInStore, useUserStore } from './stores'
import { onAuthStateChanged } from 'firebase/auth'
import { Notifications, notifications } from '@mantine/notifications'

export const App = () => {
    const setUser = useUserStore((state) => state.setUser)
    const setAutoSignIn = useAutoSignInStore((state) => state.setAutoSignIn)
    const autoSignIn = useAutoSignInStore((state) => state.autoSignIn)
    const auth = useFirebaseStore((state) => state.auth)
    const initialize = useFirebaseStore((state) => state.initialize)
    const [colorScheme, setColorScheme] = useState<ColorScheme>('dark')
    const toggleColorScheme = (value?: ColorScheme) =>
        setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))

    useEffect(() => {
        initialize()
    }, [initialize])

    useEffect(() => {
        autoSignIn &&
            // this will run twice in dev mode because of react strict mode
            notifications.show({
                message: 'Signing In',
                loading: true,
            })
    }, [autoSignIn])

    useEffect(
        () =>
            auth
                ? onAuthStateChanged(auth, (user) => {
                      setUser(user)
                      setAutoSignIn(!!user)
                      notifications.clean()
                  })
                : undefined,
        [auth, setUser, setAutoSignIn]
    )

    return (
        <ColorSchemeProvider
            colorScheme={colorScheme}
            toggleColorScheme={toggleColorScheme}
        >
            <MantineProvider
                theme={{ colorScheme }}
                withGlobalStyles
                withNormalizeCSS
            >
                <RouterProvider router={router} />
                <Notifications position='top-right' />
            </MantineProvider>
        </ColorSchemeProvider>
    )
}

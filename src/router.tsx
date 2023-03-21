import { createBrowserRouter } from 'react-router-dom'
import { AppShell, Home } from '~/components'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <AppShell Screen={<Home />} />,
    },
])

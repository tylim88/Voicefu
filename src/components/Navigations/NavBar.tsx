import { Navbar as Navbar_ } from '@mantine/core'
import { User } from '../DataDisplay'
import { NavLink } from './NavLink'
import { IconLogin, IconLogout, IconMicrophone } from '@tabler/icons-react'
import { useFirebaseStore, useUserStore } from '~/stores'
const size = '1rem'

type Links = React.ComponentProps<typeof NavLink>

export const Navbar = () => {
    const user = useUserStore((state) => state.user)
    const auth = useFirebaseStore((state) => state.auth)

    const signedIn: Links[] = [
        {
            Icon: <IconMicrophone size={size} />,
            color: 'teal',
            label: 'Recording',
            to: '/',
        },
        {
            Icon: <IconLogout size={size} />,
            color: 'blue',
            label: 'Logout',
            onClick: () => auth.signOut(),
        },
    ]

    const signedOut: Links[] = [
        {
            Icon: <IconLogin size={size} />,
            color: 'green',
            label: 'Login',
            to: '/',
        },
    ]

    const links = (user ? signedIn : signedOut).map((link) => (
        <NavLink {...link} key={link.label} />
    ))

    return (
        <Navbar_ width={{ base: 300 }} p='xs'>
            <Navbar_.Section grow mt='xs'>
                {links}
            </Navbar_.Section>
            <Navbar_.Section>
                <User />
            </Navbar_.Section>
        </Navbar_>
    )
}

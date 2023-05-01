import { useState } from 'react'
import { AppShell as AppShell_ } from '@mantine/core'
import { Navbar } from '../Navigations'
import { Header } from './Header'

export const AppShell = ({ Screen }: { Screen: React.ReactNode }) => {
    const [opened, setOpened] = useState(false)
    return (
        <AppShell_
            navbarOffsetBreakpoint='sm'
            asideOffsetBreakpoint='sm'
            navbar={<Navbar hidden={!opened} />}
            header={<Header opened={opened} setOpened={setOpened} />}
            styles={(theme) => ({
                main: {
                    backgroundColor:
                        theme.colorScheme === 'dark'
                            ? theme.colors.dark[8]
                            : theme.colors.gray[0],
                },
            })}
        >
            {Screen}
        </AppShell_>
    )
}

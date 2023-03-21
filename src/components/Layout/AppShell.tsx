import React from 'react'
import { AppShell as AppShell_ } from '@mantine/core'
import { Navbar } from '../Navigations'
import { Header } from './Header'

export const AppShell = ({ Screen }: { Screen: React.ReactNode }) => {
    return (
        <AppShell_
            padding='md'
            fixed={false}
            navbar={<Navbar />}
            header={<Header />}
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

import { IconSun, IconMoonStars } from '@tabler/icons-react'
import {
    Header as Header_,
    Group,
    ActionIcon,
    useMantineColorScheme,
} from '@mantine/core'
import { Logo } from './Logo'

export const Header = () => {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme()

    return (
        <Header_ height={60}>
            <Group sx={{ height: '100%' }} px={20} position='apart'>
                <Logo colorScheme={colorScheme} />

                <ActionIcon
                    variant='default'
                    onClick={() => toggleColorScheme()}
                    size={30}
                >
                    {colorScheme === 'dark' ? (
                        <IconSun size='1rem' />
                    ) : (
                        <IconMoonStars size='1rem' />
                    )}
                </ActionIcon>
            </Group>
        </Header_>
    )
}

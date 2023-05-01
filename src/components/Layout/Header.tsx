import { IconSun, IconMoonStars, IconBrandGithub } from '@tabler/icons-react'
import {
    Header as Header_,
    Group,
    ActionIcon,
    useMantineColorScheme,
    Flex,
    MediaQuery,
    Burger,
    useMantineTheme,
} from '@mantine/core'
import { Logo } from './Logo'

const Actions = () => {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme()
    return (
        <Flex align='center'>
            <ActionIcon
                variant='default'
                onClick={() =>
                    window.open('https://github.com/tylim88/Voicefu', '_blank')
                }
                size={35}
                mx='1rem'
            >
                <IconBrandGithub size='1.5rem' />
            </ActionIcon>
            <ActionIcon
                variant='default'
                onClick={() => toggleColorScheme()}
                size={35}
            >
                {colorScheme === 'dark' ? (
                    <IconSun size='1.5rem' />
                ) : (
                    <IconMoonStars size='1.5rem' />
                )}
            </ActionIcon>
        </Flex>
    )
}

export const Header = ({
    opened,
    setOpened,
}: {
    opened: boolean
    setOpened: React.Dispatch<React.SetStateAction<boolean>>
}) => {
    const { colorScheme } = useMantineColorScheme()
    const theme = useMantineTheme()
    return (
        <Header_ height={{ base: 70 }} p='md'>
            <MediaQuery largerThan='sm' styles={{ display: 'none' }}>
                <Group position='apart'>
                    <Burger
                        opened={opened}
                        onClick={() => setOpened((o) => !o)}
                        size='sm'
                        color={theme.colors.gray[6]}
                        mr='xl'
                    />
                    <Actions />
                </Group>
            </MediaQuery>
            <MediaQuery smallerThan='sm' styles={{ display: 'none' }}>
                <Group
                    sx={{ height: '100%', width: '100%' }}
                    px={20}
                    position='apart'
                >
                    <Logo colorScheme={colorScheme} />
                    <Actions />
                </Group>
            </MediaQuery>
        </Header_>
    )
}

import { IconSun, IconMoonStars, IconBrandGithub } from '@tabler/icons-react'
import {
    Header as Header_,
    Group,
    ActionIcon,
    useMantineColorScheme,
    Flex,
} from '@mantine/core'
import { Logo } from './Logo'

export const Header = () => {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme()

    return (
        <Header_ height={60}>
            <Group sx={{ height: '100%' }} px={20} position='apart'>
                <Logo colorScheme={colorScheme} />
                <Flex align='center'>
                    <ActionIcon
                        variant='default'
                        onClick={() =>
                            window.open(
                                'https://github.com/tylim88/Voicefu',
                                '_blank'
                            )
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
            </Group>
        </Header_>
    )
}

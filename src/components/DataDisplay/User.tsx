import { IconChevronRight, IconChevronLeft } from '@tabler/icons-react'
import {
    UnstyledButton,
    Group,
    Avatar,
    Text,
    Box,
    useMantineTheme,
    rem,
} from '@mantine/core'
import { useUserStore } from '~/stores'

export function User() {
    const user = useUserStore((state) => state.user)
    const theme = useMantineTheme()

    return user ? (
        <Box
            sx={{
                paddingTop: theme.spacing.sm,
                borderTop: `${rem(1)} solid ${
                    theme.colorScheme === 'dark'
                        ? theme.colors.dark[4]
                        : theme.colors.gray[2]
                }`,
            }}
        >
            <UnstyledButton
                sx={{
                    display: 'block',
                    width: '100%',
                    padding: theme.spacing.xs,
                    borderRadius: theme.radius.sm,
                    color:
                        theme.colorScheme === 'dark'
                            ? theme.colors.dark[0]
                            : theme.black,

                    '&:hover': {
                        backgroundColor:
                            theme.colorScheme === 'dark'
                                ? theme.colors.dark[6]
                                : theme.colors.gray[0],
                    },
                }}
            >
                <Group>
                    <Avatar src={user.photoURL} radius='xl' />
                    <Box sx={{ flex: 1 }}>
                        <Text size='sm' weight={500}>
                            {user.displayName}
                        </Text>
                        <Text color='dimmed' size='xs'>
                            {user.email}
                        </Text>
                    </Box>

                    {theme.dir === 'ltr' ? (
                        <IconChevronRight size={rem(18)} />
                    ) : (
                        <IconChevronLeft size={rem(18)} />
                    )}
                </Group>
            </UnstyledButton>
        </Box>
    ) : null
}

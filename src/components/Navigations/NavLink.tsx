import {
    ThemeIcon,
    UnstyledButton,
    Group,
    Text,
    DefaultMantineColor,
} from '@mantine/core'
import { NavLink as NavLink_, useMatch } from 'react-router-dom'
export type Routes = '' | 'Logout' // not useful for now

export const NavLink = ({
    color,
    Icon,
    label,
    to,
    onClick,
}: {
    Icon: JSX.Element
    label: string
    color: DefaultMantineColor
    to?: `/${Routes}`
    onClick?: () => void
}) => {
    const active = useMatch(`${to}/`)
    const Comp = ({ children }: { children: React.ReactNode }) =>
        to ? (
            <NavLink_
                to={to}
                style={{
                    textDecoration: 'none',
                }}
            >
                {children}
            </NavLink_>
        ) : (
            <>{children}</>
        )

    return (
        <Comp>
            <UnstyledButton
                onClick={onClick}
                sx={(theme) => ({
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
                })}
            >
                <Group>
                    <ThemeIcon color={color} variant={'light'}>
                        {Icon}
                    </ThemeIcon>
                    <Text
                        size='sm'
                        sx={{ fontWeight: active ? 'bolder' : 'normal' }}
                    >
                        {label}
                    </Text>
                </Group>
            </UnstyledButton>
        </Comp>
    )
}

import { Text, Stack } from '@mantine/core'
import { LoginButton } from '../Buttons'

export const Login = () => {
    return (
        <Stack>
            <Text ta='center'>Demo App, free 750 words per month</Text>
            <LoginButton />
        </Stack>
    )
}

import { Text, Stack } from '@mantine/core'
import { LoginButton } from '../Buttons'

export const Login = () => {
    return (
        <Stack>
            <Text ta='center'>Demo App, free 50 minutes per month</Text>
            <LoginButton />
        </Stack>
    )
}

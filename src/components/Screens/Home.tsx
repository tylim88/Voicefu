import { Center } from '@mantine/core'
import { Login } from './Login'
import { Recording } from './Recording'
import { useUserStore } from '~/stores'

export const Home = () => {
    const user = useUserStore((state) => state.user)
    return <Center h={'100%'}>{user ? <Recording /> : <Login />}</Center>
}

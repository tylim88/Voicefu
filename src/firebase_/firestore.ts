import { MetaTypeCreator } from 'firelordjs'

export type Users = MetaTypeCreator<
    {
        freeToken: number
    },
    'Users'
>

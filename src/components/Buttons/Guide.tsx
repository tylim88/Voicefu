import { Button } from '@mantine/core'

export const GuideButton = () => {
    return (
        <>
            <Button
                variant='gradient'
                gradient={{ from: 'teal', to: 'lime', deg: 105 }}
            >
                Guide
            </Button>
        </>
    )
}

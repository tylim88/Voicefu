import {
    Button,
    Modal,
    Image,
    Stack,
    Group,
    ActionIcon,
    Text,
    ButtonProps,
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { useState } from 'react'
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react'
import img1 from '~/img/step1.png'
import img2 from '~/img/step2.png'
import img3 from '~/img/step3.png'
import img4 from '~/img/step4.png'
import img5 from '~/img/step5.png'
import img6 from '~/img/step6.png'

const steps: { image: string; text: string }[] = [
    { image: img1, text: 'click the recording button' },
    { image: img2, text: 'allow microphone access' },
    { image: img3, text: 'record your speech' },
    { image: img4, text: 'click the save button to finish recording' },
    { image: img5, text: 'wait for 10-20 seconds' },
    { image: img6, text: 'finally play the translated speech' },
]

export const GuideButton = (props: ButtonProps) => {
    const [opened, { open, close }] = useDisclosure(false)
    const [index, setIndex] = useState(0)
    return (
        <>
            <Modal
                opened={opened}
                onClose={close}
                title='Step By Step'
                size='lg'
                centered
            >
                <Stack>
                    <Group sx={{ flexWrap: 'nowrap' }}>
                        <ActionIcon
                            disabled={index === 0}
                            onClick={() => setIndex((index) => index - 1)}
                        >
                            <IconChevronLeft size='1.5rem' />
                        </ActionIcon>
                        <Image
                            maw={480}
                            mx='auto'
                            radius='md'
                            src={steps[index]!.image}
                            alt={steps[index]!.text}
                        />
                        <ActionIcon
                            disabled={index + 1 === steps.length}
                            onClick={() => setIndex((index) => index + 1)}
                        >
                            <IconChevronRight size='1.5rem' />
                        </ActionIcon>
                    </Group>
                    <Text align='center'>{steps[index]!.text}</Text>
                    <Text align='center'>
                        {index + 1}/{steps.length}
                    </Text>
                </Stack>
            </Modal>
            <Button
                onClick={open}
                variant='gradient'
                gradient={{ from: 'teal', to: 'lime', deg: 105 }}
                {...props}
            >
                Guide
            </Button>
        </>
    )
}

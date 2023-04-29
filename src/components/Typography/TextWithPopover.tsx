import { Text, ActionIcon, Flex, Popover } from '@mantine/core'
import { IconQuestionMark } from '@tabler/icons-react'

export const TextWithPopover = ({
    text,
    popoverText,
}: {
    text: string
    popoverText: string
}) => (
    <Flex align={'center'} mb='5px'>
        <Text>{text}</Text>
        <Popover width={300} position='top' withArrow>
            <Popover.Target>
                <ActionIcon variant='default' size={30}>
                    <IconQuestionMark size={'1rem'} />
                </ActionIcon>
            </Popover.Target>
            <Popover.Dropdown>
                <Text size='sm'>{popoverText}</Text>
            </Popover.Dropdown>
        </Popover>
    </Flex>
)

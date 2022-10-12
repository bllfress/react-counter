import { useState } from 'react'
import { Center, Text, Stack } from '@chakra-ui/react'
import Button from './Button'

export default function App() {
  const [count, setCount] = useState(0)

  const btns = [
    { children: '+', onClick: () => setCount(count + 1) },
    { children: '-', onClick: () => setCount(count - 1) },
    { children: '*2', onClick: () => setCount(count * 2) },
  ]

  return (
    <Center bg="pink" h="100vh" color="white">
      <Stack spacing={0} direction="column" align="center">
        <Stack spacing={4} direction="row" align="center">
          {btns.map(btn => (
            <Button {...btn} />
          ))}
        </Stack>
        <Text fontSize="4xl" color="tomato">
          {count}
        </Text>
      </Stack>
    </Center>
  )
}

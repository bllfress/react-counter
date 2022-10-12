import { Button as ChakraButton } from '@chakra-ui/react'
export default function Button({ children, onClick }) {
  return (
    <ChakraButton color="tomato" onClick={onClick}>
      {children}
    </ChakraButton>
  )
}

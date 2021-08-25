import { Text, Container} from '@chakra-ui/react'
export default function TextDestino(){
  return (
    <Container maxW="container.xl" my="10" borderLeft="2px" borderColor="orange.700">
      <Text fontSize={['6rem', '1.2rem']}>
        The quick brown fox jumps over the lazy dog is an English-language pangram—a
        sentence that contains all of the letters of the English alphabet. Owing to
        its existence, Chakra was created.
      </Text>
    </Container>
  )
}

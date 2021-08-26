import { Text, Container} from '@chakra-ui/react'
export default function TextDestino(){
  return (
    <Container maxW="container.xl" my="10" borderLeft="2px" borderColor="orange.700">
      <Text fontSize={[ '1.2rem','1.4rem']}>
      Fique por dentro das proximas viagens.
      </Text>
    </Container>
  )
}

import { Container } from '@chakra-ui/react'
import Card from '../components/ContentTicket/Card'
import Head from 'next/head'
import Footer  from '../components/Footer'
import TextDestino from '../components/ContentTicket/Text'
export default function Destinos(){
  return (
    <>
      <Head>
        <title>LotOnline | Próximas Viagens</title>
      </Head>
      <Container maxW="container.xl">
        <TextDestino />
        <Card />
        <Footer />
      </Container>
    </>
  )
}

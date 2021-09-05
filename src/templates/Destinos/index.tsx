import { Container } from "@chakra-ui/react";
import { Card } from "../../components/CardDestino/Card";
import Head from "next/head";
import Footer from '../../components/Footer'
import TextDestino from "../../components/ContentTicket/Text";
import { DestinosProps } from "../../components/CardDestino/Card";


export default function DestinosTemplate({ destinos }: DestinosProps) {
  return (
    <>
      <Head>
        <title>LotOnline | Próximas Viagens</title>
      </Head>
      <Container maxW="container.xl">
        <TextDestino />
        <Card destinos={destinos} />
      </Container>
      <Footer />
    </>
  );
}


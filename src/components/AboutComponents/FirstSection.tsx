import ImageSection from "../../../public/img/order-ride-bro.svg";
import Image from "next/image";

import {
  Box,
  SimpleGrid,
  Flex,
  Container,
  Heading,
  Text,
  Stack,
  StackDivider,
  useColorModeValue,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@chakra-ui/react";

import { AddIcon, MinusIcon } from "@chakra-ui/icons";

export default function SFirstSection() {
  return (
    <>
      <Container maxW="container.xl">
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} mb="10">
          <Stack spacing={4}>
            <Heading>Muito mais que simplesmente viajar</Heading>
            <Text color={"gray.500"} fontSize={"lg"}>
              A{' '}
              <Text as="span" fontWeight="bold" color="orange.700">
               LotOnline{' '}
              </Text>
              como uma empresa de lotação de taxi para viagens, funciona da
              seguinte maneira:
            </Text>
            <Stack
              spacing={4}
              divider={
                <StackDivider
                  borderColor={useColorModeValue("gray.100", "gray.700")}
                />
              }
            >
              <Accordion allowMultiple>
                <AccordionItem>
                  {({ isExpanded }) => (
                    <>
                      <h2>
                        <AccordionButton _focus={{boxShadow: "none"}}>
                          <Box flex="1" textAlign="left">
                            Para você passageiro!
                          </Box>
                          {isExpanded ? (
                            <MinusIcon fontSize="12px" />
                          ) : (
                            <AddIcon fontSize="12px" />
                          )}
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                        Na LotOnline você pode agendar a sua viagem de forma
                        simples e pratica, desta forma basta clicar em menu
                        proximas viagens e verificar o destino disponível,
                        depois disso entre em contato com a nossa equipe de
                        atendimento.
                      </AccordionPanel>
                    </>
                  )}
                </AccordionItem>

                <AccordionItem>
                  {({ isExpanded }) => (
                    <>
                      <h2>
                        <AccordionButton _focus={{boxShadow: "none"}}>
                          <Box flex="1" textAlign="left">
                            Para você motorista!
                          </Box>
                          {isExpanded ? (
                            <MinusIcon fontSize="12px" />
                          ) : (
                            <AddIcon fontSize="12px" />
                          )}
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                        Você que fazes viajes constantes no interior do país,
                        com varios lugares disponível a no seu veículo a
                        LotOnline te oferece a oportunidade de comecomeçares a
                        facturar,basta ligares para a nossa equipe de
                        atendimento.
                      </AccordionPanel>
                    </>
                  )}
                </AccordionItem>

                <AccordionItem>
                  {({ isExpanded }) => (
                    <>
                      <h2>
                        <AccordionButton _focus={{boxShadow: "none"}}>
                          <Box flex="1" textAlign="left">
                            Para você que quer enviar uma carga!
                          </Box>
                          {isExpanded ? (
                            <MinusIcon fontSize="12px" />
                          ) : (
                            <AddIcon fontSize="12px" />
                          )}
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                        Enviar uma mercadoria nunca foi tão facíl basta entrar
                        em contato com a LotOnline e terás a tua questão
                        resolvida!
                      </AccordionPanel>
                    </>
                  )}
                </AccordionItem>
              </Accordion>
            </Stack>
          </Stack>
          <Stack>
            <Flex>
              <Image
                width={1000}
                height={650}
                layout="intrinsic"
                src={ImageSection}
                alt="Imagem principal"
              />
            </Flex>
          </Stack>
          
        </SimpleGrid>
      </Container>
    </>
  );
}

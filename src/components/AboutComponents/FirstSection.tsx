import ImageSection from '../../../public/img/order-ride-bro.svg'
import Image from 'next/image'

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
  } from '@chakra-ui/react';

  import { ReactElement } from 'react';
  import { AddIcon } from '@chakra-ui/icons';
  
  interface FeatureProps {
    text: string;
    iconBg: string;
    icon?: ReactElement;
  }
  
  const Feature = ({ text, icon, iconBg }: FeatureProps) => {
    return (
      <Stack direction={'row'} align={'center'}>
        <Flex
          w={8}
          h={8}
          align={'center'}
          justify={'center'}
          rounded={'full'}
          bg={iconBg}>
          {icon}
        </Flex>
        <Text fontWeight={600}>{text}</Text>
      </Stack>
    );
  };
  
  export default function SFirstSection() {
    return (
      <>
      <Container maxW="container.xl">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} mb="10">
            <Stack spacing={4}>
              <Heading>Muito mais que simplesmente viajar</Heading>
              <Text color={'gray.500'} fontSize={'lg'}>
                A <Text
                  as="span"
                  fontWeight="bold"
                  color="orange.700"
                >
                  LotOnline 
                </Text>
                como uma empresa de lotação de taxi para viagens, funciona da seguinte maneira:
              </Text>
              <Stack
                spacing={4}
                divider={
                  <StackDivider
                    borderColor={useColorModeValue('gray.100', 'gray.700')}
                  />
                }>
                <Accordion allowMultiple>
                <AccordionItem>
      {({ isExpanded }) => (
        <>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
              Para você passageiro!
              </Box>
              {isExpanded ? (
                <AddIcon fontSize="12px" />
              ) : (
                <AddIcon fontSize="12px" />
              )}
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
          Na LotOnline você pode agendar a sua viagem de forma simples e pratica, desta forma basta clicar em menu proximas viagens e verificar o destino disponível, depois disso entre em contato com a nossa equipe de atendimento. 
          </AccordionPanel>
        </>
      )}
    </AccordionItem>

    <AccordionItem>
      {({ isExpanded }) => (
        <>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
              Para você motorista!
              </Box>
              {isExpanded ? (
                <AddIcon fontSize="12px" />
              ) : (
                <AddIcon fontSize="12px" />
              )}
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
          Você que fazes viajes constantes no interior do país, com varios lugares disponível a no seu veículo a LotOnline te oferece a oportunidade de comecomeçares a facturar,basta ligares para a nossa equipe de atendimento.
          </AccordionPanel>
        </>
      )}
    </AccordionItem>

    <AccordionItem>
      {({ isExpanded }) => (
        <>
          <h2>
            <AccordionButton >
              <Box flex="1" textAlign="left">
              Para você que quer enviar uma carga!
              </Box>
              {isExpanded ? (
                <AddIcon fontSize="12px" />
              ) : (
                <AddIcon fontSize="12px" />
              )}
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} >
          Enviar uma mercadoria nunca foi tão facíl basta entrar em contato com a LotOnline e terás a tua questão resolvida!
          </AccordionPanel>
        </>
      )}
    </AccordionItem>
  </Accordion>
              </Stack>
            </Stack>
            <Flex maxWidth='500px'>
            <Image
              width='900px'
              height='300px'
              layout="intrinsic"
              src={ImageSection}
              alt="Imagem principal" 
            />
            </Flex>
          </SimpleGrid>
      </Container>
      </>
    );
  }
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
                Section 1 title
              </Box>
              {isExpanded ? (
                <AddIcon fontSize="12px" />
              ) : (
                <AddIcon fontSize="12px" />
              )}
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            osdojasd
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
                Section 2 title
              </Box>
              {isExpanded ? (
                <AddIcon fontSize="12px" />
              ) : (
                <AddIcon fontSize="12px" />
              )}
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
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
                Section 3 title
              </Box>
              {isExpanded ? (
                <AddIcon fontSize="12px" />
              ) : (
                <AddIcon fontSize="12px" />
              )}
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </>
      )}
    </AccordionItem>
  </Accordion>
              </Stack>
            </Stack>
            <Flex>
            <Image
              width={1000}
              height={600}
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
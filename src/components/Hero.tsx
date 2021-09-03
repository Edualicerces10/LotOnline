import ImageHero from '../../public/img/citydriverpana.svg'
import Image from 'next/image'
import {
    Button,
    Flex,
    Container,
    Heading,
    Stack,
    Text,
    useBreakpointValue,
  } from '@chakra-ui/react';
  
  export default function Hero() {
    return (
      <Container maxW="container.xl">
        <Stack minH={'85vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex flex="2" align={'center'} justify={'center'}>
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
              <Text
                as={'span'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: useBreakpointValue({ base: '20%', md: '15%' }),
                  position: 'absolute',
                  bottom: 2,
                  left: 0,
                  bg: 'orange.400',
                  zIndex: -1,
                }}>
                LotOnline
              </Text>
              <br />
              <Text color={'orange.400'} fontSize="'16px','32px'" as={'span'}>
                Olá, Seja bem-vindo 👋
              </Text>
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'#22223b'}>
              A sua companhia de viajens para todo o país. <br /> Viajens com dinheiro extra!
            </Text>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
              <Button
                rounded={'full'}
                bg={'orange.400'}
                color={'white'}
                _hover={{
                  bg: 'orange.500',
                }}>
                Agende sua viagem
              </Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex="2">
          <Image
            src={ImageHero}
            alt="Imagem principal"
            />
        </Flex>
      </Stack>
      </Container>
    );
  }
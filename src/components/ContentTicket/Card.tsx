import {
    Heading,
    Box,
    SimpleGrid,
    Text,
    Container,
    Stack,
    Button,
    useColorModeValue,
  } from '@chakra-ui/react';
  
  export default function Card() {
    return (
        <Container maxW="container.xl" my="12">
        <SimpleGrid columns={[2,null,3,4]} spacing={10}>
        
        <Box
          maxW={'270px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'md'}
          overflow={'hidden'}>
          
          <Box p={6}>
            <Stack spacing={0} align={'center'} mb={5}>
              <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                15.000kz
              </Heading>
              <Text color={'gray.500'}>Viagem de ida e volta</Text>
            </Stack>
  
            <Stack direction={['column','column','row']} justify={'center'} spacing={6}>
              <Stack spacing={0} align={'center'}>
                <Text>De</Text>
                <Text fontSize={['large', 'sm', 'xl']} color={'gray.500'}>
                  Luanda
                </Text>
              </Stack>
                {/* <Stack spacing={0} align={'center'}>
                  <Text fontSize={['large', 'sm', 'xl']} color={'gray.500'}>
                    ➡
                  </Text>
                </Stack> */}
              <Stack spacing={0} align={'center'}>
                <Text>Para</Text>
                <Text fontWeight={600} fontSize={['large', 'sm', 'xl']} color={'gray.500'}>
                  Malanje
                </Text>
              </Stack>
            </Stack>
  
            <Button
              w={'full'}
              as="a"
              href="https://api.whatsapp.com/send?phone=244931611370&text=Olá%20LotOnline%20Angola"
              target="_blank"
              mt={8}
              bg={useColorModeValue('#151f21', 'gray.900')}
              color={'white'}
              rounded={'md'}
              _hover={{
                transform: 'translateY(-2px)',
                boxShadow: 'lg',
              }}>
              Reservar
            </Button>
          </Box>
        </Box>
        <Box
          maxW={'270px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'md'}
          overflow={'hidden'}>
          
          <Box p={6}>
            <Stack spacing={0} align={'center'} mb={5}>
              <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                15.000kz
              </Heading>
              <Text color={'gray.500'}>Viagem de ida e volta</Text>
            </Stack>
  
            <Stack direction={['column','column','row']} justify={'center'} spacing={6}>
              <Stack spacing={0} align={'center'}>
                <Text>De</Text>
                <Text fontSize={['large', 'sm', 'xl']} color={'gray.500'}>
                  Luanda
                </Text>
              </Stack>
              {/* <Stack spacing={0} align={'center'}>
                <Text fontSize={'3xl'} color={'gray.500'}>
                  ➡
                </Text>
              </Stack> */}
              <Stack spacing={0} align={'center'}>
                <Text>Para</Text>
                <Text fontWeight={600} fontSize={['large', 'sm', 'xl']} color={'gray.500'}>
                  Malanje
                </Text>
              </Stack>
            </Stack>
  
            <Button
              w={'full'}
              as="a"
              href="https://api.whatsapp.com/send?phone=244931611370&text=Olá%20LotOnline%20Angola"
              target="_blank"
              mt={8}
              bg={useColorModeValue('#151f21', 'gray.900')}
              color={'white'}
              rounded={'md'}
              _hover={{
                transform: 'translateY(-2px)',
                boxShadow: 'lg',
              }}>
              Reservar
            </Button>
          </Box>
        </Box>
        <Box
          maxW={'270px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'md'}
          overflow={'hidden'}>
          
          <Box p={6}>
            <Stack spacing={0} align={'center'} mb={5}>
              <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                15.000kz
              </Heading>
              <Text color={'gray.500'}>Viagem de ida e volta</Text>
            </Stack>
  
            <Stack direction={['column','column','row']} justify={'center'} spacing={6}>
              <Stack spacing={0} align={'center'}>
                <Text>De</Text>
                <Text fontSize={['large', 'sm', 'xl']} color={'gray.500'}>
                  Luanda
                </Text>
              </Stack>
              {/* <Stack spacing={0} align={'center'}>
                <Text fontSize={'3xl'} color={'gray.500'}>
                  ➡
                </Text>
              </Stack> */}
              <Stack spacing={0} align={'center'}>
                <Text>Para</Text>
                <Text fontWeight={600} fontSize={['large', 'sm', 'xl']} color={'gray.500'}>
                  Malanje
                </Text>
              </Stack>
            </Stack>
  
            <Button
              w={'full'}
              as="a"
              href="https://api.whatsapp.com/send?phone=244931611370&text=Olá%20LotOnline%20Angola"
              target="_blank"
              mt={8}
              bg={useColorModeValue('#151f21', 'gray.900')}
              color={'white'}
              rounded={'md'}
              _hover={{
                transform: 'translateY(-2px)',
                boxShadow: 'lg',
              }}>
              Reservar
            </Button>
          </Box>
        </Box>
        <Box
          maxW={'270px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'md'}
          overflow={'hidden'}>
          
          <Box p={6}>
            <Stack spacing={0} align={'center'} mb={5}>
              <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                15.000kz
              </Heading>
              <Text color={'gray.500'}>Viagem de ida e volta</Text>
            </Stack>
  
            <Stack direction={['column','column','row']} justify={'center'} spacing={6}>
              <Stack spacing={0} align={'center'}>
                <Text>De</Text>
                <Text fontSize={['large', 'sm', 'xl']} color={'gray.500'}>
                  Luanda
                </Text>
              </Stack>
              {/* <Stack spacing={0} align={'center'}>
                <Text fontSize={'3xl'} color={'gray.500'}>
                  ➡
                </Text>
              </Stack> */}
              <Stack spacing={0} align={'center'}>
                <Text>Para</Text>
                <Text fontWeight={600} fontSize={['large', 'sm', 'xl']} color={'gray.500'}>
                  Malanje
                </Text>
              </Stack>
            </Stack>
  
            <Button
              w={'full'}
              as="a"
              href="https://api.whatsapp.com/send?phone=244931611370&text=Olá%20LotOnline%20Angola"
              target="_blank"
              mt={8}
              bg={useColorModeValue('#151f21', 'gray.900')}
              color={'white'}
              rounded={'md'}
              _hover={{
                transform: 'translateY(-2px)',
                boxShadow: 'lg',
              }}>
              Reservar
            </Button>
          </Box>
        </Box>
        <Box
          maxW={'270px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'md'}
          overflow={'hidden'}>
          
          <Box p={6}>
            <Stack spacing={0} align={'center'} mb={5}>
              <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                15.000kz
              </Heading>
              <Text color={'gray.500'}>Viagem de ida e volta</Text>
            </Stack>
  
            <Stack direction={['column','column','row']} justify={'center'} spacing={6}>
              <Stack spacing={0} align={'center'}>
                <Text>De</Text>
                <Text fontSize={['large', 'sm', 'xl']} color={'gray.500'}>
                  Luanda
                </Text>
              </Stack>
              {/* <Stack spacing={0} align={'center'}>
                <Text fontSize={'3xl'} color={'gray.500'}>
                  ➡
                </Text>
              </Stack> */}
              <Stack spacing={0} align={'center'}>
                <Text>Para</Text>
                <Text fontWeight={600} fontSize={['large', 'sm', 'xl']} color={'gray.500'}>
                  Malanje
                </Text>
              </Stack>
            </Stack>
  
            <Button
              w={'full'}
              as="a"
              href="https://api.whatsapp.com/send?phone=244931611370&text=Olá%20LotOnline%20Angola"
              target="_blank"
              mt={8}
              bg={useColorModeValue('#151f21', 'gray.900')}
              color={'white'}
              rounded={'md'}
              _hover={{
                transform: 'translateY(-2px)',
                boxShadow: 'lg',
              }}>
              Reservar
            </Button>
          </Box>
        </Box>
        </SimpleGrid>
        </Container>
    );
  }
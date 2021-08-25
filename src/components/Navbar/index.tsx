import { ReactNode } from 'react';
import Link from 'next/link'
import {
  Box,
  Flex,
  Container,
  HStack,
  Divider,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  Text
} from '@chakra-ui/react';

import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Links = ['Home', 'Sobre Nós', 'Próximas Viagens'];

// const NavLink = ({ children }: { children: ReactNode }) => (
//   <Link
//     px={2}
//     py={1}
//     rounded={'md'}
//     _hover={{
//       textDecoration: 'none',
//       bg: useColorModeValue('gray.200', 'gray.700'),
//     }}
//     href={'#'}>
//     {children}
//   </Link>
// );

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Divider />

      <Container maxW="container.xl">
      <Box 
        bg={useColorModeValue('gray.50', 'gray.900')} 
        px={4}
        color={useColorModeValue('gray.700', 'gray.200')}
        // borderBottom="2px"
        // borderColor="orange.400"
      >
        <Container as={Stack} maxW={'6xl'} py={1}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <Box mr="auto">Logo</Box>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >
              
              <Link href="/">Home</Link>
              <Link href="/about">Sobre Nos</Link>
              <Link href="/destinos">Proximas Viagens</Link>
              
            </HStack>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              <Link href="/">Home</Link>
              <Link href="/about">Sobre Nos</Link>
              <Link href="/destinos">Proximas Viagens</Link>
            </Stack>
          </Box>
        ) : null}
        </Container>
      </Box>
    </Container>
    </>
  );
}
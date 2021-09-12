import Link from 'next/link'
import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react';
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import { ReactNode } from 'react';
import Logo from '../../public/img/lotonlinelogo.png'
import Image from 'next/image'



const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _focus={{
        boxShadow:
          "0",
      }}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function SmallCentered() {
  return (
    <Container maxW="container.xl">
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        spacing={4}
        justify={'center'}
        align={'center'}>
        <Image
          src={Logo}
          height={'60'}
          width={'100'}
          alt={'carro laranja com letras ao lado escritas, LotOnline'}
        />
        <Stack direction={'row'} spacing={6}>
          <Link href={'/'}>Início</Link>
          <Link href={'/about'}>Sobre Nós</Link>
          <Link href={'/destinos'}>Próximas Viagens</Link>
        </Stack>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        // bg="orange.400"
        borderColor={useColorModeValue('orange.400', 'gray.700')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}>
          <Text>© 2021 LotOnline. Todos os direitos reservados. | Contacto: 923024122</Text>

          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Facebook'} href={'https://www.facebook.com/lotonlineangola'} >
              <FaFacebook />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'https://www.instagram.com/lotonlineangola'} >
              <FaInstagram />
            </SocialButton>
            <SocialButton label={'Whatsapp'} href={'https://api.whatsapp.com/send?phone=244923024122&text=Olá%20LotOnline%20Angola'} >
              <FaWhatsapp />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
    </Container>
  );
}
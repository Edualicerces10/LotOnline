import {
  Heading,
  Box,
  SimpleGrid,
  Text,
  Container,
  Stack,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";

type destinoViagem = {
  id: string;
  valor: number;
  tipoDeViagem: string;
  origem: string;
  destinoViagem: string;
  dataViagem: Date;
};

export type DestinosProps = {
  destinos?: destinoViagem[];
};

export const Card = ({ destinos }: DestinosProps) => (
  <>
    {!destinos && (<Text>Nenhuma viagem com data disponivel de momento.</Text>)}
    
    <Container maxW="container.xl" my="12">
      <SimpleGrid columns={[2, null, 3, 4]} spacing={10}>
        {destinos?.map(
          ({ id, valor, destinoViagem, origem, tipoDeViagem, dataViagem }) => {
              return (
                <Box
                  key={`destino-${id}`}
                  maxW={"270px"}
                  w={"full"}
                  bg={"white"}
                  boxShadow={"2xl"}
                  rounded={"md"}
                  overflow={"hidden"}
                >
                  <Box p={6}>
                    <Stack spacing={0} align={"center"} mb={2}>
                      <Heading
                        fontSize={"2xl"}
                        fontWeight={500}
                        fontFamily={"body"}
                        mt={2}
                      >
                        Preço {valor} Kz
                      </Heading>
                      <Text color={"gray.500"}>{tipoDeViagem}</Text>
                    </Stack>
                    <Stack spacing={0} align={"center"} mb={2}>
                      <Text color={"gray.500"}>Data: {dataViagem} </Text>
                    </Stack>
                    <Stack
                      direction={["column", "column", "row"]}
                      justify={"center"}
                      spacing={6}
                    >
                      <Stack spacing={0} align={"center"}>
                        <Text>De</Text>
                        <Text
                          fontSize={["large", "sm", "xl"]}
                          color={"gray.500"}
                        >
                          {origem}
                        </Text>
                      </Stack>
                      {/* <Stack spacing={0} align={'center'}>
                  <Text fontSize={['large', 'sm', 'xl']} color={'gray.500'}>
                    ➡
                  </Text>
                </Stack> */}
                      <Stack spacing={0} align={"center"}>
                        <Text>Para</Text>
                        <Text
                          fontWeight={600}
                          fontSize={["large", "sm", "xl"]}
                          color={"gray.500"}
                        >
                          {destinoViagem}
                        </Text>
                      </Stack>
                    </Stack>

                    <Button
                      w={"full"}
                      as="a"
                      href="https://api.whatsapp.com/send?phone=244923024122&text=Olá%20LotOnline%20Angola"
                      target="_blank"
                      mt={8}
                      bg={"gray.900"}
                      color={"white"}
                      rounded={"md"}
                      _hover={{
                        transform: "translateY(-2px)",
                        boxShadow: "lg",
                      }}
                    >
                      Reservar
                    </Button>
                  </Box>
                </Box>
              );
            }
        )}
      </SimpleGrid>
    </Container>
  </>
);

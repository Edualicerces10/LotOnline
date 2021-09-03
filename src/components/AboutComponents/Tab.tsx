import { 
    Tabs, 
    TabList, 
    TabPanels, 
    Tab, 
    TabPanel,
    Container
} from "@chakra-ui/react"

export default function TabAbout(){

    return (
        
        <Tabs mt="5" variant="enclosed" boxShadow="none">
            <TabList border-color="orange.700" borderLeftColor="orange.700">
                <Tab  _selected={{ color: "white", bg: "orange.700" }} _focus={{boxShadow: "none"}}>Empresa</Tab>
                <Tab _selected={{ color: "white", bg: "orange.700" }} _focus={{boxShadow: "none"}}>Motoristas</Tab>
                <Tab _selected={{ color: "white", bg: "orange.700" }} _focus={{boxShadow: "none"}}>Passageiros</Tab>
            </TabList>

            <TabPanels>
                <TabPanel textAlign="justify" minHeight="10rem">
                    <Container maxW="container.xl">
                        <p>A LotOnline é uma empresa angolana que tem como objectivo encotrar passageiros na internet que pretendem viajar no interior de Angola e
                        a nossa missão é atender com respeito, responsablidade e qualidade os nossos clientes. <br />
                        Somos uma referência na prestação de serviços pela qualidade e agilidade. Prezamos pela etica,transparência, confiança e copetência!</p>
                    </Container>
                </TabPanel>

                <TabPanel textAlign="justify" minHeight="10rem">
                    <Container maxW="container.xl">
                        <p>Para você que tem um carro e fazes viagens constantes seja de lazer ou mesmo a trabalho, a LotOnline te oferece a oportunidade de viajar com uma renda extra. Tenho a certeza que você quer saber como. A LotOnline te tira o stress de ter que ir a paragem e perder muito tempo, na quele clima, barrulhento,desagradavel, e muitas vezes sem higiene, a espera de passageiro.<br />
                        </p>
                    </Container>
                </TabPanel>

                <TabPanel textAlign="justify" minHeight="10rem">
                    <Container maxW="container.xl">
                        <p>A LotOnline é para você que quer viajar e não quer ficar muito tempo a espera no parque ate que o carro lote. <br />
                          Você que quer viajar com urgência, segurança e com conforto, basta entrar em contato com a nossa equipe de atendimento e terás os seus problemas resolvidos.</p>
                    </Container>
                </TabPanel>
            </TabPanels>
        </Tabs>
    )
}


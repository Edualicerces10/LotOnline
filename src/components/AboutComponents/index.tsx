import { Container } from "@chakra-ui/react";
import FirstSection from "./FirstSection";
import TabAbout from "./Tab";

export default function AboutContent(){
    return (
        <>
            <Container maxW="container.xl" mb="auto">
                <TabAbout />
                <FirstSection />
            </Container>
        </>
    )
}

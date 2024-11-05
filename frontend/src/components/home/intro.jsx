import {
    Flex,
    Button,
    Text,
    Heading,
    } from '@chakra-ui/react';


export default function IntroSection() {
    return (
        <Flex
            display='flex'
            flexDirection='column'
            alignItems='center'
            my={20}
        >
            <Heading
                fontSize='5xl'
                mt={10}
            >
            УЧИ АНГЛИЙСКИЙ</Heading>
            <Heading
                fontSize='6xl'
                mt={5}
                mb={10}
            >
            И САМОРАЗВИВАЙСЯ</Heading>
            <Text align='center' fontSize='lg'>BIAD - СОВРЕМЕННАЯ ШКОЛА АНГЛИЙСКОГО, КОТОРАЯ ФОКУСИРУЕТСЯ НЕ ТОЛЬКО НА РАЗВИТИИ ЯЗЫКА, НО И НА РАСШИРЕНИИ ТВОИХ НАВЫКОВ И ЗНАНИЙ В РАЗНЫХ СФЕРАХ ЖИЗНИ</Text>
            <Button colorScheme='orange' size='lg' mt={10} mb={20}>ЗАПИСАТЬСЯ НА УРОК</Button>
        </Flex>
    );
}
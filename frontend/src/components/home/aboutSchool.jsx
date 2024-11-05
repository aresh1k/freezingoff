import {
    VStack,
    HStack,
    chakra,
    Flex,
    Image,
    Heading,
    Text,
    } from "@chakra-ui/react";


function Topic(props) {
    return (
        <VStack>
            <Heading>{props.heading}</Heading>
            <Image src={props.img_src} alt={props.img_alt} />
        </VStack>
    )
}



export default function AboutSchool() {
    const topics_list = [
        {
            heading: 'ИСКУССТВЕННЫЙ ИНТЕЛЛЕКТ',
            img_src: '',
            img_alt: 'ИИ',
        },
        {
            heading: 'ВАЖНЫЕ И НУЖНЫЕ ТОПИКИ',
            img_src: '',
            img_alt: 'ТЕМАТИКА',
        },
        {
            heading: 'ПОСТОЯННАЯ ПОДДЕРЖКА',
            img_src: '',
            img_alt: 'ПОДДЕРЖКА',
        },
        {
            heading: 'ИНТЕРАКТИВНАЯ ПЛАТФОРМА',
            img_src: '',
            img_alt: 'НОУТБУК',
        },
    ]
    return (
        <Flex
            flexDirection={'column'}
            my={20}
        >
            <Heading 
                textAlign='center'
                mb={10}
            >ШКОЛА <chakra.span bg='orange' borderRadius={5}>НОВОГО ПОКОЛЕНИЯ</chakra.span><br />ПРЕПОДАВАТЕЛЕЙ</Heading>
            <HStack>
                <VStack>
                    <Text>BURN IT ALL DOWN - ЭТО КОМЬЮНИТИ ПЕРСПЕКТИВНЫХ И ОПЫТНЫХ ПРЕПОДАВАТЕЛЕЙ АНГЛИЙСКОГО, КОТОРЫЕ УСТАЛИ ОТ ОБЫЧНЫХ УРОКОВ И ЛЕКЦИЙ В КОЛЛЕДЖАХ И УНИВЕРСИТЕТАХ.</Text>
                    <Text>ПОЭТОМУ МЫ <chakra.span color='orange'>КООРДИНАЛЬНО ПОМЕНЯЛИ</chakra.span> ПОДХОД К ОБРАЗОВАНИЮ И ИЗУЧЕНИЮ ЯЗЫКА - ТЕПЕРЬ BIAD ДЕЛАЕТ ЭТО ИСПОЛЬЗУЯ СОВРЕМЕННЫЕ МЕТОДЫ ОБУЧЕНИЯ:</Text>
                </VStack>
                <Image src='' alt='AI' />
            </HStack>
            <Flex
                flexDirection='row'
                wrap='wrap'
                gap={5}
                mt={10}
                justifyContent={'space-between'}
            >
                {topics_list.map((topic, index) => (
                    <Topic 
                        key={index}
                        heading={topic.heading}
                        img_src={topic.img_src}
                        img_alt={topic.img_alt}
                    />))}
            </Flex>
        </Flex>
    );
}
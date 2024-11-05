import {
    Text,
    Heading,
    Image,
    Flex,
    HStack,
    VStack,
    } from '@chakra-ui/react';
import { SunIcon } from '@chakra-ui/icons'


function Advantage(props) {
    return (
        <Flex
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            bg='teal'
            borderRadius='xl'
            maxWidth='250px'
            height='300px'
        >
            <Heading fontSize='3xl' textAlign='center'>{props.heading}</Heading>
            <Text>{props.text}</Text>
            <Image src={props.img_src} alt={props.img_alt} />
        </Flex>
    );
}


export default function Advantages() {
    const advantages_list = [
        {
        heading: 'КРУТЫЕ ПРЕПОДЫ',
        text: 'АДАПТИРУЮТСЯ ПОД ТЕБЯ ОТ 3 ЛЕТ ОПЫТА УРОВЕНЬ ОТ C1',
        img_src: <SunIcon />,
        img_alt: 'Преподаватель',
        },
        {
        heading: 'ИНТЕРАКТИВ',
        text: 'СОВРЕМЕННАЯ ПЛАТФОРМА ИНТЕРЕСНЫЕ ЗАДАНИЯ ДОСТУП ИЗ ЛЮБОЙ ТОЧКИ МИРА',
        img_src: <SunIcon />,
        img_alt: 'Интерактивность',
        },
        {
        heading: 'ПОДДЕРЖКА 24/7',
        text: 'ПОМОГАЮТ С ДОМАШКОЙ ПРОВЕРЯЮТ ТВОИ ЗНАНИЯ РЕШАЮТ ЛЮБЫЕ ВОПРОСЫ',
        img_src: <SunIcon />,
        img_alt: 'Поддержка',
        },
    ]
    return (
        <VStack
            my={20}
        >
            <HStack mb={5} bg='teal' borderRadius='xl'>
                <Flex flexDirection='column' m={4}>
                    <Heading>ВАЖНЫЕ ТОПИКИ</Heading>
                    <Text>ОТ ВЛИЯНИЯ СОЦ. СЕТЕЙ ДО ПСИХОЛОГИИ И ВИДЕОИГР - МЫ УЧИМ ЯЗЫК ЧЕРЕЗ ВАЖНОЕ, А САМИ ТЕМЫ ОСТАЮТСЯ В ГОЛОВЕ ПОСЛЕ КАЖДОГО УРОКА</Text>
                </Flex>
                <Flex flexDirection='column'>
                    <Text p={2} bg='gray' borderRadius='xl' m={4}>КОСМОС</Text>
                    <Text p={2} bg='gray' borderRadius='xl' m={4}>САМОРАЗВИТИЕ</Text>
                    <Text p={2} bg='gray' borderRadius='xl' m={4}>ПУТЕШЕСТВИЯ</Text>
                </Flex>
                <Image></Image>
            </HStack>
            <Flex
                flexDirection='row'
                alignItems='center'
                wrap='wrap'
                justifyContent='center'
                width='100%'
                gap={8}
            >
                {advantages_list.map((advantage_props, index) => (
                    <Advantage    
                        key={index}
                        heading={advantage_props.heading}
                        text={advantage_props.text}
                        img_src={advantage_props.img_src}
                        img_alt={advantage_props.img_alt}
                    />
                ))}
            </Flex>
        </VStack>
    );
}
import {
    Flex,
    Image,
    Heading,
    Text,
    } from "@chakra-ui/react";


function Example(props) {
    return (
        <Flex
            bg='orange'
            borderRadius={5}
            p={4}
            flexDirection='column'
        >
            <Heading fontSize={'lg'}>{props.heading}</Heading>
            <Text color='black'>{props.description}</Text>
            <Image src={props.img_src} alt={props.img_alt}/>
        </Flex>
    );
}


export default function Examples() {
    const examples_list = [
        {
            heading: 'ДЛЯ НАЧИНАЮЩИХ',
            description: 'ЕСЛИ НЕТУ ОСНОВНЫХ ЗНАНИЙ',
            img_src: '',
            img_alt: 'Книга',
        },
        {
            heading: 'ДЛЯ ТЕХ, КТО ХОЧЕТ ГОВОРИТЬ',
            description: 'И ЛЕГКО ПОНИМАТЬ / ОТВЕЧАТЬ',
            img_src: '',
            img_alt: 'Сообщение',
        },
        {
            heading: 'ДЛЯ СТУДЕНТОВ ОТ B1',
            description: 'ЭТО ИДЕАЛЬНАЯ ПРОГРАММА',
            img_src: '',
            img_alt: 'Студент',
        },
        {
            heading: 'ДЛЯ ПОДНЯТИЯ ОЦЕНОК',
            description: 'В ШКОЛЕ, КОЛЛЕДЖЕ ИЛИ ВУЗЕ',
            img_src: '',
            img_alt: 'Выпускная шапка',
        },
    ]
    return (
        <Flex
            my={20}
            flexDirection='column'
            width='100%'
        >
            <Heading textAlign='center' mb={5}>А МНЕ ТОЧНО ПОДОЙДЕТ?</Heading>
            <Text textAlign='center' mb={10}>ДА! ЕСЛИ ТЫ ЖАЖДЕШЬ ЗНАНИЙ, ТЕБЯ ПРИВЛЕКАЕТ АНГЛИЙСКИЙ И ТЫ ОБОЖАЕШЬ РАЗВИВАТЬСЯ</Text>
            <Flex
                flexDirection='row'
                wrap='wrap'
                justifyContent='space-between'
                gap={5}
                my={5}
            >
                {examples_list.map((props, index) => (
                    <Example 
                        key={index}
                        heading={props.heading}
                        description={props.description}
                        img_src={props.img_src}
                        img_alt={props.img_alt}
                    />))}
            </Flex>
        </Flex>
    );
}
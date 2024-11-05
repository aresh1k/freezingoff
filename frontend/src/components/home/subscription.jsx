import {
    Button,
    VStack,
    chakra,
    Flex,
    Image,
    Heading,
    Text,
    } from "@chakra-ui/react";

    
function SubscriptionBlock(props) {
    return (
        <Flex
            bg={props.color}
            flexDirection={"column"}
            borderRadius={10}
            justifyContent={'center'}
            alignItems={'center'}
            width='100%'
        >
            <Image src={props.img_src} alt={props.img_alt} mt={5}/>
            <Heading>{props.heading}</Heading>
            <Text textAlign={'center'}>{props.description}</Text>
            <Text textAlign={'center'}>{props.price}р<br /><chakra.span fontSize='md'>за урок</chakra.span></Text>
            <VStack>
                {props.text.map((option, index) => (
                    <Text key={index}>{option}</Text>))}
            </VStack>
            <Button>ПОПРОБОВАТЬ</Button>
        </Flex>
    );
}


export default function Subscriptions() {
    const subscriptions_list = [
        {
        img_src: '<SunIcon />',
        img_alt: 'Молния',
        heading: 'SPARK',
        description: 'СТАНДАРТ',
        price: 990,
        text: [
            'Уроки по 45 минут',
            'Доступ к ТГ каналу',
            'Без отмен',
        ],
        color: 'pink',
        },
        {
        img_src: '<SunIcon />',
        img_alt: 'Зажигалка',
        heading: 'FIRE',
        description: 'УСИЛЕННЫЙ',
        price: 1290,
        text: [
            'Уроки по 45 минут',
            'Доступ к ТГ каналу',
            'Два индивидуальных занятия',
            'Одна отмена',
        ],
        color: 'green',
        },
        {
        img_src: '<SunIcon />',
        img_alt: 'Огонь',
        heading: 'BURN',
        description: 'ПРОДВИНУТЫЙ',
        price: 1690,
        text: [
            'Уроки по 50-60 минут',
            'Доступ к ТГ каналу',
            'Персонализированный курс',
            'Занятия с носителем языка,',
            'До трех отмен',
        ],
        color: 'blue',
        },
    ]
    return (
        <VStack
            width='100%'
            my={20}
        >
            <Heading textAlign='center' mb={5}>ТЫ ЗНАЕШЬ ЗА ЧТО ПЛАТИШЬ</Heading>
            <Text>Определите подходящий для ваших нужд тариф. 
                На тарифе "SPARK" вас ждет обучение от квалифицированных учителей, 
                которые прошли специализированное обучение от BURN IN ALL DOWN. 
                Те ученики, которые демонстрируют выдающиеся результаты, получают 
                статус «BURN+» и ведут занятия на тарифе "FIRE".
            </Text>
            <Flex
                justifyContent={'space-between'}
                width='100%'
                gap={5}
                mt={10}
            >
                {subscriptions_list.map((subscription_props, index) => (
                    <SubscriptionBlock 
                        key={index}
                        img_src={subscription_props.img_src}
                        img_alt={subscription_props.img_alt}
                        heading={subscription_props.heading}
                        price={subscription_props.price}
                        description={subscription_props.description}
                        text={subscription_props.text}
                        color={subscription_props.color}
                    />
                ))}
            </Flex>
        </VStack>
    );
}

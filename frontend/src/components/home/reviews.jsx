import {
    Text,
    Heading,
    Image,
    Flex,
    VStack,
    HStack,
    } from '@chakra-ui/react';


function ReviewBlock(props) {
    return (
        <VStack
            maxW={'500px'}
            bg='teal'
            borderRadius={10}
        >
            <HStack
                justifyContent={'space-between'}
                width='100%'
                my={5}
            >
                <Flex
                    flexDirection={'column'}
                    mx={5}
                >
                    <Heading fontSize={'2xl'}>{props.reviewer_name}</Heading>
                    <Text fontSize={'2xl'}>{props.company}</Text>
                </Flex>
                <Image mr={5} src={props.img_src} alt={props.img_alt} />
            </HStack>
            <HStack>
                <Text mx={5} mb={5}>{props.review}</Text>
            </HStack>
        </VStack>
    );
}


export default function Reviews() {
    const reviews_list = [
        {
        name: 'СВЕТЛАНА',
        company: 'DODO PIZZA',
        review: `Я очень довольна уроками английского с Кириллом. Он создает 
                очень комфортную атмосферу и дружелюбную атмосферу на занятиях, всегда 
                готов ответить на мои вопросы и объяснить сложные темы в доступной форме. 
                Благодаря Кириллу, я стала более уверенной в английском и уже спокойно 
                говорю на начальные темы!`,
        img_src: '<PhoneIcon />',
        },
        {
        name: 'СЕРГЕЙ',
        company: 'ПРЕДПРИНИМАТЕЛЬ',
        review: `Хочу вам выразить огромную благодарность за вклад в моего сына. 
                Как же он любит английский, а еще больше занятия с Вами, помимо 
                ваших с ним занятий, берет книгу и самостоятельно пишет, читает 
                на английском. Вы привили ему любовь к английскому еще больше. 
                Вчера заявил мне, что хочет как Вы выучить английский и тоже 
                преподавать и помогать людям.`,
        img_src: '<PhoneIcon />',
        },
    ]
    return (
        <Flex
            width='100%'
            gap={8}
            flexDirection={'column'}
            my={20}
        >
            <Text fontSize={'2xl'} textAlign={5}>В КАКОЙ-ТО МОМЕНТ МЫ ПОДУМАЛИ:</Text>
            <Heading fontSize={'3xl'} mb={5}>«ПОЧЕМУ НЕЛЬЗЯ СОВМЕСТИТЬ РАЗВИТИЕ<br />СЕБЯ И ИЗУЧЕНИЕ АНГЛИЙСКОГО?»</Heading>
            <Flex
                flexDirection={'row'}
                wrap={'wrap'}
                justify={{base:'space-between', md:'center'}}
                gap={5}
            >
                {reviews_list.map((review_props, index) => (
                    <ReviewBlock
                        key={index}
                        reviewer_name={review_props.name}
                        company={review_props.company}
                        img_src={review_props.img_src}
                        img_alt={review_props.name}
                        review={review_props.review}
                    />
                ))}
            </Flex>
        </Flex>
    );
}
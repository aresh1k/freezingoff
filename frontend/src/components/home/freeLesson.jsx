import {
    Flex,
    Heading,
    Text,
    Button
    } from "@chakra-ui/react";


export default function FreeLesson() {
    return (
        <Flex
            width={'100%'}
            flexDirection={'column'}
            my={20}
        >
            <Heading
                fontSize={'3xl'}
                textAlign={'center'}
                mb={5}
            >ЗАПИШИСЬ НА БЕСПЛАТНЫЙ ВВОДНЫЙ УРОК</Heading>
            <Text
                fontSize={'xl'}
            >ВВОДНЫЙ УРОК ПРОВЕДЕТ ВАШ БУДУЩИЙ ПРЕПОДАВАТЕЛЬ, А НЕ МЕНЕДЖЕР ПО ПРОДАЖАМ ИЛИ МЕТОДИСТ. ВЫ ПОЗНАКОМИТЕСЬ С УЧИТЕЛЕМ ЕЩЕ ДО ОПЛАТЫ ЗАНЯТИЙ</Text>
            <Flex
                flexDirection={'row'}
                justifyContent={'space-between'}
                gap={10}
                my={10}
            >
                <Flex
                    bg='pink'
                    flexDirection={'column'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    borderRadius={10}
                    p={4}
                    width={'60%'}
                >
                    <Heading 
                        fontSize={'2xl'}
                        textAlign={'center'}
                    >ОБШИРНЫЙ ВЫБОР ПРЕПОДАВАТЕЛЕЙ</Heading>
                    <Text 
                        fontSize={'lg'}
                        textAlign={'center'}
                    >СРЕДИ НАШИХ ПРЕПОДАВАТЕЛЕЙ НАЙДЕМ ТОГО, КТО БУДЕТ СООТВЕТСТВОВАТЬ ВАШИМ КРИТЕРИЯМ - НАПРИМЕР, ПРОЖИВАЕТ ЗА ГРАНИЦЕЙ ИЛИ СДАВАЛ IELTS</Text>
                </Flex>
                <Flex
                    bg='green'
                    flexDirection={'column'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    borderRadius={10}
                    p={4}
                    width={'40%'}
                >
                    <Heading
                        fontSize={'2xl'}
                        textAlign={'center'}
                    >НЕСКОЛЬКО ВВОДНЫХ УРОКОВ</Heading>
                    <Text
                        fontSize={'lg'}
                        textAlign={'center'}
                    >ХОТИМ БЫТЬ УВЕРЕНЫ, ЧТО ВЫ НАШЛИ "СВОЕГО" ПРЕПОДАВАТЕЛЯ, ПОЭТОМУ ДАЕМ ВОЗМОЖНОСТЬ ПРОЙТИ ПРОБНЫЕ УРОКИ С РАЗНЫМИ УЧИТЕЛЯМИ</Text>
                </Flex>
            </Flex>
            <Button
                variant='outline'
            >ЗАПИСАТЬСЯ НА ВВОДНЫЙ УРОК</Button>
        </Flex>
    );
}
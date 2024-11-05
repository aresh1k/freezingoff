import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    InputGroup,
    InputLeftElement,
    Select,
    Button,
    RadioGroup,
    Stack,
    HStack,
    Radio,
    Checkbox,
    CheckboxGroup,
    Heading,
    NumberInput,
    VStack,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
  } from '@chakra-ui/react'
import { PhoneIcon } from '@chakra-ui/icons'
import { Formik, Form, Field} from 'formik';
import * as Yup from 'yup'
import axios from 'axios'


const LessonSchema = Yup.object().shape({
    familyName: Yup.string()
        .max(50, 'Максимум 50 символов')
        .required('Обязательное поле'),
    firstName: Yup.string()
        .max(50, 'Максимум 50 символов')
        .required('Обязательное поле'),
    patronymic: Yup.string()
        .max(50, 'Максимум 50 символов'),
    age: Yup.number().positive().integer().required('Обязательное поле'),
    englishLevel: Yup.string().required('Обязательное поле'),
    experience: Yup.string().required('Обязательное поле'),
    phoneNumber: Yup.string()
        .max(50, 'Максимум 50 символов')
        .required('Обязательное поле'),
    lessonDays: Yup.array().of(Yup.string()).min(1, 'Выберите хотя бы один день'),
    contact: Yup.string().required('Обязательное поле'),
  });


export default function FreeLessonPage() {
    return (
        <VStack
            justifyContent='center'
        >
            <Heading>Записаться на бесплатный урок</Heading>
            <Formik
                onSubmit={(values, actions) => {
                    setTimeout(() => {
                        values.lessonDays.forEach((element, index) => {
                            values.lessonDays[index] = {day: element}
                        });
                        console.log(values)
                        axios.post('http://127.0.0.1:8000/lesson-request/', values, {headers: {'content-type': 'application/json'}}).then(response => {console.log(response.data)}).catch(function (error) {console.log(error.toJSON());});
                        actions.setSubmitting(false)
                    }, 1000)  
                }}
                initialValues={{
                    familyName: '',
                    firstName: '',
                    patronymic: '',
                    age: '18',
                    englishLevel: 'A1',
                    experience: '0',
                    lessonDays: [
                        'saturday',
                        'sunday',
                    ],
                    contact: 'call',
                    phoneNumber: '',
                }}
                validationSchema={LessonSchema}
            >
                { props  => (
                    <Form>
                        <FormControl isInvalid={props.errors.familyName && props.touched.familyName}>
                            <FormLabel>Фамилия</FormLabel>
                            <Field  
                                as={Input}
                                type='text'
                                name='familyName' 
                                placeholder='Введите Вашу фамилию'
                            />
                            <FormErrorMessage name='familyName'>{props.errors.familyName}</FormErrorMessage>
                        </FormControl>
                        <FormControl isInvalid={props.errors.firstName && props.touched.firstName}>
                            <FormLabel>Имя</FormLabel>
                            <Field  
                                as={Input}
                                type='text'
                                name='firstName' 
                                placeholder='Введите Ваше имя'
                            />
                            <FormErrorMessage name='firstName'>{props.errors.firstName}</FormErrorMessage>
                        </FormControl>
                        <FormControl isInvalid={props.errors.patronymic && props.touched.patronymic}>
                            <FormLabel>Отчество</FormLabel>
                            <Field
                                as={Input}
                                type='text'
                                name='patronymic' 
                                placeholder='Введите Ваше отчество'
                            />
                            <FormHelperText>Поле не обязательно для заполнения</FormHelperText>
                            <FormErrorMessage name='patronymic'>{props.errors.patronymic}</FormErrorMessage>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Возраст</FormLabel>
                            <NumberInput
                                step={1} 
                                min={1} 
                                max={200}
                                clampValueOnBlur={true}
                                name='age'
                                size='lg'
                                defaultValue={props.values.age}
                            >
                                <NumberInputField/>
                                <NumberInputStepper>
                                    <NumberIncrementStepper />
                                    <NumberDecrementStepper />
                                </NumberInputStepper>
                            </NumberInput>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Уровень английского языка</FormLabel>
                            <Field as={Select} name='englishLevel'>
                                <option value='A0'>A0</option>
                                <option value='A1'>A1</option>
                                <option value='A2'>A2</option>
                                <option value='B1'>B1</option>
                                <option value='B2'>B2</option>
                                <option value='C1'>C1</option>
                            </Field>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Опыт изучения английского языка</FormLabel>
                            <Field as={Select} name='experience'>
                                <option value='0'>Отсутствует</option>
                                <option value='halfYear'>До 6 месяцев</option>
                                <option value='year'>От 6 месяцев до 1 года</option>
                                <option value='overYear'>Более одного года</option>
                            </Field>
                        </FormControl>
                        <FormControl as='fieldset' isInvalid={props.errors.lessonDays && props.touched.lessonDays}>
                            <FormLabel as='legend'>Предпочтительные дни для занятий</FormLabel>
                            <CheckboxGroup name='lessonDays' colorScheme='green' defaultValue={props.values.lessonDays}>
                                <Stack spacing={[1, 5]} direction={['column', 'row']}>
                                    <Checkbox id='lessonDays-monday' name='lessonDays' value='monday' onChange={props.handleChange} onBlur={props.handleBlur}>Пн</Checkbox>
                                    <Checkbox id='lessonDays-tuesday' name='lessonDays' value='tuesday' onChange={props.handleChange} onBlur={props.handleBlur}>Вт</Checkbox>
                                    <Checkbox id='lessonDays-wednesday' name='lessonDays' value='wednesday' onChange={props.handleChange} onBlur={props.handleBlur}>Ср</Checkbox>
                                    <Checkbox id='lessonDays-thursday' name='lessonDays' value='thursday' onChange={props.handleChange} onBlur={props.handleBlur}>Чт</Checkbox>
                                    <Checkbox id='lessonDays-friday' name='lessonDays' value='friday' onChange={props.handleChange} onBlur={props.handleBlur}>Пт</Checkbox>
                                    <Checkbox id='lessonDays-saturday' name='lessonDays' value='saturday' onChange={props.handleChange} onBlur={props.handleBlur}>Сб</Checkbox>
                                    <Checkbox id='lessonDays-sunday' name='lessonDays' value='sunday' onChange={props.handleChange} onBlur={props.handleBlur}>Вс</Checkbox>
                                    <FormErrorMessage name='lessonDays'>{props.errors.lessonDays}</FormErrorMessage>
                                    <FormHelperText>
                                        Выберите все дни, если Вы готовы учиться в любой день
                                    </FormHelperText>
                                </Stack>
                            </CheckboxGroup>
                        </FormControl>
                        <FormControl isInvalid={props.errors.phoneNumber && props.touched.phoneNumber}>
                            <FormLabel>Введите номер мобильного телефона</FormLabel>
                            <InputGroup name='phoneNumber'>
                                <InputLeftElement pointerEvents='none'>
                                    <PhoneIcon color='gray.300' />
                                </InputLeftElement>
                                <Input type='tel' placeholder='Номер телефона' name='phoneNumber' onChange={props.handleChange} onBlur={props.handleBlur}/>
                            </InputGroup>
                            <FormErrorMessage name='phoneNumber'>{props.errors.phoneNumber}</FormErrorMessage>
                        </FormControl>
                        <FormControl as='fieldset'>
                            <FormLabel as='legend'>Способ связи</FormLabel>
                            <RadioGroup name='contact' defaultValue={props.values.contact}>
                                <HStack spacing='24px'>
                                    <Radio id='contact-call' name='contact' value='call' onChange={props.handleChange}>Звонок</Radio>
                                    <Radio id='contact-whatsapp' name='contact' value='whatsapp' onChange={props.handleChange}>Whatsapp</Radio>
                                    <Radio id='contact-telegram' name='contact' value='telegram' onChange={props.handleChange}>Telegram</Radio>
                                </HStack>
                            </RadioGroup>
                        </FormControl>
                        <Button
                            name='submit'
                            type='submit'
                            isLoading={props.isSubmitting}
                            loadingText='Отправка ...'
                            colorScheme='orange'
                            variant='solid'
                            spinnerPlacement='end'
                        >Отправить форму</Button>
                    </Form>
                )}
            </Formik>
        </VStack>
    );
}
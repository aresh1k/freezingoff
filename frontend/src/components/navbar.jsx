import {
  Container,
  Image,
  Button,
  Menu,
  Flex,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  HStack,
  useColorMode,
  useColorModeValue,
  useMediaQuery,
  Link as ChakraLink,
  Stack,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons'
import logo from '../assets/images/logo.png'
import { NavLink as ReactRouterLink } from 'react-router-dom'
import React, { useState } from 'react'


function LogoButton() {
  return (
    <Stack>
      <ChakraLink
        as={ReactRouterLink}
        to='/'
        display='flex'
        alignItems='center'
        fontSize='3xl'
        _hover={{ textDecoration: "none" }}
        me={3}
        whiteSpace='nowrap'
        fontWeight={700}
      >
      BURN IT<Image src={logo} mx={3} />ALL DOWN
      </ChakraLink>
    </Stack>
  )
}


function ColorButton() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton 
      icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
      onClick={toggleColorMode}
      size='lg'
      mx={2}
    />
  )
}


function BeginButton() {
  return (
    <Button 
      colorScheme='orange'
      size='lg' 
      variant='solid'
      borderRadius='20'
    >Начать</Button>
  )
}


export default function Navbar() {
  const menu_links = [
    {
      to: '/faq',
      text: 'FAQ',
    },
    {
      to: '/shorts',
      text: 'Shorts'
    },
    {
      to: '/articles',
      text: 'Статьи'
    },
  ]
  const bgColor = useColorModeValue('gray', 'teal')
  const [isDesktop] = useMediaQuery('(min-width: 960px)') 
  function MenuDesktop() {
    return (
      <Flex 
        className='nav-bar'
        as='nav'
        bg={bgColor}
        py={2}
        width='100%'
        position='sticky'
        top='0'
        zIndex='1'
      >
        <Container 
          maxW='container.xl'
          display='flex'
          flex-direction='row'
          alignItems='center'
          justifyContent='space-between'
        >
          <HStack>
            <LogoButton />
            {menu_links.map((prop, index) => (
            <ChakraLink as={ReactRouterLink} to={prop.to} key={index} fontSize='2xl' mx={3} _hover={{ textDecoration: "none" }}>
              {prop.text}
            </ChakraLink>))}
            <ChakraLink as={ReactRouterLink} to='/freelesson'>
              <BeginButton />
            </ChakraLink>
          </HStack>
          <ColorButton />
        </Container>
      </Flex>
    )
  }
  function MenuMobile() {
    const [ isOpen, setIsOpen ] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
      <Flex 
        className='nav-bar'
        as='nav'
        bg={bgColor}
        py={2}
      >
        <Flex 
          align='center'
          justify='space-between'
          wrap='nowrap'
          position='sticky'
          zIndex='1'
          top='0'
          width='100%'
          px={4}
        >
          <LogoButton />
          <HStack justify='end'>
            <ColorButton />
            <Menu isLazy>
              {({ isOpen }) => (
                <>
                  <MenuButton
                    isActive={isOpen}
                    display='flex'
                    as={IconButton}
                    aria-label='Options'
                    icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                    variant='outline'
                    onClick={toggle}
                    wrap='wrap'
                    justify='space-between'
                    align='center'
                    order={{ base:1 }}
                    size='lg'
                    mx={2}
                  />
                  <MenuList justify='space-between'>
                    {menu_links.map((prop, index) => (
                      <MenuItem as={ReactRouterLink} to={prop.to} key={index}>
                      {prop.text}
                      </MenuItem>
                    ))}
                    <MenuItem as={ReactRouterLink} to='/freelesson'>
                      <BeginButton />
                    </MenuItem>
                  </MenuList>
                </>
              )}
            </Menu>
          </HStack>
        </Flex>
      </Flex>
    )
  }
  return (isDesktop ? <MenuDesktop /> : <MenuMobile />)
}

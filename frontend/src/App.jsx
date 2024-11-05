import * as React from 'react';
import './App.css';
import { ChakraProvider, Container } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/navbar';
import AppRoutes from './routes';


export default function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Navbar />
        <Container maxW='container.xl' display='flex' flexDirection='column'>
          <AppRoutes />
        </Container>
      </BrowserRouter>
    </ChakraProvider>
  );
}
import { ColorModeScript, ChakraProvider,useColorModeValue } from '@chakra-ui/react';
import React,{StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <ChakraProvider >
    <StrictMode>
      <ColorModeScript />
      <App />
    </StrictMode >
  </ChakraProvider>
);


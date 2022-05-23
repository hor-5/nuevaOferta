import React from 'react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Menu from './components/Menu';
import {useColorModeValue, Grid} from '@chakra-ui/react';


function App() {

  return (
    <Grid p={1} bg={useColorModeValue('gray.100', 'gray.700')}>

      <ColorModeSwitcher justifySelf="flex-end"  />
      {/*boton switch  dark/light mode*/}

      
      <Menu m={5} justifySelf="flex-center"/>

    </Grid >

      );
}

      export default App;

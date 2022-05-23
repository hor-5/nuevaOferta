import React, { useEffect, useState } from 'react';
import {
  Box,
  Text,
  VStack,
  Grid,
  GridItem,
  Center,
  SimpleGrid,

  Tabs,
  TabList,
  TabPanel,
  TabPanels,
  Tab,
  Button,
  Container,
  useToast,
  TagLeftIcon,
  Tag,
  TagLabel,
  useColorModeValue,
  Divider,
} from '@chakra-ui/react';
import ProductCard from './ProductCard';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import { internet, tvDigital, tvMax } from '../arrays';

export default function Cotizador(){

    const [products, setProducts] = useState(internet)

    const [descount, setDescount] = useState(2000)
    const [active, setActive] = useState(false)
    var [contadorDecos, setContadorDecos] = useState(0)
    const toast = useToast()
    var [valorDecos, setValorDecos] = useState(0)
    const [tvMaxActive, setTvMaxActive] = useState(false)
    const [zClaroactive, setZClaroActive] = useState(false)  
  
    const hasTv = () => {
      setActive(!active)
      setProducts(tvDigital)

      showToastProduct()  
    }

    const noTv = () => {
      setActive(!active)
      setProducts(internet)
      if (tvMaxActive) { setTvMaxActive(!tvMaxActive) }

      showToastProduct()
    }
  
    const tvMaxSelected = () => {
      setTvMaxActive(!tvMaxActive)
      tvMaxActive? setProducts(tvDigital): setProducts(tvMax)

      showToastProduct()
    }
    
    //Toast notifications
    const showToast = (msg) => {
      toast({
        title: 'Cantidad de decodificadores excedida',
        description: ''+msg,
        status: 'info',
        duration: 2000,
        isClosable: true,
      })
    }

    const showToastProduct = (msg)=>{
      toast({
        title: 'Producto actualizado',
        description: 'Ya puede visualizar los valores actualizados',
        status: 'success',
        duration: 1500,
        isClosable: true,
      })
    }

    const showToastDescount = (d) => {
      toast({
        title: 'Descuento actualizado',
        description: 'Ahora el descuento es de $' +d+' por 23 meses',
        status: 'success',
        duration: 2000,
        isClosable: true,
      })
    }
    //End toast notifications
  
    const aumentarContadorDecos = () => {
      if (contadorDecos === 3) {
        showToast('Puede pedir hasta 3 decodificadores')
      } else {
        setContadorDecos(contadorDecos + 1)
        setValorDecos(valorDecos += 590)
      }
    }
    const disminuirContadorDecos = () => {
      if (contadorDecos === 0) {
        showToast('No puede tener menos decodificadores')
      } else {
        setContadorDecos(contadorDecos - 1)
        setValorDecos(valorDecos -= 590)
      }
    }
  
    useEffect(() => { }, [contadorDecos])
  

  
    const changeDescount = () => {    
      if(descount === 2000){ 
        setDescount(2500)
        showToastDescount(2500)      
      }else{
        setDescount(2000)
        showToastDescount(2000)      
      }
      setZClaroActive(!zClaroactive)
      
    }

    return(
        <Box textAlign="center" fontSize="xl" 
        bg={useColorModeValue('gray.100', 'gray.700')} rounded='3xl'>
        <Divider colorScheme='blackalpha' />
  
        <Grid p={1}>

          <VStack spacing={8}>
            <GridItem rowSpan={1} colSpan={1}>
              <Center>
                <Text fontSize="3xl" fontWeight="bold">Cotizador interactivo</Text>
              </Center>
            </GridItem>
            <GridItem row={2} column={1}>
  
              <Tabs variant='soft-rounded' colorScheme='blue' 
                    isLazy={true} lazyBehavior={true}>
                <TabList>
                  {products.map(product => {
                    return (
                      <Tab onClick={showToastProduct} color='blackalpha' key={product.id}>{product.name}</Tab>
                    )
                  }
                  )}
                </TabList>
                <TabPanels>
                  {products.map(product => {
                    return (
                      <TabPanel key={product.id}>
                        <SimpleGrid columns={2} spacing={1}>
                          <ProductCard
                            id={product.id} name={product.name}
                            price={product.price} descount={descount}
                            totalization={product.totalization} />
  
                          <Box>
                            
                            {active ? 
                            <Tag mt='50px' p={3} rounded='full' colorScheme='green' size='xl'>3 MESES GRATIS</Tag> : 
                            <Tag mt='50px' p={3} rounded='full' colorScheme='green' size='xl'>1 MES GRATIS</Tag>
                            }
  
                            <Text mt={10}>¿el cliente agrega Tv?</Text>
                            <Button onClick={hasTv} m={2} id='tv' rounded='full' color='blue.400' isDisabled={active} >Si</Button>
                            <Button onClick={noTv} m={2} id='tv' rounded='full' color='blue.400' isDisabled={!active}>No</Button>
                            {
                              active &&
                              <>
                                <Button onClick={tvMaxSelected}
                                  roundedBottomLeft='50px' roundedTopRight='20px'
                                  colorScheme='pink' >
                                  {tvMaxActive?'TV DIGITAL':'TV MAX'}
                                </Button>
  
                                <Text mt={10}>¿Cuantos decos quiere?</Text>
                                <Container w='150px' mt={1}>
                                  <SimpleGrid columns={3} spacing={2}>
                                    <Button onClick={disminuirContadorDecos} rounded='full' colorScheme='blue'><MinusIcon /></Button>
                                    <Text>{contadorDecos}</Text>
                                    <Button onClick={aumentarContadorDecos} rounded='full' colorScheme='blue'><AddIcon /></Button>
  
                                  </SimpleGrid>
  
                                </Container>
                                <Text>costo decos ${valorDecos}</Text>
                                {contadorDecos > 1 &&
                                  <Tag colorScheme='green'>
                                    <TagLeftIcon>
                                      <AddIcon />
                                    </TagLeftIcon>
                                    <TagLabel>Baseport</TagLabel>
                                  </Tag>
                                }
                              </>
  
                            }
                            <Text mt={10}>¿El domicilio es zona Claro?</Text>
                            <Button onClick={changeDescount} m={2} id='tv' rounded='full' color='blue.400' isDisabled={zClaroactive} >Si</Button>
                            <Button onClick={changeDescount} m={2} id='tv' rounded='full' color='blue.400' isDisabled={!zClaroactive} >No</Button>
                          </Box>
                        </SimpleGrid>
                      </TabPanel>
                    )
                  }
                  )}
                </TabPanels>
              </Tabs>
            </GridItem>
          </VStack>
        </Grid>
      </Box>
    )
}
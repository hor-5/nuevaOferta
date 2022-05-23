import React,{useEffect, useState} from 'react'
import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Link,
    Stack,
    Text,
  } from '@chakra-ui/react';
import { useForm } from "react-hook-form";
  
  export default function Efectividad() {

    const { register, handleSubmit } = useForm();
    const [data, setData] = useState({});
     
    return (
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={2} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={4} w={'full'} maxW={'md'}>
            <Heading fontSize={'2xl'}>Calcular efectividad</Heading>
            <form onSubmit={handleSubmit((data) => setData(data))}>
            <FormControl >
              <FormLabel>Cantidad de llamadas</FormLabel>
              <Input id="llamadas" name='llamadas' min={0}
                     type="number" {...register("llamadas")}  />
            </FormControl>
            <FormControl >
              <FormLabel>Cantidad de ventas</FormLabel>
              <Input id="ventas" name='ventas' min={0}
                    {...register("ventas")} type="number" />
            </FormControl>
            <Stack spacing={6}>

              <Button mt={2} type='submit' colorScheme={'blue'} 
                      rounded='full' variant={'solid'}>
                Calcular efectividad
              </Button>
            </Stack>
            </form>
          </Stack>
        </Flex>
        <Flex flex={1}>
            <Text mt='200px' fontSize={'xl'} fontWeight={700}>
                Su efectividad es de {((data.ventas*100)/data.llamadas) ? Number((data.ventas*100)/data.llamadas).toFixed(2) :0}%
            </Text>
            
        </Flex>
      </Stack>
    );
  }
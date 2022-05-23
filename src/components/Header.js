import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react';

const Testimonial = ({ children }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }) => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'lg'}
      p={8}
      rounded={'xl'}
      align={'center'}
      pos={'relative'}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 16,
        borderRight: 'solid transparent',
        borderRightWidth: 16,
        borderTop: 'solid',
        borderTopWidth: 16,
        borderTopColor: useColorModeValue('white', 'gray.800'),
        pos: 'absolute',
        bottom: '-16px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}>
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children}) => {
  return (
    <Heading as={'h3'} fontSize={'xl'}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }) => {
  return (
    <Text
      textAlign={'center'}
      color={useColorModeValue('gray.600', 'gray.400')}
      fontSize={'sm'}>
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({
  src,
  name,
  title,
}) => {
  return (
    <Flex align={'center'} mt={8} direction={'column'}>
      <Avatar src={src} alt={name} mb={2} />
      <Stack spacing={-1} align={'center'}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

export default function WithSpeechBubbles() {
  return (
    <Box bg={useColorModeValue('gray.50', 'gray.700')} rounded='3xl'>
      <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={'center'}>
          <Heading>Guia rápida propuesta de valor</Heading>
          <Text>Algunos tips para PDV </Text>
        </Stack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}>
 
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>No más procentajes</TestimonialHeading>
              <TestimonialText>
                Ahora el descuento es de $2000 por 23 meses para todos los productos, y se aplica
                al Fullprice de cada producto.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://i.ibb.co/Wxy1NDq/exclamation-icon.png'
              }
              name={'$2000 por 23 meses'}
              title={'$2500 si el domicilio es zona de competencia(Claro)'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Fibra como protagonista</TestimonialHeading>
              <TestimonialText>
                El internet es la estrella, y la tv se ofrece como servicio de valor agregado (SVA)
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://i.ibb.co/Wxy1NDq/exclamation-icon.png'
              }
              name='Televisión como SVA'
              title={'Tv Digital y Tv Max son las nuevas opciones.'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Hasta 3 decodificadores</TestimonialHeading>
              <TestimonialText>
                La tv se puede ofrecer ahora con hasta 3 decos, y sin ningún deco también(Movistar play).
                Además tv se ofrece con 3 meses gratis y debito automatico obligatorio(Ya no hay bono por DA)
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://i.ibb.co/Wxy1NDq/exclamation-icon.png'
              }
              name={'$590 c/u, sin decos bonificados'}
              title={'Hasta 3 decos y con baseport incluido apartir del segundo'}
            />
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  );
}
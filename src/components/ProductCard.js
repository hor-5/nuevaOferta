import React from "react"
import {
    Box,
    Text,
    Tag,
    TagLeftIcon,
    Center,
    Stack,
    Image,
    useColorModeValue,
    Heading,
    TagLabel,
    Divider,
} from "@chakra-ui/react"
import { MinusIcon } from "@chakra-ui/icons"

export default function ProductCard(props) {

    const IMAGE = "https://i.pinimg.com/originals/dc/d9/41/dcd941ab9d0fe15b131cdfeab00ee5d6.png"
    return (
        <>
            <Center py={12}>
                <Box
                    role={'group'}
                    p={6}
                    maxW={'330px'}
                    w={'full'}
                    bg={useColorModeValue('white', 'gray.800')}
                    boxShadow={'2xl'}
                    rounded={'lg'}
                    pos={'relative'}
                    zIndex={1}>
                    <Box
                        rounded={'lg'}
                        mt={-12}
                        pos={'relative'}
                        height={'230px'}
                        _after={{
                            transition: 'all .9s ease',
                            content: '""',
                            w: 'full',
                            h: 'full',
                            pos: 'absolute',
                            top: 5,
                            left: 0,
                            backgroundImage: `url("${IMAGE}")`,
                            filter: 'blur(10px)',
                            zIndex: -1,
                        }}
                        _groupHover={{
                            _after: {
                                filter: 'blur(20px)',
                            },
                        }}>
                        <Image
                            rounded={'lg'}
                            height={230}
                            width={282}
                            objectFit={'cover'}
                            src={IMAGE}
                        />
                    </Box>

                    <Stack mt={2} pt={10} align={'center'}>
                        
                        <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                            {props.name}
                        </Heading>
                        <Stack direction={'row'} align={'center'}>
                            <Text fontWeight={800} fontSize={'xl'}>
                                ${props.price - props.descount}
                            </Text>
                            <Text textDecoration={'line-through'} color={'gray.600'}>
                                ${props.price}
                            </Text>
                            <Tag colorScheme='red' m={1}>
                                <TagLeftIcon boxSize='12px' as={MinusIcon} />
                                <TagLabel>${props.descount}</TagLabel>
                            </Tag>


                        </Stack>
                        <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                            ${props.descount} de descuento por 23 meses
                        </Text>
                    </Stack>
                    <Divider m={2} />
                    <Text>Totalización
                        <Tag colorScheme='red' m={1}>
                            <TagLeftIcon boxSize='12px' as={MinusIcon} />
                            <TagLabel>${props.totalization}</TagLabel>
                        </Tag>
                    </Text>
                    <Divider m={2} />
                    <Text >Precio con totalización</Text>
                    <Text fontWeight={700}>${(props.price - props.descount) - props.totalization}</Text>
                    
                    <Divider m={2} />
                </Box>
            </Center>
        </>
    )
}

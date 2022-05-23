import React, { useState } from 'react'
import {
    Box,
    Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    Text,
} from '@chakra-ui/react'

export default function TutorialT3() {

    const [tabIndex, setTabIndex] = useState(0)

    const handleSliderChange = (event) => {
        setTabIndex(parseInt(event.target.value, 10))
    }

    const handleTabsChange = (index) => {
        setTabIndex(index)
    }

    return (
        <>
            <Box>
                <input
                    type='range'
                    min='0'
                    max='2'
                    value={tabIndex}
                    onChange={handleSliderChange}
                />

                <Tabs index={tabIndex} onChange={handleTabsChange}>
                    <TabList>
                        <Tab>Primer paso</Tab>
                        <Tab>Segundo</Tab>
                        <Tab>Tercero</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <Text fontSize='md'>
                                Seleccionamos el plan de internet que vamos a cargar.
                                No importa si es con Tv o sin Tv, ahora Tv lo vendemos como SVA(servicio de valor agregado)
                                Por lo que de ser necesario lo vamos a agregar más adelante.
                            </Text>
                            <img

                                src='https://i.ibb.co/NT7K2K7/1erpaso-T3.png'
                                alt='1er paso'

                            />
                        </TabPanel>
                        <TabPanel>
                            <Text>
                                Al ingresar a la carga ya nos va a traer el bono correspondiente automaticamente
                                $2000 por 24 meses normalmente y $2500 si es zona de compentencia.
                                Los bonos de totalización son de $400 (100mb o menor velocidad) y $700 ahora (a partir de 300mb).
                            </Text>
                            <img

                                src='https://i.ibb.co/XjmkS1y/2dopaso-T3.png'
                                alt='2do paso'

                            />
                        </TabPanel>
                        <TabPanel>
                            <Text>
                                Ahora tenemos dos opciones de tv:
                                Tv Digital (39 canales) o TV Max (97 canales).
                                Se puede ofrecer sin decos o con hasta 3 decos y el valor adicional
                                por decodificador es de $590.
                                Ya viene configurado el descuento por 3 meses en la tv.
                            </Text>
                            <img

                                src='https://i.ibb.co/Dk9YczY/3erpaso-T3.png'
                                alt='3er paso'

                            />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </>
    )
}
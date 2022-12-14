import React, { useState } from 'react'
import {
    Box,
    Tabs,
    TabList,
    Tab,
    TabPanel,
    TabPanels,
    Text,
} from '@chakra-ui/react'
import completamiento1 from '../img/completamiento1.jpg'
import completamiento2 from '../img/completamiento2.jpg'
import completamiento3 from '../img/completamiento3.jpg'

export default function Completamiento() {
    const [tabIndex, setTabIndex] = useState(0)

    const handleSliderChange = (event) => {
        setTabIndex(parseInt(event.target.value, 10))
    }

    const handleTabsChange = (index) => {
        setTabIndex(index)
    }

    return (
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
                    <Tab>Reemplazamos oferta</Tab>
                    <Tab>Seleccionamos el producto</Tab>
                    <Tab>Cargamos el completamiento</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <Text fontSize='md' fontWeight='600' p={2} aling='center'>
                            Se realiza por reemplazo de oferta, vamos a Reemplazar ofertas y productos, 
                            como veniamos haciendo hasta ahora.
                        </Text>
                        <img alt="Movistar" src={completamiento1} />
                    </TabPanel>
                    <TabPanel>
                        <Text fontSize='md' fontWeight='600' p={2} aling='center'>
                            Seleccionamos la nueva oferta.
                        </Text>
                        <img alt="Movistar" src={completamiento2} />
                    </TabPanel>
                    <TabPanel>
                        <Text fontSize='md' fontWeight='600' p={2} aling='center'>
                            Y agregamos la TV como SVA (al igual que en un alta nueva el descuento de los primeros tres meses se carga automaticamente y podemos visualizarlo tildando "Mostrar detalles de precio").<br/>
                            En este caso no se aplica el descuento de 23 meses, solamente los 3 meses gratis de TV.
                        </Text>
                        <img alt="Movistar" src={completamiento3} />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    )
}
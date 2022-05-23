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
                    <Tab>Primer paso</Tab>
                    <Tab>Segundo paso</Tab>
                    <Tab>Tercer paso</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <Text fontSize='md' fontWeight='600' p={2} aling='center'>
                            Se realiza por reemplazo de oferta, vamos a Reemplazar ofertas y productos, 
                            como veniamos haciendo hasta ahora.
                        </Text>
                        <img src={completamiento1} />
                    </TabPanel>
                    <TabPanel>
                        <Text fontSize='md' fontWeight='600' p={2} aling='center'>
                            Seleccionamos la nueva oferta.
                        </Text>
                        <img src={completamiento2} />
                    </TabPanel>
                    <TabPanel>
                        <Text fontSize='md' fontWeight='600' p={2} aling='center'>
                            Y agregamos la TV como SVA (al igual que en un alta nueva el descuento de los primeros tres meses se carga automaticamente y podemos visualizarlo tildando "Mostrar detalles de precio")
                        </Text>
                        <img src={completamiento3} />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    )
}
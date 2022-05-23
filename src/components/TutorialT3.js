import React, { useState } from 'react'
import {
    Box,
    Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    Text,
    SimpleGrid,
} from '@chakra-ui/react'
import primeraEtapa from '../img/primeraEtapa.jpg'
import segundoEtapa from '../img/segundaEtapa.jpg'
import segundaEtapa2 from '../img/segundaEtapa2.jpg'
import terceraEtapa from '../img/terceraEtapa.png'

import Completamiento from './Completamiento'

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
                        <Tab>Seleccionamos el plan de internet </Tab>
                        <Tab>Cargamos </Tab>
                        <Tab>Agregamos TV </Tab>
                        <Tab>Completamiento</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <Text fontSize='md' fontWeight='600' p={2} aling='center'>
                                Seleccionamos el plan de internet que vamos a cargar.<br />
                                No importa si es con Tv o sin Tv, ahora Tv lo vendemos como SVA(servicio de valor agregado)
                                Por lo que de ser necesario lo vamos a agregar más adelante.<br />
                                Tv sigue siendo con debito obligatorio pero ya no hay bono por Debito automatico.<br />
                                Para la carga de ADSL/VDSL selecionar "Plan Movistar Internet".
                            </Text>
                            <img

                                src={primeraEtapa}
                                alt='primera etapa'

                            />
                        </TabPanel>
                        <TabPanel>
                            <Text fontSize='md' fontWeight='600' p={2} aling='center'>
                                Para ADSL el costo de instalación sigue siendo $4000.<br />
                                Hay que cargar manualmente el mes gratis como siempre, y al validar y calcular aplica el bono de 23 meses automaticamente "Promo Individuo 1x100%".<br />
                                Si no lo tildan no pasa nada, lo aplica igual, esto es solamente para poder visualizarlo.
                                Para que se visualice ok el bono de los 3 meses gratis de TV, pueden tildar "mostrar detalle de precios".
                                $2000 por 24 meses normalmente y $2500 si es zona de competencia.<br/>
                                Los bonos de totalización son de $400 (100mb o menor velocidad) y $700 ahora (a partir de 300mb) y duran mientras el cliente mantenga los dos servicios contratados (hogar y movil), ya no es por un solo año.
                            </Text>
                            <SimpleGrid columns={2} spacing={10}>
                                <img

                                    src={segundoEtapa}
                                    alt='segunda etapa'

                                />
                                <img

                                    src={segundaEtapa2}
                                    alt='segunda etapa'

                                />
                            </SimpleGrid>
                        </TabPanel>
                        <TabPanel>
                            <Text fontSize='md' fontWeight='600' p={2} aling='center'>
                                En el caso de que el cliente quiera TV, ahora tenemos dos opciones:<br />
                                Tv Digital (31 canales) o TV Max (93 canales).<br />
                                Se puede ofrecer con hasta 3 decos o sin decos (Movistar play) y el valor adicional
                                por decodificador es de $590.
                                Ya viene configurado el descuento por 3 meses en la TV (El mes gratis aplica solo para tv no para fibra).
                                <br />
                                <br />
                                Si el cliente quiere agregar algún Pack premium:<br />
                                ⚽ Pack Futbol 3 meses bonificado para centrales CLARO<br />
                                🎞️ HBO 50% de descuento por 2 meses<br />
                                ✏️ Continuamos con Amazon prime 3 meses sin cargo, Invita Movistar!<br />

                            </Text>
                            <img

                                src={terceraEtapa}
                                alt='tercera etapa'

                            />
                        </TabPanel>
                        <TabPanel>

                            <Completamiento/>

                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </>
    )
}
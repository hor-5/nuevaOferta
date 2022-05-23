import React from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Header from './Header';
import Cotizador from './Cotizador';
import TutorialT3 from './TutorialT3';
import Efectividad from './Efectividad';

export default function Menu() {
    return (
        <Tabs variant='soft-rounded' colorScheme='green'>
            <TabList>
                <Tab color='blackalpha' >Guia Rapida</Tab>
                <Tab color='blackalpha' >Cotizador</Tab>
                <Tab color='blackalpha' >Carga en T3</Tab>
                <Tab color='blackalpha' >Calcular efectividad</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>

                    {/*tab content*/}
                    <Header/>

                </TabPanel>
                <TabPanel>

                    {/*tab content*/}
                    <Cotizador/>

                </TabPanel>
                <TabPanel>

                    {/*tab content*/}
                    <TutorialT3/>

                </TabPanel>
                <TabPanel>

                    {/*tab content*/}
                    <Efectividad/>

                </TabPanel>
            </TabPanels>
        </Tabs>
    )
}
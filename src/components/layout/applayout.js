import React, { useState } from 'react';
import './applayout.css'

import RenderRow from './renderer';
import { NavbarSimple } from '../sidenavigationbar/sidenavigation';
import Tablecomponent from '../table/table.js'
import Notification from '../Notifications/notification';
import Scan from '../Scan/scan';
import Mail from '../emailinput/emailinput';
import StatusAdjust from '../statuscard/cardadjust';
import Login from '../modal/Loginmodal';
import {
  AppShell,
  Navbar,
  Header,
  Aside,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
} from '@mantine/core';
const Layout=()=> {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <div><AppShell
      styles={{
        main: {
          background: theme.colors.dark[9] 
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      fixed
      navbar={
        <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
          <NavbarSimple></NavbarSimple>
        </Navbar>
      }
      aside={
        <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
          <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
           <Notification></Notification>
          </Aside>
        </MediaQuery>
      }
    
      header={
        <Header height={80} p="md">
          <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
            <MediaQuery largerThan='xl' styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="lg"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>
<div className='headerlog'>
         
             {/* <img src='' alt='img'></img> */}
             <Text className='companyname'><h1>Dark Eye</h1> </Text>
              
             <Login></Login>
              </div>
          </div>
        </Header>
      }
    >
      {/* <div className='marginadd'>
      <StatusAdjust></StatusAdjust>
      <Scan></Scan>
      
      <RenderRow></RenderRow>
      </div> */}


<div className='main'>
  <StatusAdjust></StatusAdjust>
  <Scan></Scan>
  <Tablecomponent></Tablecomponent>
  </div>



    </AppShell>
    </div>
  );
}


export default Layout;

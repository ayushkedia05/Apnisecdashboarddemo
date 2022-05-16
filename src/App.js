
import "./App.css";
import Layout from "./components/layout/applayout";
import RenderRow from "./components/layout/renderer";
import { Container ,Table,Chip,Switch} from '@mantine/core';
import Tablecomponent from "./components/table/table";
import StatusAdjust from "./components/statuscard/cardadjust";
import React from "react";
import Scan from "./components/Scan/scan";
// import { NavbarSimple } from "./components/sidenavigationbar/sidenavigation";


import SideNavbar from "./components/navbar/navbar";
function App() {

return(
  <React.Fragment>
  <Layout></Layout> 

  </React.Fragment>
)
}

export default App;

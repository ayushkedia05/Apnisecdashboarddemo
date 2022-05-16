import React from "react";
import Statuscard from "./ststuscard";
import { Bug ,BugOff,User} from 'tabler-icons-react';
// import Sta

import { SimpleGrid } from '@mantine/core';

import './cadjust.css';


const StatusAdjust=()=>{







return(
    <div className="cadjust">
        {/* hjvbjjvjvj */}
    <SimpleGrid  breakpoints={[
        { minWidth: 1000 , cols: 1 },
  
        { minWidth: 'xl', cols: 3 },
        { minWidth: 'md', cols: 3 },
        { minWidth: 1340, cols: 2 },
      ]}>
    <Statuscard
    key='p1'
    icon={Bug}
    count={546}
    title='Total threat Found'
    colour='red'
    >

    </Statuscard>

    <Statuscard
    key='p2'

    icon={User}
    count={4}
    title='Device Connected'
    colour='blue'

    >

    </Statuscard>

    <Statuscard
    key='p3'

    icon={BugOff}
    count={300}
    title=' Total threat removed'
    colour='green'

    >

    </Statuscard>
    

    </SimpleGrid>
    </div>
)
}

export default StatusAdjust;
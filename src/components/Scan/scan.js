import React, { useState ,useRef} from "react";

import { RingProgress,Text,SimpleGrid,Card} from "@mantine/core";
import { ReportSearch } from "tabler-icons-react";
import DisplayCard from "./displaycounter";
import './scan.css'

const Scan=()=>{
const [scanwork,setscan]=useState(1);
//  const [counterin,setcounter]=useState(0);

const [value, setValue] = useState(0);
  const timer = useRef(null);
  const increment = () => {
    setscan(!scanwork);

    timer.current = setInterval(() => setValue(prev => prev + 1), 500);
  };

  function timeoutClear() {
    setscan(!scanwork);

    clearInterval(timer.current);
    setValue(0);
  }

  
      

  return (
    <div className="cadjust2">
      <SimpleGrid   
           spacing="lg"
           breakpoints={[
            // { minWidth: 'xs', cols: 1 },
  
            // { minWidth: 'sm', cols: 1 },
            { minWidth: 'xl', cols: 1 },
            { minWidth: 'md', cols: 1 },
            { minWidth: 1488, cols: 2},
            // { minWidth: 2200, cols: 2 },
           ]}
      >
      <div className="scan">
            <RingProgress
        sections={[{ value: {value}, color: 'blue' }]}
        label={
          <Text color="blue" weight={700} align="center" size="xl">
            {value}%
          </Text>
        }
      />
     
       <ReportSearch size={60}
    strokeWidth={2}
    color={'white'} />
     <div className="content">    
   {scanwork && <span className="runtext" >Run Scan</span>}
   {!scanwork && <span className="runtext">Running</span>}


{scanwork && <button className="runbtn" onClick={increment} >Click to run scan</button>}
{!scanwork && <button className="runbtn" onClick={timeoutClear} >Click to stop scan</button>}

     </div>



      </div>

      <div className="scan">
      <RingProgress
sections={[
  { value: 40, color: '#68b5e8' },
  { value: 15, color: '#6888e8' },
  { value: 15, color: '#8468e8' },
]}

label={
  <Text color="blue" weight={700} align="center" size="xl">
    {70}%
  </Text>
}
// <Text color="blue" weight={700} align="center" size="xl"></Text>

/>
     
       <ReportSearch size={60}
    strokeWidth={2}
    color={'white'} />
     <div className="content">
    <span className="runtext">Profile</span>

<button className="runbtn">Complete profile</button>


     </div>

      </div>
      </SimpleGrid>
      </div>
  )
};

export default Scan; 





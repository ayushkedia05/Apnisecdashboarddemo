import {React,} from "react";
// import { Bug, BuildingArch } from 'tabler-icons-react';
import { Skeleton } from "@mantine/core";
import './statuscard.css'
import { useState } from "react";

const Statuscard=(props)=>{

    const [loading, setLoading] = useState(true);
    
return(
    <Skeleton visible={loading} onClick={() => setLoading((prev) => !prev)}>
    <div className="statuscard">
        <div className="statusicon"><props.icon size={60}
    strokeWidth={2}
    color={'white'}></props.icon></div>
    
    <div className="statuscardinfo">
        <div  className="statustitle">{props.title}</div>
        <div style={{color: props.colour}} className="statuscount">{props.count}</div>
        {/* <span>{}</span> */}

    </div>
    </div>
    </Skeleton>
)
}

export default Statuscard;

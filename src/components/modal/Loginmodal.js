import './loginmodal.css'
import { Button } from '@mantine/core';
// import {} from react-Table
import { AuthenticationTitle } from '../signup';
import { Table,X } from 'tabler-icons-react';
const Login=()=>{

  const closeit=()=>{
//    const close=document.getElementsByClassName('hidden');

   const close=document.getElementById('hide');
   close.style.display="none";
  };


  const openit=()=>{
    const close=document.getElementById('hide');
    close.style.display="block";
    
   };


return(
    <div>
    <Button id='open' variant="gradient" onClick={openit} gradient={{ from: 'indigo', to: 'cyan' }}>login</Button>

     <div className='modal hidden' id='hide'>
         
             <div className='close-modal' onClick={closeit}><X/></div>
       <div>

             <AuthenticationTitle></AuthenticationTitle>


       </div>
         

     </div>
     </div>
)
};

export default Login;
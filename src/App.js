import './App.css';
import { Primarybtn,  BtnName } from './Primarybtn';
import {MainInput, MainInputBtnName} from './MainInput';
import { useState } from 'react';
const App = () => {
    const name = "Yansane";
    // declaring a state
    const [prenom, setPrenom] = useState("");
    const [btnName, setBtn] = useState("default name") ;
    return (
      <>
        <div className="flex flex-col max-w-sm gap-1 p-4">
          <h1 className="">Hello {prenom} {name}</h1>
          {/*Notice we can pass the prenom or setPrenom it'll work */ }
          <MainInput setPrenom={setPrenom}/>

         <MainInputBtnName setBtn = {setBtn}/>

          {/**  Primarybtn components */}
          {/* <BtnName btn_name = {btnName}/> */}  
          {/** what i want to do if the btnName is go only
           * the go button have to showed up else the submit btn
           * so let's try i have to refer to this at the top
           * const [btnName, setBtn] = useState("default name") ;
           */}
           {
             btnName === "Go" ?  <Primarybtn btn_name="Go"/> :   <Primarybtn btn_name="Submit"/>

           }

          {/** End of Primarybtn components */}


        </div>
      </>
    );
}

export default App;
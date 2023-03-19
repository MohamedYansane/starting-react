import './App.css';
import { Primarybtn,  BtnName } from './Primarybtn';
import MainInput from './MainInput';
import { useState } from 'react';
const App = () => {
    const name = "Yansane";
    // declaring a state
    const [prenom, setPrenom] = useState("Mohamed");
    const [btnName, setBtn] = useState("default name") ;
    return (
      <>
        <div className="flex flex-col max-w-sm gap-1 p-4">
          <h1 className="">Hello {prenom} {name}</h1>
          <MainInput setPrenom={setPrenom}/>
          <input
            type="text"
            name=""
            id=""
            onChange={(e)=>
            setBtn(e.target.value)}
            placeholder="Enter the button name "
            className=" border rounded-md p-2 w-sm   hover:outline-indigo-600" />
            <BtnName btn_name = {btnName}/>
            <Primarybtn />


        </div>
      </>
    );
}

export default App;
import React from "react";
export const MainInput = ({setPrenom}) => {
 
  return (
    <input
        type="text"
        name=""
        id=""
        onChange={(e)=>
        setPrenom(e.target.value)}
        placeholder="Enter your first name "
        className=" border rounded-md p-2 w-sm   hover:outline-indigo-600" />
  )
}
export const MainInputBtnName = ({setBtn}) =>{
    return (
        <input
        type="text"
        name=""
        id=""
        onChange={(e)=>
        setBtn(e.target.value)}
        placeholder="Enter the button name "
        className=" border rounded-md p-2 w-sm   hover:outline-indigo-600" />
    );
}

/*export default{
    MainInput,
    MainInputBtnName
};*/

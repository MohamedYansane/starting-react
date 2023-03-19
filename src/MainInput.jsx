import useState from 'react'

const MainInput = ({setPrenom}) => {
 
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

export default MainInput
import React, { useState } from "react";


const object = ["::happy::", "::sad::", "::smiley::"]

export const Emoji = () => {

    const[text, setText] = useState("");

    const [list, setList] = useState([])


    const handleChange = (e) => {
        setText(e.target.value)
    }


  const handleSubmit = (e)=>{
   
    e.preventDefault();
    setList([...list, text])

    for(let i = 0; i < list.length; i++){
      for(let j = 0; j < object.length; j++){

        if(list[i] === object[j]){
          setList([...list, object[j]])
        }
      }
      
    }
  }


  

  return (
    <div>
       <form onSubmit={handleSubmit} >
           <input onChange={handleChange} type="text" placeholder="Enter the text"/>
           <button >Submit</button>
       </form>

       {list.map((e) => (
         <>
        <div>{e}</div>
         </>
       ))}
    </div>
  )
}

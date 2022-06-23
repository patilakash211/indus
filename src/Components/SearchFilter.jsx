import React from 'react';
import Data from "../Db.json";

export const SearchFilter = () => {
    const [search,setSearch] =React.useState("")
  return (
    <div>
        <input  
        type="text"
        placeholder='Enter text ...'
        value={search}
        onChange={e=>{setSearch(e.target.value)}}
        />
      
        {Data.filter((val)=>{
            if(search === ""){
                // eslint-disable-next-line 
                return val
            }
            else if(val.first_name.toLowerCase().includes(search.toLowerCase())){
                // eslint-disable-next-line 
                    return val                
            }
        }).map((val,key)=>{
            return <div key={val.id}><p>{val.first_name}</p></div>
        })}
    </div>
  )
}

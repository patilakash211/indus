import React,{useState} from 'react'

export const Fetch = () => {
  const [posts, setPosts] = useState([]);

  const FetchPost = async ()=>{
    const respose = await fetch("https://fakestoreapi.com/products");
    const data = await respose.json();
    setPosts(data)
  };
  

//   useEffect(() => {
//     FetchPost()
//   },[])
  
  console.log(posts)

  return (
    <div>
        {posts.map((e,id)=>(
            <div key={id} style={{display: 'flex'}}>
              <img src={e.image} alt="logo" style={{width: '100px', height: '100px'}}/>
              {e.title}
              {e.category}
            </div>
        ))}
        <button onClick={()=>FetchPost()}>Fetched Data</button>
    </div>
  )
}

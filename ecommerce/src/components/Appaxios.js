import React, { useEffect, useState} from 'react'
import axios from 'axios'
const Appaxios = () => 
    {
    const [data, setData] = useState([]);
    useEffect(()=>{fetch("https://jsonplaceholder.typicode.com/todos").then
    (response => setData(response.data))},[])
  return (
    <div>
        {data.map((item,index)=><li>{item.tille}</li>)}
    </div>
  )
}
export default App;
//npm install axios
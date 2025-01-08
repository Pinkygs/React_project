import React,{useState} from 'react'
import { Home2 } from './Home2'
export const App = () => {
    const [username] = useState("Pinky");
  return (
    <div>
        <Home2 username = {username}/>
    </div>
  )
}
export default App;
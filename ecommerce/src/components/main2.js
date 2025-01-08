import React, {useState} from 'react'
import { Home6 } from './Home6';
export const App = () => {
    const [username] = useState("Pink")
  return (
    <div>
        <h1> Hi i am praent companent and user name is {username}</h1>
        <Home6 uname = {username} />>
    </div>
  )
}
export default App;
import React from 'react'
import { Menubar } from './Menubar'
import { BrowerRouter, Route,Router } from 'react-router-dom'
import{ Home } from './Home'
import { About } from './About'
import { Dashboard } from './Dashboard'
export const App = () => {
  return (
    <div>
      <BrowerRouter>
      <Menubar />
      <Router>
        <Route path='/' element = {<Home/>} />
        <Route path='/about/:pname' element = {<About/>} />
        <Route path='/dashboard' element = {<Dashboard/>} />
      </Router>
      </BrowerRouter>
    </div>
  );
};
export default App;

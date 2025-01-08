import React from 'react'

export const Appmap = () => {
    const marks =[1,5,7,3,6,4]
    return (
    <div>
        {
        marks.map((eachMark,index)=> <li> {eachMark} </li>)
        }
    </div>
    )
}
export default App;

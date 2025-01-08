import React, { Component } from 'react'
import Myprocomponent from './MyComponent'
export default class  App1 extends Component {
    State =
    {
        tName: "Sudha",
        subject:"AIML",
        section:"section-B"
    }
    render() {
  return (
    <div>
        <Myprocomponent tName = { this.state.tName} />>
        Hi I teach { this.state.subject}
        <br />
        now i am in class {this.state.section}
    </div>
  )
}

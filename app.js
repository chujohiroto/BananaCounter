import React from 'react'
import Counter from './count.js'
import FakeTodos from './fake'
import Banana from './banana.js';
const style ={
  root:{
    backgroundColor: 'yellow'
  },
  box :{
    transition:'all 300ms 0s ease'
  },
  active :{
  transform:'translateX(300px)'
  }
}

class App extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      styleClass: 'root'
    }
  }

  render() {
    return (
      <React.Fragment>
        <div style ={style.root}>
          <h1>Hello,Banana</h1>
        </div>
        <Banana/>
        <Counter></Counter>
      </React.Fragment>
    )
  }
}

export default App

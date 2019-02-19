import React from 'react'

class FakeTodos extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      todos: null
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => this.setState({ todos: json }))
  }

  render() {
    const { todos } = this.state

    return (
      <React.Fragment>
        {todos && (
          <h4>{todos.title}</h4>
        )}
      </React.Fragment>
    )
  }
}

export default FakeTodos
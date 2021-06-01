import React from 'react'
import UseForm from './components/UserForm'
import axios from "axios"
import './App.css'

class App extends React.Component {
  state = { 
    repos: null
  }
  getUser = (e) => {
    e.preventDefault();
    const user = e.target.elements.username.value
    if (user) {
      axios.get(`https://api.github.com/users/${user}`)
    .then((res) => {
      const repos = res.data.public_repos
      this.setState({ repos }) // since the names are same we don't require to type like ({ repos: repos })
    })
    } 
  }
  render(){
    return (
      <>
        <h1 className="App-header">HTTP Calls in React</h1>
        <UseForm getUser={this.getUser} />
        {this.state.repos ? <p>Number of repos: {this.state.repos}</p> : <p>Please enter a username.</p> }
      </>
    )
  }
}

export default App;
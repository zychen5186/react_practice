import './App.css';
import React, { useState } from 'react';
import Axios from 'axios';

function App() {
  const [name, setName] = useState("")
  const [role, setRole] = useState("")
  const [text, setText] = useState("")


  const handleSubmit = (e) => {
      e.preventDefault();

      Axios.post('http://localhost:4000/insert', {
          firstName: name,
          companyRole:role
      })
  }

  const handleClick = () => {
    Axios.get('http://localhost:4000/getText')
    .then((response) => {
      setText(response.data[0].name)
    })
  }

  return (
    <div className="App">
      <header className="App-header"> 
        <div className="logIn-form">
            <form onSubmit={handleSubmit}>
                <p>First Name</p>

                <input
                  className = "Name" 
                  type="text"
                  placeholder="First name ..."
                  onChange={(e) => {setName(e.target.value)}}
                />

                <p> Company Role</p>

                <input 
                  className = "Role"
                  type="text"
                  placeholder = "Role...." 
                  onChange={(e) => {setRole(e.target.value)}}
                />

                <button type="submit">Submit</button>
            </form>
        </div>
        <div>
          <input 
            type="text" 
            id="myTextbox" 
            value={text}/>
          <button
           onClick={handleClick}
           id="myButton">Update Text</button>
        </div>
      </header>
    </div>
  );
}

export default App;
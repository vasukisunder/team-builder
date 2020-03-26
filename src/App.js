import React, {useState} from 'react';
import './App.css';
import Form from './Form';


function App() {
  const [team, setTeam] = useState([{
    name: '',
    email: '',
    role: '',
  }])

  const [form, setForm] = useState({
    name: '',
    email: '',
    role: '',
  })

  const onInputChange = event => {
    setForm({...form, [event.target.name]: event.target.value});
  }

  const onFormSubmit = event => {
    event.preventDefault();
    const newPerson = {
      name: form.name,
      email: form.email,
      role: form.role,
    }
    setTeam(team.concat(newPerson));
    console.log(team);
    setForm({name: '', email: '', role: ''})
  }


  return (
    <div className="App">
      <Form 
      onInputChange={onInputChange}
      onFormSubmit={onFormSubmit}
      form={form}
      />

      <h1>Team List:</h1>
      {
        team.map(item => {
          return (
            <div>
              <h2>{item.name}</h2>
              <h3>{item.role}</h3>
              <p>{item.email}</p>
            </div>

          )
           
        })
      }
      
    </div>
  );
}

export default App;


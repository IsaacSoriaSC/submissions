import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '123456789' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const onChangeName = (event) => {
    setNewName(event.target.value)
  }

  const onChangeNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const setNewPerson = (event) => {
    event.preventDefault()
   if((!persons.find(persona => persona.name == newName)))
   {
    const newPerson = {
      name: newName,
      number: newNumber
    }
    setPersons(persons.concat(newPerson))
    setNewName('')
    setNewNumber('')
    console.log(persons)
  }
    else {
      window.alert( newName + ' already exist on the phonebook' )
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={setNewPerson} >
        <div>
          name: <input
           value={newName}
           onChange={onChangeName} 
           required
           />
        </div>
        <div>number: <input 
           value={newNumber}
           onChange={onChangeNumber}
           required 
        /></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(persona => {
        return <p key={persona.name}> {persona.name} {persona.number} </p>
      })}
    </div>
  )
}

export default App
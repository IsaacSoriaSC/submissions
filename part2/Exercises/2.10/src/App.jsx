import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'


const App = () => {

  // Estados de la App (componente principal)
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filteredPersons, setFilteredPersons] = useState([])


  // EventHandlers de los campos de ingreso Name y Number
  const onChangeName = (event) => {
    setNewName(event.target.value)
  }
  const onChangeNumber = (event) => {
    setNewNumber(event.target.value)
  }


  // Función para añadir una nueva persona al Phonebook
  const setNewPerson = (event) => {
    event.preventDefault()
   if((!persons.find(persona => persona.name == newName)))
   {
    const newPerson = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
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

  // Función para filtrar los nombres de las personas
  const onChangeFilter = (event) => {
    const pattern = event.target.value
    const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(pattern.toLowerCase()))
    setFilteredPersons(filteredPersons)
    console.log(filteredPersons)
  }

  return (
    <div>

      <h2>Phonebook</h2>
    
      <Filter onChangeFilter={onChangeFilter} />

      <h2>add a new</h2>
   
      <PersonForm  setNewPerson={setNewPerson} newName={newName} onChangeName={onChangeName} newNumber={newNumber} onChangeNumber={onChangeNumber} />

      <h2>Numbers</h2>
      
      <Persons filteredPersons={filteredPersons} persons={persons} />

    </div>
  )
}

export default App
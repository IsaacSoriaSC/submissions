import { useEffect, useMemo, useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import axios from 'axios'
import personService from './services/personService'

const App = () => {

  // Estados de la App (componente principal)
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filteredPersons, setFilteredPersons] = useState([])


  // Hook de efecto para obtener los datos de la API
  useEffect(() => {
      personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)})
  }, [])


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
    }

    personService
    .create(newPerson)
    .then(createPerson => {
      setPersons(persons.concat(createPerson))
    })
    

    
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
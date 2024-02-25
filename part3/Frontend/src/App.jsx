/* eslint-disable no-unused-expressions */
/* eslint-disable n/handle-callback-err */
/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/personService'
import Notification from './components/alert'
import Country from './components/Country'
import countryService from './services/countryService'
import FilterCountry from './components/FilterCountry'

const App = () => {
  // Estados de la App (componente principal)
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filteredPersons, setFilteredPersons] = useState([])
  const [errorMessage, setErrorMessage] = useState(null)
  const [errorColor, setErrorColor] = useState(null)
  const [country, setCountry] = useState([])
  const [changeCountry, setChangeCountry] = useState ('')

  // Hook de efecto para obtener los datos de la API de manera asíncrona
  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  useEffect(() => {
    countryService
      .getCountry()
      .then(initialCountry => {
        setCountry(initialCountry)
      })
  }, [])

  const fetchData = () => {
    personService.getAll().then(updatedPersons => {
      setPersons(updatedPersons)
    })
  }

  // EventHandlers de los campos de ingreso Name y Number
  // Estos se encargan de registrar lo que sea que esté escrito en los campos Name y Number
  // Incluso si no se ha dado click a un botón, esto se mantiene registrando todo el tiempo
  const onChangeName = (event) => {
    setNewName(event.target.value)
  }
  const onChangeNumber = (event) => {
    setNewNumber(event.target.value)
  }
  const onChangeCountry = (event) => {
    setChangeCountry(event.target.value)
  }

  /// ///////////////////////////////////////////////////////////////////////////////////////////////////
  // Función para añadir una nueva persona al Phonebook
  const setNewPerson = (event) => {
    event.preventDefault()
    if ((!persons.find(persona => persona.name === newName))) {
      // Crea un objeto newPerson con los datos obtenidos de los campos de ingreso
      const newPerson = {
        name: newName,
        number: newNumber
      }
      // Luego llama al servicio personService con la función "create()"
      // La función "create()" recibe como parámetro el objeto newPerson
      personService
        .create(newPerson)
        .then(createPerson => {
          setPersons(persons.concat(createPerson))
          setNewName('')
          setNewNumber('')
          fetchData()
          // Cambiamos el estado del errorMessage de null a Added Successfull
          // Esto muestra el mensaje por 5 segundos, luego el TimeOut lo devuelve a null
          setErrorColor('green')
          setErrorMessage('Added Successfull')
          setTimeout(() => {
            setErrorColor(null)
            setErrorMessage(null)
          }, 5000)
        })
        .catch(error => {
          setErrorColor('red')
          setErrorMessage(
          <div>
            Name must be at least 3 characters long <br />
            Number should be at least 8 numbers & follow the format: XX-XXXXX or XXX-XXXXX
          </div>
          )
          setTimeout(() => {
            setErrorColor(null)
            setErrorMessage(null)
          }, 5000)
          console.log(error.response.data.error)
        })
      console.log(persons)
    } else {
    // Si el usuario YA existe en el Phonebook, pregunta si desea sobreescribir el número
      if (window.confirm('This user is already on the Phonebook. Do you wish to replace the old number with the new one?')) {
        // Primero busca el nombre de la persona ya registrada y asigna el objeto entero a updatePerson
        // Luego modifica updatePerson para que mantenga los datos Y SE SOBREESCRIBA el nuevo número
        const updatePerson = persons.find(p => p.name === newName)
        const changePerson = { ...updatePerson, number: newNumber }

        // Se llama al servicio y en los parámetros de update, se le pasa el id del objeto recién creado
        // Como segundo parámetro se le pasa el objeto recién creado
        personService
          .update(changePerson.id, changePerson)
          .then(appliedChanges => {
          // Hacemos un mapeo que devuelve cada registro del arreglo, EXCEPTO el que tiene el mismo id
          // Cuando el mapeo encuentra el que tiene el mismo id, lo cambia por el que acabamos de crear nosotros
            setPersons(persons.map(p => p.id !== changePerson.id ? p : changePerson))
            setNewName('')
            setNewNumber('')
            // Cambiamos el estado del errorMessage de null a Number Update Successfull
            // Esto muestra el mensaje por 5 segundos, luego el TimeOut lo devuelve a null
            setErrorColor('green')
            setErrorMessage('Number Update Successfull')
            setTimeout(() => {
              setErrorColor(null)
              setErrorMessage(null)
            }, 5000)
          })
      }
    }
  }

  /// ///////////////////////////////////////////////////////////////////////////////////////////////////
  // Función para filtrar los nombres de las personas
  // Agrega el valor actual del campo de ingreso, a la variable Pattern
  // Luego filtra los nombres del arreglo persons (con Pattern), y los asigna a la variable filteredPersons
  const onChangeFilter = (event) => {
    const pattern = event.target.value
    const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(pattern.toLowerCase()))
    setFilteredPersons(filteredPersons)
    console.log(filteredPersons)
  }

  /// ///////////////////////////////////////////////////////////////////////////////////////////////////
  // Función para borrar un registro del servidor Json con axios
  const borrarPersona = id => {
    if (window.confirm('Are you sure you want to delete this person?')) {
      personService
        .deletePerson(id)
        .then(deletedPerson => {
          setPersons(persons.filter(person => person.id !== id))
          // Cambiamos el estado del errorMessage de null a Deleted Successfull
          // Esto muestra el mensaje por 5 segundos, luego el TimeOut lo devuelve a null
          setErrorColor('green')
          setErrorMessage('Deleted Successfull')
          setTimeout(() => {
            setErrorColor(null)
            setErrorMessage(null)
          }, 5000)
        })
        .catch(error => {
          setErrorColor('red')
          setErrorMessage('This user has already been removed from server')
          setTimeout(() => {
            setErrorColor(null)
            setErrorMessage(null)
          }, 5000)
        }
        )
    }
  }

  return (
    <div>

      <h1>Phonebook</h1>

      <Notification message={errorMessage} colorEr={errorColor} />

      <Filter onChangeFilter={onChangeFilter} />

      <h1>add a new</h1>

      <PersonForm setNewPerson={setNewPerson} newName={newName} onChangeName={onChangeName} newNumber={newNumber} onChangeNumber={onChangeNumber} />

      <h1>Numbers</h1>

      <Persons filteredPersons={filteredPersons} persons={persons} deletePerson={borrarPersona} />

      <Country onChangeCountry={onChangeCountry} />

      <FilterCountry country={country} pattern={changeCountry} />

    </div>
  )
}

export default App

import App from "../App";


// Persons muestra los nombres del arreglo (state) persons en caso de que filteredPersons esté vacío
// Si filteredPersons no está vacío, muestra los nombres filtrados
// Además, al mostrar cada registro, se añade un botón y el botón tiene una función callback que llama a la función deletePerson    
// La función DEBE ser callback, porque sin el callback "() => {}" la función se ejecuta inmediatamente al renderizar el componente
const Persons = (props) => {
    return(
        <div>
            { props.filteredPersons.length == 0 ? props.persons.map(persona => {return <p key={persona.id}> {persona.name} {persona.number} <button  onClick={() => {props.deletePerson(persona.id)}} >delete</button> </p> }) :
              props.filteredPersons.map(persona => {return <p key={persona.id}> {persona.name} {persona.number} <button onClick={() => {props.deletePerson(persona.id)}}>delete</button> </p> }) }
        </div>
    )
}

export default Persons
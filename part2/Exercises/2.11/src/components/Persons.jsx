import App from "../App";

const Persons = (props) => {
    return(
        <div>
            { props.filteredPersons.length == 0 ? props.persons.map(persona => {return <p key={persona.id}> {persona.name} {persona.number} </p>}) :
              props.filteredPersons.map(persona => {return <p key={persona.id}> {persona.name} {persona.number} </p>}) }
        </div>
    )
}

export default Persons
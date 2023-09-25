import App from "../App"

const PersonForm = (props) => {
    return (
        <form onSubmit={props.setNewPerson} >
        <div>
          name: <input
           value={props.newName}
           onChange={props.onChangeName} 
           required
           />
        </div>
        <div>number: <input 
           value={props.newNumber}
           onChange={props.onChangeNumber}
           required 
        /></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
}

export default PersonForm
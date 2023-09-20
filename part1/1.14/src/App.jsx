import { useState } from 'react'


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  
  const [votes, setVotes] = useState({
    0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0 
  })

  const next = () => {
    let min = 0
    let max = 7

    return Math.floor(
      Math.random() * (max - min + 1) + min
    )
  }

  const votesCopy = {...votes}


  const updateVotes = () => {
    console.log('Los votos son: ', votes, selected)
    votesCopy[selected] += 1;
    return (
      setVotes(votesCopy)
    )
  }
  
  const mostVoted = (votes) => {
    let arrVotes = Object.values(votes)
    let max = Math.max(...arrVotes)
    let index = arrVotes.indexOf(max)
    return (
     index
    )
  }

  return (
    <>
    <Title text={'Anecdote of the Day'} />
    <div>
      {anecdotes[selected]}
    </div>
    <Button text={'vote'} function={updateVotes} />
    <Button text={'next anecdote'} function={() => {setSelected(next)}} />
    <Title text={'Anecdote with most votes'} />
    <div>
      {anecdotes[mostVoted(votes)]}
    </div>
    </>
  )
}

const Button = (props) => {
  return(
    <button onClick={props.function} > {props.text} </button>
  )
}

const Title = (props) => {
  return (
    <h2> {props.text} </h2>
  )
}

export default App
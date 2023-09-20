import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const plusGood = () => {
    console.log('plusGood pressed')
    return setGood(good + 1)
  }

  const plusNeutral = () => {
    console.log('plusNeutral pressed')
    return setNeutral(neutral + 1)
  }

  const plusBad = () => {
    console.log('plusBad pressed')
    return setBad(bad + 1)
  }

  return (
    <div>

      <Title text={'give feedback'} />

      <Button text={'good'} funcName={plusGood} />
      <Button text={'neutral'} funcName={plusNeutral} />
      <Button text={'bad'} funcName={plusBad} />

      <Title text={'statistics'} />

      <Stats text={'good'} stateVal={good} />
      <Stats text={'neutral'} stateVal={neutral} />
      <Stats text={'bad'} stateVal={bad} />


    </div>
  )
}

const Title = ({text}) => {
  return (
    <h3> {text} </h3>
  )
}

const Button = ({text, funcName}) => {
  
  return (
    <button onClick={funcName} >{text}</button>
  )
}

const Stats = (props) => {
  return (
    <p> {props.text} {props.stateVal} </p>
  )
}
export default App
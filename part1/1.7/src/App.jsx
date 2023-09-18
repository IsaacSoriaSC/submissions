import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [avg, setAvg] = useState([])

  const plusGood = () => {
    console.log('plusGood pressed')
     setGood(good + 1)
     setAll(all + 1)
     setAvg(avg.concat(1))
  }

  const plusNeutral = () => {
    console.log('plusNeutral pressed')
     setNeutral(neutral + 1)
     setAll(all + 1)
     setAvg(avg.concat(0)) 
  }

  const plusBad = () => {
    console.log('plusBad pressed')
    console.log('el avg va en', avg.length)
     setBad(bad + 1)
     setAll(all + 1)
     setAvg(avg.concat(-1))
  }

  const average = (arr) => {
    let sum = arr.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);
  
    let avg = sum / arr.length;
  
    return avg;
  }

  const percentage = (arr) => {
    const numberGoods = arr.filter(num => num === 1).length
    return ((numberGoods / arr.length) * 100 + "%" )
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
      <Stats text={'all'} stateVal={all} />
      <Stats text={'average'} stateVal={average(avg)} />
      <Stats text={'positive'} stateVal={percentage(avg)} />


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
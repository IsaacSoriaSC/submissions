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

      <Static arr={avg} average={average(avg)} percentage={percentage(avg)} 
                        good={good} neutral={neutral} bad={bad}
                        all={all} />


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



const Static = (props) => {
  if(props.good || props.neutral || props.bad)
 { return (
    <>
     <StatisticLine text={"good"} value={props.good} />
     <StatisticLine text={"neutral"} value={props.neutral} />
     <StatisticLine text={"bad"} value={props.bad} />
     <StatisticLine text={"all"} value={props.all} />
     <StatisticLine text={"average"} value={props.average} />
     <StatisticLine text={"positive"} value={props.percentage} />
    </>
  )}
  else{
    return <p>No feedback given</p>
  }
}

const StatisticLine = ({text, value}) => {
  console.log("StatisticLine working")
  return (
    <p> {text} {value} </p>
  )
}

export default App
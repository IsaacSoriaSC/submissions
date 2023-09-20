const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
        <Header course={course} />
        
        <Content part1={part1} part2={part2} part3={part3}
         exercises1={exercises1} exercises2={exercises2}
         exercises3={exercises3} />

        <Total exercises1={exercises1} exercises2={exercises2}
         exercises3={exercises3} />
    </div>
  )
}

const Header = (props) => {
  return (
    <div>
      {props.course} 
    </div>  
  )
}

const Content = (props) => {
  return (
    <>
    <div>
      {props.part1} {props.exercises1}
    </div>
    <div>
      {props.part2} {props.exercises2}
    </div>
    <div>
      {props.part3} {props.exercises3}
    </div>
    </>
  )
}

const Total = (props) => {
  return (
    <div>
      {props.exercises1 + props.exercises2 + props.exercises3}
    </div>
  )
}

export default App
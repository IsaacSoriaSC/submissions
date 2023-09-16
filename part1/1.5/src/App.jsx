const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header name={course.name} />

      <Content parts={course.parts} />

      <Total parts={course.parts} />

    </div>
  )
}


const Header = (props) => {
  return (
    <div>
      {props.name} 
    </div>  
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <div>
      <p> Course name: {props.parts[0].name} Number: {props.parts[0].exercises} </p>
      <p> Course name: {props.parts[1].name} Number: {props.parts[1].exercises} </p>
      <p> Course name: {props.parts[2].name} Number: {props.parts[2].exercises} </p>
    </div>
   )
}

const Total = (props) => {
  return (
    <div>
      Total number of exercises: {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}
    </div>
  )
}


export default App
const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />

      <Content name={part1.name} exercises={part1.exercises} />
      <Content name={part2.name} exercises={part2.exercises} />
      <Content name={part3.name} exercises={part3.exercises} />

      <Total ex1={part1.exercises} ex2={part2.exercises} ex3={part3.exercises}/>

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
  console.log(props)
  return (
    <div>
      <p>Course name: {props.name}, Number: {props.exercises}</p>
   </div>
   )
}

const Total = (props) => {
  return (
    <div>
     Total of exercises in this course: {props.ex1 + props.ex2 + props.ex3}
    </div>
  )
}


export default App
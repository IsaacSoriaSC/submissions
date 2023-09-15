const Hello = () => {
  return (
    <div>
      <p>Hello World</p>
    </div>
  )
}

const App = () => {
  console.log('Hello Component');
  return (
    <div>
     <h1>Greetins</h1>
     <Hello />
     <Hello />
    </div>
  )
}

export default App
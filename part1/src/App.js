import './App.css';

const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old.</p>
    </div>
  )
}


const App = () => {

  const name = "James";
  const age = 24;

  return (
    <div className="App">
      <h1>Greetings</h1>
      <Hello name="John" age="26"/>
      <Hello name="Lance" age="35"/>
      <Hello name={name} age={age} />
    </div>
  );
}

export default App;

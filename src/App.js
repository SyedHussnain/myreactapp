import './App.css';

function App(props) {
  return <div>
    Hello {props.name} <br/>
    Your age is {props.Age + 25}
  </div>

}


export default App;
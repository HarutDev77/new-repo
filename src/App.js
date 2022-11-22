// import logo from './logo.svg';
import './App.css';
import {MyName,WhoIAm} from './component.js';


function Greeting () {

  return (
    <div>
      <h4>Hello, i am a function component</h4>
    </div>
  )
}

function Name (props){

  return(
    <span>{props.name}</span>
  )
}

function Surname (props){

  return(
    <span>{props.surname}</span>
  )
}


function User (props) {

  return (
      <h2>Hello, i am React developer <Name name={props.name}/> <Surname surname="Hovhannisyan" />, and  i am {props.age}</h2>
  )
}



function App() {
  return (
    <div className="App">
      <header className="App-header">
  
      <MyName />
      <WhoIAm />
    
      <Greeting />

        <User name = "Harut" age = {28} />
        <User name = "Arman" age = {27} />
       
      </header>
    </div>
  );
}

export default App;

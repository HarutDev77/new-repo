// import logo from './logo.svg';
import './App.css';
import {MyName,WhoIAm,} from './components/component.js';
import {Product} from './components/product';
import Counter from './components/component.js';
import {Input} from './components/input';


// function Greeting () {

//   return (
//     <div>
//       <h4>Hello, i am a function component</h4>
//     </div>
//   )
// }

// function Name (props){

//   return(
//     <span>{props.name}</span>
//   )
// }

// function Surname (props){

//   return(
//     <span>{props.surname}</span>
//   )
// }


// function User (props) {

//   return (
//       <h2>Hello, i am React developer <Name name={props.name}/> <Surname surname="Hovhannisyan" />, and  i am {props.age}</h2>
//   )
// }

let fruits = [
  {
    name: 'apple',
    price: '1.5$',
    description: 'golden apple',
    icon: '🍎'
  },
  {
    name: 'banana',
    price: '1.5$',
    description: 'bananas',
    icon: '🍌'
  },
  {
    name: 'avocado',
    price: '2$',
    description: 'grate avocado',
    icon: '🥑'
  },
  {
    name: 'apple',
    price: '1.5$',
    description: 'golden apple',
    icon: '🍎'
  }
];

let li = fruits.map((fruit,index) => {
  const {name,price,description,icon} = fruit;
  return <li key={index}>
      <Product 
        name = {name}
        price = {price}
        description = {description}
        icon = {icon}
      />
  </li>
}
);




function App() {

  
  
  return (
    <div className="App">
      <header>
      <Input />
      <Counter defaultValue={0}/>

      <Product price="100$" name=' Apple' description=' iphone X '/>
  
      <MyName />
      <WhoIAm />

      <ol>
        {li}
      </ol>

      <Product price="150$" currency='500' name=' Apple' description=' iphone 11 '/>
    
      </header>
    </div>
  );
}

export default App;

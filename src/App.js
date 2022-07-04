import { User } from './User';
import './App.css';

export function App() {
  const users = [
    {
      name: 'Jane',
      lastName: 'Smith',
      age: 12
    },
    {
      name: 'John',
      lastName: 'Smith',
      age: 22
    }
  ]
  return ( 
    <>
    <button onClick={() => {
      console.log('pressed');
    }}>Press</button>
    <input
      onChange={(event) => {
        console.log('onChange', event.target.value);
      }}
      onKeyPress={(ev) => {
        if (ev.key === 'Enter') {
          console.log(ev, 'keyPress');
        }
      }}
    />
    {/* {users.map((item, i) => {
      return (
        <User key={i} name={item.name} lastName={item.lastName} age={item.age}/>
      )
    })} */}
    {/* {[<h1>hi</h1>, <p>hery</p>]} */}
     {/* <User name='John' lastName='Smith' age={30}/>
     <User name='John' lastName='Smith' age={30}/>
     <User name='John' lastName='Smith' age={30}/>
     <User name='John' lastName='Smith' age={30}/>
     <User name='John' lastName='Smith' age={30}/>
     <User name='John' lastName='Smith' age={30}/> */}
    </>
  )
}


import logo from './logo.svg';
import './App.css';
import subt from './Subt';
import sum from './Sum';
import React, { useState } from "react";
import div from './div';
import mult from './Mult';

function App() {

 const [value, setColor] = useState("0");

return (
  <>
    <h1>This value is {value}!</h1>
    <button
      type="button"
      onClick={() => setColor(sum(5,5))}
    >Sum</button>
    <button
      type="button"
      onClick={() => setColor(subt(5,1))}
    >Subtract</button>
    <button
      type="button"
      onClick={() => setColor(mult(5,5))}
    >Multiply</button>
    <button
      type="button"
      onClick={() => setColor(div(2,22))}
    >Divide</button>
  </>
);


   {/* {
    data.map((data)=>{
      return(
        <BasicExample
        img={data.img}
        title={data.title}
        desc={data.description}
        />
      )
    })
   } */}
   
}

export default App;

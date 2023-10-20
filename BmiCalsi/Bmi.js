import React, {useState} from 'react';
import "./Bmi.css";
const Bmi = () => {

const [weight, setWeight] = useState(0);
const [height, setHeight] = useState(0);
const [bmi, setBmi] = useState("");
const [message, setMessage] = useState("");


let calcBmi = (e) => {
    e.preventDefault();
     if(weight === 0 || height === 0){
       alert("Abe pehele Value to enetr kr gadhe !...");
     }
     else{
       let bmi = (weight / (height*height)*703 );
       setBmi(bmi.toFixed(1));
     }
     if(bmi < 25){
       setMessage("you rae under-weight");
     }
     else if(bmi >= 25 && bmi < 30){
       setMessage("you are helthy");
     }
     else{
       setMessage("you are over weight");
     }
 }
 
 // reload 
 
 let reload = () => {
     window.location.reload();
 }

  return (
    <div className='container' >

        <h2 style={{color:"black"}}>Check your BMI. </h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight </label>
            <input type='text' placeholder='Enter Weight'
              value={weight} onChange={(e) => setWeight(e.target.value)} />
          </div>
          <div>
            <label>Height </label>
            <input type='text' placeholder='Enter Height'
              value={height} onChange={(event) => setHeight(event.target.value)} />
          </div>
          <div>
              <button className='btn' type='submit'>Submit</button>
              <button className='btn btn-outline' onClick={reload} type='submit'>Reload</button>
          </div>
          <div className='center'>
            <h3>Your BMI is: {bmi}</h3>
            <p>{message}</p>
          </div>
        </form>

      </div>
  );
};

export default Bmi;

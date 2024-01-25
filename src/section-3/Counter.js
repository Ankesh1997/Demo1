import {useState} from "react";
const Counter = () => {
    const[Counter, setCounter] = useState(0);

    function toggleIncrement(){
       setCounter(prevcounter => prevcounter + 1)
    }
     return(
        <div>
             <p>{Counter}</p>
             <button style={{height: 50,width : "30%", backgroundColor : 'red', alignSelf : 'center'}} onClick={() => toggleIncrement()}>Increment</button>
        </div>
    );
}

export default Counter;
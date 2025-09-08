import {useEffect, useState} from "react";
export default function Counter(){
    let[count,setCount] = useState(0);

    let incCount =() =>{
        setCount = ((currCount) => currCount + 1);
    };

    useEffect(function printsomething(){
        console.log("the button is pressed");
    });
    
    return(
    <div>
        <h3>count={count}</h3>
        <button onClick ={incCount}> Click</button>
    </div>
    );
}
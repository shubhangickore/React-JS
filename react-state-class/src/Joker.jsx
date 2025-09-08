import {useState,useEffect} from "./react";
export default function Joker(){
    let [joke,setJoke] =  useState({});
    const URL = "https://official-joke-api.appspot.com/random_joke";
    
    const getNewjoke = async () =>{
    let response = await fetch(URL);
    let jsonresponse = await response.json();
    setJoke({setup :jsonresponse.setup , punchline :jsonresponse.punchline});
    };
    
    useEffect (()=>{
        async function getFirstJoke(){
            let response = await fetch (URL);
            let jsonresponse = await response.json();
            setJoke({setup:jsonresponse.setup , punchline : jsonresponse.punchline});
        }
        getFirstJoke();
    },[]);

    return(
        <div>
            <h3> Joker!</h3>
            <h2 >{joke.setup}</h2>
            <h2>{joke.punchline}</h2>
            <button onClick ={getNewjoke}>New Joke</button>
        </div>
    )
}
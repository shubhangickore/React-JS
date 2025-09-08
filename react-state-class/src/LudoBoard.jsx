import { useState } from "react" ;
export default function LudoBoard(){
    let [moves , setMoves] = useState({blue:0,yellow :0 ,red:0,green:0});

     let updateblueMoves = () =>{
        console.log(`moves.blue = ${moves.blue}`);

        // here we are using callback as we studied whenever in updation the new val is dependent on old value we use callback (as we are updating the value of moves)
        setMoves((prevMoves) = () =>{
            return {...prevMoves , blue : prevMoves.blue+1};
        });
     }

     
     let updateyellowMoves = () =>{
        console.log(`moves.yellow = ${moves.yellow}`);

        // here we are using callback as we studied whenever in updation the new val is dependent on old value we use callback (as we are updating the value of moves)
        setMoves((prevMoves) = () =>{
            return {...prevMoves , yellow : prevMoves.yelow+1};
        });
     }

     
     let updategreenMoves = () =>{
        console.log(`moves.green = ${moves.green}`);

        // here we are using callback as we studied whenever in updation the new val is dependent on old value we use callback (as we are updating the value of moves)
        setMoves((prevMoves) = () =>{
            return {...prevMoves , green : prevMoves.green+1};
        });
     }

     
     let updateredMoves = () =>{
        console.log(`moves.red = ${moves.red}`);

        // here we are using callback as we studied whenever in updation the new val is dependent on old value we use callback (as we are updating the value of moves)
        setMoves((prevMoves) = () =>{
            return {...prevMoves , red : prevMoves.red+1};
        });
     }

    return(
    <div>
        <p>Game Begins!</p>  
        <div className = "board">
            <p>Blue moves = { moves.blue}</p>
            <button style = {{backgroundColor:"blue"}} onClick ={updateblueMoves}> +1 </button>
            <p> Yellow moves = { moves.yellow }</p>
            <button style = {{backgroundColor:"yellow"}} onClick ={updateyellowMoves}> +1 </button>
            <p> Red moves = {moves.red} +1 </p>
            <button style = {{backgroundColor:"red"}} onClick ={updateredMoves}>+1</button>
            <p> Green moves = {moves.green}</p>
            <button style = {{backgroundColor:"green"}} onClick ={updategreenMoves}>+1</button>
        </div>

    </div>
    );
}
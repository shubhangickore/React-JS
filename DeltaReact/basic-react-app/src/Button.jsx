function printHello(){
    console.log("hello");
}
function printBye(){
    console.log("Bye");
}

export default function Button(){
    return (
        <div>
            <button onClick ={printHello}>Click Here !</button>
            <p onClick={printBye}> This is part for event Handling </p>
        </div>
    );
}
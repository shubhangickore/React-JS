function printHello(){
    console.log("hello");
}
function printBye(){
    console.log("Bye");
}

export default function Button(){
    return (
        <div>
            <button onClick ={printHello}>Click Me !</button>
            <p onClick={printBye}> This is parh for event Handling </p>
        </div>
    );
}
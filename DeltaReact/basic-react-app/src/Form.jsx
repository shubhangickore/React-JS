function handleFormSubmit(event){
    event.preventDefault();
    console.log("Form was submitted");
    
}

export default function Form(){
    return(
    <form>
        <input placeholder ="write somthing "/>
        <button onClick = {handleFormSubmit}> SUBMIT </button>
    </form>
    );
}
import { useState } from "react";

export default function Form (){
    let[formData , setFormdata] = useState ({
      fullName :"",
      username:"",
      password:"",
    });

    let handleInputchange = (event) =>{
        setFormdata ( ( currData) =>{
        
            return {...currData , [event.target.name ]: event.target.value} ;
        });
    };


    let handleSubmitdata = (event)=>{
        event.preventDefault();
        console.log(formData);
        setFormdata({
            fullName:"",
            username:"",
            password:"",
        });
    };
    return (
        <form onSubmit={handleSubmitdata}>
            <label htmlFor = "fullName">Fullname</label>
            < input placeholder = " enter full name " 
            type= "text"
             value={formData.fullName} 
             onChange = {handleInputchange}
             id = "fullName" 
             name ="fullName"/>
              <br></br>
              <br></br>

             <label htmlFor="username">Username</label>
             <input placeholder = "enter username"
             value ={formData.username}
             onChange = {handleInputchange} 
             id = "username"
             name = "username"/>
              <br></br>
              <br></br>
             <label htmlFor="password">password</label>
             <input placeholder = "enter password"
             value ={formData.password}
             onChange = {handleInputchange} 
             id = "password"
             name = "password"/>


        <button >Submit</button>
        </form>
    )
}
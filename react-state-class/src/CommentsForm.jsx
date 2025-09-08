import {useState} from "react";
export default function CommentsForm(){
    let[formData, setformdata] = useState({
            username:"",
        remark:"",
        rating:"",
     });
    
     let handleInputChange = (event)=>{
        setformdata ((currData)=>{
            return{...currData,[event.target.name]:event.target.value}
        });

     };

     let handleOnsubmit = (event) =>{
        console.log(formData);
         event.preventDefault();
      
        setformdata({
        username:"",
        remark:"",
        rating:"",

        });
     };
    return(
        <div>
            <h3> Give Comments</h3>
            <form onSubmit = {handleOnsubmit}>
                <label htmlFor = "username">Username</label>
                <input placeholder = "enter username"
                name ="username"
                type = "text"
                value= {formData.username}
                 onChange = {handleInputChange}/>

                <textarea 
                value = {formData.remark} 
                name ="remark" 
                onChange = {handleInputChange}> Remark</textarea>
                
                <input placeholder="rating"
                value={formData.rating}
                name="rating"
                type = "number" min ={1}  max = {5}
                 onChange = {handleInputChange}/>
                   <button type ="submit">Add a Comment</button>
            </form>
          
        </div>
    )}
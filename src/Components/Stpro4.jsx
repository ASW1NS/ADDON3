import { Button, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Stpro4 = () => {
    const [submitted,setSubmitted]=useState(false);
    var [Inputname,setInputname]=useState({
        fname:"",
        lname:''
    })
    var [validation,setValidation]=useState({
        fname:"",
        lname:''
    })
    const inputHandler =(e)=>{
        const{name,value}=e.target
       setInputname({...Inputname,[name]:value})
    }
    const checkValidation = ()=>{
        let errors=validation;
        if(!Inputname.fname.trim()){
            errors.fname="First name required";
        } else{
            errors.fname="";
        }
        setValidation(errors);
    }
    useEffect(()=>{
        checkValidation();
    });
    const handleSubmit=(e)=>{
        e.preventDefault();
        setSubmitted(true);
    };
  return (
    <div>
       <form
       onSubmit={handleSubmit}
       > 
        <Typography>Welcome </Typography><br></br>
        <TextField label='Enter Name' variant='outlined' name='fname' value={Inputname.fname} onChange={inputHandler}></TextField><br></br>
        {(validation.fname && submitted)&&<p>{validation.fname}</p>}
        <Button variant='contained' type='submit'>Save</Button>
        </form>
    </div>
  )
}

export default Stpro4
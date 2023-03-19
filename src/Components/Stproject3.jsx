import { TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Stproject3 = () => {
    var [Inputname,setInputname]=useState({
        fname:"",
        lname:''
    })
    const inputHandler =(e)=>{
        const{name,value}=e.target
       setInputname({...Inputname,[name]:value})
    }
  return (
    <div>
  <Typography variant='h4'>FirstName is {Inputname.fname}</Typography>
        <TextField label="first name" variant='filled' name='fname' value={Inputname.fname} onChange={inputHandler}></TextField>
        <Typography variant='h4'>SecondName is { Inputname.lname}</Typography>
        <TextField label="Second name" name='lname' variant='standard' value={Inputname.lname} onChange={inputHandler}></TextField>
    </div>
  )
}

export default Stproject3
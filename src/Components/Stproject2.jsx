import { TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Stproject2 = () => {
    var [name,setname]=useState("")
const changeName=(event)=>{
    const{name,value}=event.target;
    setname(value)
}
var [lname,setlname]=useState("")
const changelName=(event)=>{
    const{name,value}=event.target;
    setlname(value)
}
  return (
    <div>
        <Typography variant='h4'>FirstName is {name}</Typography>
        <TextField label="Enter name" variant='filled' onChange={(e)=>changeName(e)}></TextField>
        <Typography variant='h4'>SecondName is {lname}</Typography>
        <TextField label="Enter name" variant='standard' onChange={(e)=>changelName(e)}></TextField>
    </div>
  )
}

export default Stproject2
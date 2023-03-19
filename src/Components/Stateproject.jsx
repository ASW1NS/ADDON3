import { Button, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Stateproject = () => {
    var [fname,setname]=useState("")
    const changeName=(event)=>{
        const {name,value}=event.target;
        setname(value)
    }
    useEffect(()=>{
        setname("[Enter Name]")
    },[])
  return (
    <div>
        <Typography variant='h3'>My Name is {fname}</Typography><br></br>
        <TextField label='ENTER NAME' variant='outlined' onChange={(e)=>changeName(e)}></TextField><br></br>
    </div>
  )
}

export default Stateproject
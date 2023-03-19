import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Statebasics = () => {
    var [nam,setnam]= useState(0)
    const changename =()=>{
        setnam(nam++)
    }
    const dnum =()=>{
        setnam(nam--)
    }
  return (
    <div>
        <Typography>{nam}</Typography>
        <Button variant='contained' onClick={changename}>+</Button><br></br>
        <Button variant='contained' onClick={dnum}>-</Button>
    </div>
  )
}

export default Statebasics
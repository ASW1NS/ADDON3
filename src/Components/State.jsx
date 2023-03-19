import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const State = () => {
    var [page,setpage]=useState("")
    const homeName =()=>{
        setpage("Home page")
    }
    const Galleryname =()=>{
        setpage("Gallery page")
    }
    const Contactname =()=>{
        setpage("Contact page")
    }
  return (
    <div>
        <Button variant='contained' onClick={homeName}>Home page</Button>
        <Button variant='contained' onClick={Galleryname}>Gallery page</Button>
        <Button variant='contained' onClick={Contactname}>Contact page</Button>
        <Typography>welcome to {page}</Typography>
    </div>
  )
}

export default State
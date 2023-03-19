import { Typography } from '@mui/material'
import React from 'react'

const Project3 = () => {
    var pname=["Aswin","Suresh","Chalakudy"]
  return (
    <div>
       <ul>
        {pname.map((value,index)=>{
            return <li key={index}>{value}</li>
        })}
       </ul>
    </div>
  )
}

export default Project3
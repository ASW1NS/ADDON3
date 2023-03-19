import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const Projecttable = () => {
    var pname=[{name:"Aswin",age:20,place:"Cky"},
    {name:"Athul",age:19,place:"Irjk"},
    {name:"sugu",age:28,place:"kaloor"}
]
  return (
   <TableContainer>
    <Table>
        <TableHead>
            <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Age</TableCell>
                <TableCell>Place</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {pname.map((value,index)=>{
                return <TableRow>
                    <TableCell key={index}>{value.name}</TableCell>
                    <TableCell key={index}>{value.age}</TableCell>
                    <TableCell key={index}>{value.place}</TableCell>
                </TableRow>
            })}
        </TableBody>
    </Table>
   </TableContainer>
  )
}

export default Projecttable
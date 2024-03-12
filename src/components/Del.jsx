import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Getdata from './Getdata'

const Del = () => {
    const navigate=useNavigate()
 const {id} = useParams()

 console.log(id)
    const delData=async()=>{
        await axios.delete(`https://65eed0f1ead08fa78a4ef89e.mockapi.io/Crud-form/${id}`)
       
        navigate('/read')
        // Getdata()
  
    }


    useEffect(()=>{
        delData()
    },[])
  return (
 <>

 components deletef
 </>
  )
}

export default Del
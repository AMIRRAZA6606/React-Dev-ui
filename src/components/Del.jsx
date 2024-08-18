import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Getdata from './Getdata'

const Del = () => {
    const navigate=useNavigate()
 const {id} = useParams()

 console.log(id)
    const delData=async()=>{
        await axios.delete(`https://66c1ff69f83fffcb587ae321.mockapi.io/users/${id}`)
       
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

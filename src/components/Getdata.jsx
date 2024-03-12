import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
 
const Getdata = () => {

   const navigate= useNavigate()
 const [mydata,setMydata] = useState([])
    const getdata=async()=>{
        const data=await axios.get('https://65eed0f1ead08fa78a4ef89e.mockapi.io/Crud-form')
         const result= data.data;
         console.log(result)
   setMydata(result)
    }

useEffect(()=>{
    getdata()
},[])
    console.log(mydata)
  return (
 <>
 <section class="mx-auto w-full max-w-7xl px-4 py-4">
  <div class="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
    <div>
      <h2 class="text-lg font-semibold">Employees</h2>
      <p class="mt-1 text-sm text-gray-700">
        This is a list of all employees. You can add new employees, edit or
        delete existing ones.
      </p>
    </div>
    <div>
      <button
        type="button"
        class="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      onClick={(e)=>navigate('/')}>
        Add new employee
      </button>
    </div>
  </div>
  <div class="mt-6 flex flex-col">
    <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
        <div class="overflow-hidden border border-gray-200 md:rounded-lg">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  class="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                >
                  <span>Employee</span>
                </th>
                <th
                  scope="col"
                  class="px-12 py-3.5 text-left text-sm font-normal text-gray-700"
                >
                Email
                </th>
                <th
                  scope="col"
                  class="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                >
            Contact
                </th>
                <th
                  scope="col"
                  class="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                >
                  Role
                </th>
                <th
                  scope="col"
                  class="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                >
                Actions
                </th>
                <th scope="col" class="relative px-4 py-3.5">
                  <span class="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 bg-white">
              
           {
            mydata.map((curentData)=>{
                return(
                    <tr>
                <td class="whitespace-nowrap px-4 py-4">
                  <div class="flex items-center">
               
                    <div class="ml-4">
                      <div class="text-sm font-medium text-gray-900">
                      {curentData.fullname}
                      </div>
                      <div class="text-sm text-gray-700"></div>
                    </div>
                  </div>
                </td>
                <td class="whitespace-nowrap px-12 py-4">
                  <div class="text-sm text-gray-900 ">{curentData.email}</div>
                  <div class="text-sm text-gray-700"></div>
                </td>
                <td class="whitespace-nowrap px-4 py-4">
                  <span class="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                   {curentData.mobile}
                  </span>
                </td>
                <td class="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
              {curentData.role}
                </td>
                <td class="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
             <button className='bg-blue-600 p-4 text-white' onClick={()=>navigate(`/edit/${curentData.id}`)}>Edit</button>
     
                </td>
                <td class="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
                <button className='bg-red-600 p-4 text-white'
               onClick={()=>navigate(`/del/${curentData.id}`)}>Delete</button>
                </td>
              </tr>
                )
            })
           }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</section>

 </>
  )
}

export default Getdata
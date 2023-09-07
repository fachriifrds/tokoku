import React from 'react'


function InputRegister() {
  return (
    <div className=''>
    <div className='flex flex-col border-solid border-2 border-gray-200 w-96 p-8'>
        <h1 className='familyText text-[#0071FF] text-4xl mx-auto '>Toko Ku</h1><br/>
        <input type="text" placeholder='Username or Email' className='bg-gray-100 p-3 text-[14px] rounded-xl text-start w-72 mx-auto'/><br/>
        <input type="password" placeholder='Password' className='bg-gray-100 p-3 text-[14px] text-start rounded-xl w-72 mx-auto mt-[-1rem]'/><br/>
        <button className='bg-[#6CAEFF] w-72 mx-auto p-2 rounded-xl text-white'>Daftar</button>
    </div>
    <div className='border-solid border-2 border-gray-200 w-96 p-8 mt-4'>
        <h1 className='text-center'>Sudah Punya Akun ? <a href='/' className='text-[#6CAEFF]'>Login</a></h1>
    </div>
    </div>
  )
}

export default InputRegister
import React from 'react'

function InputLogin() {
  return (
    <div className=''>
    <div className='flex flex-col border-solid border-2 border-gray-200 w-96 p-8'>
        <h1 className='text-[#0071FF] text-4xl mx-auto text familyText'>Toko Ku</h1><br/>
        <input type="text" placeholder='Username or Email' className='bg-gray-100 p-3 text-[14px] rounded-xl text-start w-72 mx-auto'/><br/>
        <input type="password" placeholder='Password' className='bg-gray-100 p-3 text-[14px] text-start rounded-xl w-72 mx-auto mt-[-1rem]'/><br/>
        <button className='bg-[#6CAEFF] w-72 mx-auto p-2 rounded-xl text-white'>Masuk</button>
        <a href="#" className='text-gray-500 text-[12px] mx-auto mt-4 mb-[-0.5rem]'>Lupa Password</a>
    </div>
    <div className='border-solid border-2 border-gray-200 w-96 p-8 mt-4'>
        <h1 className='text-center'>Belum Punya Akun ? <a href='/register' className='text-[#6CAEFF]'>Daftar</a></h1>
    </div>
    </div>
  )
}

export default InputLogin
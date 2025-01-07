import React, { useState } from 'react'

const Login = () => {

const [currentState, setCurrentState] =useState('Login')

const onSubmitHandler = async(event) => {
     event.preventDefault();
}

  return (
    <div className='bg-gradient-to-r from-gray-300 rounded-xl'>
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-automt-14 gap-4 text-gray-800'>
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className='prata-regular text-3xl'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
      </div>
      {currentState === 'Login'? '' : <input type="text" className=' rounded-md w-auto px-3 py-2 border border-gray-800' placeholder='Name' required />  }
      <input type="email" className='rounded-md w-auto px-3 py-2 border border-gray-800' placeholder='Email' required/>
      <input type="password" className='rounded-md w-auto px-3 py-2 border border-gray-800' placeholder='Password' required />
      <div className="w-auto flex justify-between text-sm mt-[-8px]">
        <p className='cursor-pointer mr-8'>Forgot Your Password ?</p>
        {
          currentState === 'Login'
          ? <p onClick={()=>setCurrentState('Sign Up')} className='cursor-pointer text-blue-500'>Create account</p>
          : <p onClick={()=>setCurrentState('Login')} className='cursor-pointer text-blue-500'>Login Here</p>
        }
      </div>
      <button className='rounded-md bg-black text-white font-light px-8 py-2 mt-4 mb-10'>{currentState === 'Login' ? 'Sign In' : 'Sign Up'}</button>
  
      </form>
      </div>
  )
}

export default Login

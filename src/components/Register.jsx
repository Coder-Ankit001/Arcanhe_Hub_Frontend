import React from 'react'
import QR from '../assets/Login_section_qr.png'
import { Link, Navigate } from 'react-router-dom';
import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import './Register.css'
const Register = () => {
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm()
    
    const navigate = useNavigate()
    const onSubmit = async(data) => {
        try{
            const res = await axios.post('http://localhost:3000/register', {
                username: data.username, 
                email: data.email_address, 
                password: data.password
            })
            console.log("Success!", res.data)
            navigate('/login')
        } catch(err){
            console.log(err)
        }
    }
    return (
        <div className='content-bg min-h-[85vh] flex flex-col justify-center items-center gap-y-5'>
            <div className=' w-[50vw] login-box-header h-10 text-3xl font-bold text-white'>Register Now</div>
            <div className='login-box min-h-60 w-[50vw] p-4 border-0 rounded-xs'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='login-box-left-half py-2 flex gap-4'>
                        <div className='login-box-left-half w-[65%] flex flex-col gap-y-4'>
                            <div>
                                <div className='text-xs text-blue-400 font-semibold mb-1'>ENTER YOU EMAIL ADDRESS</div>
                                <input type='email' {...register("email_address", {required: {value: true, message: "*Email Address is Required"}})} className='login-box-left-half-input login-inner w-full h-10 focus:outline-none p-2 text-white border-0 rounded-xs' />
                                {errors.email_address && <div className='text-xs mt-2 text-gray-200'>{errors.email_address.message}</div>}
                            </div>
                            <div>
                                <div className='text-xs text-blue-400 font-semibold mb-1'>CREATE YOUR USERNAME</div>
                                <input type='text' {...register("username", {required: {value: true, message: "*Username is Required"}})} className='login-box-left-half-input login-inner w-full h-10 focus:outline-none p-2 text-white border-0 rounded-xs' />
                                {errors.username && <div className='text-xs mt-2 text-gray-200'>{errors.username.message}</div>}
                            </div>
                            <div>
                                <div className='text-xs text-gray-300 font-semibold mb-1'>CREATE PASSWORD</div>
                                <input type='password' {...register("password", {required: {value: true, message: "*Password is Required"}, minLength: {value: 8, message: "Password too weak. Add symbols like !@# or numbers."}})} className='login-box-left-half-input login-inner w-full h-10 focus:outline-none p-2 text-white border-0 rounded-xs' />
                                {errors.password && <div className='text-xs mt-2 text-gray-200'>{errors.password.message}</div>}
                            </div>
                            <div className='flex justify-center'>
                                <button type='submit' className='h-10 w-60 login-box-left-half-login-button login-button border-0 rounded-xs flex justify-center items-center text-white'>Sign Up</button>
                            </div>

                            <div className='flex justify-center'><div className='text-md login-box-left-half-suggestion text-gray-300'>Already have an account? <Link to='/login' className='text-blue-500'>Sign in</Link> now.</div></div>
                        </div>

                        <div className='login-box-right-half'>
                            <div className='text-xs text-blue-400 font-semibold mb-1'>OR SIGN IN WITH QR</div>
                            <div className='bg-white w-46 h-50 border-0 rounded-lg flex justify-center items-center px-2 py-4'><img src={QR} alt="" className='h-45' /></div>
                            <div className='w-48 h-8 my-2 text-gray-300 text-xs text-center'>Use the ArcaneHub Mobile App to sign in via QR code</div>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register

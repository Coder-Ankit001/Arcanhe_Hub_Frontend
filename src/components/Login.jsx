import React, { use, useContext, useEffect }from 'react'
import QR from '../assets/Login_section_qr.png'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useNavigate, } from 'react-router-dom'
import { ProfileContext } from '../context/profile'
import './Login.css'

const Login = () => {
    const baseUrl = `${import.meta.env.VITE_ARCANE_HUB_URL}`
    const {profile, setProfile} = useContext(ProfileContext)
    const {
        register,
        handleSubmit,
        setError,
        clearErrors,
        formState: { errors, isSubmitting },
    } = useForm()

    const navigate = useNavigate()
    const token = localStorage.getItem('token')
    const onSubmit = async (data) => {
        console.log("BASE URL:", baseUrl);
        try {
            const res = await axios.post(`${baseUrl}/login`, {
                username: data.username,
                password: data.password
            }, {
                withCredentials: true
            })

            const userRes = await axios.get(`${baseUrl}/me`, {
                withCredentials: true
            })

            setProfile(userRes.data)
            navigate('/user')
        }
        catch (err) {
            console.log("Error!", err.response?.data || err.message)
            setError('server_error', { message: err.response?.data || err.message })
        }
    }

    useEffect(() => {
        console.log(profile)
    }, [profile])
    
    return (
        <div className='content-bg min-h-[85vh] flex flex-col justify-center items-center gap-y-5'>
            <div className='w-[50vw] login-box-header h-10 text-3xl font-bold text-white'>Sign in</div>
            <div className='login-box min-h-60 p-4 border-0 rounded-xs'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className=' py-2 flex gap-4'>
                        <div className='login-box-left-half w-[65%] flex flex-col gap-y-4'>
                            <div>
                                <div className='text-xs text-blue-400 font-semibold mb-1'>SIGN IN USERNAME</div>
                                <input type='text' {...register("username", { required: { value: true, message: "*Username is required" }, onChange: () => clearErrors('server_error') })} className='login-box-left-half-input login-inner w-full h-10 focus:outline-none p-2 text-white border-0 rounded-xs' />
                                {errors.username && <div className='text-xs text-gray-300 mt-2'>{errors.username.message}</div>}
                            </div>
                            <div>
                                <div className='text-xs text-gray-300 font-semibold mb-1'>PASSWORD</div>
                                <input type='password' {...register("password", { required: { value: true, message: "*Password is required" }, onChange: () => clearErrors('server_error') })} className='login-box-left-half-input login-inner w-full h-10 focus:outline-none p-2 text-white border-0 rounded-xs' />
                                {errors.password && <div className='text-xs text-gray-300 mt-2'>{errors.password.message}</div>}
                                {errors.server_error && <div className='text-xs text-gray-300 mt-2'>{errors.server_error.message}</div>}
                            </div>
                            <div className='flex gap-2 items-center'>
                                <div className='login-inner h-5 w-5 border-0 rounded-xs flex justify-center items-center hover:border-1 hover:border-cyan-500'><input type='checkbox' className='apprerance-none bg-amber-800 w-5 h-5' /></div>
                                <div className='h-4 text-gray-300 flex justify-center items-center'>Remember me</div>
                            </div>
                            <div className='flex justify-center'>
                                <button type='submit' disabled={isSubmitting} className='h-10 w-60 login-box-left-half-login-button login-button border-0 rounded-xs flex justify-center items-center text-white'>Sign in</button>
                            </div>

                            <div className='flex justify-center'><div className='text-md login-box-left-half-suggestion text-gray-300'>Don&#39;t have an account? <Link to='/register' className='text-blue-500'>Sign up</Link> now.</div></div>
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

export default Login

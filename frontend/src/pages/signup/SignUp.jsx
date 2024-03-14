import React from 'react'
import GenderCheckbox from './GenderCheckbox'

const SignUp = () => {
    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className="w-full p-6 rounded-lg shadow-md bg-slate-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
                <h1 className='text-3xl font-semibold text-center text-slate-300'>
                    Sign Up
                    <span className='text-indigo-500 pl-1'>SpaceChat</span>
                </h1>
                <form action="" method="post" >
                    <div className='text-slate-300'>
                        <label htmlFor="" className="label p-2">
                            <span className='text-base label-text'>Full Name:</span>
                        </label>
                        <input type="text" id="" name="username" placeholder="Your Full Name" className="w-full input input-bordered input-ghost h-10" />
                    </div>
                    <div className='text-slate-300'>
                        <label htmlFor="" className="label p-2">
                            <span className='text-base label-text'>Username:</span>
                        </label>
                        <input type="text" id="" name="username" placeholder="Your username"
                            className="w-full input input-bordered input-ghost h-10" />
                    </div>
                    <div>
                        <label htmlFor="" className="label">
                            <span className='text-base label-text'>Password:</span>
                        </label>
                        <input type="text" id="" name="password" placeholder="Your password"
                            className="w-full input input-bordered input-ghost h-10" />
                    </div>
                    <div>
                        <label htmlFor="" className="label">
                            <span className='text-base label-text'>Confirm Password:</span>
                        </label>
                        <input type="text" id="" placeholder="Confirm password"
                            className="w-full input input-bordered input-ghost h-10" />
                    </div>

                    <GenderCheckbox />
                    <a href="#" className='text-slate-400 text-sm hover:underline hover:text-indigo-600 mt-2 inline-block'>Already have an account?</a>
                    <div><button className='btn btn-neutral btn-block btn-sm mt-2 py-1'>Sign Up</button></div>
                </form>
            </div>
        </div>
    )
}

export default SignUp
import React, { useState } from 'react'
import GenderCheckbox from './GenderCheckbox';
import { Link } from 'react-router-dom';
import useSignup from '../../hooks/useSignup.js';

const SignUp = () => {
    const [inputs, setInputs] = useState({
        fullName: '',
        username: '',
        password: '',
        confirmPassword: '',
        gender: '',
    });

    const { loading, signup } = useSignup();

    const handleCheckboxChange = (gender) => {
        setInputs({ ...inputs, gender })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(inputs)
    }

    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className="w-full p-6 rounded-lg shadow-md bg-slate-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
                <h1 className='text-3xl font-semibold text-center text-slate-300'>
                    Sign Up
                    <span className='text-indigo-500 pl-1'>SpaceChat</span>
                </h1>
                <form onSubmit={handleSubmit} >
                    <div className='text-slate-300'>
                        <label htmlFor="" className="label p-2">
                            <span className='text-base label-text'>Full Name:</span>
                        </label>
                        <input type="text" placeholder="Your Full Name"
                            className="w-full input input-bordered input-ghost h-10"
                            value={inputs.fullName}
                            onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })} />
                    </div>
                    <div className='text-slate-300'>
                        <label htmlFor="" className="label p-2">
                            <span className='text-base label-text'>Username:</span>
                        </label>
                        <input type="text" placeholder="Your username"
                            className="w-full input input-bordered input-ghost h-10"
                            value={inputs.username}
                            onChange={(e) => setInputs({ ...inputs, username: e.target.value })} />
                    </div>
                    <div>
                        <label htmlFor="" className="label">
                            <span className='text-base label-text'>Password:</span>
                        </label>
                        <input type="password" placeholder="Your password"
                            className="w-full input input-bordered input-ghost h-10"
                            value={inputs.password}
                            onChange={(e) => setInputs({ ...inputs, password: e.target.value })} />
                    </div>
                    <div>
                        <label htmlFor="" className="label">
                            <span className='text-base label-text'>Confirm Password:</span>
                        </label>
                        <input type="password" id="" placeholder="Confirm password"
                            className="w-full input input-bordered input-ghost h-10"
                            value={inputs.confirmPassword}
                            onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })} />
                    </div>

                    <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />
                    <Link to="/login" className='text-slate-400 text-sm hover:underline hover:text-indigo-600 mt-2 inline-block'>Already have an account?</Link>
                    <div>
                        <button className='btn btn-neutral btn-block btn-sm mt-2 py-1'
                            disabled={loading}>
                            {loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp
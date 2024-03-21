import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../../hooks/useLogin';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const { loading, login } = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(username, password);
    }
    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className="w-full p-6 rounded-lg shadow-md bg-slate-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
                <h1 className='text-3xl font-semibold text-center text-slate-300'>
                    Login
                    <span className='text-indigo-500 pl-1'>SpaceChat</span>
                </h1>
                <form onSubmit={handleSubmit} >
                    <div className='text-slate-300'>
                        <label htmlFor="" className="label p-2">
                            <span className='text-base label-text'>Username:</span>
                        </label>
                        <input type="text" placeholder="Your username"
                            className="w-full input input-bordered input-ghost h-10"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="" className="label">
                            <span className='text-base label-text'>Password:</span>
                        </label>
                        <input type="password" placeholder="Your password"
                            className="w-full input input-bordered input-ghost h-10"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <Link to="/signup" className='text-slate-400 text-sm hover:underline hover:text-indigo-600 mt-2 inline-block'>{"Don't"} have an account?</Link>
                    <div>
                        <button className='btn btn-neutral btn-block btn-sm mt-2 py-1'
                            disabled={loading}>
                            {loading ? <span className='loading loading-spinner'></span> : "Login"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
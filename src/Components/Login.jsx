import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const handleGuestLogin = () => {
        navigate('/claim');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 px-6">
            <section className="w-full max-w-lg lg:max-w-2xl bg-white shadow-xl rounded-xl p-10">
                <div className="text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Welcome Back</h2>
                    <p className="mt-2 text-lg text-gray-600">
                        Don’t have an account? 
                        <a href="#" className="text-blue-600 hover:underline ml-1">Sign up</a>
                    </p>
                </div>

                <form className="mt-8 space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-lg font-medium text-gray-900">Email</label>
                        <input 
                            type="email" 
                            id="email"
                            placeholder="Enter your email"
                            className="mt-2 w-full px-5 py-4 border rounded-lg text-gray-900 bg-gray-100 focus:border-blue-500 focus:outline-none"
                        />
                    </div>

                    <div>
                        <div className="flex justify-between items-center">
                            <label htmlFor="password" className="block text-lg font-medium text-gray-900">Password</label>
                            <a href="#" className="text-sm text-rose-500 hover:underline">Forgot password?</a>
                        </div>
                        <input 
                            type="password" 
                            id="password"
                            placeholder="Enter your password"
                            className="mt-2 w-full px-5 py-4 border rounded-lg text-gray-900 bg-gray-100 focus:border-blue-500 focus:outline-none"
                        />
                    </div>

                    <button 
                        type="submit" 
                        className="w-full py-4 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all"
                    >
                        Log in
                    </button>

                    <button
                        type="button"
                        onClick={handleGuestLogin}
                        className="w-full py-4 flex items-center justify-center gap-3 bg-gray-100 text-gray-800 border border-gray-300 rounded-lg hover:bg-gray-200 transition-all"
                    >
                        <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
                        </svg>
                        Login as Guest
                    </button>
                </form>
            </section>
        </div>
    );
};

export default Login;

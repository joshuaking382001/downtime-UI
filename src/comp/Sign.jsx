import React from 'react';
import { useNavigate } from 'react-router-dom';
import back from '../image/Back.jpg'
function Sign() {
    const navigate = useNavigate();

    const gotToReg = () => {
        navigate("/reg");
    }

    return (

        <div style={{ backgroundImage: "url(" + back + ")" }}>
            <section class="backdrop-blur-sm bg-transparent">
                <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto xl:h-screen lg:py-0">
                    <div class="w-full shadow shadow-2xl bg-slate-100 from-white rounded-lg md:mt-0 sm:max-w-md xl:p-0 backdrop-blur-xl ">
                        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 class="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-black">
                                Sign in to your account
                            </h1>
                            <form class="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Your email</label>
                                    <input type="email" name="email" id="email" class="bg-gray-50 border border-green-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-primary dark:border-green-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="name@company.com" required="">
                                    </input>
                                </div>
                                <div>
                                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Password</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-primary dark:border-green-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
                                    </input>
                                </div>
                                <div class="flex items-center justify-between">
                                    <div class="flex items-start">
                                        <div class="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-green-300 rounded bg-green-50 focus:ring-3 focus:ring-green-300 dark:bg-green-700 dark:border-green-600 dark:focus:ring-green-600 dark:ring-offset-green-800" required="">
                                            </input>
                                        </div>
                                        <div class="ml-3 text-sm">
                                            <label for="remember" class="text-gray-500 dark:text-black">Remember me</label>
                                        </div>
                                    </div>
                                    <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-black">Forgot password?</a>
                                </div>
                                <button type="submit" class="w-full text-black bg-green-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                                <p class="text-sm font-light text-gray-500 dark:text-black">
                                    Don’t have an account yet? <button onClick={gotToReg} class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</button>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </div>

    )
}

export default Sign
import React, { useState } from 'react';
import logo from '../image/logo1.png'
import { useNavigate } from 'react-router-dom';

function Account() {
    const navigate = useNavigate();

    const dash = () => {
        navigate("/");
    }
    const add = () => {
        navigate("/add");
    }
    const log = () => {
        navigate("/log")
    }
    const sign = () => {
        navigate("/sign")
    }
    const acc = () => {
        navigate("/acc")
    }
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='vtv'>
            <nav class=" xl:w-full rounded-b-xl border-gray-200 dark:bg-black dark:border-gray-700">
                <div class="max-w-screen-xl flex flex-wrap items-center justify-between">
                    <a href="https://digiplusagency.com/" class="flex items-center px-5 space-x-3 rtl:space-x-reverse">
                        <img src={logo} class="h-16 " alt="Logo" />
                    </a>

                    <button data-collapse-toggle="navbar-dropdown" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>

                    <div class="hidden md:block" id="navbar-dropdown">
                        <ul class="flex flex-col font-semibold font-sans md:p-3  border-white-100  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-white-100 md:dark:bg-white-100 dark:border-green-700">
                            <li>
                                <button onClick={dash} class="block py-2 px-3 text-green-100 rounded hover:bg-green-100 md:hover:bg-transparent md:border-0 md:hover:text-black-100 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-green-700 dark:hover:text-white md:dark:hover:bg-transparent">Home</button>
                            </li>
                            <li>
                                <button onClick={add} class="block py-2 px-3 text-green-100 rounded hover:bg-green-100 md:hover:bg-transparent md:border-0 md:hover:text-black-100 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-green-700 dark:hover:text-white md:dark:hover:bg-transparent">Add</button>
                            </li>
                            <li>
                                <button onClick={log} class="block py-2 px-3 text-green-100 rounded hover:bg-green-100 md:hover:bg-transparent md:border-0 md:hover:text-black-100 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-green-700 dark:hover:text-white md:dark:hover:bg-transparent">Logs</button>
                            </li>
                            <li>
                                <ul class="block py-2 px-3 text-green-100 rounded hover:bg-green-100 md:hover:bg-transparent md:border-0 md:hover:text-black-100 md:p-0 dark:text-black md:dark:hover:text-green-500 dark:hover:bg-green-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                    <button onClick={() => setIsOpen(!isOpen)} type="button" class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-green-500 dark:bg-green-600 md:dark:bg-transparent" aria-current="page" id="menu-button" aria-expanded="true" aria-haspopup="true">
                                        Username
                                    </button>
                                </ul>
                            </li>
                        </ul>
                        {isOpen && (
                            <ul role="menu" data-popover="menu" data-popover-placement="bottom"
                                class="absolute z-10 w-62 py-6 px-2 ml-40  overflow-auto rounded-md border border-blue-gray-50 bg-white font-sans text-sm font-normal text-blue-gray-500 shadow-lg shadow-blue-gray-500/10 focus:outline-none">
                                <button onClick={acc} role="menuitem"
                                    class="block w-full cursor-pointer text-center select-none rounded-md hover:text-green-500 font-semibold leading-tight transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
                                    Account Settings
                                </button>
                                <button onClick={sign} role="menuitem"
                                    class="block w-full cursor-pointer text-center select-none rounded-md px-3 pt-[9px] pb-2 font-semibold hover:text-green-500  leading-tight transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
                                    Log out
                                </button>
                            </ul>)}
                    </div>
                </div>
            </nav>
            <section class="bg-gray-50 dark:bg-white">

                <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-full lg:py-6">

                    <h2 class="mb-1 text-xl font-bold text-center leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-green-600">
                        Account Settings
                    </h2>

                    <div class="w-3/5 p-6 bg-white rounded-xl shadow-xl md:mt-0 sm:min-w-md dark:bg-primary dark:border-gray-700 sm:p-8">

                        <form class="mt-4 space-y-4 lg:mt-5 md:space-y-5" action="#">
                            <div>
                                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Your email</label>
                                <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-primary dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="">
                                </input>
                            </div>
                            <div>
                                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Current Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-primary dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
                                </input>
                            </div>
                            <div>
                                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">New Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-primary dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
                                </input>
                            </div>
                            <button type="submit" class="mx-72 text-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-500 dark:hover:bg-blue-700 dark:focus:ring-primary-800">Save</button>
                        </form>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Account
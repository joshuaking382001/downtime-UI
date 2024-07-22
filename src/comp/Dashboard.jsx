
import logo from '../image/logo1.png'
import foot from '../image/logo2.png'
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
function Dashboard() {
    const navigate = useNavigate();

    const add = () => {
        navigate("/add");
    }
    const dash = () => {
        navigate("/");
    }
    const log = () => {
        navigate("/log")
    }
    const sign = () => {
        navigate("/sign")
    }

    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
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
                                <button onClick={dash} class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-green-500 dark:bg-green-600 md:dark:bg-transparent" aria-current="page">Home</button>
                            </li>
                            <li>
                                <button onClick={add} class="block py-2 px-3 text-green-100 rounded hover:bg-green-100 md:hover:bg-transparent md:border-0 md:hover:text-black-100 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-green-700 dark:hover:text-white md:dark:hover:bg-transparent">Add</button>
                            </li>
                            <li>
                                <button onClick={log} class="block py-2 px-3 text-green-100 rounded hover:bg-green-100 md:hover:bg-transparent md:border-0 md:hover:text-black-100 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-green-700 dark:hover:text-white md:dark:hover:bg-transparent">Logs</button>
                            </li>
                            <li>
                                <ul class="block py-2 px-3 text-green-100 rounded hover:bg-green-100 md:hover:bg-transparent md:border-0 md:hover:text-black-100 md:p-0 dark:text-black md:dark:hover:text-green-500 dark:hover:bg-green-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                    <button onClick={() => setIsOpen(!isOpen)} type="button" class="block py-2 px-3 text-green-100 rounded hover:bg-green-100 md:hover:bg-transparent md:border-0 md:hover:text-black-100 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-green-700 dark:hover:text-white md:dark:hover:bg-transparent" id="menu-button" aria-expanded="true" aria-haspopup="true">
                                        Username
                                    </button>
                                </ul>
                            </li>
                        </ul>
                        {isOpen && (
                            <ul role="menu" data-popover="menu" data-popover-placement="bottom"
                                class="absolute z-10 w-62 py-6 px-2 ml-40  overflow-auto rounded-md border border-blue-gray-50 bg-white font-sans text-sm font-normal text-blue-gray-500 shadow-lg shadow-blue-gray-500/10 focus:outline-none">
                                <li role="menuitem"
                                    class="block w-full cursor-pointer text-center select-none rounded-md hover:text-green-500 font-semibold leading-tight transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
                                    Account Settings
                                </li>
                                <button onClick={sign} role="menuitem"
                                    class="block w-full cursor-pointer text-center select-none rounded-md px-3 pt-[9px] pb-2 font-semibold hover:text-green-500  leading-tight transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
                                    Log out
                                </button>
                            </ul>)}
                    </div>
                </div>
            </nav>

            <div class="bg-white">
                <div class="mx-auto max-w-full-md px-3 lg:px-2">
                    <div class="mx-auto mt-16  rounded-3xl ring-1 ring-gray-200 sm:mt-2 lg:mx-0 xl:flex xl:max-w-full">
                        <div class=" sm:p-5 lg:flex-auto">

                            <div class='max-w-md '>
                                <div class="relative flex items-center w-3/4 h-10 ring-1 ring-gray-400 rounded-full focus-within:shadow-xl bg-white overflow-hidden">
                                    <div class="grid place-items-center h-full w-12 text-gray-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                    </div>

                                    <input
                                        class="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                                        type="text"
                                        id="search"
                                        placeholder="Search something.." />
                                </div>
                            </div>

                            <div class="relative my-4 overflow-x-auto shadow-md sm:rounded-lg">
                                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-green-500 dark:text-black">
                                        <tr>
                                            <th scope="col" class="px-6 py-3">
                                                URL
                                            </th>
                                            <th scope="col" class="px-6 py-3">
                                                Status
                                            </th>
                                            <th scope="col" class="px-6 py-3">
                                                Mail
                                            </th>
                                            <th scope="col" class="px-6 py-3">
                                                SMS
                                            </th>
                                            <th scope="col" class="px-6 px-3">
                                                View Status
                                            </th>
                                            <th scope="col" class="px-6 py-3">
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="odd:bg-white odd:dark:bg-white even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                                                http//test.com
                                            </th>
                                            <td class="px-6 py-4">
                                                Up
                                            </td>
                                            <td class="px-6 py-4">
                                                Active
                                            </td>
                                            <td class="px-6 py-4">
                                                Non-Active
                                            </td>
                                            <td>

                                            </td>
                                            <td class="px-6 py-4">
                                                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                            </td>
                                        </tr>
                                        <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-green-100 border-b dark:border-gray-700">
                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">

                                            </th>
                                            <td class="px-6 py-4">

                                            </td>
                                            <td class="px-6 py-4">

                                            </td>
                                            <td class="px-6 py-4">

                                            </td>
                                            <td>

                                            </td>
                                            <td class="px-6 py-4">
                                                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                            </td>
                                        </tr>
                                        <tr class="odd:bg-white odd:dark:bg-white even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">

                                            </th>
                                            <td class="px-6 py-4">

                                            </td>
                                            <td class="px-6 py-4">

                                            </td>
                                            <td class="px-6 py-4">

                                            </td>
                                            <td>
                                            </td>
                                            <td class="px-6 py-4">
                                                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                            </td>
                                        </tr>
                                        <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-green-100 border-b dark:border-gray-700">
                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">

                                            </th>
                                            <td class="px-6 py-4">

                                            </td>
                                            <td class="px-6 py-4">

                                            </td>
                                            <td class="px-6 py-4">

                                            </td>
                                            <td>

                                            </td>
                                            <td class="px-6 py-4">
                                                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">

                                            </th>
                                            <td class="px-6 py-4">

                                            </td>
                                            <td class="px-6 py-4">

                                            </td>
                                            <td class="px-6 py-4">

                                            </td>
                                            <td>

                                            </td>
                                            <td class="px-6 py-4">
                                                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>


                        </div>
                        <div class="md:mt-2 pr-2 pt-28 h-80 lg:w-60  lg:mt-0 lg:max-w-md lg:flex-shrink-0">
                            <div class="rounded-2xl h-full bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                                <div class="mx-auto max-w-xs px-8">
                                    <div class="  flex  items-center">

                                        <div class="relative inline-flex  group">
                                            <p>Current</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Dashboard
import React, { useState } from 'react';
import logo from '../image/logo1.png'
import foot from '../image/logo2.png'
import { useNavigate } from 'react-router-dom'

function Logs() {
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
    const sign =()=>{
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
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
    </svg>
</button>

<div   class="hidden md:block" id="navbar-dropdown">
  <ul class="flex flex-col font-semibold font-sans md:p-3  border-white-100  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-white-100 md:dark:bg-white-100 dark:border-green-700">
    <li>
    <button onClick={dash} class="block py-2 px-3 text-green-100 rounded hover:bg-green-100 md:hover:bg-transparent md:border-0 md:hover:text-black-100 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-green-700 dark:hover:text-white md:dark:hover:bg-transparent">Home</button>
    </li>
    <li>
    <button onClick={add} class="block py-2 px-3 text-green-100 rounded hover:bg-green-100 md:hover:bg-transparent md:border-0 md:hover:text-black-100 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-green-700 dark:hover:text-white md:dark:hover:bg-transparent">Add</button>
    </li>
    <li>
    <button onClick={log}  class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-green-500 dark:bg-green-600 md:dark:bg-transparent" aria-current="page">Logs</button>
    </li>
    <li>
          <ul class="block py-2 px-3 text-green-100 rounded hover:bg-green-100 md:hover:bg-transparent md:border-0 md:hover:text-black-100 md:p-0 dark:text-black md:dark:hover:text-green-500 dark:hover:bg-green-700 dark:hover:text-white md:dark:hover:bg-transparent">
          <button onClick={() => setIsOpen(!isOpen)} type="button" class= "block py-2 px-3 text-green-100 rounded hover:bg-green-100 md:hover:bg-transparent md:border-0 md:hover:text-black-100 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-green-700 dark:hover:text-white md:dark:hover:bg-transparent" id="menu-button" aria-expanded="true" aria-haspopup="true">
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


<p class="text-center font-bold text-2xl pt-8 font-sans text-green-500">Downtimes Logs</p>
<div class="relative mx-20 my-14 overflow-x-auto shadow-black-200 shadow-xl sm:rounded-lg"> 
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-green-100">
                    URL Status
                </th>
                <th scope="col" class="px-6 py-3">
                    Start At
                </th>
                <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-green-100">
                   End At 
                </th>
                <th scope="col" class="px-6 py-3">
                  Duration  
                </th>
                <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-green-100">
                    HTTP
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-black dark:bg-green-100">
                http://example.com
                </th>
                <td class="px-6 py-4">
                2020-08-08 06:46:07
                </td>
                <td class="px-6 py-4 bg-gray-50 dark:bg-green-100">
                2020-08-08 06:49:06
                </td>
                <td class="px-6 py-4">
                    2min, 59s
                </td>
                <td class="px-6 py-4 bg-gray-50 dark:bg-green-100">
                   503
                </td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-black dark:bg-green-100">
                http://another-example.com
                </th>
                <td class="px-6 py-4">
                2020-08-01 05:02:01
                </td>
                <td class="px-6 py-4 bg-gray-50 dark:bg-green-100"> 
                2020-08-01 05:22:43
                </td>
                <td class="px-6 py-4">
                    20min, 42s  
                </td>
                <td class="px-6 py-4 bg-gray-50 dark:bg-green-100">
                    404
                </td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-black dark:bg-green-100">
                    
                </th>
                <td class="px-6 py-4">
                    
                </td>
                <td class="px-6 py-4 bg-gray-50 dark:bg-green-100">
                    
                </td>
                <td class="px-6 py-4">
                    
                </td>     <td class="px-6 py-4 bg-gray-50 dark:bg-green-100">
                    
                </td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-black dark:bg-green-100">
                    
                </th>
                <td class="px-6 py-4">
                    
                </td>
                <td class="px-6 py-4 bg-gray-50 dark:bg-green-100">
                    
                </td>
                <td class="px-6 py-4">
                    
                </td>
                <td class="px-6 py-4 bg-gray-50 dark:bg-green-100">
                    
                </td>
            </tr>
            <tr>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-black dark:bg-green-100">
                    
                </th>
                <td class="px-6 py-4">
                    
                </td>
                <td class="px-6 py-4 bg-gray-50 dark:bg-green-100">
                    
                </td>
                <td class="px-6 py-4">
                    
                </td>
                <td class="px-6 py-4 bg-gray-50 dark:bg-green-100">
                   
                </td>
            </tr>
            
        </tbody>
    </table>
</div>





<footer class="shadow backdrop-blur-md py-3 dark:bg-transparent ">
    <div class="md:w-full max-w-screen-xl mx-auto md:py-1">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a href="https://digiplusagency.com/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src={foot} class="md:h-24" alt="Logo" />
            </a>
            <ul class="xl:flex xl:flex-wrap xl:pr-4 md:items-center  text-sm font-medium text-gray-500 dark:text-black">
            <li>
                    <a href="https://digiplusagency.com/digiplus-team/" class="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                    <a href="https://digiplusagency.com/privacy-policy/" class="hover:underline me-4 md:me-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
                </li>
                <li>
                    <a href="#" class="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr class="h-2 border-gray-200 sm:mx-auto dark:border-gray-700" />
        <span class="block h-2 text-sm text-gray-500 sm:text-center dark:text-black">© 2024 <a href="https://digiplusagency.com/" class="hover:underline">digiplusagency</a>. All Rights Reserved.</span>
    </div>
</footer>

    </div>
  )
}

export default Logs
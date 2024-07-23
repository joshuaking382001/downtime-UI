import React, { useState } from 'react';
import logo from '../image/logo1.png'
import foot from '../image/logo2.png'
import { useNavigate } from 'react-router-dom';


function Add() {
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
                <button onClick={dash} class="block py-2 px-3 text-green-100 rounded hover:bg-green-100 md:hover:bg-transparent md:border-0 md:hover:text-black-100 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-green-700 dark:hover:text-white md:dark:hover:bg-transparent">Home</button>
              </li>
              <li>
                <button onClick={add} class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-green-500 dark:bg-green-600 md:dark:bg-transparent" aria-current="page">Add</button>
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

      <div>

        <form class="max-w-sm rounded-xl px-4 mt-4 pt-10 pb-10 shadow-black-200 shadow-xl mx-auto"><p class="text-center font-bold text-2xl font-sans text-green-500">Add a website monitor</p>
          <label for="text" class="block my-12 mb-2 text-sm font-medium text-black ">Your URL</label>
          <input type="text" name="text" id="text" class=" bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-primary dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
          </input>


          <label for="Email" class="block mt-5 mb-2 text-sm font-medium text-black  ">Select your Email</label>
          <select id="email" class="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-primary dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected disabled >--Select an option--</option>
            <option>Off</option>
            <option value="">Send alerts to: </option>
          </select>
          <button type="button" class="focus:outline-none my-8 mx-32 text-white bg-green-700 hover:bg-green-800 focus:ring-1 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Add</button>
        </form>

      </div>

    </div>
  )
}

export default Add
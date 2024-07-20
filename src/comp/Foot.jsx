import React from 'react'
import foot from '../image/logo2.png'
function Foot() {
    return (
        <div>
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

export default Foot
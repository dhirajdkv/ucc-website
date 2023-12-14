import { useState } from 'react'
import logo from './img/logo.png';
import { HeartIcon } from '@heroicons/react/24/outline';

export default function Footer() {

  return (
    // <div style={{position: "fixed",
    //     left:0,
    //     bottom:0,
    //     right:0}}>
    <div>        
        <footer class="bg-white rounded-lg m-4">
            <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div class="sm:flex sm:items-center sm:justify-between">
                    <a href="https://www.csuchico.edu/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img src={logo} class="h-12" alt="CSU Chico Logo" />
                        <span class="self-center text-2xl font-semibold whitespace-nowrap">Chico UCC</span>
                    </a>
                    <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0">
                        <li>
                            <a href="/about" class="hover:underline me-4 md:me-6">About</a>
                        </li>
                        <li>
                            <a href="/customers" class="hover:underline me-4 md:me-6">Customers</a>
                        </li>
                        <li>
                            <a href="/products" class="hover:underline me-4 md:me-6">Products</a>
                        </li>
                        <li>
                            <a href="/about" class="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
                <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <span class="block text-sm text-gray-500 sm:text-center flex justify-center items-center">© 2023 <a href="https://www.csuchico.edu/" class="hover:underline ml-1"> Chico UCC</a>. Made with <HeartIcon className='text-red-500 fill-red-500 h-4 w-4 ml-0.5 mr-0.5'/> by Dhiraj.</span>
            </div>
        </footer>
    </div>
  )
}

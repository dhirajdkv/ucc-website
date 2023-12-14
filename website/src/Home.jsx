import { useState } from 'react'
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Design from './Design.jsx';
import { WrenchScrewdriverIcon } from '@heroicons/react/24/outline'


export default function Home() {

  return (
    <div className="bg-white">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <Design showLeft={true}/>
        <div className="mx-auto max-w-3xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              <span> New website under construction!!</span>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Welcome to Chico UCC
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              The website of Chico State University SAP University Competence Center.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Login
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                Register <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          {/* <hr class="w-48 h-1 mx-auto bg-gray-100 border-0 rounded dark:bg-gray-700 "></hr> */}
          {/* <hr class="h-0.5 bg-gray-200 border-0 rounded dark:bg-gray-700 mb-10 mt-16"></hr> */}
          {/* <div className="text-center mx-auto max-w-2xl lg:mx-0 py-5 sm:py-8 lg:py-11"> */}
            <div className="text-center mx-auto max-w-2xl lg:mx-0 py-32 sm:py-42 lg:py-48">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    What is a SAP UCC
                </h2>
                <p className="mt-2 text-lg leading-8 text-gray-600">
                    The SAP University Competence Center (UCC) at California State University, Chico 
                    is one of the only five UCCs throughout the world. The center provides hosting services 
                    and technical support to the universities that participate in SAP's University Alliance.
                </p>
            </div>
            <Design showLeft={false}/>
            <div className='mx-auto max-w-3xl lg:mx-0 flex items-center justify-center gap-x-6'>
                    <a href="#" className="block p-6 bg-white border 
                        border-gray-200 rounded-lg shadow hover:bg-gray-100" style={{maxWidth:"22rem"}}>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                        Current Sessions
                    </h5>
                    <h6 className="mb-0.5 text-lg font-semibold tracking-tight text-gray-900">
                        Requests: Session Fall - 2023
                    </h6>
                    <p className="font-normal text-sm text-gray-700">Requests open: July 26th 2023</p>
                    <p className="font-normal text-sm text-gray-700">Clients available: August 1st 2023</p>
                    <p className="font-normal text-sm text-gray-700">Session ends: December 31st 2023</p>
                    <h6 className="mb-0.5 text-lg font-semibold tracking-tight text-gray-900">
                        Next: Session Spring - 2023/2024
                    </h6>
                    <p className="font-normal text-sm text-gray-700">Requests open: December 1st 2023</p>
                    <p className="font-normal text-sm text-gray-700">Clients available: Jan 1st 2024</p>
                    <p className="font-normal text-sm text-gray-700">Session ends: June 30th 2024</p>
                    </a>
                    <a href="#" className="block p-6 bg-white border 
                        border-gray-200 rounded-lg shadow hover:bg-gray-100 
                        " style={{maxWidth:"22rem"}}>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                        Sessions Schedule
                    </h5>
                    <p className="font-normal text-sm text-gray-700">Spring - December 1st to June 30th</p>
                    <p className="font-normal text-sm text-gray-700">Summer - May 1st to August 31st</p>
                    <p className="font-normal text-sm text-gray-700">Fall - August 1st to December 31st</p>
                    <br></br>
                    <br></br>
                    <p className="font-normal text-sm text-gray-700">Client requests open 1 month before the term begins.</p>
                    </a>
            </div>
        </div>
      </div>
    </div>
  )
}

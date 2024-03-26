import Link from 'next/link'
import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Card = ({ name, city, linkedin, github, imgSrc }) => {
  return (
    <div className="items-center bg-gray-50 rounded-lg shadow-lg sm:flex dark:bg-gray-800 dark:border-gray-700">
    <div>
        <img className="bg-[#F5C513] object-cover h-44 w-36 rounded-lg sm:rounded-none sm:rounded-l-lg" src={imgSrc} alt={`${name} Avatar`}/>
    </div>
    <div className="p-5">
        <h3 className="text-xl font-bold tracking-tight text-gray-900 hover:text-[#F5C513] dark:text-white">
        {name}
        </h3>
        <span className="text-gray-500 dark:text-gray-400">Web Developer</span>
        <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Based in : {city}</p>
        <ul className="flex space-x-4 sm:mt-0">
            
            <li>
                <Link href={github} className="text-gray-500 hover:text-[#F5C513] dark:hover:text-white">
                <FaGithub className="w-5 h-5" />
                </Link>
            </li>
            <li>
                <Link href={linkedin} className="text-gray-500 hover:text-[#F5C513] dark:hover:text-white">
                           <FaLinkedin className="w-5 h-5  " />
                </Link>
            </li>
        </ul>
    </div>
</div> 
    
  )
}

export default Card

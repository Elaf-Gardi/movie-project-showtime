import Card from '@/components/AboutCard/Card'
import React from 'react'

const About = () => {
  const teamMembers = [
    {
      name: 'Ninos Dinkha',
      city: 'Dhoke',
      linkedin: 'https://www.linkedin.com/in/ninosdinkha?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
      github: 'https://github.com/Ninnoss',
      imgSrc: '/ninos1.png',
    },
    {
      name: 'Elaf Gradi',
      city: 'Mousel',
      linkedin: 'https://www.linkedin.com/in/elaf-ghassan?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
      github: 'https://github.com/Elaf-Gardi',
      imgSrc: '/elaf2.png',
    },
    {
      name: 'Afyaa Khudur',
      city: 'Baghdad',
      linkedin: 'https://www.linkedin.com/in/afeaa-khudur-301386249?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
      github: 'https://github.com/johndoe',
      imgSrc: '/afyaa.png',
    },
    {
      name: 'Noor Alhussein',
      city: 'Basrah',
      linkedin: 'https://www.linkedin.com/in/halfhero?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
      github: 'https://github.com/Halfhero212',
      imgSrc: '/noor1.png',
    },
  ]

  return (
    <section className="bg-white dark:bg-gray-900 pt-10">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white ">
            Our Team
          </h2>
          <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
          Meet the incredible minds behind this innovative project.
          </p>
        </div>
        <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
          {teamMembers.map((member, index) => (
            <Card key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default About

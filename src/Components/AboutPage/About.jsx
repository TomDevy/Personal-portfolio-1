import React from 'react'

const About = () => {
    return (
        <div className='py-14 md:ml-24 ml-20 h-screen'>
            <div className='w-full relative flex items-center'>
                <div className='opacity-70 animate-blob absolute mix-blend-multiply top-0 filter blur-xl -left-4 md:w-72 w-24 md:h-72 h-24 bg-purple-700 rounded-full'>
                </div>
                <div className='opacity-70 animate-blob animation-delay-4000 absolute mix-blend-multiply top-0 filter blur-xl md:-right-1 left-16 md:w-72 w-24 md:h-72 h-24 bg-yellow-300 rounded-full'>
                </div>
                <div className='opacity-70 animation-delay-2000 animate-blob absolute mix-blend-multiply top-4 filter blur-xl md:left-20 left-12 md:w-72 w-24 md:h-72 h-24 bg-indigo-300 rounded-full'>
                </div>
            </div>
            <div className='py-14'>
                <h1 className='text-2xl text-indigo-600 p-6 uppercase'>About Me</h1>
                <hr />
                <p className='bg-indigo-400 md:p-10 p-3 md:text-justify text-left m-4 first-letter:text-2xl first-letter:text-indigo-800
                                border-b-4 text-white border-b-indigo-600 rounded-md
                '>
                    I'm a front-end web developer with a background in Information Technology from The Federal University of Technology, Akure, Nigeria. <br /> My 4 years of IT experience has given me a strong foundation for web development and building complex solutions. <br /> I'm a self taught Frontend web Readt developer. <br /> I am passionate about coding and solving problems through code, and I am excited to work alongside other amazing programmers and learn so much more!
                </p>
            </div>
        </div>
    )
}

export default About
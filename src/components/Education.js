import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'



const Details = ({ type, time, place, info}) => {
    const ref = useRef(null);
    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[80%] mx-60 flex flex-col items-start justify-between lg:mx-28 md:mx-6 md:px-6 md:w-full'>
        <LiIcon reference={ref} />
        <motion.div initial={{y:50}} whileInView={{y:0}} transition={{duration:0.5, type:"spring"}}>
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{type}</h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                {time} | {place}
            </span>
            <p className='font-medium w-full md:text-sm'>
                {info}
            </p>
        </motion.div>
    </li>
    )
}

const Education = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
  return (
    <div className='my-64'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
            Education
        </h2>
        <div ref={ref} className='w-[85%] mx-auto relative lg:w-full md:w-full'>
            <motion.div style={{scaleY: scrollYProgress}} className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-blue-600 md:w-[2px] md:left-[30px] xs:left-[20px]'/>
            <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                <Details 
                type="Bachelor of Science in Information Technology"
                time="2018 - 2023"
                place="St. Dominic College of Asia"
                info="Completed Bachelor's Degree."
                />

                <Details 
                type="Information and Communication Technology"
                time="2016 - 2018"
                place="Arellano University - Apolinario Mabini Campus"
                info="Completed Senior High School."
                />

                <Details 
                type="Junior High School"
                time="2012 - 2016"
                place="Arellano University - Apolinario Mabini Campus"
                info="Completed Junior High School."
                />
            </ul>
        </div>
    </div>
  )
}

export default Education
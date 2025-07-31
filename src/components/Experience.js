import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'



const Details = ({position, company, companyLink, time, address, work}) => {
    const ref = useRef(null);
    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[80%] mx-56 flex flex-col items-start justify-between lg:mx-28 md:mx-6 md:px-6 md:w-full'>
        <LiIcon reference={ref} />
        <motion.div initial={{y:50}} whileInView={{y:0}} transition={{duration:0.5, type:"spring"}}>
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
                {position}
                &nbsp;
                <a href={companyLink} target="_blank" className='text-blue-600 capitalize'>
                    @{company}
                </a>
            </h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                {time} | {address}
            </span>
            <p className='font-medium w-full md:text-sm'>
                {work}
            </p>
        </motion.div>
    </li>
    )
}

const Experience = () => {
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
            Experience
        </h2>
        <div ref={ref} className='w-[85%] mx-auto relative lg:w-full md:w-full'>
            <motion.div style={{scaleY: scrollYProgress}} className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-blue-600 md:w-[2px] md:left-[30px] xs:left-[20px]'/>
            <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                <Details 
                position="Programmer"
                company="Maritime Medical & Laboratory Clinic Inc."
                companyLink="https://mmlci.com.ph"
                time="Novemebr 2023 - November 2024"
                address="Ermita, Metro Manila, Philippines"
                work="Provided tech assistance at the Cinemalaya event. Troubleshoots hardware and software problems, and installed Operating Systems, softwares, and hardwares needed for the company's departments."
                />

                <Details 
                position="IT Support (Intern)"
                company="Cultural Center of the Philippines"
                companyLink="https://culturalcenter.gov.ph"
                time="August 2022 - December 2022"
                address="Pasay City, Metro Manila, Philippines"
                work="Provided tech assistance at the Cinemalaya event. Troubleshoots hardware and software problems, and installed Operating Systems, softwares, and hardwares needed for the company's departments."
                />

                <Details 
                position="President"
                company="Junior Philippine Computer Society - SDCA Chapter"
                companyLink="https://www.facebook.com/SDCAChapterJPCS"
                time="August 2021 - August 2022"
                address="Bacoor City, Cavite, Philippines"
                work="Managed the organization's events, school events, works, and the officers. Provided partnership with FEU Enterprise Management Society's event, &quot;Pawr A Cause&quot;. Provided pubmats for the school events and organization's event."
                />

                <Details 
                position="Graphic Artist"
                company="JPCS - SDCA Chapter"
                companyLink="https://www.facebook.com/JPCSSDCAChapter"
                time="January 2020 - May 2020"
                address="Bacoor City, Cavite, Philippines"
                work="Edited videos for the organization's special events and social media contents."
                />

                <Details 
                position="Auditor"
                company="JPCS - SDCA Chapter"
                companyLink="https://www.facebook.com/JPCSSDCAChapter"
                time="August 2019 - December 2020"
                address="Bacoor City, Cavite, Philippines"
                work="Managed the organization's funds and expenses."
                />
            </ul>
        </div>
    </div>
  )
}

export default Experience
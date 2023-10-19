import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import headimg from "../../../public/images/projects/first-portfolio.png"
import home from "../../../public/images/projects/HSPA/home.png"
import search from "../../../public/images/projects/HSPA/search.png"
import profile from "../../../public/images/projects/HSPA/profile.png"
import hspa2 from "../../../public/images/projects/HSPA/hspa-2.png"
import hspaend from "../../../public/images/projects/HSPA/hspa-end.png"
import psimg from "../../../public/images/projects/HSPA/ps-button.png"
import ip14 from "../../../public/images/devices/ip14.png"
import sdcacalculator from "../../../public/images/projects/sdca-calculator-cropped.png"
import { motion } from 'framer-motion'
import Link from 'next/link'
import TransitionEffect from '@/components/TransitionEffect'


const FramerImage = motion(Image);

const firstportfoliowebsite = () => {
  return (
    <>
        <Head>
            <title>JM | First Portfolio Website</title>
            <meta name="description" content="any description" />
        </Head>
        <TransitionEffect />
        <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
          <Layout className='pt-16'>
            <AnimatedText text="First Portfolio Website" className='mb-16'/>
            <div className='grid w-full grid-cols-9 items-center'>
                <div className='col-span-3 flex flex-col items-center justify-center'>
                    <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>Type</h2>
                    <p className='font-medium'>Portfolio Website</p>
                </div>
                <div className='col-span-3 flex flex-col items-center justify-center'>
                    <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>Programming Language</h2>
                    <p className='font-medium'>HTML, CSS, JavaScript</p>
                </div>
                <div className='col-span-3 flex flex-col items-center justify-center'>
                    <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>Year</h2>
                    <p className='font-medium'>2023</p>
                </div>
            </div>
            <div className='grid grid-cols-12 gap-24 gap-y-32 mt-4 mb-4'>
              <div className='col-span-12'>
                <FramerImage src={headimg} alt="JohnMartin" className='w-full h-auto'
                priority
                initial={{y:150, opacity:0}}
                whileInView={{y:0, opacity:1, transition:{duration:1, delay:0.7}}}
                viewport={{once: true}}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                />
              </div>
            </div>
          </Layout>
          <div className='col-span-12'>
            <video src="https://firebasestorage.googleapis.com/v0/b/portfolio-99e6e.appspot.com/o/vids%2FHSPA.mp4?alt=media&token=d9bb2f64-7ab1-4905-be11-01b35f543322&_gl=1*t52n19*_ga*MTgyMTI4ODg0MC4xNjczOTg0Njc0*_ga_CW55HF8NVT*MTY5Njc4MzEwMC42My4xLjE2OTY3ODMxOTEuNjAuMC4w" muted loop autoPlay priority className='w-full h-auto'/>
          </div>
          <Layout className='pt-16'>
            <div className='grid grid-cols-3 mt-16'>
                <FramerImage src={home} alt="JohnMartin" className='w-full h-auto'
                priority
                initial={{y:150, opacity:1}}
                whileInView={{y:0, opacity:1, transition:{duration:0.5}}}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                />
                <FramerImage src={search} alt="JohnMartin" className='w-full h-auto'
                priority
                initial={{y:150, opacity:1}}
                whileInView={{y:0, opacity:1, transition:{duration:0.5}}}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                />
                <FramerImage src={profile} alt="JohnMartin" className='w-full h-auto'
                priority
                initial={{y:150, opacity:1}}
                whileInView={{y:0, opacity:1, transition:{duration:0.5}}}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                />
            </div>
          </Layout>
          <div className='col-span-12 mt-16'>
                <Image src={hspa2} alt="JohnMartin" className='w-full h-auto'
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                />
          </div>
          <Layout className='mt-16'>
            <div className='flex relative gap-24 gap-y-32 mt-4 mb-4 items-center justify-center'>
              <div className='items-center justify-center'>
                <video src="https://firebasestorage.googleapis.com/v0/b/portfolio-99e6e.appspot.com/o/vids%2FHSPA-Booking.mp4?alt=media&token=7a9d2944-22ad-4989-90e6-4801a6100e13&_gl=1*3q54x3*_ga*MTgyMTI4ODg0MC4xNjczOTg0Njc0*_ga_CW55HF8NVT*MTY5Njg3MzI4NS42NS4xLjE2OTY4NzQyOTcuNDAuMC4w" 
                muted 
                loop 
                autoPlay 
                priority 
                className='w-[25.8%] h-auto absolute top-11 ml-44 rounded-3xl -z-10'/>
                <Image src={ip14} alt="JohnMartin" className='w-full h-auto'
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 45vw"
                />
              </div>
            </div>
          </Layout>
          <div className='col-span-12 mt-16'>
            <Image src={hspaend} alt="JohnMartin" className='w-full h-auto'
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            />
              <Link href="https://play.google.com/store/apps/details?id=com.hspa.capstone&pcampaignid=web_share" target='_blank'>
                <Image src={psimg} alt="JohnMartin" className='w-[42%] h-auto absolute ml-24 -mt-80 cursor-pointer'
                priority
                />
              </Link>
          </div>
          <Layout className='py-16'>
            <motion.h2 initial={{y:100, opacity:0}}
            whileInView={{y:0, opacity:1, transition:{duration:1, delay:0.4}}}
            className='font-bold text-6xl w-full uppercase text-center mt-32 mb-4 text-dark/75 dark:text-light/75'>
              Next Project
            </motion.h2>
            <motion.h2 initial={{y:125, opacity:0}}
            whileInView={{y:0, opacity:1, transition:{duration:1, delay:0.6}}}
            className='mb-4 text-2xl font-bold w-full text-center text-dark dark:text-light'>SDCA Calculator</motion.h2>
            <div className='flex items-center justify-center w-full'>
              <Link href="/projects/sdcacalculator">
                <FramerImage src={sdcacalculator} alt="JohnMartin" className='w-full h-auto flex items-center'
                priority
                initial={{y:150, opacity:0}}
                whileInView={{y:0, opacity:1, transition:{duration:1, delay:0.8}}}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 40vw"
                />
              </Link>
            </div>
          </Layout>
        </main>
    </>
  )
}

export default firstportfoliowebsite
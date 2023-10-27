import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import headimg from "../../../public/images/projects/first-portfolio.png"
import skills from "../../../public/images/projects/FPW/skills.png"
import services from "../../../public/images/projects/FPW/services.png"
import project from "../../../public/images/projects/FPW/project.png"
import testimonial from "../../../public/images/projects/FPW/testimonial.png"
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
            <video src="https://firebasestorage.googleapis.com/v0/b/myportfolio-794c9.appspot.com/o/videos%2Ffirstportfolio.mp4?alt=media&token=fead658a-b0af-4b18-8409-b9c0776a05da&_gl=1*op6rce*_ga*MTgyMTI4ODg0MC4xNjczOTg0Njc0*_ga_CW55HF8NVT*MTY5ODM5MjY2Ny44NC4xLjE2OTgzOTUxNjAuMTQuMC4w" muted loop autoPlay priority className='w-full h-auto'/>
          </div>
          <Layout className='mt-16'>
            <div className='grid grid-cols-2 gap-16'>
                    <FramerImage src={skills} alt="JohnMartin" className='w-full h-auto overflow-hidden'
                    priority
                    initial={{y:150, opacity:0}}
                    whileInView={{y:0, opacity:1, transition:{duration:0.5}}}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                    />
                    <FramerImage src={services} alt="JohnMartin" className='w-full h-auto'
                    priority
                    initial={{y:150, opacity:0}}
                    whileInView={{y:0, opacity:1, transition:{duration:0.5}}}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                    />
                </div>
          </Layout>
          <Layout className='mt-16'>
            <div className='grid grid-cols-2 gap-16'>
                    <FramerImage src={project} alt="JohnMartin" className='w-full h-auto overflow-hidden'
                    priority
                    initial={{y:150, opacity:0}}
                    whileInView={{y:0, opacity:1, transition:{duration:0.5}}}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                    />
                    <FramerImage src={testimonial} alt="JohnMartin" className='w-full h-auto'
                    priority
                    initial={{y:150, opacity:0}}
                    whileInView={{y:0, opacity:1, transition:{duration:0.5}}}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                    />
                </div>
          </Layout>
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
import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import headimg from "../../../public/images/projects/sdca-calculator.png"
import loginform from "../../../public/images/projects/SDCAC/login-form-cropped.png"
import login1 from "../../../public/images/projects/SDCAC/login-form-1.png"
import calc1 from "../../../public/images/projects/SDCAC/sdca-calculator-cropped.png"
import jpcs from "../../../public/images/projects/jpcs-cropped.png"
import { motion } from 'framer-motion'
import Link from 'next/link'
import TransitionEffect from '@/components/TransitionEffect'


const FramerImage = motion(Image);

const sdcacalculator = () => {
  return (
    <>
        <Head>
            <title>JM | SDCA Calculator</title>
            <meta name="description" content="any description" />
        </Head>
        <TransitionEffect />
        <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
          <Layout className='pt-16'>
            <AnimatedText text="SDCA Calculator" className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'/>
            <div className='grid w-full grid-cols-9 items-center sm:gap-8'>
                <div className='col-span-3 flex flex-col items-center justify-center xl:col-span-3 md:order-2 md:col-span-9 md:mb-4'>
                    <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75 lg:text-base md:mb-1'>Type</h2>
                    <p className='font-medium text-center'>Software Application</p>
                </div>
                <div className='col-span-3 flex flex-col items-center justify-center xl:col-span-3 md:order-2 md:col-span-9 md:mb-4'>
                    <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75 lg:text-base md:mb-1'>Programming Language</h2>
                    <p className='font-medium text-center'>C#</p>
                </div>
                <div className='col-span-3 flex flex-col items-center justify-center xl:col-span-3 md:order-2 md:col-span-9 md:mb-4'>
                    <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75 lg:text-base md:mb-1'>Year</h2>
                    <p className='font-medium text-center'>2021</p>
                </div>
            </div>
            <div className='grid grid-cols-12 gap-24 gap-y-32 mt-4 mb-4 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
              <div className='col-span-12'>
                <FramerImage src={headimg} alt="JohnMartin" className='w-full h-auto'
                priority
                initial={{y:150, opacity:0}}
                whileInView={{y:0, opacity:1, transition:{duration:1, delay:0.7}}}
                viewport={{once: true}}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                />
              </div>
              <div className='col-span-12'>
                <video src="https://firebasestorage.googleapis.com/v0/b/portfolio-99e6e.appspot.com/o/vids%2Fsdca-calculator.mp4?alt=media&token=c6ff9169-ff0c-4cc3-835f-c72b242b9a20&_gl=1*16t78lp*_ga*MTgyMTI4ODg0MC4xNjczOTg0Njc0*_ga_CW55HF8NVT*MTY5NzAwNjQxOC42Ni4xLjE2OTcwMDY1MTIuNjAuMC4w" muted loop autoPlay priority playsInline className='w-full h-auto'/>
              </div>
            </div>
          </Layout>
          <Layout className='pt-16'>
            <div className='grid grid-cols-2 gap-12 mt-16'>
                    <FramerImage src={loginform} alt="JohnMartin" className='w-full h-auto'
                    priority
                    initial={{y:150, opacity:1}}
                    whileInView={{y:0, opacity:1, transition:{duration:0.5}}}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                    />
                    <FramerImage src={calc1} alt="JohnMartin" className='w-full h-auto'
                    priority
                    initial={{y:150, opacity:1}}
                    whileInView={{y:0, opacity:1, transition:{duration:0.5}}}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                    />
                </div>
          </Layout>
          <Layout className='py-16'>
            <motion.h2 initial={{y:100, opacity:0}}
            whileInView={{y:0, opacity:1, transition:{duration:1, delay:0.4}}}
            className='font-bold text-6xl w-full uppercase text-center mt-32 mb-4 text-dark/75 dark:text-light/75 lg:!text-6xl sm:mb-2 sm:!text-5xl xs:!text-3xl'>
              Next Project
            </motion.h2>
            <motion.h2 initial={{y:125, opacity:0}}
            whileInView={{y:0, opacity:1, transition:{duration:1, delay:0.6}}}
            className='mb-4 text-2xl font-bold w-full text-center text-dark dark:text-light lg:!text-xl sm:mb-2 sm:!text-lg xs:!text-base'>JPCS - SDCA Chapter</motion.h2>
            <div className='flex items-center justify-center w-full'>
              <Link href="/otherprojects/jpcs">
                <FramerImage src={jpcs} alt="JohnMartin" className='w-full h-auto flex items-center'
                priority
                initial={{y:150, opacity:0}}
                whileInView={{y:0, opacity:1, transition:{duration:1, delay:0.8}}}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 30vw, 30vw"
                />
              </Link>
            </div>
          </Layout>
        </main>
    </>
  )
}

export default sdcacalculator
import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import headimg from "../../../public/images/projects/modern-portfolio.png"
import ip14 from "../../../public/images/devices/ip14.png"
import homelight from "../../../public/images/projects/MPW/home-light.png"
import homedark from "../../../public/images/projects/MPW/home-dark.png"
import macpro from "../../../public/images/devices/macpro.png"
import ipadpro from "../../../public/images/devices/ipadpro.png"
import firstportfolio from "../../../public/images/projects/first-portfolio-cropped.png"
import { motion } from 'framer-motion'
import Link from 'next/link'
import TransitionEffect from '@/components/TransitionEffect'


const FramerImage = motion(Image);

const modernportfoliowebsite = () => {
  return (
        <>
        <Head>
            <title>JM | Modern Portfolio Website</title>
            <meta name="description" content="any description" />
        </Head>
        <TransitionEffect />
        <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
          <Layout className='pt-16'>
            <AnimatedText text="Modern Portfolio Website" className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'/>
            <div className='grid w-full grid-cols-9 items-center sm:gap-8'>
                <div className='col-span-3 flex flex-col items-center justify-center xl:col-span-3 md:order-2 md:col-span-9 md:mb-4'>
                    <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75 lg:text-base md:mb-1'>Type</h2>
                    <p className='font-medium text-center'>Portfolio Website</p>
                </div>
                <div className='col-span-3 flex flex-col items-center justify-center xl:col-span-3 md:order-2 md:col-span-9 md:mb-4'>
                    <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75 lg:text-base md:mb-1'>Programming Language</h2>
                    <p className='font-medium text-center'>Nextjs, Tailwind CSS</p>
                </div>
                <div className='col-span-3 flex flex-col items-center justify-center xl:col-span-3 md:order-2 md:col-span-9 md:mb-4'>
                    <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75 lg:text-base md:mb-1'>Year</h2>
                    <p className='font-medium text-center'>2023</p>
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
            </div>
          </Layout>
          <div className='col-span-12 hidden dark:flex'>
            <Image src={homelight} alt="JohnMartin" className='w-full h-auto'
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                  />
          </div>
          <div className='col-span-12 flex dark:hidden'>
            <Image src={homedark} alt="JohnMartin" className='w-full h-auto'
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                  />
          </div>
          <Layout className='mt-16'>
            <div className='flex relative gap-24 gap-y-32 mt-4 mb-4 items-center justify-center'>
              <div className='items-center justify-center'>
                <video src="" 
                muted 
                loop 
                autoPlay 
                priority 
                className='w-[25.8%] h-auto absolute top-11 ml-44 rounded-3xl -z-10'/>
                <Image src={macpro} alt="JohnMartin" className='w-full h-auto'
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 45vw"
                />
              </div>
            </div>
          </Layout>
          <Layout className='mt-16'>
            <div className='flex relative gap-24 gap-y-32 mt-4 mb-4 items-center justify-center'>
              <div className='items-center justify-center'>
                <video src="" 
                muted 
                loop 
                autoPlay 
                priority 
                className='w-[25.8%] h-auto absolute top-11 ml-44 rounded-3xl -z-10'/>
                <Image src={ipadpro} alt="JohnMartin" className='w-full h-auto'
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 45vw"
                />
              </div>
            </div>
          </Layout>
          <Layout className='mt-16'>
            <div className='flex relative gap-24 gap-y-32 mt-4 mb-4 items-center justify-center'>
              <div className='items-center justify-center'>
                <video src="" 
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
          <Layout className='py-16'>
            <motion.h2 initial={{y:100, opacity:0}}
            whileInView={{y:0, opacity:1, transition:{duration:1, delay:0.4}}}
            className='font-bold text-6xl w-full uppercase text-center mt-32 mb-4 text-dark/75 dark:text-light/75'>
              Next Project
            </motion.h2>
            <motion.h2 initial={{y:125, opacity:0}}
            whileInView={{y:0, opacity:1, transition:{duration:1, delay:0.6}}}
            className='mb-4 text-2xl font-bold w-full text-center text-dark dark:text-light'>First Portfolio Website</motion.h2>
            <div className='flex items-center justify-center w-full'>
              <Link href="/projects/firstportfoliowebsite">
                <FramerImage src={firstportfolio} alt="JohnMartin" className='w-full h-auto flex items-center'
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

export default modernportfoliowebsite
import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import headimg from "../../../public/images/projects/modern-portfolio.png"
import ip14 from "../../../public/images/devices/ip14.png"
import homelight from "../../../public/images/projects/MPW/home-light.png"
import homedark from "../../../public/images/projects/MPW/home-dark.png"
import maclight from "../../../public/images/projects/MPW/mac-light.png"
import macdark from "../../../public/images/projects/MPW/mac-dark.png"
import ipadlight from "../../../public/images/projects/MPW/ipad-light.png"
import ipaddark from "../../../public/images/projects/MPW/ipad-dark.png"
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
            <title>JM | Modern Portfolio</title>
            <meta name="description" content="any description" />
        </Head>
        <TransitionEffect />
        <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
          <Layout className='pt-16'>
            <AnimatedText text="Modern Portfolio" className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'/>
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
                <FramerImage src="/images/projects/modern-portfolio.png" alt="Modern-Portfolio" width={600} height={600} className='w-full h-auto'
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
            <video src="https://firebasestorage.googleapis.com/v0/b/myportfolio-794c9.appspot.com/o/videos%2Fmodernportfolio.mp4?alt=media&token=a308c32b-d68b-4f42-9927-ca141614036f&_gl=1*17xu1qz*_ga*MTgyMTI4ODg0MC4xNjczOTg0Njc0*_ga_CW55HF8NVT*MTY5ODM5MjY2Ny44NC4xLjE2OTgzOTI4NTAuNjAuMC4w" className='w-full h-auto'
              autoPlay
              muted
              playsInline
              loop
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
              />
          </div>
          <Layout className='mt-16'>
            <div className='grid grid-cols-2 gap-16'>
                    <FramerImage src="/images/projects//MPW/mac-light.png" alt="Mac-Light" width={600} height={600} className='w-full h-auto overflow-hidden'
                    priority
                    initial={{y:150, opacity:0}}
                    whileInView={{y:0, opacity:1, transition:{duration:0.5}}}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                    />
                    <FramerImage src="/images/projects//MPW/mac-light.png" alt="Mac-Dark" width={600} height={600} className='w-full h-auto'
                    priority
                    initial={{y:150, opacity:0}}
                    whileInView={{y:0, opacity:1, transition:{duration:0.5}}}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                    />
                </div>
          </Layout>
          <Layout className='mt-16'>
            <div className='grid grid-cols-2 gap-16'>
                    <FramerImage src="/images/projects/MPW/ipad-light.png" alt="iPad-Light" width={600} height={600} className='w-full h-auto overflow-hidden'
                    priority
                    initial={{y:150, opacity:0}}
                    whileInView={{y:0, opacity:1, transition:{duration:0.5}}}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                    />
                    <FramerImage src="/images/projects/MPW/ipad-dark.png" alt="iPad-Dark" width={600} height={600} className='w-full h-auto'
                    priority
                    initial={{y:150, opacity:0}}
                    whileInView={{y:0, opacity:1, transition:{duration:0.5}}}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                    />
                </div>
          </Layout>
          <Layout className='mt-16'>
            <div className='flex relative gap-24 gap-y-32 mt-4 mb-4 items-center justify-center'>
              <div className='flex relative items-center justify-center'>
                <video src="https://firebasestorage.googleapis.com/v0/b/myportfolio-794c9.appspot.com/o/videos%2Fiphone-website.mp4?alt=media&token=63e17163-3646-46e2-a5a2-615394049dbc&_gl=1*ts8ls1*_ga*MTgyMTI4ODg0MC4xNjczOTg0Njc0*_ga_CW55HF8NVT*MTY5ODM5MjY2Ny44NC4xLjE2OTgzOTMyMTcuNDUuMC4w" 
                muted 
                loop 
                autoPlay 
                priority 
                playsInline
                className='w-[47%] h-auto absolute top-10 ml-1 rounded-3xl -z-10 xl:top-8 lg:top-7 lg:ml-0 md:top-8 sm:top-7 xs:top-5'/>
                <Image src="/images/devices/ip14.png" alt="iPhone14" width={600} height={600} className='w-full h-auto'
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
                <FramerImage src="/images/projects/first-portfolio-cropped.png" alt="First-Portfolio-Website" width={600} height={600} className='w-full h-auto flex items-center'
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
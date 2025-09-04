import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import headimg from "../../../public/images/projects/HSPA/hspa-1.png"
import hspa2 from "../../../public/images/projects/HSPA/hspa-2.png"
import hspaend from "../../../public/images/projects/HSPA/ps-0.png"
import psimg from "../../../public/images/projects/HSPA/ps-button.png"
import ip14 from "../../../public/images/devices/ip14.png"
import home from "../../../public/images/projects/HSPA/home.png"
import search from "../../../public/images/projects/HSPA/search.png"
import profile from "../../../public/images/projects/HSPA/profile.png"
import modernportfolio from "../../../public/images/projects/modern-portfolio-cropped.png"
import { motion } from 'framer-motion'
import Link from 'next/link'
import TransitionEffect from '@/components/TransitionEffect'



const FramerImage = motion(Image);

const homeserviceprovider = () => {
  return (
    <>
        <Head>
            <title>JM | Home Service Provider</title>
            <meta name="description" content="any description" />
        </Head>
        <TransitionEffect />
        <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
          <Layout className='pt-16'>
            <AnimatedText text="Home Service Provider" className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'/>
            <div className='grid w-full grid-cols-9 items-center sm:gap-8'>
                <div className='col-span-3 flex flex-col items-center justify-center xl:col-span-3 md:order-2 md:col-span-9 md:mb-4'>
                    <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75 lg:text-base md:mb-1'>Type</h2>
                    <p className='font-medium text-center'>Android Application</p>
                </div>
                <div className='col-span-3 flex flex-col items-center justify-center xl:col-span-3 md:order-2 md:col-span-9 md:mb-4'>
                    <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75 lg:text-base md:mb-1'>Programming Language</h2>
                    <p className='font-medium text-center'>Java</p>
                </div>
                <div className='col-span-3 flex flex-col items-center justify-center xl:col-span-3 md:order-2 md:col-span-9 md:mb-4'>
                    <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75 lg:text-base md:mb-1'>Year</h2>
                    <p className='font-medium text-center'>2023</p>
                </div>
            </div>
            <div className='grid grid-cols-12 gap-24 gap-y-32 mt-4 mb-4 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
              <div className='col-span-12'>
                <FramerImage src="/images/projects/HSPA/hspa-1.png" alt="HSPA" width={600} height={600} className='w-full h-auto'
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
            <video src="https://firebasestorage.googleapis.com/v0/b/portfolio-99e6e.appspot.com/o/vids%2FHSPA.mp4?alt=media&token=d9bb2f64-7ab1-4905-be11-01b35f543322&_gl=1*t52n19*_ga*MTgyMTI4ODg0MC4xNjczOTg0Njc0*_ga_CW55HF8NVT*MTY5Njc4MzEwMC42My4xLjE2OTY3ODMxOTEuNjAuMC4w" muted loop autoPlay priority playsInline className='w-full h-auto'/>
          </div>
          <Layout className='pt-16'>
            <div className='grid grid-cols-3 mt-16'>
                <FramerImage src="/images/projects/HSPA/home.png" alt="HSPA-Home" width={600} height={600} className='w-full h-auto'
                priority
                initial={{y:150, opacity:1}}
                whileInView={{y:0, opacity:1, transition:{duration:0.5}}}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                />
                <FramerImage src="/images/projects/HSPA/search.png" alt="HSPA-Search" width={600} height={600} className='w-full h-auto'
                priority
                initial={{y:150, opacity:1}}
                whileInView={{y:0, opacity:1, transition:{duration:0.5}}}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                />
                <FramerImage src="/images/projects/HSPA/profile.png" alt="HSPA-Profile" width={600} height={600} className='w-full h-auto'
                priority
                initial={{y:150, opacity:1}}
                whileInView={{y:0, opacity:1, transition:{duration:0.5}}}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                />
            </div>
          </Layout>
          <div className='col-span-12 mt-16'>
                <Image src="/images/projects/HSPA/hspa-2.png" alt="HSPA" width={600} height={600} className='w-full h-auto'
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                />
          </div>
          <Layout className='mt-16'>
            <div className='flex relative gap-24 gap-y-32 mt-4 mb-4 items-center justify-center'>
              <div className='flex relative items-center justify-center'>
                <video src="https://firebasestorage.googleapis.com/v0/b/portfolio-99e6e.appspot.com/o/vids%2FHSPA-Booking.mp4?alt=media&token=7a9d2944-22ad-4989-90e6-4801a6100e13&_gl=1*3q54x3*_ga*MTgyMTI4ODg0MC4xNjczOTg0Njc0*_ga_CW55HF8NVT*MTY5Njg3MzI4NS42NS4xLjE2OTY4NzQyOTcuNDAuMC4w" 
                muted 
                loop 
                autoPlay 
                priority 
                className='w-[47%] h-auto absolute top-10 ml-1 rounded-3xl -z-10 xl:top-8 lg:top-7 lg:ml-0 md:top-8 sm:top-7 xs:top-5'/>
                <Image src="/images/devices/ip14.png" alt="iPhone14" width={600} height={600} className='w-full h-auto'
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 45vw"
                />
              </div>
            </div>
          </Layout>
          <div className='col-span-12 mt-16'>
            <Image src="/images/projects/HSPA/ps-0.png" alt="Playstore" width={600} height={600} className='w-full h-auto'
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            />
              <Link href="https://play.google.com/store/apps/details?id=com.hspa.capstone&pcampaignid=web_share" target='_blank'>
                <Image src="/images/projects/HSPA/ps-button.png" alt="PSButton" width={600} height={600} className='w-[42%] h-auto absolute ml-24 -mt-80 cursor-pointer xl:ml-16 xl:w-[43%] xl:-mt-60 lg:ml-16 lg:w-[41%] lg:-mt-52 md:ml-10 md:w-[44%] md:-mt-40 sm:ml-10 sm:w-[42%] sm:-mt-32 xs:ml-6 xs:w-[42%] xs:-mt-20'
                priority
                />
              </Link>
          </div>
          <Layout className='py-16'>
            <motion.h2 initial={{y:100, opacity:0}}
            whileInView={{y:0, opacity:1, transition:{duration:1, delay:0.4}}}
            className='font-bold text-6xl w-full uppercase text-center mt-32 mb-4 text-dark/75 dark:text-light/75 lg:!text-6xl sm:mb-2 sm:!text-5xl xs:!text-3xl'>
              Next Project
            </motion.h2>
            <motion.h2 initial={{y:125, opacity:0}}
            whileInView={{y:0, opacity:1, transition:{duration:1, delay:0.6}}}
            className='mb-4 text-2xl font-bold w-full text-center text-dark dark:text-light lg:!text-xl sm:mb-2 sm:!text-lg xs:!text-base'>Modern Portfolio Website</motion.h2>
            <div className='flex items-center justify-center w-full'>
              <Link href="/projects/modernportfoliowebsite">
                <FramerImage src="/images/projects/modern-portfolio-cropped.png" alt="Modern-Portfolio-Website" width={600} height={600} className='w-full h-auto flex items-center'
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

export default homeserviceprovider
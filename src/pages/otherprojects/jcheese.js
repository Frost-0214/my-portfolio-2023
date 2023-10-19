import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import headimg from "../../../public/images/projects/jcheese.png"
import jcheesecover from "../../../public/images/projects/JCheese/Jcheese-Cover.png"
import ifix from "../../../public/images/projects/ifix-cropped.png"
import macpro from "../../../public/images/devices/macpro.png"
import { motion } from 'framer-motion'
import Link from 'next/link'
import TransitionEffect from '@/components/TransitionEffect'


const FramerImage = motion(Image);

const jcheese = () => {
  return (
    <>
        <Head>
            <title>JM | JCheese</title>
            <meta name="description" content="any description" />
        </Head>
        <TransitionEffect />
        <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
          <Layout className='pt-16'>
            <AnimatedText text="JCheese" className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'/>
            <div className='grid w-full grid-cols-9 items-center sm:gap-8'>
                <div className='col-span-3 flex flex-col items-center justify-center xl:col-span-3 md:order-2 md:col-span-9 md:mb-4'>
                    <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75 lg:text-base md:mb-1'>Type</h2>
                    <p className='font-medium text-center'>Facebook Streamer</p>
                </div>
                <div className='col-span-3 flex flex-col items-center justify-center xl:col-span-3 md:order-2 md:col-span-9 md:mb-4'>
                    <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75 lg:text-base md:mb-1'>Software Tools</h2>
                    <p className='font-medium text-center'>Premiere Pro, Canva</p>
                </div>
                <div className='col-span-3 flex flex-col items-center justify-center xl:col-span-3 md:order-2 md:col-span-9 md:mb-4'>
                    <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75 lg:text-base md:mb-1'>Year</h2>
                    <p className='font-medium text-center'>2020, 2021</p>
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
            <div className='col-span-12'>
                <video src="https://firebasestorage.googleapis.com/v0/b/myportfolio-794c9.appspot.com/o/videos%2Fjcheese-montage.mp4?alt=media&token=2df64e8a-a92f-4068-9e7a-126512fac7f3&_gl=1*grlroq*_ga*MTgyMTI4ODg0MC4xNjczOTg0Njc0*_ga_CW55HF8NVT*MTY5NzcxMDg0Ni43OS4xLjE2OTc3MTQxMjguNjAuMC4w" priority autoPlay muted loop playsInline className='w-full h-auto'/>
            </div>
            <Layout className='mt-16'>
            <div className='mt-4 mb-4'>
              <div className='flex relative items-center justify-center'>
                <video src="https://firebasestorage.googleapis.com/v0/b/myportfolio-794c9.appspot.com/o/videos%2Fjcheese-1.mp4?alt=media&token=ef056be1-5fd3-430d-9dc2-e9c3dbabd792&_gl=1*n5kfi6*_ga*MTgyMTI4ODg0MC4xNjczOTg0Njc0*_ga_CW55HF8NVT*MTY5NzcyNDMzMS44MC4wLjE2OTc3MjQzMzEuNjAuMC4w" 
                muted 
                loop 
                autoPlay 
                priority
                playsInline 
                className='w-1/2 h-auto absolute -top-0 rounded -z-10'/>
                <Image src={macpro} alt="JohnMartin" className='w-1/2 h-auto'
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                />
              </div>
            </div>
          </Layout>
          <Layout className='mt-16'>
            <div className='mt-4 mb-4'>
              <div className='flex relative items-center justify-center'>
                <video src="https://firebasestorage.googleapis.com/v0/b/myportfolio-794c9.appspot.com/o/videos%2Fjcheese-2.mp4?alt=media&token=fdeeade1-fced-4c77-8b38-ba5fe531b726&_gl=1*11ge4kh*_ga*MTgyMTI4ODg0MC4xNjczOTg0Njc0*_ga_CW55HF8NVT*MTY5NzcyNDMzMS44MC4xLjE2OTc3MjQzNDYuNDUuMC4w" 
                muted 
                loop 
                autoPlay 
                priority
                playsInline 
                className='w-1/2 h-auto absolute -top-0 rounded -z-10'/>
                <Image src={macpro} alt="JohnMartin" className='w-1/2 h-auto'
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                />
              </div>
            </div>
          </Layout>
          <Layout className='mt-16'>
            <div className='mt-4 mb-4'>
              <div className='flex relative items-center justify-center'>
                <video src="https://firebasestorage.googleapis.com/v0/b/myportfolio-794c9.appspot.com/o/videos%2Fjcheese-3.mp4?alt=media&token=5e6d1f31-3351-403f-ac41-f4773b6d9b69&_gl=1*wzv48x*_ga*MTgyMTI4ODg0MC4xNjczOTg0Njc0*_ga_CW55HF8NVT*MTY5NzcyNDMzMS44MC4xLjE2OTc3MjQzNjguMjMuMC4w" 
                muted 
                loop 
                autoPlay 
                priority
                playsInline 
                className='w-1/2 h-auto absolute -top-0 rounded -z-10'/>
                <Image src={macpro} alt="JohnMartin" className='w-1/2 h-auto'
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                />
              </div>
            </div>
          </Layout>
            <div className='col-span-12 mt-16'>
              <Link href="https://www.facebook.com/jca.cheese" target='_blank'>
                <Image src={jcheesecover} alt="JohnMartin" className='w-full h-auto'
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
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
            className='mb-4 text-2xl font-bold w-full text-center text-dark dark:text-light lg:!text-xl sm:mb-2 sm:!text-lg xs:!text-base'>iFix</motion.h2>
            <div className='flex items-center justify-center w-full'>
              <Link href="/otherprojects/ifix">
                <FramerImage src={ifix} alt="JohnMartin" className='w-full h-auto flex items-center'
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

export default jcheese
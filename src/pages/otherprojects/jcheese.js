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
                <video src="https://firebasestorage.googleapis.com/v0/b/portfolio-99e6e.appspot.com/o/vids%2Fjcheese-montage.mp4?alt=media&token=dea42bf5-45f7-4f89-8a71-b72b4d4fb7fe&_gl=1*13fp2ib*_ga*MTgyMTI4ODg0MC4xNjczOTg0Njc0*_ga_CW55HF8NVT*MTY5NzQ1OTgxOS43Mi4xLjE2OTc0NTk5MTcuNjAuMC4w" priority autoPlay muted loop className='w-full h-auto'/>
            </div>
            <Layout className='mt-16'>
            <div className='mt-4 mb-4'>
              <div className='flex relative items-center justify-center'>
                <video src="https://firebasestorage.googleapis.com/v0/b/portfolio-99e6e.appspot.com/o/vids%2Fjcheese-1.mp4?alt=media&token=b5cd2009-6983-4af8-83a9-e15efa8da938&_gl=1*1m3ba2e*_ga*MTgyMTI4ODg0MC4xNjczOTg0Njc0*_ga_CW55HF8NVT*MTY5NzQ1OTgxOS43Mi4xLjE2OTc0NjE3MTkuNjAuMC4w" 
                muted 
                loop 
                autoPlay 
                priority 
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
                <video src="https://firebasestorage.googleapis.com/v0/b/portfolio-99e6e.appspot.com/o/vids%2Fjcheese-2.mp4?alt=media&token=192395c0-1803-4ac7-a6c6-a34d98be16ef&_gl=1*swmxj8*_ga*MTgyMTI4ODg0MC4xNjczOTg0Njc0*_ga_CW55HF8NVT*MTY5NzQ1OTgxOS43Mi4xLjE2OTc0NjI3ODIuNjAuMC4w" 
                muted 
                loop 
                autoPlay 
                priority 
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
                <video src="https://firebasestorage.googleapis.com/v0/b/portfolio-99e6e.appspot.com/o/vids%2Fjcheese-3.mp4?alt=media&token=07ceed11-37ab-4d20-94e6-c6c9341a9241&_gl=1*cy73md*_ga*MTgyMTI4ODg0MC4xNjczOTg0Njc0*_ga_CW55HF8NVT*MTY5NzQ1OTgxOS43Mi4xLjE2OTc0NjI3OTUuNDcuMC4w" 
                muted 
                loop 
                autoPlay 
                priority 
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
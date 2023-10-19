import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import headimg from "../../../public/images/projects/ifix.png"
import mapifix from "../../../public/images/projects/iFix/ifix-1.png"
import gamingmontages from "../../../public/images/projects/gaming-montages-cropped.png"
import { motion } from 'framer-motion'
import Link from 'next/link'
import TransitionEffect from '@/components/TransitionEffect'


const FramerImage = motion(Image);

const ifix = () => {
  return (
    <>
        <Head>
            <title>JM | iFix</title>
            <meta name="description" content="any description" />
        </Head>
        <TransitionEffect />
        <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
          <Layout className='pt-16'>
            <AnimatedText text="iFix" className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'/>
            <div className='grid w-full grid-cols-9 items-center sm:gap-8'>
                <div className='col-span-3 flex flex-col items-center justify-center xl:col-span-3 md:order-2 md:col-span-9 md:mb-4'>
                    <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75 lg:text-base md:mb-1'>Type</h2>
                    <p className='font-medium'>Computer Repair</p>
                </div>
                <div className='col-span-3 flex flex-col items-center justify-center xl:col-span-3 md:order-2 md:col-span-9 md:mb-4'>
                    <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75 lg:text-base md:mb-1'>Software Tools</h2>
                    <p className='font-medium'>Premiere Pro, Canva</p>
                </div>
                <div className='col-span-3 flex flex-col items-center justify-center xl:col-span-3 md:order-2 md:col-span-9 md:mb-4'>
                    <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75 lg:text-base md:mb-1'>Year</h2>
                    <p className='font-medium'>2022</p>
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
                <video src="https://firebasestorage.googleapis.com/v0/b/portfolio-99e6e.appspot.com/o/vids%2Fifix-2.mp4?alt=media&token=546f2783-4f7c-49e1-be68-66519f58e368&_gl=1*1ujvapx*_ga*MTgyMTI4ODg0MC4xNjczOTg0Njc0*_ga_CW55HF8NVT*MTY5NzQ1OTgxOS43Mi4xLjE2OTc0NjQyMDMuMTYuMC4w" priority autoPlay muted loop playsInline className='w-full h-auto'/>
            </div>
            <Layout className='mt-16'>
            <div className='mt-4 mb-4'>
                <Image src={mapifix} alt="JohnMartin" className='w-full h-auto'
                priority
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
            className='mb-4 text-2xl font-bold w-full text-center text-dark dark:text-light lg:!text-xl sm:mb-2 sm:!text-lg xs:!text-base'>Gaming Montages</motion.h2>
            <div className='flex items-center justify-center w-full'>
              <Link href="/otherprojects/gamingmontages">
                <motion.div className='flex items-center justify-center'
                initial={{y:150, opacity:0}}
                whileInView={{y:0, opacity:1, transition:{duration:1, delay:0.8}}}>
                  <Image src={gamingmontages} alt="JohnMartin" className='w-full h-auto flex items-center'
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 45vw"
                  />
                </motion.div>
              </Link>
            </div>
          </Layout>
        </main>
    </>
  )
}

export default ifix
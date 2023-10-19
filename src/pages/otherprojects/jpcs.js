import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import headimg from "../../../public/images/projects/jpcs.png"
import nexus from "../../../public/images/projects/JPCS/nexus-1.png"
import y4it from "../../../public/images/projects/JPCS/y4it-1.png"
import mos from "../../../public/images/projects/JPCS/mos-1.png"
import wocee from "../../../public/images/projects/JPCS/wocee-wosas-1.png"
import jcheese from "../../../public/images/projects/jcheese-cropped.png"
import mlbanner from "../../../public/images/projects/JPCS/ml-banner.png"
import tekken7banner from "../../../public/images/projects/JPCS/tekken7-banner.png"
import codmbanner from "../../../public/images/projects/JPCS/codm-banner.png"
import ml from "../../../public/images/projects/JPCS/MLBB.png"
import lol from "../../../public/images/projects/JPCS/LOL.png"
import valo from "../../../public/images/projects/JPCS/VALORANT.png"
import mlcert from "../../../public/images/projects/JPCS/PARTICIPATION-ML.png"
import apprecert from "../../../public/images/projects/JPCS/APPRECIATION-CERTIFICATE.png"
import valocert from "../../../public/images/projects/JPCS/COR-VALORANT.png"
import boniday from "../../../public/images/projects/JPCS/Bonifacio-Day.png"
import macpro from "../../../public/images/devices/macpro.png"
import { motion } from 'framer-motion'
import Link from 'next/link'
import TransitionEffect from '@/components/TransitionEffect'


const FramerImage = motion(Image);

const jpcs = () => {
  return (
    <>
        <Head>
            <title>JM | JPCS - SDCA Chapter</title>
            <meta name="description" content="any description" />
        </Head>
        <TransitionEffect />
        <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
          <Layout className='pt-16'>
            <AnimatedText text="JPCS - SDCA Chapter" className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'/>
            <div className='grid w-full grid-cols-9 items-center sm:gap-8'>
                <div className='col-span-3 flex flex-col items-center justify-center xl:col-span-3 md:order-2 md:col-span-9 md:mb-4'>
                    <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75 lg:text-base md:mb-1'>Type</h2>
                    <p className='font-medium text-center'>School Organization</p>
                </div>
                <div className='col-span-3 flex flex-col items-center justify-center xl:col-span-3 md:order-2 md:col-span-9 md:mb-4'>
                    <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75 lg:text-base md:mb-1'>Software Tools</h2>
                    <p className='font-medium text-center'>Premiere Pro, Canva</p>
                </div>
                <div className='col-span-3 flex flex-col items-center justify-center xl:col-span-3 md:order-2 md:col-span-9 md:mb-4'>
                    <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75 lg:text-base md:mb-1'>Year</h2>
                    <p className='font-medium text-center'>2019, 2021</p>
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
                <video src="https://firebasestorage.googleapis.com/v0/b/portfolio-99e6e.appspot.com/o/vids%2FSBCS%20Week.mp4?alt=media&token=0244db79-16d0-4e47-9c61-fed9b93fbda3&_gl=1*nm6ulj*_ga*MTgyMTI4ODg0MC4xNjczOTg0Njc0*_ga_CW55HF8NVT*MTY5NzAxMjQ5OS42Ny4xLjE2OTcwMTI5ODkuNjAuMC4w" priority autoPlay muted loop playsInline className='w-full h-auto'/>
            </div>
            <Layout className='pt-16'>
            <div className='grid grid-cols-2 gap-16 mt-16'>
                    <FramerImage src={nexus} alt="JohnMartin" className='w-full h-auto overflow-hidden'
                    priority
                    initial={{y:150, opacity:0}}
                    whileInView={{y:0, opacity:1, transition:{duration:0.5}}}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                    />
                    <FramerImage src={y4it} alt="JohnMartin" className='w-full h-auto'
                    priority
                    initial={{y:150, opacity:0}}
                    whileInView={{y:0, opacity:1, transition:{duration:0.5}}}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                    />
                </div>
          </Layout>
          <Layout className='pt-16'>
                <div className='grid grid-cols-2 gap-16 mt-16'>
                    <FramerImage src={mos} alt="JohnMartin" className='w-full h-auto'
                    priority
                    initial={{y:150, opacity:0}}
                    whileInView={{y:0, opacity:1, transition:{duration:0.5}}}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                    />
                    <FramerImage src={wocee} alt="JohnMartin" className='w-full h-auto'
                    priority
                    initial={{y:150, opacity:0}}
                    whileInView={{y:0, opacity:1, transition:{duration:0.5}}}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                    />
                </div>
          </Layout>
          <Layout className='pt-16'>
          <div className='grid grid-cols-3 mt-16'>
                <FramerImage src={tekken7banner} alt="JohnMartin" className='w-full h-auto'
                priority
                initial={{y:150, opacity:1}}
                whileInView={{y:0, opacity:1, transition:{duration:0.5}}}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                />
                <FramerImage src={mlbanner} alt="JohnMartin" className='w-full h-auto'
                priority
                initial={{y:150, opacity:1}}
                whileInView={{y:0, opacity:1, transition:{duration:0.5}}}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                />
                <FramerImage src={codmbanner} alt="JohnMartin" className='w-full h-auto'
                priority
                initial={{y:150, opacity:1}}
                whileInView={{y:0, opacity:1, transition:{duration:0.5}}}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                />
            </div>
          </Layout>
          <Layout className='pt-16'>
            <div className='grid grid-cols-12 mt-4 mb-4'>
              <div className='col-span-12'>
                <motion.div className='flex relative items-center justify-center'
                initial={{y:150, opacity:0}}
                whileInView={{y:0, opacity:1, transition:{duration:1, delay:0.7}}}
                viewport={{once: true}}>
                  <video src="https://firebasestorage.googleapis.com/v0/b/portfolio-99e6e.appspot.com/o/vids%2FJPCS%20LOGO%202.mp4?alt=media&token=48006d0c-ff25-4b06-bebb-4f2f25314ab9&_gl=1*1pdbj9p*_ga*MTgyMTI4ODg0MC4xNjczOTg0Njc0*_ga_CW55HF8NVT*MTY5NzQ1MTI0NC43MS4xLjE2OTc0NTEzMjQuNjAuMC4w" priority autoPlay muted loop playsInline className='w-1/2 h-auto'/>
                </motion.div>
              </div>
            </div>
          </Layout>
          <Layout className='pt-16'>
          <div className='grid grid-cols-3 gap-10 mt-16 xl:grid-cols-3 md:order-2 md:grid-cols-1 overflow-hidden'>
                <FramerImage src={ml} alt="JohnMartin" className='w-full h-auto'
                priority
                initial={{y:150, opacity:1}}
                whileInView={{y:0, opacity:1, transition:{duration:0.5}}}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                />
                <FramerImage src={lol} alt="JohnMartin" className='w-full h-auto'
                priority
                initial={{y:150, opacity:1}}
                whileInView={{y:0, opacity:1, transition:{duration:0.5}}}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                />
                <FramerImage src={valo} alt="JohnMartin" className='w-full h-auto'
                priority
                initial={{y:150, opacity:1}}
                whileInView={{y:0, opacity:1, transition:{duration:0.5}}}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                />
            </div>
          </Layout>
          <Layout className='pt-16'>
          <div className='grid grid-cols-3 gap-10 mt-16 xl:grid-cols-3 md:order-2 md:grid-cols-1 overflow-hidden'>
                <FramerImage src={mlcert} alt="JohnMartin" className='w-full h-auto'
                priority
                initial={{y:150, opacity:1}}
                whileInView={{y:0, opacity:1, transition:{duration:0.5}}}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                />
                <FramerImage src={apprecert} alt="JohnMartin" className='w-full h-auto'
                priority
                initial={{y:150, opacity:1}}
                whileInView={{y:0, opacity:1, transition:{duration:0.5}}}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                />
                <FramerImage src={valocert} alt="JohnMartin" className='w-full h-auto'
                priority
                initial={{y:150, opacity:1}}
                whileInView={{y:0, opacity:1, transition:{duration:0.5}}}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                />
            </div>
          </Layout>
          <Layout className='pt-16'>
            <div className='grid grid-cols-12 mt-4 mb-4 overflow-hidden'>
              <div className='col-span-12'>
                <div className='flex relative items-center justify-center'>
                  <FramerImage src={boniday} alt="JohnMartin" className='w-1/2 h-auto'
                  priority
                  initial={{y:150, opacity:0}}
                  whileInView={{y:0, opacity:1, transition:{duration:1, delay:0.7}}}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                  />
                </div>
              </div>
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
            className='mb-4 text-2xl font-bold w-full text-center text-dark dark:text-light lg:!text-xl sm:mb-2 sm:!text-lg xs:!text-base'>JCheese</motion.h2>
            <div className='flex items-center justify-center w-full'>
              <Link href="/otherprojects/jcheese">
                <FramerImage src={jcheese} alt="JohnMartin" className='w-full h-auto flex items-center'
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

export default jpcs
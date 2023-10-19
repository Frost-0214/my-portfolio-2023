import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import headimg from "../../../public/images/projects/gaming-montages.png"
import gameposter from "../../../public/images/projects/GM/game-poster.png"
import shortfilms from "../../../public/images/projects/short-films-cropped.png"
import iphone from "../../../public/images/devices/ip14.png"
import macbookpro from "../../../public/images/devices/mbp16.png"
import { motion } from 'framer-motion'
import Link from 'next/link'
import TransitionEffect from '@/components/TransitionEffect'


const FramerImage = motion(Image);

const gamingmontages = () => {
  return (
    <>
        <Head>
            <title>JM | Gaming Montages</title>
            <meta name="description" content="any description" />
        </Head>
        <TransitionEffect />
        <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
          <Layout className='pt-16'>
            <AnimatedText text="Gaming Montages" className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'/>
            <div className='grid w-full grid-cols-9 items-center sm:gap-8'>
                <div className='col-span-3 flex flex-col items-center justify-center xl:col-span-3 md:order-2 md:col-span-9 md:mb-4'>
                    <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75 lg:text-base md:mb-1'>Type</h2>
                    <p className='font-medium text-center'>Gaming Content</p>
                </div>
                <div className='col-span-3 flex flex-col items-center justify-center xl:col-span-3 md:order-2 md:col-span-9 md:mb-4'>
                    <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75 lg:text-base md:mb-1'>Software Tools</h2>
                    <p className='font-medium text-center'>Premiere Pro, After Effects, Capcut, Canva</p>
                </div>
                <div className='col-span-3 flex flex-col items-center justify-center xl:col-span-3 md:order-2 md:col-span-9 md:mb-4'>
                    <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75 lg:text-base md:mb-1'>Year</h2>
                    <p className='font-medium text-center'>2021 - 2023</p>
                </div>
            </div>
            <div className='grid grid-cols-12 gap-24 gap-y-32 mt-2 mb-4 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
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
          <Layout className='pt-16'>
            <motion.h2 initial={{y:100, opacity:0}}
              whileInView={{y:0, opacity:1, transition:{duration:1, delay:0.4}}}
              className='font-bold text-6xl w-full uppercase text-center mb-4 text-dark dark:text-light lg:!text-6xl sm:mb-2 sm:!text-5xl xs:!text-3xl overflow-hidden'>
                Mobile Legends
            </motion.h2>
            <div className='mt-6 mb-4'>
            <div className='flex relative items-center justify-center'>
              <video src="https://firebasestorage.googleapis.com/v0/b/myportfolio-794c9.appspot.com/o/videos%2Fling-montage.mp4?alt=media&token=701754f9-9855-4906-8382-b14eb3111035&_gl=1*1fuvxzg*_ga*MTgyMTI4ODg0MC4xNjczOTg0Njc0*_ga_CW55HF8NVT*MTY5NzUyMzU3OS43Ni4xLjE2OTc1MjQ3MTQuNjAuMC4w"
              priority autoPlay muted loop playsInline className='w-[28%] h-auto absolute top-11 rounded-3xl -z-10 xl:top-8 lg:top-6 md:top-4 sm:top-5 sm:rounded-xl xs:top-3 xs:rounded-xl'/>
              <Image src={iphone} alt="JohnMartin" className='w-[60%] h-auto'
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                  />
            </div>
            </div>
          </Layout>
          <Layout className='pt-16'>
            <motion.h2 initial={{y:100, opacity:0}}
              whileInView={{y:0, opacity:1, transition:{duration:1, delay:0.4}}}
              className='font-bold text-6xl w-full uppercase text-center mb-4 text-dark dark:text-light lg:!text-6xl sm:mb-2 sm:!text-5xl xs:!text-3xl'>
                Valorant
            </motion.h2>
            <div className='mt-6 mb-4'>
            <div className='flex relative items-center justify-center'>
              <video src="https://firebasestorage.googleapis.com/v0/b/myportfolio-794c9.appspot.com/o/videos%2FReyna.mp4?alt=media&token=6903b512-34d7-4a94-8bb2-bd71e020593a&_gl=1*ca16ul*_ga*MTgyMTI4ODg0MC4xNjczOTg0Njc0*_ga_CW55HF8NVT*MTY5NzUyMzU3OS43Ni4xLjE2OTc1MjUzNDguNjAuMC4w"
              priority autoPlay muted loop playsInline className='w-[79%] h-auto absolute top-3.5 rounded -z-10 xl:top-3 lg:top-2 md:top-2.5 md:rounded-none sm:top-1.5 sm:rounded-none xs:top-1 xs:rounded-none'/>
              <Image src={macbookpro} alt="JohnMartin" className='w-full h-auto'
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                  />
            </div>
            </div>
          </Layout>
            <div className='mt-6 mb-32'>
            <div className='flex relative items-center justify-center'>
              <video src="https://firebasestorage.googleapis.com/v0/b/myportfolio-794c9.appspot.com/o/videos%2Fsage.mp4?alt=media&token=5e1dfa1e-7b11-44f3-8c47-3d27a0dc8162&_gl=1*lwmyl0*_ga*MTgyMTI4ODg0MC4xNjczOTg0Njc0*_ga_CW55HF8NVT*MTY5NzUyMzU3OS43Ni4xLjE2OTc1MjY5NDkuMjkuMC4w"
              priority autoPlay muted loop playsInline className='w-full h-auto'/>
            </div>
            </div>
          <Layout className='my-32'>
            <motion.div className='grid grid-cols-3 gap-12 xl:grid-cols-3 md:order-2 md:grid-cols-1 overflow-hidden'
            priority
            initial={{y:150, opacity:0}}
            whileInView={{y:0, opacity:1, transition:{duration:0.5}}}>
                <iframe width="370" height="205" src="https://www.youtube.com/embed/cA5aqRIbRqM?si=Y1vDDwHSmoBjHS0p" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <iframe width="370" height="205" src="https://www.youtube.com/embed/sfzWQ7SSGCA?si=0Vv-CePL6JnmqVo-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <iframe width="370" height="205" src="https://www.youtube.com/embed/tWMZujYYths?si=mi6C8xEeEGJWmn86" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </motion.div>
          </Layout>
          <div className='col-span-12 mt-32'>
                <Image src={gameposter} alt="JohnMartin" className='w-full h-auto'
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                />
            </div>
          <Layout className='py-16'>
            <motion.h2 initial={{y:100, opacity:0}}
            whileInView={{y:0, opacity:1, transition:{duration:1, delay:0.4}}}
            className='font-bold text-6xl w-full uppercase text-center mt-32 mb-4 text-dark/75 dark:text-light/75 lg:!text-6xl sm:mb-2 sm:!text-5xl xs:!text-3xl'>
              Next Project
            </motion.h2>
            <motion.h2 initial={{y:125, opacity:0}}
            whileInView={{y:0, opacity:1, transition:{duration:1, delay:0.6}}}
            className='mb-4 text-2xl font-bold w-full text-center text-dark dark:text-light lg:!text-xl sm:mb-2 sm:!text-lg xs:!text-base'>Short Films</motion.h2>
            <div className='flex items-center justify-center w-full'>
              <Link href="/otherprojects/shortfilms">
                <motion.div className='flex items-center justify-center'
                initial={{y:150, opacity:0}}
                whileInView={{y:0, opacity:1, transition:{duration:1, delay:0.8}}}>
                  <Image src={shortfilms} alt="JohnMartin" className='w-full h-auto flex items-center'
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

export default gamingmontages
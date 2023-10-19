import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import headimg from "../../../public/images/projects/school-vlogs.png"
import vlogposter from "../../../public/images/projects/SV/vlog-poster-2.png"
import hspa from "../../../public/images/projects/hspa-cropped.png"
import { motion } from 'framer-motion'
import Link from 'next/link'
import TransitionEffect from '@/components/TransitionEffect'


const FramerImage = motion(Image);

const schoolvlogs = () => {
  return (
    <>
        <Head>
            <title>JM | School Vlogs</title>
            <meta name="description" content="any description" />
        </Head>
        <TransitionEffect />
        <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
          <Layout className='pt-16'>
            <AnimatedText text="School Vlogs" className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'/>
            <div className='grid w-full grid-cols-9 items-center sm:mb-8'>
                <div className='col-span-3 flex flex-col items-center justify-center xl:col-span-3 md:order-2 md:col-span-9 md:mb-4'>
                    <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75 lg:text-base md:mb-1'>Type</h2>
                    <p className='font-medium'>School Projects</p>
                </div>
                <div className='col-span-3 flex flex-col items-center justify-center xl:col-span-3 md:order-2 md:col-span-9 md:mb-4'>
                    <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75 lg:text-base md:mb-1'>Software Tools</h2>
                    <p className='font-medium'>Premiere Pro, Canva</p>
                </div>
                <div className='col-span-3 flex flex-col items-center justify-center xl:col-span-3 md:order-2 md:col-span-9 md:mb-4'>
                    <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75 lg:text-base md:mb-1'>Year</h2>
                    <p className='font-medium'>2019</p>
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
              viewport={{once: true}}
              className='font-bold text-6xl w-full uppercase text-center mb-4 text-dark dark:text-light lg:!text-6xl sm:mb-2 sm:!text-5xl xs:!text-3xl overflow-hidden'>
                Self Introduction
            </motion.h2>
            <div className='mt-6 mb-4'>
            <div className='flex relative items-center justify-center'>
                <iframe src="https://drive.google.com/file/d/19lFEhHTnbCRLP64B33QM5Xo6bZRwGFOg/preview" width="720" height="360" allow="autoplay"></iframe>
            </div>
            </div>
          </Layout>
          <Layout className='pt-16'>
            <motion.h2 initial={{y:100, opacity:0}}
              whileInView={{y:0, opacity:1, transition:{duration:1, delay:0.4}}}
              viewport={{once: true}}
              className='font-bold text-6xl w-full uppercase text-center mb-4 text-dark dark:text-light lg:!text-6xl sm:mb-2 sm:!text-5xl xs:!text-3xl overflow-hidden'>
                Infomercial
            </motion.h2>
            <div className='mt-6 mb-4'>
            <div className='flex relative items-center justify-center'>
                <iframe src="https://drive.google.com/file/d/1uECgiHe2KCQR5uuCum382cuOYldH5iVH/preview" width="720" height="360" allow="autoplay"></iframe>
            </div>
            </div>
          </Layout>
          <Layout className='pt-16'>
            <motion.h2 initial={{y:100, opacity:0}}
              whileInView={{y:0, opacity:1, transition:{duration:1, delay:0.4}}}
              viewport={{once: true}}
              className='font-bold text-6xl w-full uppercase text-center mb-4 text-dark dark:text-light lg:!text-6xl sm:mb-2 sm:!text-5xl xs:!text-3xl overflow-hidden'>
                Balita
            </motion.h2>
            <div className='mt-6 mb-4'>
            <div className='flex relative items-center justify-center'>
                <iframe src="https://drive.google.com/file/d/1fLRE6dT7VaP-JpqXWWqrAB5JwDqx6XdF/preview" width="720" height="360" allow="autoplay"></iframe>
            </div>
            </div>
          </Layout>
          <Layout className='pt-16'>
            <motion.h2 initial={{y:100, opacity:0}}
              whileInView={{y:0, opacity:1, transition:{duration:1, delay:0.4}}}
              viewport={{once: true}}
              className='font-bold text-6xl w-full uppercase text-center mb-4 text-dark dark:text-light lg:!text-6xl sm:mb-2 sm:!text-5xl xs:!text-3xl overflow-hidden'>
                Food Vlog
            </motion.h2>
            <div className='mt-6 mb-4'>
            <div className='flex relative items-center justify-center'>
                <iframe src="https://drive.google.com/file/d/1ddMH2Xzu5MJU1yMSUDR-awucD5hFRXLQ/preview" width="720" height="360" allow="autoplay"></iframe>
            </div>
            </div>
          </Layout>
          <div className='col-span-12 mt-32'>
                <Image src={vlogposter} alt="JohnMartin" className='w-full h-auto'
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
            className='mb-4 text-2xl font-bold w-full text-center text-dark dark:text-light lg:!text-xl sm:mb-2 sm:!text-lg xs:!text-base'>Home Service Provider</motion.h2>
            <div className='flex items-center justify-center w-full'>
              <Link href="/projects/homeserviceprovider">
                <motion.div className='flex items-center justify-center'
                initial={{y:150, opacity:0}}
                whileInView={{y:0, opacity:1, transition:{duration:1, delay:0.8}}}>
                  <Image src={hspa} alt="JohnMartin" className='w-full h-auto flex items-center'
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 35vw, 35vw"
                  />
                </motion.div>
              </Link>
            </div>
          </Layout>
        </main>
    </>
  )
}

export default schoolvlogs
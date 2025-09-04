import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import profilePic from "../../public/images/profile/barong.jpg";
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import TransitionEffect from '@/components/TransitionEffect'
import { AndroidStudio, BootstrapLogo, Canva, Cplusplus, Csharp, CSS3, Firebase, HTML5, Java, JavaScript, Nextjs, Photoshop, PHPLogo, PremierePro, Reactjs, SQLDB, TailWindCSS, ThreeJs, VBNet, VisualStudio, Vite, ViteLogo, VSCode, Webstorm } from '@/components/Icons'


const AnimatedNumbers = ({value}) => {
const ref = useRef(null);

const motionValue = useMotionValue(0);
const springValue = useSpring(motionValue, {duration:3000})
const isInView = useInView(ref, {once: true});

useEffect(() => {
    if(isInView){
        motionValue.set(value);
    }
}, [isInView, value, motionValue])

useEffect(() => {
    springValue.on("change", (latest) => {
        if(ref.current && latest.toFixed(0) <= value){
            ref.current.textContent = latest.toFixed(0);
        }
    })
}, [springValue, value])

    return <span ref={ref}></span>
}


const about = () => {
  return (
    <>
    <Head>
        <title>JM | About</title>
        <meta name="description" content="any description" />
    </Head>
    <TransitionEffect />
    <main className='flex w-full flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-16'>
            <AnimatedText text="My Profile" className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8' />
            <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
                <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-3 lg:col-span-4 md:order-2 md:col-span-8'>
                    <h2 className='mb-4 mt-2 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>About Me</h2>
                    <p className='font-medium'>I am John Martin Gasangue. A graduate of Bachelor of Science in Information Technology at St. Dominic College of Asia Bacoor, Cavite, Philippines.</p>
                    <p className='my-4 font-medium'>I am a Software Developer with one year of experience, and have developed a strong foundation in C++, C#, Java, VB.Net, and a little bit of SQL.</p>
                    <p className='my-4 font-medium'>I am also an aspiring Web Developer with knowledge and skills in HTML, CSS, Tailwind CSS, React, NextJs, Bootstrap, and a little bit of PHP, JavaScript, Vite, and ThreeJs.</p>
                    {/* <p className='my-4 font-medium'>One of my recent project is our capstone, &quot;Home Service Provider&quot;, an Android based Mobile Application with Java as programming language.</p> */}
                </div>
                <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-3 lg:col-span-4 md:order-1 md:col-span-8'>
                    <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light' />
                    <Image src={profilePic} alt="John-Martin-Barong" className='w-full h-auto rounded-2xl' priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"/>
                </div>
                <div className='col-span-2 flex flex-col items-end justify-between xl:items-center lg:col-span-8 lg:mt-10 md:order-3 sm:flex-col sm:mt-16'>
                    <div className='flex flex-col items-end justify-center xl:items-center'>
                        {/* <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                            <AnimatedNumbers value={5}/>
                        </span> */}
                        <div className='flex flex-row lg:mx-52 md:mx-44 sm:mx-20'>
                            <Cplusplus className={"w-10 h-10 items-start mx-1"}/>
                            <Csharp className={"w-10 h-10 items-start mx-1"}/>
                            <Java className={"w-10 h-10 items-start mx-1"}/>
                            <VBNet className={"w-10 h-10 items-start mx-1"}/>
                            <SQLDB className={"w-10 h-10 items-start mx-1"}/>
                        </div>
                        <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center xl:text-base lg:mb-5 sm:mb-10 xs:text-sm'>software programming</h2>
                    </div>
                    <div className='flex flex-col items-end justify-center xl:items-center'>
                        {/* <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                        <AnimatedNumbers value={4}/>
                        </span> */}
                        <div className='flex flex-row mb-2 lg:mx-52 md:mx-48 sm:mx-28 xs:mx-24'>
                            <HTML5 className={"w-10 h-10 items-start mx-1"}/>
                            <CSS3 className={"w-10 h-10 items-start mx-1"}/>
                            <TailWindCSS className={"w-10 h-10 items-start mx-1"}/>
                            <Reactjs className={"w-10 h-10 items-start mx-1"}/>
                            <Nextjs className={"w-10 h-10 items-start mx-1 dark:fill-light"}/>
                        </div>
                        <div className='flex flex-row lg:mx-52 md:mx-48 sm:mx-16 xs:mx-24'>
                            <BootstrapLogo className={"w-10 h-10 items-start mx-1"}/>
                            <PHPLogo className={"w-10 h-10 items-start mx-1"}/>
                            <JavaScript className={"w-10 h-10 items-start mx-1"}/>
                            <ViteLogo className={"w-10 h-10 items-start mx-1"}/>
                            <ThreeJs className={"w-10 h-10 items-start mx-1"}/>
                        </div>
                        <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center xl:text-base lg:mb-5 sm:mb-10 xs:text-sm'>web programming</h2>
                    </div>
                    <div className='flex flex-col items-end justify-center xl:items-center'>
                        {/* <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                        <AnimatedNumbers value={20}/>+
                        </span> */}
                        <div className='flex flex-row lg:mx-52 md:mx-48 sm:mx-28 xs:mx-24'>
                            <VisualStudio className={"w-10 h-10 items-start mx-1"}/>
                            <VSCode className={"w-10 h-10 items-start mx-1"}/>
                            <AndroidStudio className={"w-10 h-10 items-start mx-1"}/>
                            <Firebase className={"w-10 h-10 items-start mx-1"}/>
                            <Webstorm className={"w-10 h-10 items-start mx-1"}/>
                        </div>
                        <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center xl:text-base lg:mb-5 sm:mb-10 xs:text-sm'>programming tools</h2>
                    </div>
                    <div className='flex flex-col items-end justify-center xl:items-center'>
                        {/* <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                        <AnimatedNumbers value={20}/>+
                        </span> */}
                        <div className='flex flex-row lg:mx-64 md:mx-60 sm:mx-44 xs:mx-28'>
                            <PremierePro className={"w-10 h-10 items-start mx-1 invisible xl:hidden "}/>
                            <Photoshop className={"w-10 h-10 items-start mx-1 invisible xl:hidden "}/>
                            <PremierePro className={"w-10 h-10 items-start mx-1"}/>
                            <Photoshop className={"w-10 h-10 items-start mx-1"}/>
                            <Canva className={"w-10 h-10 items-start mx-1"}/>
                        </div>
                        <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center xl:text-base lg:mb-5 sm:mb-10 xs:text-sm'>editing tools</h2>
                    </div>
                </div>
            </div>
            {/* <Skills /> */}
            <Experience />
            <Education />
        </Layout>
    </main>
    </>
  )
}

export default about
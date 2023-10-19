import AnimatedText from '@/components/AnimatedText'
import { CSS3, Csharp, GithubIcon, HTML5, JavaScript, LinkArrow, LinkExternal, Nextjs, PlaystoreIcon, TailWindCSS } from '@/components/Icons'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import project1 from "../../public/images/projects/hspa-cover.png"
import project2 from "../../public/images/projects/modern-portfolio.png"
import project3 from "../../public/images/projects/first-portfolio.png"
import project4 from "../../public/images/projects/sdca-calculator.png"
import { motion } from 'framer-motion'
import OtherProjects from '@/components/OtherProjects'
import TransitionEffect from '@/components/TransitionEffect'


const FramerImage = motion(Image);

const FeaturedProject = ({type, title, summary, img, link, playstore}) => {
    return(
        <article className='w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl border border-solid border-dark bg-light shadow-2xl p-4 dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded=[1.5rem]' />
            <Link href={link} 
            className=' w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'>
                <FramerImage src={img} alt={title} className="w-full h-auto"
                whileHover={{scale:1.05}}
                transition={{duration:0.2}}
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                />
            </Link>
            <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
                <span className='text-blue-600 font-medium text-xl xs:text-base'>{type}</span>
                <Link href={link}  className='hover:underline underline-offset-2'>
                <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light lg:text-2xl sm:text-xl'>{title}</h2>
            </Link>
            <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
            <div className='mt-2 flex items-center'>
                <Link href={playstore} target="_blank" className='w-20'>
                    <PlaystoreIcon />
                </Link>
                <Link href={link}  className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base'>
                    More Details
                </Link>
            </div>
            </div>
        </article>
    )
}

const FeaturedProject1 = ({type, title, summary, img, link, playstore}) => {
    return(
        <article className='w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl border border-solid border-dark bg-light shadow-2xl p-4 dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded=[1.5rem]' />
            <Link href={link}
            className=' w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'>
                <FramerImage src={img} alt={title} className="w-full h-auto"
                whileHover={{scale:1.1}}
                transition={{duration:0.2}}
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                />
            </Link>
            <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
                <span className='text-blue-600 font-medium text-xl xs:text-base'>{type}</span>
                <Link href={link} className='hover:underline underline-offset-2'>
                <h2 className='my-2 w-full text-left text-3xl font-bold dark:text-light lg:text-2xl sm:text-xl'>{title}</h2>
            </Link>
            <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
            <div className='mt-2 flex items-center'>
                <Link href={playstore} target="_blank" className='w-14 pointer-events-none'>
                    <Csharp />
                </Link>
                <Link href={link} className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base'>
                    More Details
                </Link>
            </div>
            </div>
        </article>
    )
}

const Project = ({type, title, img, link, linkexternal, icon}) => {
    return(
        <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded=[1.5rem]' />
            <Link href={link}
            className=' w-full cursor-pointer overflow-hidden rounded-lg'>
                <FramerImage src={img} alt={title} className="w-full h-auto"
                whileHover={{scale:1.1}}
                transition={{duration:0.2}}
                />
            </Link>
            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-blue-600 font-medium text-xl lg:text-lg md:text-base'>{type}</span>
                <Link href={link} className='hover:underline underline-offset-2'>
                <h2 className='my-2 w-full text-left text-3xl font-bold lg:text-2xl sm:text-xl'>{title}</h2>
            </Link>
            <div className='flex items-start gap-2 pointer-events-none'>
                <Link href={linkexternal} className='w-8 fill-dark dark:fill-light'>
                    <Nextjs />
                </Link>
                <Link href={linkexternal} className='w-8'>
                    <TailWindCSS />
                </Link>
            </div>
            <div className='w-full mt-3 flex items-center justify-between'>
                <Link href={link} className='rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark md:text-base'>
                    More Details
                </Link>
                <Link href={linkexternal} target="_blank" className='w-8 fill-dark dark:fill-light md:w-6'>
                    <LinkExternal />
                </Link>
            </div>
            </div>
        </article>
    )
}

const Project1 = ({type, title, img, link, linkexternal}) => {
    return(
        <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded=[1.5rem]' />
            <Link href={link}
            className=' w-full cursor-pointer overflow-hidden rounded-lg'>
                <FramerImage src={img} alt={title} className="w-full h-auto"
                whileHover={{scale:1.1}}
                transition={{duration:0.2}}
                />
            </Link>
            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-blue-600 font-medium text-xl lg:text-lg md:text-base'>{type}</span>
                <Link href={link} className='hover:underline underline-offset-2'>
                <h2 className='my-2 w-full text-left text-3xl font-bold lg:text-2xl sm:text-xl'>{title}</h2>
            </Link>
            <div className='flex items-start gap-2 pointer-events-none'>
                <Link href="/" className='w-8'>
                    <HTML5 />
                </Link>
                <Link href="/" className='w-8'>
                    <CSS3 />
                </Link>
                <Link href="/" className='w-8'>
                    <JavaScript />
                </Link>
            </div>
            <div className='w-full mt-3 flex items-center justify-between'>
                <Link href={link} className='rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark md:text-base'>
                    More Details
                </Link>
                <Link href={linkexternal} target="_blank" className='w-8 fill-dark dark:fill-light md:w-6'>
                    <LinkExternal />
                </Link>
            </div>
            </div>
        </article>
    )
}

const projects = () => {
  return (
    <>
        <Head>
            <title>JM | Projects</title>
            <meta name="description" content="any description" />
        </Head>
        <TransitionEffect />
        <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
            <Layout className='pt-16'>
                <AnimatedText text="Recent Projects" className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'/>
                <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                    <div className='col-span-12'>
                        <FeaturedProject
                        title="Home Service Provider"
                        img={project1}
                        summary="An Android Mobile Application that connects homeowners with trusted service professionals. Created in Android Studio using Java programming language."
                        link="/projects/homeserviceprovider"
                        playstore="https://play.google.com/store/apps/details?id=com.hspa.capstone&pcampaignid=web_share"
                        type="Capstone Project"
                        />
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                    <Project
                        title="Modern Portfolio Website"
                        img={project2}
                        link="/projects/modernportfoliowebsite"
                        linkexternal="/"
                        type="Portfolio Website"
                        />
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                    <Project1
                        title="First Portfolio Website"
                        img={project3}
                        link="/projects/firstportfoliowebsite"
                        linkexternal="/"
                        type="Portfolio Website"
                        />
                    </div>
                    <div className='col-span-12'>
                    <FeaturedProject1
                        title="SDCA Calculator with Login Form"
                        img={project4}
                        summary="A calculator project application with login form created in Microsoft Visual Studio using C# programming language."
                        link="/projects/sdcacalculator"
                        playstore="/"
                        type="School Project"
                        />
                    </div>
                </div>
            <OtherProjects />
            </Layout>
        </main>
    </>
  )
}

export default projects
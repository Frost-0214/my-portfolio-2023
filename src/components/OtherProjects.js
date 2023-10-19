import React from 'react'
import imac from '../../public/images/devices/macpro.png'
import macbook from '../../public/images/devices/mbp15.png'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { CSS3, Canva, Csharp, FacebookIcon, HTML5, InstagramIcon, JavaScript, LinkExternal, Nextjs, PremierePro, TailWindCSS, TiktokIcon } from './Icons'



const FramerImage = motion(Image);

const FeaturedProject = ({type, title, summary, img, link, fb}) => {
    return(
        <article className='w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl border border-solid border-dark bg-light shadow-2xl p-4 dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded=[1.5rem]' />
            <Link href={link}
            className=' w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'>
                <div className='flex relative items-center justify-center'>
                <Image src={img} alt={title} className="w-full h-auto z-10"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                />
                <video src="https://firebasestorage.googleapis.com/v0/b/projectspage-9b2a1.appspot.com/o/videos%2FSBCS%20Week.mp4?alt=media&token=94a32b86-dbc8-4d19-8a47-2a7d18503623&_gl=1*11nksje*_ga*MTgyMTI4ODg0MC4xNjczOTg0Njc0*_ga_CW55HF8NVT*MTY5NzcyNDMzMS44MC4xLjE2OTc3MjQ3NTQuNjAuMC4w" muted loop autoPlay priority playsInline className='w-[99.5%] h-auto absolute top-0.5'/>
                </div>
            </Link>
            <div className='w-1/2 flex flex-col items-start justify-between pl-16 lg:w-full lg:pl-0 lg:pt-6'>
                <span className='text-blue-600 font-medium text-xl xs:text-base'>{type}</span>
                <Link href={link} className='hover:underline underline-offset-2'>
                <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light lg:text-2xl sm:text-xl'>{title}</h2>
            </Link>
            <p className='my-2 font-medium text-dark dark:text-light'>{summary}</p>
            <div className='mt-2 flex items-center'>
                <Link href={fb} target="_blank" className='w-12 fill-dark dark:fill-light'>
                    <FacebookIcon />
                </Link>
                <Link href={link} className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base'>
                    More Details
                </Link>
            </div>
            </div>
        </article>
    )
}

const FeaturedProject1 = ({type, title, summary, img, link, pr}) => {
    return(
        <article className='w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl border border-solid border-dark bg-light shadow-2xl p-4 dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded=[1.5rem]' />
            <Link href={link}
            className=' w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'>
                <div className='flex relative items-center justify-center'>
                <Image src={img} alt={title} className="w-full h-auto z-10"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                />
                <video src="https://firebasestorage.googleapis.com/v0/b/projectspage-9b2a1.appspot.com/o/videos%2FReyna.mp4?alt=media&token=3f0d90e5-e7f8-4ecf-845f-314aff442fe8&_gl=1*1s9xx08*_ga*MTgyMTI4ODg0MC4xNjczOTg0Njc0*_ga_CW55HF8NVT*MTY5NzcyNDMzMS44MC4xLjE2OTc3MjQ3ODIuMzIuMC4w" muted loop autoPlay priority playsInline className='w-[74.5%] h-auto absolute top-0.5 rounded-t-lg'/>
                </div>
            </Link>
            <div className='w-1/2 flex flex-col items-start justify-between pl-28 lg:w-full lg:pl-0 lg:pt-6'>
                <span className='text-blue-600 font-medium text-xl xs:text-base'>{type}</span>
                <Link href={link} className='hover:underline underline-offset-2'>
                <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light lg:text-2xl sm:text-xl'>{title}</h2>
            </Link>
            <p className='my-2 font-medium text-dark dark:text-light'>{summary}</p>
            <div className='mt-2 flex items-center'>
                <Link href={pr} target="_blank" className='w-11 pointer-events-none'>
                    <PremierePro />
                </Link>
                <Link href={link} className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base'>
                    More Details
                </Link>
            </div>
            </div>
        </article>
    )
}

const FeaturedProject2 = ({type, title, summary, img, link, pr}) => {
    return(
        <article className='w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl border border-solid border-dark bg-light shadow-2xl p-4 dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded=[1.5rem]' />
            <Link href={link}
            className=' w-1/2 cursor-pointer overflow-hidden rounded-lg hidden lg:w-full lg:grid'>
                <div className='flex relative items-center justify-center'>
                <Image src={img} alt={title} className="w-full h-auto z-10"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                />
                <video src="https://firebasestorage.googleapis.com/v0/b/projectspage-9b2a1.appspot.com/o/videos%2FThe%20Setup.mp4?alt=media&token=a3b48b7a-1da9-48c6-80d7-7067035d4f74&_gl=1*1ku9qt8*_ga*MTgyMTI4ODg0MC4xNjczOTg0Njc0*_ga_CW55HF8NVT*MTY5NzcyNDMzMS44MC4xLjE2OTc3MjQ3OTYuMTguMC4w" muted loop autoPlay priority playsInline className='w-[74.5%] h-auto absolute top-0.5 rounded-t-lg'/>
                </div>
            </Link>
            <div className='w-1/2 flex flex-col items-start justify-between pl-40 lg:w-full lg:pl-0 lg:pt-6'>
                <span className='text-blue-600 font-medium text-xl xs:text-base'>{type}</span>
                <Link href={link} className='hover:underline underline-offset-2'>
                <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light lg:text-2xl sm:text-xl'>{title}</h2>
            </Link>
            <p className='my-2 font-medium text-dark dark:text-light'>{summary}</p>
            <div className='mt-2 flex items-center'>
            <Link href={pr} className='w-11 pointer-events-none'>
                    <PremierePro />
                </Link>
                <Link href={link} target="_blank" className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base'>
                    More Details
                </Link>
            </div>
            </div>
            <Link href={link}
            className=' w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full lg:hidden'>
                <div className='flex relative items-center justify-center'>
                <Image src={img} alt={title} className="w-full h-auto z-10"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                />
                <video src="https://firebasestorage.googleapis.com/v0/b/projectspage-9b2a1.appspot.com/o/videos%2FThe%20Setup.mp4?alt=media&token=a3b48b7a-1da9-48c6-80d7-7067035d4f74&_gl=1*1ku9qt8*_ga*MTgyMTI4ODg0MC4xNjczOTg0Njc0*_ga_CW55HF8NVT*MTY5NzcyNDMzMS44MC4xLjE2OTc3MjQ3OTYuMTguMC4w" muted loop autoPlay priority playsInline className='w-[74.5%] h-auto absolute top-0.5 rounded-t-lg'/>
                </div>
            </Link>
        </article>
    )
}

const FeaturedProject3 = ({type, title, summary, img, link, pr}) => {
    return(
        <article className='w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl border border-solid border-dark bg-light shadow-2xl p-4 dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded=[1.5rem]' />
            <Link href={link}
            className=' w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'>
                <div className='flex relative items-center justify-center'>
                <Image src={img} alt={title} className="w-full h-auto z-10"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                />
                <video src="https://firebasestorage.googleapis.com/v0/b/projectspage-9b2a1.appspot.com/o/videos%2FInfromercial.mp4?alt=media&token=81ca4b82-edac-4758-b5aa-354ea08a7579&_gl=1*12zw0wh*_ga*MTgyMTI4ODg0MC4xNjczOTg0Njc0*_ga_CW55HF8NVT*MTY5NzcyNDMzMS44MC4xLjE2OTc3MjQ4MTIuMi4wLjA." muted loop autoPlay priority playsInline className='w-[74.5%] h-auto absolute top-0.5 rounded-t-lg'/>
                </div>
            </Link>
            <div className='w-1/2 flex flex-col items-start justify-between pl-28 lg:w-full lg:pl-0 lg:pt-6'>
                <span className='text-blue-600 font-medium text-xl xs:text-base'>{type}</span>
                <Link href={link} className='hover:underline underline-offset-2'>
                <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light lg:text-2xl sm:text-xl'>{title}</h2>
            </Link>
            <p className='my-2 font-medium text-dark dark:text-light'>{summary}</p>
            <div className='mt-2 flex items-center'>
                <Link href={pr} className='w-11 pointer-events-none'>
                    <PremierePro />
                </Link>
                <Link href={link} className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base'>
                    More Details
                </Link>
            </div>
            </div>
        </article>
    )
}

const Project = ({type, title, img, link, fb}) => {
    return(
        <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded=[1.5rem]' />
            <Link href={link}
            className=' w-full cursor-pointer overflow-hidden rounded-lg'>
               <div className='flex relative items-center justify-center'>
               <Image src={img} alt={title} className="w-full h-auto z-10"
                />
                <video src="https://firebasestorage.googleapis.com/v0/b/projectspage-9b2a1.appspot.com/o/videos%2FJcheese.mp4?alt=media&token=ca0745f6-3f1d-42c9-ac11-5ff451391220&_gl=1*fcgq0p*_ga*MTgyMTI4ODg0MC4xNjczOTg0Njc0*_ga_CW55HF8NVT*MTY5NzcyNDMzMS44MC4xLjE2OTc3MjQ4NjIuNjAuMC4w" muted loop autoPlay priority playsInline className='w-[99.5%] h-auto absolute top-0.5'/>
               </div>
            </Link>
            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-blue-600 font-medium text-xl lg:text-lg md:text-base'>{type}</span>
                <Link href={link} className='hover:underline underline-offset-2'>
                <h2 className='my-2 w-full text-left text-3xl font-bold lg:text-2xl sm:text-xl'>{title}</h2>
            </Link>
            <div className='flex items-start gap-3 pointer-events-none'>
                <Link href="/" className='w-10'>
                    <PremierePro />
                </Link>
                <Link href="/" className='w-10'>
                    <Canva />
                </Link>
            </div>
            <div className='w-full mt-3 flex items-center justify-between'>
                <Link href={link} className='rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark md:text-base'>
                    More Details
                </Link>
                <Link href={fb} target="_blank" className='w-10 fill-dark dark:fill-light md:w-8'>
                    <FacebookIcon />
                </Link>
            </div>
            </div>
        </article>
    )
}

const Project1 = ({type, title, img, link, fb}) => {
    return(
        <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded=[1.5rem]' />
            <Link href={link}
            className=' w-full cursor-pointer overflow-hidden rounded-lg'>
                <div className='flex relative items-center justify-center'>
                <Image src={img} alt={title} className="w-full h-auto z-10"
                />
                <video src="https://firebasestorage.googleapis.com/v0/b/projectspage-9b2a1.appspot.com/o/videos%2FiFix.mp4?alt=media&token=75cb627f-291a-4975-ae70-c8e68d00fdcb&_gl=1*1b53xy1*_ga*MTgyMTI4ODg0MC4xNjczOTg0Njc0*_ga_CW55HF8NVT*MTY5NzcyNDMzMS44MC4xLjE2OTc3MjQ4NzMuNDkuMC4w" muted loop autoPlay priority playsInline className='w-[99.5%] h-auto absolute top-0.5'/>
                </div>
            </Link>
            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-blue-600 font-medium text-xl lg:text-lg md:text-base'>{type}</span>
                <Link href={link} className='hover:underline underline-offset-2'>
                <h2 className='my-2 w-full text-left text-3xl font-bold lg:text-2xl sm:text-xl'>{title}</h2>
            </Link>
            <div className='flex items-start gap-3 pointer-events-none'>
                <Link href="/" className='w-10'>
                    <PremierePro />
                </Link>
                <Link href="/" className='w-10'>
                    <Canva />
                </Link>
            </div>
            <div className='w-full mt-3 flex items-center justify-between'>
                <Link href={link} className='rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark md:text-base'>
                    More Details
                </Link>
                <Link href={fb} target="_blank" className='w-10 fill-dark dark:fill-light md:w-8'>
                    <FacebookIcon />
                </Link>
            </div>
            </div>
        </article>
    )
}


const OtherProjects = () => {
  return (
    <>
    <h2 className='font-bold text-8xl mt-40 w-full text-center mb-32 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'>Other Projects</h2>
    <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                    <div className='col-span-12'>
                        <FeaturedProject
                        title="JPCS - SDCA Chapter"
                        img={imac}
                        summary="Montages and highlights for the events of the organization."
                        link="/otherprojects/jpcs"
                        fb="https://www.facebook.com/JPCSSDCAChapter"
                        type="School Organization"
                        >
                        </FeaturedProject>
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                    <Project
                        title="Jcheese"
                        img={imac}
                        link="/otherprojects/jcheese"
                        fb="https://www.facebook.com/jca.cheese"
                        ig="https://www.facebook.com/jca.cheese"
                        tiktok="https://www.facebook.com/jca.cheese"
                        type="Gaming Live Stream"
                        />
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                    <Project1
                        title="iFix"
                        img={imac}
                        link="/otherprojects/ifix"
                        fb="https://www.facebook.com/werepaircavite"
                        type="Computer Repair Services"
                        />
                    </div>
                    <div className='col-span-12'>
                        <FeaturedProject1
                        title="Gaming Montages"
                        img={macbook}
                        summary="Game montages for content creations."
                        link="/otherprojects/gamingmontages"
                        pr="/"
                        type="Gaming Content"
                        >
                        </FeaturedProject1>
                    </div>
                    <div className='col-span-12'>
                        <FeaturedProject2
                        title="Short Films"
                        img={macbook}
                        summary="Shoft films created for school projects."
                        link="/otherprojects/shortfilms"
                        pr="/"
                        type="School Projects"
                        >
                        </FeaturedProject2>
                    </div>
                    <div className='col-span-12'>
                        <FeaturedProject3
                        title="School Vlogs"
                        img={macbook}
                        summary="Vlogs created for school projects."
                        link="/otherprojects/schoolvlogs"
                        pr="/"
                        type="School Projects"
                        >
                        </FeaturedProject3>
                    </div>
                </div>
        

    

    </>
  )
}

export default OtherProjects
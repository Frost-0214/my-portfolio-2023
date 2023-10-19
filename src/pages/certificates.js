import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'
import diploma from "../../public/images/articles/Diploma.jpg"
import studentleaders from "../../public/images/articles/Student-Leaders-Council.jpg"
import rel from "../../public/images/articles/REL.jpg"
import toeic2023 from "../../public/images/articles/TOEIC-2023.jpg"
import toeic2022 from "../../public/images/articles/TOEIC-2022.jpg"
import ojt from "../../public/images/articles/OJT.jpg"
import dl1 from "../../public/images/articles/DL-First.jpg"
import dl2 from "../../public/images/articles/DL-Second.jpg"
import cinemalaya18 from "../../public/images/articles/Cinemalaya18.jpg"
import htmlcert from "../../public/images/articles/HTML-Essential-Training.jpg"
import csscert from "../../public/images/articles/CSS-Essential-Training.jpg"
import jscert from "../../public/images/articles/Javascript-Essential-Training.jpg"
import wdpa from "../../public/images/articles/Webinar-on-Data-Privacy-Awareness.jpg"
import robot from "../../public/images/articles/Robotics-and-Machine-Intelligence.jpg"
import digital from "../../public/images/articles/Digital-Technology-Maximization.jpg"
import blockchain from "../../public/images/articles/Blockchain-and-the-Cloud.jpg"
import ppt from "../../public/images/articles/Office-PowePoint-2016.jpg"
import word from "../../public/images/articles/Office-Word-2016.jpg"
import { motion, useMotionValue } from 'framer-motion'
import TransitionEffect from '@/components/TransitionEffect'



const FramerImage = motion(Image);

const MovingImg = ({title, img, link}) => {

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const imgRef = useRef(null);

    function handleMouse (event) {
        imgRef.current.style.display = "inline-block";
        x.set(event.pageX);
        y.set(-10);
    }

    function handleMouseLeave (event) {
        imgRef.current.style.display = "none";
        x.set(0);
        y.set(0);
    }

    return(
        <Link href={link} target="_blank" onMouseMove={handleMouse} onMouseLeave={handleMouseLeave}>
            <h2 className="capitalize text-xl font-semibold hover:underline">
                {title}
            </h2>
            <FramerImage 
            style={{ x:x, y:y }}
            initial={{opacity:0}}
            whileInView={{opacity:1, transition:{duration: 0.2}}}
            ref={imgRef} 
            src={img} 
            alt={title} 
            className='z-10 w-96 bottom-2 h-auto hidden absolute rounded-lg md:!hidden' 
            />
        </Link>
    )
}

const Article = ({img, title, date, link}) => {
    return(
        <motion.li
        initial={{y:200}}
        whileInView={{y:0, transition:{duration:0.5, ease:"easeInOut"}}}
        viewport={{once: true}}
        className='relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:0 border border-solid border-dark border-r-4 border-b-4 dark:bg-dark dark:border-light dark:text-light md:flex-col sm:items-start sm:bottom-10'>
            <MovingImg title={title} img={img} link={link} />
            <span className='text-blue-600 font-semibold pl-4 md:self-center sm:self-start sm:pl-0 xs:text-sm'>{date}</span>
        </motion.li>
    )
}

const FeaturedCertificate = ({img, title, time, link}) => {
    return(
        <li className='relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl dark:bg-dark dark:border-light'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light' />
            <Link href={link} target="_blank"
            className=' w-full inline-block cursor-pointer overflow-hidden rounded-lg'>
                <FramerImage src={img} alt={title} className="w-full h-auto"
                whileHover={{scale:1.05}}
                transition={{duration:0.2}}
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                />
            </Link>
            <Link href={link} target="_blank">
                <h2 className='capitalize text-2xl font-bold p-1 px-2 my-2 mt-4 hover:underline xs:text-lg'>{title}</h2>
            </Link>
            <span className='text-blue-600 font-semibold p-1 px-2'>{time}</span>
        </li>
    )
}

const certificates = () => {
  return (
    <>
        <Head>
            <title>JM | Certficates</title>
            <meta name="description" content="any description" />
        </Head>
        <TransitionEffect />
        <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light'>
            <Layout className='pt-16'>
                <AnimatedText text="Awards and Certificates" className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'/>
                <ul className='grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16'>
                    <FeaturedCertificate
                    img={diploma}
                    title="Diploma"
                    time="July 27, 2023"
                    link="https://firebasestorage.googleapis.com/v0/b/myportfolio-794c9.appspot.com/o/certificates%2FDiploma.pdf?alt=media&token=41ac88fa-81df-4649-ab1b-24b5c784af35&_gl=1*18ue4pq*_ga*MTgyMTI4ODg0MC4xNjczOTg0Njc0*_ga_CW55HF8NVT*MTY5NzcxMDg0Ni43OS4xLjE2OTc3MTE1MTkuNjAuMC4w"
                    />
                    <FeaturedCertificate
                    img={studentleaders}
                    title="Student Leaders Council"
                    time="July 24, 2023"
                    link="https://firebasestorage.googleapis.com/v0/b/myportfolio-794c9.appspot.com/o/certificates%2FStudent-Leaders-Council.pdf?alt=media&token=ef949a83-29bf-41ff-b8da-d1b434cc27b8&_gl=1*11jj3a0*_ga*MTgyMTI4ODg0MC4xNjczOTg0Njc0*_ga_CW55HF8NVT*MTY5NzcxMDg0Ni43OS4xLjE2OTc3MTE1NzEuOC4wLjA."
                    />
                </ul>
                <h2 className='font-bold text-4xl w-full text-center my-16 mt-32'>All Certificates</h2>
                <ul className='mb-16'>
                    <Article
                    title="3rd SDCA International Virtual Multidisciplinary Research Conference 2023"
                    date="April 18, 2023"
                    link="https://firebasestorage.googleapis.com/v0/b/myportfolio-794c9.appspot.com/o/certificates%2FREL.pdf?alt=media&token=87e328cc-35a6-442d-8238-6b8f0aa76784&_gl=1*1xd8eis*_ga*MTgyMTI4ODg0MC4xNjczOTg0Njc0*_ga_CW55HF8NVT*MTY5NzcxMDg0Ni43OS4xLjE2OTc3MTE1OTQuNjAuMC4w"
                    img={rel}
                    />
                    <Article
                    title="Test of English for International Communication 2023"
                    date="April 12, 2023"
                    link="https://firebasestorage.googleapis.com/v0/b/myportfolio-794c9.appspot.com/o/certificates%2FTOEIC-2023.pdf?alt=media&token=6d05523c-3084-408b-afea-cf47373bb6d2&_gl=1*ryidog*_ga*MTgyMTI4ODg0MC4xNjczOTg0Njc0*_ga_CW55HF8NVT*MTY5NzcxMDg0Ni43OS4xLjE2OTc3MTE2MTcuMzcuMC4w"
                    img={toeic2023}
                    />
                    <Article
                    title="Cultural Center of the Philippines: Internship Program at the Management Services Division"
                    date="December 13, 2022"
                    link="https://firebasestorage.googleapis.com/v0/b/myportfolio-794c9.appspot.com/o/certificates%2FGasangue%2C%20John%20Martin%20M.%20OJT%20Certificate.pdf?alt=media&token=32ca0c0f-769d-4821-b091-cacbef8b7cf0&_gl=1*bl02om*_ga*MTgyMTI4ODg0MC4xNjczOTg0Njc0*_ga_CW55HF8NVT*MTY5NzcxMDg0Ni43OS4xLjE2OTc3MTE2MzIuMjIuMC4w"
                    img={ojt}
                    />
                    <Article
                    title="Dean's Lister 2nd Semester A.Y. 2021-2022"
                    date="November 28, 2022"
                    link="https://firebasestorage.googleapis.com/v0/b/myportfolio-794c9.appspot.com/o/certificates%2FDL-Second-Semester.pdf?alt=media&token=661a1df5-a651-4e95-8873-f1fefd032b0c&_gl=1*1l8eoym*_ga*MTgyMTI4ODg0MC4xNjczOTg0Njc0*_ga_CW55HF8NVT*MTY5NzcxMDg0Ni43OS4xLjE2OTc3MTIyMzkuNjAuMC4w"
                    img={dl2}
                    />
                    <Article
                    title="Dean's Lister 1st Semester A.Y. 2021-2022"
                    date="November 28, 2022"
                    link="https://firebasestorage.googleapis.com/v0/b/myportfolio-794c9.appspot.com/o/certificates%2FDL-First-Semester.pdf?alt=media&token=d3e07235-ea80-422c-8441-aa45d775cdb4&_gl=1*p209wb*_ga*MTgyMTI4ODg0MC4xNjczOTg0Njc0*_ga_CW55HF8NVT*MTY5NzcxMDg0Ni43OS4xLjE2OTc3MTIyOTQuNS4wLjA."
                    img={dl1}
                    />
                    <Article
                    title="Webinar on Data Privacy Awareness"
                    date="November 16, 2022"
                    link="https://firebasestorage.googleapis.com/v0/b/myportfolio-794c9.appspot.com/o/certificates%2FJohn%20Martin%20M.%20Gasangue%20%20-%20Certificate%20of%20Attendance.pdf?alt=media&token=424f771a-5487-411b-98ba-be54800da065&_gl=1*12007au*_ga*MTgyMTI4ODg0MC4xNjczOTg0Njc0*_ga_CW55HF8NVT*MTY5NzcxMDg0Ni43OS4xLjE2OTc3MTIzMTIuNjAuMC4w"
                    img={wdpa}
                    />
                    <Article
                    title="18th Cinemalaya Philippine Independent Film Festival 2022"
                    date="August 19, 2022"
                    link="https://firebasestorage.googleapis.com/v0/b/myportfolio-794c9.appspot.com/o/certificates%2FCinemalaya18.pdf?alt=media&token=002b7db1-8159-44b8-b6ec-c01654838c92&_gl=1*11zgil6*_ga*MTgyMTI4ODg0MC4xNjczOTg0Njc0*_ga_CW55HF8NVT*MTY5NzcxMDg0Ni43OS4xLjE2OTc3MTIzMjQuNDguMC4w"
                    img={cinemalaya18}
                    />
                    <Article
                    title="Test of English for International Communication 2022"
                    date="February 18, 2022"
                    link="https://firebasestorage.googleapis.com/v0/b/myportfolio-794c9.appspot.com/o/certificates%2FTOEIC-2022.pdf?alt=media&token=55d82dc1-099d-4f12-9b8d-eebafe668b9f&_gl=1*1i11tu9*_ga*MTgyMTI4ODg0MC4xNjczOTg0Njc0*_ga_CW55HF8NVT*MTY5NzcxMDg0Ni43OS4xLjE2OTc3MTIzMzUuMzcuMC4w"
                    img={toeic2022}
                    />
                    <Article
                    title="JavaScript Essential Training (2017)"
                    date="December 13, 2021"
                    link="https://firebasestorage.googleapis.com/v0/b/myportfolio-794c9.appspot.com/o/certificates%2FCertificateOfCompletion_JavaScript%20Essential%20Training%202017.pdf?alt=media&token=ead2f478-5473-427c-9cc4-8e49392e60f2&_gl=1*13fubpf*_ga*MTgyMTI4ODg0MC4xNjczOTg0Njc0*_ga_CW55HF8NVT*MTY5NzcxMDg0Ni43OS4xLjE2OTc3MTIzNzMuNjAuMC4w"
                    img={jscert}
                    />
                    <Article
                    title="CSS Essential Training"
                    date="November 2, 2021"
                    link="https://firebasestorage.googleapis.com/v0/b/myportfolio-794c9.appspot.com/o/certificates%2FCertificateOfCompletion_CSS%20Essential%20Training.pdf?alt=media&token=ed117322-5ae5-4b4a-b832-cd7941d33217&_gl=1*sxhk4g*_ga*MTgyMTI4ODg0MC4xNjczOTg0Njc0*_ga_CW55HF8NVT*MTY5NzcxMDg0Ni43OS4xLjE2OTc3MTIzODEuNTIuMC4w"
                    img={csscert}
                    />
                    <Article
                    title="HTML Essential Training"
                    date="September 28, 2021"
                    link="https://firebasestorage.googleapis.com/v0/b/myportfolio-794c9.appspot.com/o/certificates%2FCertificateOfCompletion_HTML%20Essential%20Training.pdf?alt=media&token=5836d6d0-a30c-4fc5-90fc-87dcc9a028f5&_gl=1*1d9fjp7*_ga*MTgyMTI4ODg0MC4xNjczOTg0Njc0*_ga_CW55HF8NVT*MTY5NzcxMDg0Ni43OS4xLjE2OTc3MTIzODkuNDQuMC4w"
                    img={htmlcert}
                    />
                    <Article
                    title="WOCEE Wired TechTalk Webinar 2021: Digital Technology Maximization"
                    date="August 28, 2021"
                    link="https://firebasestorage.googleapis.com/v0/b/myportfolio-794c9.appspot.com/o/certificates%2FTECHTALK%20DAY%203%20E-CERT.pdf?alt=media&token=cd343965-15be-45e0-be52-74576b1d46d1&_gl=1*1kvfjun*_ga*MTgyMTI4ODg0MC4xNjczOTg0Njc0*_ga_CW55HF8NVT*MTY5NzcxMDg0Ni43OS4xLjE2OTc3MTI0ODUuNDEuMC4w"
                    img={digital}
                    />
                    <Article
                    title="WOCEE Wired TechTalk Webinar 2021: Robotics and Machine Intelligence"
                    date="August 27, 2021"
                    link="https://firebasestorage.googleapis.com/v0/b/myportfolio-794c9.appspot.com/o/certificates%2FWocee%20Wired%20TechTalk%20Webinar%20E-Cert%20Day%202.pdf?alt=media&token=b6b7177f-0285-4e9f-a26a-763f3ab5e185&_gl=1*ejwos6*_ga*MTgyMTI4ODg0MC4xNjczOTg0Njc0*_ga_CW55HF8NVT*MTY5NzcxMDg0Ni43OS4xLjE2OTc3MTI1MDMuMjMuMC4w"
                    img={robot}
                    />
                    <Article
                    title="WOCEE Wired TechTalk Webinar 2021: Blockchain and the Cloud"
                    date="August 26, 2021"
                    link="https://firebasestorage.googleapis.com/v0/b/myportfolio-794c9.appspot.com/o/certificates%2FWocee%20Wired%20TechTalk%20Webinar%20E-Cert%20Day%201.pdf?alt=media&token=1ac49781-6222-4b10-9301-b6a83eac3c97&_gl=1*17zodrk*_ga*MTgyMTI4ODg0MC4xNjczOTg0Njc0*_ga_CW55HF8NVT*MTY5NzcxMDg0Ni43OS4xLjE2OTc3MTI1MTEuMTUuMC4w"
                    img={blockchain}
                    />
                    <Article
                    title="Microsoft Office Specialist: Office PowerPoint 2016"
                    date="March 29, 2019"
                    link="https://firebasestorage.googleapis.com/v0/b/myportfolio-794c9.appspot.com/o/certificates%2FOffice%20PowerPoint%202016.pdf?alt=media&token=317cfbe7-8f5d-4909-9acf-3b735038befc&_gl=1*12ogs3b*_ga*MTgyMTI4ODg0MC4xNjczOTg0Njc0*_ga_CW55HF8NVT*MTY5NzcxMDg0Ni43OS4xLjE2OTc3MTI1MzguNjAuMC4w"
                    img={ppt}
                    />
                    <Article
                    title="Microsoft Office Specialist: Office Word 2016"
                    date="November 20, 2018"
                    link="https://firebasestorage.googleapis.com/v0/b/myportfolio-794c9.appspot.com/o/certificates%2FOffice%20Word%202016.pdf?alt=media&token=27ab7e19-7738-45cd-8f04-50779188bb51&_gl=1*s5rfl8*_ga*MTgyMTI4ODg0MC4xNjczOTg0Njc0*_ga_CW55HF8NVT*MTY5NzcxMDg0Ni43OS4xLjE2OTc3MTI1NDUuNTMuMC4w"
                    img={word}
                    />
                </ul>
            </Layout>
        </main>
    </>
  )
}

export default certificates
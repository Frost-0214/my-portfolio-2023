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
                    link="https://firebasestorage.googleapis.com/v0/b/portfolio-99e6e.appspot.com/o/certificates%2FDiploma.pdf?alt=media&token=882df292-0081-4c65-b811-a192f7663cd3&_gl=1*1k1498i*_ga*MTgyMTI4ODg0MC4xNjczOTg0Njc0*_ga_CW55HF8NVT*MTY5NjM2MDQ3NC42Mi4xLjE2OTYzNjEwMDcuMzUuMC4w"
                    />
                    <FeaturedCertificate
                    img={studentleaders}
                    title="Student Leaders Council"
                    time="July 24, 2023"
                    link="https://firebasestorage.googleapis.com/v0/b/portfolio-99e6e.appspot.com/o/certificates%2FStudent-Leaders-Council.pdf?alt=media&token=60980f13-40ba-4180-9f5c-6c6762f34b6f&_gl=1*7t7vhe*_ga*MTgyMTI4ODg0MC4xNjczOTg0Njc0*_ga_CW55HF8NVT*MTY5NjM2MDQ3NC42Mi4xLjE2OTYzNjA5OTQuNDguMC4w"
                    />
                </ul>
                <h2 className='font-bold text-4xl w-full text-center my-16 mt-32'>All Certificates</h2>
                <ul className='mb-16'>
                    <Article
                    title="3rd SDCA International Virtual Multidisciplinary Research Conference 2023"
                    date="April 18, 2023"
                    link="https://firebasestorage.googleapis.com/v0/b/portfolio-99e6e.appspot.com/o/certificates%2FREL.pdf?alt=media&token=b3d4b3d1-033c-47e7-9d1b-065745b17c83&_gl=1*87i8go*_ga*MTgyMTI4ODg0MC4xNjczOTg0Njc0*_ga_CW55HF8NVT*MTY5NjM2MDQ3NC42Mi4xLjE2OTYzNjExNzIuNTAuMC4w"
                    img={rel}
                    />
                    <Article
                    title="Test of English for International Communication 2023"
                    date="April 12, 2023"
                    link="https://firebasestorage.googleapis.com/v0/b/portfolio-99e6e.appspot.com/o/certificates%2FTOEIC-2023.pdf?alt=media&token=dc798464-7023-4e48-a144-132891d86f9e&_gl=1*d04dy4*_ga*MTgyMTI4ODg0MC4xNjczOTg0Njc0*_ga_CW55HF8NVT*MTY5NjM2MDQ3NC42Mi4xLjE2OTYzNjE1NDkuMTEuMC4w"
                    img={toeic2023}
                    />
                    <Article
                    title="Cultural Center of the Philippines: Internship Program at the Management Services Division"
                    date="December 13, 2022"
                    link="https://firebasestorage.googleapis.com/v0/b/portfolio-99e6e.appspot.com/o/certificates%2FGasangue%2C%20John%20Martin%20M.%20OJT%20Certificate.pdf?alt=media&token=46ae64ed-cc97-4050-9da7-00d865b90ea5&_gl=1*dhonjx*_ga*MTgyMTI4ODg0MC4xNjczOTg0Njc0*_ga_CW55HF8NVT*MTY5NjM2MDQ3NC42Mi4xLjE2OTYzNjE2NTcuNDYuMC4w"
                    img={ojt}
                    />
                    <Article
                    title="Dean's Lister 2nd Semester A.Y. 2021-2022"
                    date="November 28, 2022"
                    link="https://firebasestorage.googleapis.com/v0/b/portfolio-99e6e.appspot.com/o/certificates%2FDL-Second-Semester.pdf?alt=media&token=b28cb58c-da5d-4dd1-b8e1-cf8254a3da4b&_gl=1*prly6y*_ga*MTgyMTI4ODg0MC4xNjczOTg0Njc0*_ga_CW55HF8NVT*MTY5NjM2MDQ3NC42Mi4xLjE2OTYzNjE1NjIuNjAuMC4w"
                    img={dl2}
                    />
                    <Article
                    title="Dean's Lister 1st Semester A.Y. 2021-2022"
                    date="November 28, 2022"
                    link="https://firebasestorage.googleapis.com/v0/b/portfolio-99e6e.appspot.com/o/certificates%2FDL-First-Semester.pdf?alt=media&token=0fbe1fc6-8414-4051-842a-307a01242906&_gl=1*12sxzpi*_ga*MTgyMTI4ODg0MC4xNjczOTg0Njc0*_ga_CW55HF8NVT*MTY5NjM2MDQ3NC42Mi4xLjE2OTYzNjE1NzEuNTEuMC4w"
                    img={dl1}
                    />
                    <Article
                    title="Webinar on Data Privacy Awareness"
                    date="November 16, 2022"
                    link="https://firebasestorage.googleapis.com/v0/b/portfolio-99e6e.appspot.com/o/certificates%2FJohn%20Martin%20M.%20Gasangue%20%20-%20Certificate%20of%20Attendance.pdf?alt=media&token=2c54858f-8283-449d-81a1-dad665181a59&_gl=1*1dr6975*_ga*MTgyMTI4ODg0MC4xNjczOTg0Njc0*_ga_CW55HF8NVT*MTY5NjM2MDQ3NC42Mi4xLjE2OTYzNjE4NDMuNjAuMC4w"
                    img={wdpa}
                    />
                    <Article
                    title="18th Cinemalaya Philippine Independent Film Festival 2022"
                    date="August 19, 2022"
                    link="https://firebasestorage.googleapis.com/v0/b/portfolio-99e6e.appspot.com/o/certificates%2FCinemalaya18.pdf?alt=media&token=03a25391-6c49-4a34-8e58-0ae5e1072a3a&_gl=1*12nlg3z*_ga*MTgyMTI4ODg0MC4xNjczOTg0Njc0*_ga_CW55HF8NVT*MTY5NjM2MDQ3NC42Mi4xLjE2OTYzNjE2NzguMjUuMC4w"
                    img={cinemalaya18}
                    />
                    <Article
                    title="Test of English for International Communication 2022"
                    date="February 18, 2022"
                    link="https://firebasestorage.googleapis.com/v0/b/portfolio-99e6e.appspot.com/o/certificates%2FTOEIC-2022.pdf?alt=media&token=44cc64ed-08c2-47bc-b5f1-4e23fd45ed8f&_gl=1*14djpr3*_ga*MTgyMTI4ODg0MC4xNjczOTg0Njc0*_ga_CW55HF8NVT*MTY5NjM2MDQ3NC42Mi4xLjE2OTYzNjE2OTAuMTMuMC4w"
                    img={toeic2022}
                    />
                    <Article
                    title="JavaScript Essential Training (2017)"
                    date="December 13, 2021"
                    link="https://firebasestorage.googleapis.com/v0/b/portfolio-99e6e.appspot.com/o/certificates%2FCertificateOfCompletion_JavaScript%20Essential%20Training%202017.pdf?alt=media&token=14f7a1c1-7b97-4f47-a4e3-4e4012d01244&_gl=1*tc9f1t*_ga*MTgyMTI4ODg0MC4xNjczOTg0Njc0*_ga_CW55HF8NVT*MTY5NjM2MDQ3NC42Mi4xLjE2OTYzNjE5MDMuNjAuMC4w"
                    img={jscert}
                    />
                    <Article
                    title="CSS Essential Training"
                    date="November 2, 2021"
                    link="https://firebasestorage.googleapis.com/v0/b/portfolio-99e6e.appspot.com/o/certificates%2FCertificateOfCompletion_CSS%20Essential%20Training.pdf?alt=media&token=07ab08d3-c21b-4f89-a7d7-23371edcf190&_gl=1*5zelc1*_ga*MTgyMTI4ODg0MC4xNjczOTg0Njc0*_ga_CW55HF8NVT*MTY5NjM2MDQ3NC42Mi4xLjE2OTYzNjE5MjkuMzQuMC4w"
                    img={csscert}
                    />
                    <Article
                    title="HTML Essential Training"
                    date="September 28, 2021"
                    link="https://firebasestorage.googleapis.com/v0/b/portfolio-99e6e.appspot.com/o/certificates%2FCertificateOfCompletion_HTML%20Essential%20Training.pdf?alt=media&token=00b1c938-6b72-47c3-8ffe-a5b37336d76f&_gl=1*xgy8qn*_ga*MTgyMTI4ODg0MC4xNjczOTg0Njc0*_ga_CW55HF8NVT*MTY5NjM2MDQ3NC42Mi4xLjE2OTYzNjE5MzUuMjguMC4w"
                    img={htmlcert}
                    />
                    <Article
                    title="WOCEE Wired TechTalk Webinar 2021: Digital Technology Maximization"
                    date="August 28, 2021"
                    link="https://firebasestorage.googleapis.com/v0/b/portfolio-99e6e.appspot.com/o/certificates%2FTECHTALK%20DAY%203%20E-CERT.pdf?alt=media&token=9626897c-1d4b-4145-bfc8-e7fbae54b1ce&_gl=1*1p3ab0y*_ga*MTgyMTI4ODg0MC4xNjczOTg0Njc0*_ga_CW55HF8NVT*MTY5NjM2MDQ3NC42Mi4xLjE2OTYzNjE5ODQuNjAuMC4w"
                    img={digital}
                    />
                    <Article
                    title="WOCEE Wired TechTalk Webinar 2021: Robotics and Machine Intelligence"
                    date="August 27, 2021"
                    link="https://firebasestorage.googleapis.com/v0/b/portfolio-99e6e.appspot.com/o/certificates%2FWocee%20Wired%20TechTalk%20Webinar%20E-Cert%20Day%202.pdf?alt=media&token=f656428f-75bd-4fe8-865c-6f566ce04cda&_gl=1*1ke0sbk*_ga*MTgyMTI4ODg0MC4xNjczOTg0Njc0*_ga_CW55HF8NVT*MTY5NjM2MDQ3NC42Mi4xLjE2OTYzNjE5OTcuNDcuMC4w"
                    img={robot}
                    />
                    <Article
                    title="WOCEE Wired TechTalk Webinar 2021: Blockchain and the Cloud"
                    date="August 26, 2021"
                    link="https://firebasestorage.googleapis.com/v0/b/portfolio-99e6e.appspot.com/o/certificates%2FWocee%20Wired%20TechTalk%20Webinar%20E-Cert%20Day%201.pdf?alt=media&token=5c7305a3-67cd-4d14-9adb-03297b8f90f6&_gl=1*tunrts*_ga*MTgyMTI4ODg0MC4xNjczOTg0Njc0*_ga_CW55HF8NVT*MTY5NjM2MDQ3NC42Mi4xLjE2OTYzNjIwMDguMzYuMC4w"
                    img={blockchain}
                    />
                    <Article
                    title="Microsoft Office Specialist: Office PowerPoint 2016"
                    date="March 29, 2019"
                    link="https://firebasestorage.googleapis.com/v0/b/portfolio-99e6e.appspot.com/o/certificates%2FOffice%20PowerPoint%202016.pdf?alt=media&token=7e429085-27c0-4fa2-957e-f3ff50ed5637&_gl=1*1wdbs9j*_ga*MTgyMTI4ODg0MC4xNjczOTg0Njc0*_ga_CW55HF8NVT*MTY5NjM2MDQ3NC42Mi4xLjE2OTYzNjIwNTAuNjAuMC4w"
                    img={ppt}
                    />
                    <Article
                    title="Microsoft Office Specialist: Office Word 2016"
                    date="November 20, 2018"
                    link="https://firebasestorage.googleapis.com/v0/b/portfolio-99e6e.appspot.com/o/certificates%2FOffice%20Word%202016.pdf?alt=media&token=fbd19662-307a-4230-81ce-3fc1a891a844&_gl=1*kzos3k*_ga*MTgyMTI4ODg0MC4xNjczOTg0Njc0*_ga_CW55HF8NVT*MTY5NjM2MDQ3NC42Mi4xLjE2OTYzNjIwNjcuNDMuMC4w"
                    img={word}
                    />
                </ul>
            </Layout>
        </main>
    </>
  )
}

export default certificates
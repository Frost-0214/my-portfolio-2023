import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef, useState, useEffect } from 'react'
import imhtml from "../../public/images/articles/Inventive-Media-HTML-CSS-Bootstrap.jpg"
import imphp from "../../public/images//articles/Inventive-Media-Php-MySql.jpg"
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

const ImageModal = ({ imgSrc, onClose, title }) => {
    useEffect(() => {
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    const stopClick = (e) => e.stopPropagation();

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
    >
      <button
        onClick={onClose}
        className="absolute top-9 right-28 text-white text-6xl font-bold z-50"
      >
        &times;
      </button>
        <p className="absolute top-9 left-24 text-white text-3xl font-semibold z-50 bg-black/50 px-4 py-2 rounded-md shadow-lg">
          {title}
        </p>
      <div className="relative w-[70vw] h-[70vh] flex items-center justify-center">
        {/* Title in top-left */}
        
        {/* Image */}
        <Image
          src={imgSrc}
          alt="certificate"
          className="rounded-lg shadow-xl object-contain"
          onClick={(e) => e.stopPropagation()}
          fill
          sizes="(max-width: 768px) 90vw, (max-width: 1200px) 70vw, 50vw"
        />
      </div>
    </div>
  );
};


const MovingImg = ({title, img, link, onImageClick}) => {

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
        <div onMouseMove={handleMouse} onMouseLeave={handleMouseLeave}>
            <h2 className="capitalize text-xl font-semibold hover:underline" onClick={() => onImageClick(img)}>
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
        </div>
    )
}

const Article = ({img, title, date, link, onImageClick}) => {
    return(
        <motion.li
        initial={{y:200}}
        whileInView={{y:0, transition:{duration:0.5, ease:"easeInOut"}}}
        viewport={{once: true}}
        className='relative w-full p-4 py-6 my-4 rounded-xl cursor-pointer flex items-center justify-between bg-light text-dark first:0 border border-solid border-dark border-r-4 border-b-4 dark:bg-dark dark:border-light dark:text-light md:flex-col sm:items-start sm:bottom-10'>
            <MovingImg title={title} img={img} link={link} onImageClick={() => onImageClick(img, title)} />
            <span className='text-blue-600 font-semibold pl-4 md:self-center sm:self-start sm:pl-0 xs:text-sm'>{date}</span>
        </motion.li>
    )
}

const FeaturedCertificate = ({img, title, time, link, onImageClick}) => {
    return(
        <li className='relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl dark:bg-dark dark:border-light'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light' />
            <div
            className=' w-full inline-block cursor-pointer overflow-hidden rounded-lg' onClick={() => onImageClick(img, title)}>
                <FramerImage src={img} alt={title} className="w-full h-auto"
                whileHover={{scale:1.05}}
                transition={{duration:0.2}}
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                />
            </div>
            
                <h2 className='capitalize text-2xl font-bold p-1 px-2 my-2 mt-4 hover:underline xs:text-lg cursor-pointer' onClick={() => onImageClick(img)}>{title}</h2>
            
            <span className='text-blue-600 font-semibold p-1 px-2'>{time}</span>
        </li>
    )
}

const Certificates = () => {
    const [modalImg, setModalImg] = useState(null);
    const [modalTitle, setModalTitle] = useState("");

    const handleImageClick = (img, title) => {
    setModalImg(img);
    setModalTitle(title);
  }


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
                    img={imphp}
                    title="PHP with MySQL"
                    time="October 14, 2024"
                    onImageClick={handleImageClick}
                    />
                    <FeaturedCertificate
                    img={imhtml}
                    title="HTML + CSS + Bootstrap"
                    time="October 6, 2024"
                    onImageClick={handleImageClick}
                    />
                </ul>
                <h2 className='font-bold text-4xl w-full text-center my-16 mt-32'>All Certificates</h2>
                <ul className='mb-16'>
                    <Article
                    title="Diploma"
                    date="July 27, 2023"
                    onImageClick={handleImageClick}
                    img={diploma}
                    />
                    <Article
                    title="Student Leaders Council"
                    date="July 24, 2023"
                    onImageClick={handleImageClick}
                    img={studentleaders}
                    />
                    <Article
                    title="3rd SDCA International Virtual Multidisciplinary Research Conference 2023"
                    date="April 18, 2023"
                    onImageClick={handleImageClick}
                    img={rel}
                    />
                    <Article
                    title="Test of English for International Communication 2023"
                    date="April 12, 2023"
                    onImageClick={handleImageClick}
                    img={toeic2023}
                    />
                    <Article
                    title="Cultural Center of the Philippines: Internship Program at the Management Services Division"
                    date="December 13, 2022"
                    onImageClick={handleImageClick}
                    img={ojt}
                    />
                    <Article
                    title="Dean's Lister 2nd Semester A.Y. 2021-2022"
                    date="November 28, 2022"
                    onImageClick={handleImageClick}
                    img={dl2}
                    />
                    <Article
                    title="Dean's Lister 1st Semester A.Y. 2021-2022"
                    date="November 28, 2022"
                    onImageClick={handleImageClick}
                    img={dl1}
                    />
                    <Article
                    title="Webinar on Data Privacy Awareness"
                    date="November 16, 2022"
                    onImageClick={handleImageClick}
                    img={wdpa}
                    />
                    <Article
                    title="18th Cinemalaya Philippine Independent Film Festival 2022"
                    date="August 19, 2022"
                    onImageClick={handleImageClick}
                    img={cinemalaya18}
                    />
                    <Article
                    title="Test of English for International Communication 2022"
                    date="February 18, 2022"
                    onImageClick={handleImageClick}
                    img={toeic2022}
                    />
                    <Article
                    title="JavaScript Essential Training (2017)"
                    date="December 13, 2021"
                    onImageClick={handleImageClick}
                    img={jscert}
                    />
                    <Article
                    title="CSS Essential Training"
                    date="November 2, 2021"
                    onImageClick={handleImageClick}
                    img={csscert}
                    />
                    <Article
                    title="HTML Essential Training"
                    date="September 28, 2021"
                    onImageClick={handleImageClick}
                    img={htmlcert}
                    />
                    <Article
                    title="WOCEE Wired TechTalk Webinar 2021: Digital Technology Maximization"
                    date="August 28, 2021"
                    onImageClick={handleImageClick}
                    img={digital}
                    />
                    <Article
                    title="WOCEE Wired TechTalk Webinar 2021: Robotics and Machine Intelligence"
                    date="August 27, 2021"
                    onImageClick={handleImageClick}
                    img={robot}
                    />
                    <Article
                    title="WOCEE Wired TechTalk Webinar 2021: Blockchain and the Cloud"
                    date="August 26, 2021"
                    onImageClick={handleImageClick}
                    img={blockchain}
                    />
                    <Article
                    title="Microsoft Office Specialist: Office PowerPoint 2016"
                    date="March 29, 2019"
                    onImageClick={handleImageClick}
                    img={ppt}
                    />
                    <Article
                    title="Microsoft Office Specialist: Office Word 2016"
                    date="November 20, 2018"
                    onImageClick={handleImageClick}
                    img={word}
                    />
                </ul>
            </Layout>
        </main>
        {modalImg && <ImageModal imgSrc={modalImg} title={modalTitle} onClose={() => setModalImg(null)} />}
    </>
  )
}

export default Certificates
import Link from 'next/link'
import React, { useState } from 'react'
import Logo from './Logo'
import {FacebookIcon, GithubIcon, InstagramIcon, LinkedInIcon, LinkedInIcon2, MoonIcon, SunIcon, TiktokIcon} from './Icons'
import { useRouter } from 'next/router'
import { motion } from "framer-motion";
import useThemeSwitcher from './hooks/useThemeSwitcher'

const CustomLink = ({href, title, className=""}) => {
    const router = useRouter();
    return (
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? "w-full" : "w-0"} dark:bg-light`}>
                &nbsp;
            </span>
        </Link>
    );
};

const CustomMobileLink = ({href, title, className="", toggle }) => {
    const router = useRouter();

    const handleClick = () => {
        toggle();
        router.push(href)
    }

    return (
        <button href={href} className={`${className} relative group text-light dark:text-dark my-2`} onClick={handleClick}>
            {title}
            <span className={`h-[1px] inline-block bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? "w-full" : "w-0"} dark:bg-dark`}>
                &nbsp;
            </span>
        </button>
    );
};

const NavBar = () => {

    const [mode, setMode] = useThemeSwitcher();
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () =>{
        setIsOpen(!isOpen)
    }

    return (
        <header
        className='w-full px-32 py-6 font-medium flex items-center justify-between dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8'>
            <button className='flex-col justify-center items-center hidden lg:flex' onClick={handleClick}>
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </button>
            <div className='w-full flex justify-between items-center lg:hidden'>
            <nav>
                <CustomLink href='/' title="Home" className='mr-4'/>
                <CustomLink href='/about' title="About" className='mx-4'/>
                <CustomLink href='/projects' title="Projects" className='mx-4'/>
                <CustomLink href='/certificates' title="Certificates" className='ml-4'/>
            </nav>
            <nav className="flex item-center justify-center flex-wrap">
                <motion.a href="https://www.facebook.com/johnmartin.gasangue" target={"_blank"} whileHover={{y:-6}} whileTap={{scale:0.9}} className="w-9 mr-2 fill-dark dark:fill-light"><FacebookIcon/></motion.a>
                <motion.a href="https://www.instagram.com/_jmartn/" target={"_blank"} whileHover={{y:-6}} whileTap={{scale:0.9}} className="w-9 mr-2 fill-dark dark:fill-light"><InstagramIcon/></motion.a>
                <motion.a href="https://www.tiktok.com/@_jmartn" target={"_blank"} whileHover={{y:-6}} whileTap={{scale:0.9}} className="w-9 mr-2 fill-dark dark:fill-light"><TiktokIcon/></motion.a>
                <motion.a href="https://github.com/Frost-0214" target={"_blank"} whileHover={{y:-6}} whileTap={{scale:0.9}} className="w-9 mr-3 fill-dark dark:fill-light"><GithubIcon/></motion.a>
                <motion.a href="https://www.linkedin.com/in/jmgasangue" target={"_blank"} whileHover={{y:-6}} whileTap={{scale:0.9}} className="w-9 text-light dark:text-dark"><LinkedInIcon/></motion.a>

                <button 
                onClick={() => setMode(mode === "light" ? "dark" : "light")}
                className={`ml-1 w-12 flex items-center justify-center rounded-full px-1.5
                ${mode === "light" ? "bg-none text-dark" : "bg-none text-light"}`}>
                    {
                        mode === "dark" ?
                        <SunIcon className={"fill-dark"} />
                        : <MoonIcon className={"fill-dark"} />
                    }
                </button>

            </nav>
            </div>
            {
                isOpen ?
                <motion.div
                initial={{scale:0, opacity:0, x: "-50%", y: "-50%"}}
                animate={{scale:1, opacity:1}}
                className='min-w-[70vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32'>
            <nav className='flex items-center flex-col justify-center'>
                <CustomMobileLink href='/' title="Home" className='' toggle={handleClick}/>
                <CustomMobileLink href='/about' title="About" className='' toggle={handleClick}/>
                <CustomMobileLink href='/projects' title="Projects" className='' toggle={handleClick}/>
                <CustomMobileLink href='/certificates' title="Certificates" className='' toggle={handleClick}/>
            </nav>
            <nav className="flex item-center justify-center flex-wrap mt-2">
            <motion.a href="https://www.facebook.com/johnmartin.gasangue" target={"_blank"} whileHover={{y:-6}} whileTap={{scale:0.9}} className="w-9 mr-2 fill-light dark:fill-dark"><FacebookIcon/></motion.a>
                <motion.a href="https://www.instagram.com/_jmartn/" target={"_blank"} whileHover={{y:-6}} whileTap={{scale:0.9}} className="w-9 mr-2 fill-light dark:fill-dark"><InstagramIcon/></motion.a>
                <motion.a href="https://www.tiktok.com/@_jmartn" target={"_blank"} whileHover={{y:-6}} whileTap={{scale:0.9}} className="w-9 mr-2 fill-light dark:fill-dark"><TiktokIcon/></motion.a>
                <motion.a href="https://github.com/Frost-0214" target={"_blank"} whileHover={{y:-6}} whileTap={{scale:0.9}} className="w-9 mr-3 text-light dark:text-dark"><GithubIcon/></motion.a>
                <motion.a href="https://www.linkedin.com/in/jmgasangue" target={"_blank"} whileHover={{y:-6}} whileTap={{scale:0.9}} className="w-9 fill-dark dark:fill-dark"><LinkedInIcon2/></motion.a>

                <button 
                onClick={() => setMode(mode === "light" ? "dark" : "light")}
                className={`ml-2 lg:w-11 lg:ml-1 lg:mx-1 md:ml-1 md:mx-1 sm:ml-1 sm:mx-1 flex items-center justify-center rounded-full px-1.5
                ${mode === "light" ? "bg-none text-light" : "bg-none text-dark"}`}>
                    {
                        mode === "dark" ?
                        <SunIcon className={"fill-dark"} />
                        : <MoonIcon className={"fill-dark"} />
                    }
                </button>

            </nav>
            </motion.div>

                : null
            }
            <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
                <Logo/>
            </div>
        </header>
    )
}

export default NavBar
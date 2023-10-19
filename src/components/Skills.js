import React from 'react'
import { AfterEffects, AndroidStudio, C, CSS3, Canva, Cplusplus, Csharp, Firebase, HTML5, Java, JavaScript, Nextjs, Photoshop, PremierePro, Reactjs, TailWindCSS, VSCode, VisualStudio } from './Icons'
import { motion } from 'framer-motion'

const Skills = () => {
  return (
    <>
    <h2 className='font-bold text-8xl mt-64 w-full text-center mb-16 md:text-6xl md:mt-32 md:mb-8'>Skills</h2>
    <div className='w-full h-full relative flex items-start justify-center gap-20 xl:grid xl:items-center'>
        <div className='col-span-3 relative w-auto h-auto rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light'>
            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light md:w-full md:h-[101.5%]' />
            <h2 className='font-bold text-4xl w-full text-center mb-5'>Web</h2>
            <motion.div initial={{y:100, opacity:0}}
            whileInView={{y:0, opacity:1, transition:{duration:1, delay:0.4}}}
            viewport={{once: true}} className='flex items-center justify-center rounded-full mb-4 sm:grid sm:gap-5'>
                <div className='flex w-60 h-25 rounded-2xl border-2 border-solid border-dark border-r-4 border-b-4 bg-light p-5 mr-4 dark:bg-dark dark:border-light sm:mr-0'>
                    <HTML5 className={"w-12 h-12 items-start mx-3 my-.5"}/>
                    <div>
                        <h1 className='font-bold text-2xl text-center text-dark dark:text-light'>HTML</h1>
                        <h1 className='font-semibold text-1xl text-center text-dark dark:text-light'>Intermediate</h1>
                    </div>
                </div>
                <div className='flex w-60 h-25 rounded-2xl border-2 border-solid border-dark border-r-4 border-b-4 bg-light p-5 dark:bg-dark dark:border-light'>
                    <CSS3 className={"w-12 h-12 items-start mx-3 my-.5"}/>
                    <div>
                        <h1 className='font-bold text-2xl text-center text-dark dark:text-light'>CSS</h1>
                        <h1 className='font-semibold text-1xl text-center text-dark dark:text-light'>Intermediate</h1>
                    </div>
                </div>
            </motion.div>
            <motion.div initial={{y:100, opacity:0}}
            whileInView={{y:0, opacity:1, transition:{duration:1, delay:0.6}}}
            viewport={{once: true}} className='flex items-center justify-center rounded-full mb-4 sm:grid sm:gap-5'>
                <div className='flex w-60 h-25 rounded-2xl border-2 border-solid border-dark border-r-4 border-b-4 bg-light p-6 mr-4 dark:bg-dark dark:border-light sm:mr-0'>
                    <TailWindCSS className={"w-12 h-12 items-start mx-4 my-.5 ml-2"}/>
                    <div>
                        <h1 className='font-bold text-2xl text-center text-dark dark:text-light'>Tailwind</h1>
                        <h1 className='font-semibold text-1xl text-center text-dark dark:text-light'>Intermediate</h1>
                    </div>
                </div>
                <div className='flex w-60 h-25 rounded-2xl border-2 border-solid border-dark border-r-4 border-b-4 bg-light p-6 dark:bg-dark dark:border-light'>
                    <JavaScript className={"w-12 h-12 items-start mx-3 my-.5"}/>
                    <div>
                        <h1 className='font-bold text-xl text-center text-dark dark:text-light'>Javascript</h1>
                        <h1 className='font-semibold text-1xl text-center text-dark dark:text-light'>Beginner</h1>
                    </div>
                </div>
            </motion.div>
            <motion.div initial={{y:100, opacity:0}}
            whileInView={{y:0, opacity:1, transition:{duration:1, delay:0.8}}}
            viewport={{once: true}} className='flex items-center justify-center rounded-full mb-4 sm:grid sm:gap-5'>
                <div className='flex w-60 h-25 rounded-2xl border-2 border-solid border-dark border-r-4 border-b-4 bg-light p-6 mr-4 dark:bg-dark dark:border-light sm:mr-0'>
                    <Reactjs className={"w-12 h-12 items-start mx-7 my-.5 ml-2"}/>
                    <div>
                        <h1 className='font-bold text-2xl text-center mr-4 text-dark dark:text-light'>React</h1>
                        <h1 className='font-semibold text-1xl text-center mr-4 text-dark dark:text-light'>Beginner</h1>
                    </div>
                </div>
                <div className='flex w-60 h-25 rounded-2xl border-2 border-solid border-dark border-r-4 border-b-4 bg-light p-6 dark:bg-dark dark:border-light'>
                    <Nextjs className={"w-12 h-12 items-start mx-7 my-.5 ml-2 dark:fill-light"}/>
                    <div>
                        <h1 className='font-bold text-2xl text-center mr-4 text-dark dark:text-light'>Nextjs</h1>
                        <h1 className='font-semibold text-1xl text-center mr-4 text-dark dark:text-light'>Beginner</h1>
                    </div>
                </div>
            </motion.div>
            <h2 className='font-bold text-4xl w-full text-center mb-5 mt-10'>Software</h2>
            <motion.div initial={{y:100, opacity:0}}
            whileInView={{y:0, opacity:1, transition:{duration:1, delay:0.5}}}
            viewport={{once: true}} className='flex items-center justify-center rounded-full mb-4 sm:grid sm:gap-5'>
                <div className='flex w-60 h-25 rounded-2xl border-2 border-solid border-dark border-r-4 border-b-4 bg-light p-5 mr-4 dark:bg-dark dark:border-light sm:mr-0'>
                    <C className={"w-12 h-12 items-start mx-6 my-.5 ml-2"}/>
                    <div>
                        <h1 className='font-bold text-2xl text-center mr-4 text-dark dark:text-light'>C</h1>
                        <h1 className='font-semibold text-1xl text-center mr-4 text-dark dark:text-light'>Advanced</h1>
                    </div>
                </div>
                <div className='flex w-60 h-25 rounded-2xl border-2 border-solid border-dark border-r-4 border-b-4 bg-light p-5 dark:bg-dark dark:border-light'>
                    <Cplusplus className={"w-12 h-12 items-start mx-6 my-.5 ml-2"}/>
                    <div>
                        <h1 className='font-bold text-2xl text-center mr-4 text-dark dark:text-light'>C++</h1>
                        <h1 className='font-semibold text-1xl text-center mr-4 text-dark dark:text-light'>Advanced</h1>
                    </div>
                </div>
            </motion.div>
            <motion.div initial={{y:100, opacity:0}}
            whileInView={{y:0, opacity:1, transition:{duration:1, delay:0.7}}}
            viewport={{once: true}} className='flex items-center justify-center rounded-full mb-4 sm:grid sm:gap-5'>
                <div className='flex w-60 h-25 rounded-2xl border-2 border-solid border-dark border-r-4 border-b-4 bg-light p-5 mr-4 dark:bg-dark dark:border-light sm:mr-0'>
                    <Csharp className={"w-12 h-12 items-start mx-6 my-.5 ml-2"}/>
                    <div>
                        <h1 className='font-bold text-2xl text-center mr-4 text-dark dark:text-light'>C#</h1>
                        <h1 className='font-semibold text-1xl text-center mr-4 text-dark dark:text-light'>Advanced</h1>
                    </div>
                </div>
                <div className='flex w-60 h-25 rounded-2xl border-2 border-solid border-dark border-r-4 border-b-4 bg-light p-5 dark:bg-dark dark:border-light'>
                    <Java className={"w-12 h-12 items-start mx-6 my-.5 ml-2"}/>
                    <div>
                        <h1 className='font-bold text-2xl text-center mr-4 text-dark dark:text-light'>Java</h1>
                        <h1 className='font-semibold text-1xl text-center mr-4 text-dark dark:text-light'>Advanced</h1>
                    </div>
                </div>
            </motion.div>
        </div>
        <div className='col-span-3 relative h-auto rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light'>
            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light md:w-full md:h-[101.5%]' />
            <h2 className='font-bold text-4xl w-full text-center mb-5'>Coding Softwares</h2>
            <motion.div initial={{y:100, opacity:0}}
            whileInView={{y:0, opacity:1, transition:{duration:1, delay:0.4}}}
            viewport={{once: true}} className='flex items-center justify-center rounded-full mb-4 sm:grid sm:gap-5'>
                <div className='flex w-60 h-25 rounded-2xl border-2 border-solid border-dark border-r-4 border-b-4 bg-light p-4 mr-4 dark:bg-dark dark:border-light sm:mr-0'>
                    <VisualStudio className={"w-12 h-12 items-start mx-1 my-.5"}/>
                    <div>
                        <h1 className='font-bold text-lg text-center ml-2 text-dark dark:text-light'>Visual&nbsp;Studio</h1>
                        <h1 className='font-semibold text-1xl text-center ml-2 text-dark dark:text-light'>Advanced</h1>
                    </div>
                </div>
                <div className='flex w-60 h-25 rounded-2xl border-2 border-solid border-dark border-r-4 border-b-4 bg-light p-5 dark:bg-dark dark:border-light'>
                    <VSCode className={"w-12 h-12 items-start mx-3 my-.5"}/>
                    <div>
                        <h1 className='font-bold text-2xl text-center ml-2 text-dark dark:text-light'>VS&nbsp;Code</h1>
                        <h1 className='font-semibold text-1xl text-center ml-2 text-dark dark:text-light'>Advanced</h1>
                    </div>
                </div>
            </motion.div>
            <motion.div initial={{y:100, opacity:0}}
            whileInView={{y:0, opacity:1, transition:{duration:1, delay:0.6}}}
            viewport={{once: true}} className='flex items-center justify-center rounded-full mb-4 sm:grid sm:gap-5'>
                <div className='flex w-60 h-25 rounded-2xl border-2 border-solid border-dark border-r-4 border-b-4 bg-light p-6 mr-4 dark:bg-dark dark:border-light sm:mr-0'>
                    <AndroidStudio className={"w-12 h-12 items-start mx-1 my-.5"}/>
                    <div className='mt-2'>
                        <h1 className='font-bold text-sm text-center ml-2 text-dark dark:text-light'>Android&nbsp;Studio</h1>
                        <h1 className='font-semibold text-1xl text-center ml-2 text-dark dark:text-light'>Advanced</h1>
                    </div>
                </div>
                <div className='flex w-60 h-25 rounded-2xl border-2 border-solid border-dark border-r-4 border-b-4 bg-light p-6 dark:bg-dark dark:border-light'>
                    <Firebase className={"w-12 h-12 items-start mx-1 my-.5 ml-2"}/>
                    <div>
                        <h1 className='font-bold text-2xl text-center ml-2 text-dark dark:text-light'>Firebase</h1>
                        <h1 className='font-semibold text-1xl text-center ml-2 text-dark dark:text-light'>Intermediate</h1>
                    </div>
                </div>
            </motion.div>
            <h2 className='font-bold text-4xl w-full text-center mb-5 mt-40'>Editing Softwares</h2>
            <motion.div initial={{y:100, opacity:0}}
            whileInView={{y:0, opacity:1, transition:{duration:1, delay:0.4}}}
            viewport={{once: true}} className='flex items-center justify-center rounded-full mb-4 sm:grid sm:gap-5'>
                <div className='flex w-60 h-25 rounded-2xl border-2 border-solid border-dark border-r-4 border-b-4 bg-light p-6 mr-4 dark:bg-dark dark:border-light sm:mr-0'>
                    <PremierePro className={"w-12 h-12 items-start mx-1 my-.5"}/>
                    <div>
                        <h1 className='font-bold text-lg text-center ml-2 text-dark dark:text-light'>Premiere&nbsp;Pro</h1>
                        <h1 className='font-semibold text-1xl text-center ml-2 text-dark dark:text-light'>Advanced</h1>
                    </div>
                </div>
                <div className='flex w-60 h-25 rounded-2xl border-2 border-solid border-dark border-r-4 border-b-4 bg-light p-6 dark:bg-dark dark:border-light'>
                    <AfterEffects className={"w-12 h-12 items-start mx-1 my-.5"}/>
                    <div>
                        <h1 className='font-bold text-lg text-center ml-2 text-dark dark:text-light'>After&nbsp;Effects</h1>
                        <h1 className='font-semibold text-1xl text-center ml-2 text-dark dark:text-light'>Beginner</h1>
                    </div>
                </div>
            </motion.div>
            <motion.div initial={{y:100, opacity:0}}
            whileInView={{y:0, opacity:1, transition:{duration:1, delay:0.6}}}
            viewport={{once: true}} className='flex items-center justify-center rounded-full mb-4 sm:grid sm:gap-5'>
                <div className='flex w-60 h-25 rounded-2xl border-2 border-solid border-dark border-r-4 border-b-4 bg-light p-7 mr-4 dark:bg-dark dark:border-light sm:mr-0'>
                    <Photoshop className={"w-12 h-12 items-start mx-1 my-.5"}/>
                    <div>
                        <h1 className='font-bold text-xl text-center ml-2 text-dark dark:text-light'>Photoshop</h1>
                        <h1 className='font-semibold text-1xl text-center ml-2 text-dark dark:text-light'>Beginner</h1>
                    </div>
                </div>
                <div className='flex w-60 h-25 rounded-2xl border-2 border-solid border-dark border-r-4 border-b-4 bg-light p-7 dark:bg-dark dark:border-light'>
                    <Canva className={"w-12 h-12 items-start mx-1 my-.5"}/>
                    <div>
                        <h1 className='font-bold text-2xl text-center ml-2 text-dark dark:text-light'>Canva</h1>
                        <h1 className='font-semibold text-1xl text-center ml-2 text-dark dark:text-light'>Intermediate</h1>
                    </div>
                </div>
            </motion.div>
        </div>
    </div>
    

    </>
  )
}

export default Skills
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import profilePic from "../../public/images/profile/dp-2.png";
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';
import { LinkArrow } from '@/components/Icons';
import HireMe from '@/components/HireMe';
import TransitionEffect from '@/components/TransitionEffect';

export default function Home() {
  return (
    <>
      <Head>
        <title>John Martin Gasangue</title>
        <meta name="description" content="Generated by create next app" />        
      </Head>
      <TransitionEffect />
      <main className='flex items-center text-dark w-full min-h-screen dark:text-light'>
        <Layout className='pt-0 md:pt-16 sm:pt-8'>
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className='w-1/2 md:w-full'>
              <Image src={profilePic} alt="JohnMartin" className='w-[85%] h-auto lg:hidden md:inline-block md:w-full' priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"/>
            </div>
            <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
              <AnimatedText text="Hello World! I'm" className='!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl' />
              <AnimatedText text="John Martin Gasangue" className='!text-5xl !text-left xl:!text-4xl lg:!text-center lg:!text-5xl md:!text-4xl sm:!text-2xl' />
              <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>
                A fresh graduate of Bachelor of Science in Information Technology from St. Dominic College of Asia, Bacoor City, Cavite, Philippines.
              </p>
              <div className='flex items-center self-start mt-2 lg:self-center'>
                <Link href="/Gasangue, John Martin.pdf" target={"_blank"} className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base" download={true}>
                  Resume <LinkArrow className={`w-6 xl:w-4 ml-1`}/>
                </Link>
                <Link href="jmgasangue@gmail.com" target={"_blank"} className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe/>
      </main>
    </>
  )
}

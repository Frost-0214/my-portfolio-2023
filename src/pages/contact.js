/* eslint-disable react-hooks/rules-of-hooks */
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import AnimatedText from '@/components/AnimatedText';
import TransitionEffect from '@/components/TransitionEffect';
import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import ContactExperience from '@/models/contact/ContactExperience';


const contact = () => {
    const formRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Show loading state

        try {
            await emailjs.sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
                formRef.current,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
            );


            // Reset form and stop loading
            setForm({ name: "", email: "", message: "" });
        } catch (error) {
            console.error("EmailJS Error:", error); // Optional: show toast
        } finally {
            setLoading(false); // Always stop loading, even on error
        }
    };
    return (
        <>
            <Head>
                <title>JM | Contact</title>
                <meta name="description" content="any description" />
            </Head>
            <TransitionEffect />
            <main className="flex w-full min-h-screen items-center justify-center dark:text-light">
                <Layout className="pt-8 md:pt-16">
                    <AnimatedText text="Let's Connect" className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8' />
                    <div className="flex items-stretch flex-row md:flex-col md:items-center md:justify-center justify-between w-full gap-6">
                        <div className='w-1/2 md:w-full flex justify-center'>
                            <div className="flex justify-center items-center border border-light bg-dark rounded-xl p-10">
                                <form
                                    ref={formRef}
                                    onSubmit={handleSubmit}
                                    className="w-full flex flex-col gap-7"
                                >
                                    <div>
                                        <label htmlFor="name" className='text-light'>What&apos;s your name?</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={form.name}
                                            onChange={handleChange}
                                            placeholder="Juan Dela Cruz"
                                            required
                                            className="w-full border border-light bg-dark rounded-md px-4 py-2 mt-1"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className='text-light'>What&apos;s your email?</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={form.email}
                                            onChange={handleChange}
                                            placeholder="juandelakruz@gmail.com"
                                            required
                                            className="w-full border border-light bg-dark rounded-md px-4 py-2 mt-1"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="message" className='text-light'>How can I help you?</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={form.message}
                                            onChange={handleChange}
                                            placeholder="Hi John, can you help me with..."
                                            rows="5"
                                            required
                                            className="w-full border border-light bg-dark rounded-md px-4 py-2 mt-1"
                                        />
                                    </div>
                                    <button type="submit" disabled={loading} className="relative z-20 cursor-pointer group">
                                        <div className="px-4 py-4 rounded-lg border-light bg-black flex justify-center items-center relative cursor-pointer overflow-hidden">
                                            <div className="absolute -right-10 top-1/2 -translate-y-1/2 w-[120%] h-[120%] origin-center rounded-full bg-light transition-all duration-500 group-hover:w-10 group-hover:h-10 group-hover:right-10" />
                                            <p className="uppercase md:text-sm text-dark transition-all duration-500 transform group-hover:translate-x-[-1.5rem] xl:translate-x-0 group-hover:text-light">
                                                {loading ? "Sending..." : "Send Message"}
                                            </p>

                                            <div className="w-10 h-10 rounded-full absolute right-10 top-1/2 -translate-y-1/2 flex justify-center items-center overflow-hidden opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                                                <Image
                                                    src="/images/svgs/arrow-down.svg"
                                                    alt="arrow"
                                                    width={20}
                                                    height={20}
                                                    className="w-5 h-5 animate-bounce"
                                                />
                                            </div>
                                        </div>
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className='w-1/2 md:w-full flex justify-center md:mt-6 md:min-h-96'>
                            <div className="bg-[#cd7c2e] w-full h-full hover:cursor-grab rounded-3xl overflow-hidden">
                                <ContactExperience />
                            </div>
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    )
}

export default contact
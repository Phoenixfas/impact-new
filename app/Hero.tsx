import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import HeroSlider from '@/components/HeroSlider'
import { FaCalendarAlt } from 'react-icons/fa';

export default function Hero() {
    return (
        <div className='relative w-full h-screen flex flex-col'>
            <div className="absolute left-0 top-0 w-full h-full">
                <div className="absolute left-0 bottom-0 -translate-x-1/2 translate-y-1/2 w-[1000px] h-[1000px] bg-[radial-gradient(circle,_var(--tertiary)0%,_var(--secondary)20%,_transparent_70%)] blur-lg opacity-75 rounded-full"></div>
                <div className="absolute right-0 bottom-0 translate-x-1/2 translate-y-1/2 w-[1000px] h-[1000px] bg-[radial-gradient(circle,_var(--tertiary)0%,_var(--secondary)20%,_transparent_70%)] blur-lg opacity-75 rounded-full"></div>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[radial-gradient(circle,_var(--tertiary)0%,_var(--secondary)20%,_transparent_70%)] blur-lg opacity-75 rounded-full"></div>
            </div>
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full">
                <HeroSlider />
            </div>
            <video className='absolute top-0 left-0 w-full h-full object-cover bg-transparent' autoPlay loop muted playsInline controls={false}>
                <source src="/videos/output.webm" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className="w-full px-5 xl:px-20 ">
                <div className={`relative w-full flex justify-between items-start garet py-5`}>
                    <div className="w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] flex items-center justify-center rounded-full overflow-hidden">
                        <Image src={"/logo_t_white.svg"} alt="logo" width={200} height={200} className="absolute w-[150px] h-[150px] object-contain animate-spin-slow" />
                        <Image src={"/logo_g_white.svg"} alt="logo" width={200} height={200} className="w-[150px] h-[150px] object-contain" />
                    </div>

                    <div className="hidden lg:flex items-center text-xl translate-y-5">
                        <Link href={"/contact"} className={`px-7 py-4 rounded-xl font-bold border border-white text-white bg-transparent hover:text-primary hover:bg-white duration-300 garet flex items-center gap-2`}><FaCalendarAlt /> Let&apos;s Start Planning</Link>
                    </div>
                </div>
            </div>


            <div className="relative pb-20 px-5 md:px-20 w-full h-full flex items-end justify-center">
                <div className="relative w-full h-full flex items-end justify-between text-white text-7xl leading-[5rem] tracking-widest font-black k2d-extrabold">
                    <h2 className='max-w-lg'>Creating Memorable</h2>
                    <h2 className='text-right max-w-lg'>Meaningful Experiences</h2>
                </div>
            </div>

        </div>
    )
}

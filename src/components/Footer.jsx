'use client'
import React, { useState } from 'react'
import Image from 'next/image';
import PlayStore from '../../public/assets/PlayStore_Mobile.png'
import AppleStore from '../../public/assets/AppleStore_Mobile.png'
import QR from '../../public/assets/QR.png'
import spacezLogo from '../../public/assets/spacezLogo.png'
import Link from 'next/link';

const Footer = () => {

    const [isOpen, setIsOpen] = useState(true)

    const popularSearches = [
        'affordable luxury villas in bangalore',
        'affordable villas in bangalore',
        'affordable villas in central bangalore',
        'bangalore homestays for long weekends',
        'bangalore luxury villa with private pool',
        'bangalore villas for corporate meetings',
        'bangalore villas for corporate stays',
        'bangalore villas for couples',
        'bangalore villas for extended family',
        'bangalore villas for family gatherings',
        'bangalore villas for private events',
        'bangalore villas for private parties',
        'bangalore villas for romantic escapes',
        'bangalore villas for romantic weekends',
        'bangalore villas for short term stay',
        'bangalore villas for small events',
        'bangalore villas for staycations',
        'bangalore villas for weekend breaks',
        'bangalore villas near business district',
        'bangalore villas near business hubs'
    ];

    return (
        <>
            <div className="bg-[#FBF7F2]">
                <div className="mx-auto max-w-screen-2xl px-5 py-5 lg:px-10 lg:py-10 xl:px-20 xl:py-14">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 justify-start">
                        <div>
                            <div className="flex justify-start">
                                <Image src={spacezLogo} alt='logo' />
                            </div>

                            <p className="mt-5 max-w-md text-start leading-relaxed font-lexend text-sm text-[#51311F] sm:max-w-xs sm:text-left">
                                the page ends here, but your journey to prime urban spaces and luxury stays begins with spacez. discover our homestays, hostels, and luxe hotels across india&apos;s most sought-after locations. your next profitable adventure awaits.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-4 md:gap-8 md:grid-cols-4 lg:col-span-2">
                            <div className="text-start sm:text-left">
                                <p className="font-semibold text-[#9B938A] font-lexend">spacez</p>

                                <ul className="mt-3 space-y-1 text-sm font-lexend text-[#65605A]">
                                    <li>
                                        <a href="#">
                                            home
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#">
                                            our story
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#">
                                            partner with us
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#">
                                            events
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#">
                                            why choose us?
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#">
                                            compliance
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#">
                                            faq
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <hr className='block md:hidden' />

                            <div className="text-start sm:text-left">
                                <p className="font-semibold text-[#9B938A] font-lexend">support</p>

                                <ul className="mt-3 space-y-1 text-sm font-lexend text-[#65605A]">
                                    <li>
                                        <a href="#">
                                            cancellation and refund
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#"> contact </a>
                                    </li>

                                    <li>
                                        <a href="#"> download app </a>
                                    </li>
                                </ul>
                            </div>

                            <hr className='block md:hidden' />

                            <div className="text-start sm:text-left mb-4 md:mb-0">
                                <p className="font-semibold text-[#9B938A] font-lexend">contact</p>

                                <ul className="mt-3 space-y-1 text-sm font-lexend text-[#65605A]">
                                    <li>
                                        <a href="#"> hello@spacez.co </a>
                                    </li>

                                    <li>
                                        <a href="#"> call us: +91 860 8600 718 </a>
                                    </li>

                                    <li>
                                        <a href="#"> address: 62/1, 9th Main Rd, Stage 2, Eshwara Layout, Indiranagar, Bengaluru, Karnataka 560038 </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="text-start sm:text-left md:block hidden">
                                <p className="font-semibold text-[#9B938A] font-lexend">Download our app</p>

                                <ul className="mt-3 space-y-4 text-sm">
                                    <li>
                                        <a
                                            className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                                            href="#"
                                        >
                                            <Image src={PlayStore} alt='PlayStore' />

                                            <Image src={AppleStore} alt='AppleStore' />
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                                            href="#"
                                        >
                                            <Image src={QR} alt='QR' />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <hr className='block md:hidden' />

                    {/* Popular Searches Section */}
                    <div className="mt-4 md:mt-12">
                        <div onClick={() => setIsOpen(!isOpen)} className="text-[#9B938A] font-semibold font-lexend flex justify-center space-x-3 items-center mb-4 cursor-pointer">
                            <p>
                                popular searches
                            </p>
                            {
                                isOpen ?
                                    <div className='mt-1'>
                                        <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.53479 6.48242L6.5003 1.5169L11.4658 6.48242" stroke="#9B938A" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    :
                                    <div className='mt-1'>
                                        <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.4655 1.51709L6.49994 6.48261L1.53442 1.51709" stroke="#9B938A" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                            }

                        </div>
                        {
                            isOpen ?
                                <>
                                    <hr className='mt-5 mb-5' />
                                    <div className="text-[#9B938A] text-xs font-lexend text-center md:text-start">
                                        {popularSearches.map((search, index) => (
                                            <React.Fragment key={search}>
                                                <Link href='/' className="hover:text-[#d1b99d]">
                                                    {search}
                                                </Link>
                                                {index < popularSearches.length - 1 && <span className="mx-1">|</span>}
                                            </React.Fragment>
                                        ))}
                                    </div>
                                    <hr className='block md:hidden mt-5 mb-5' />
                                </>
                                : ""
                        }
                    </div>
                    <div className='md:hidden w-full flex justify-center items-center space-x-4 pt-5'>
                        <Link href='/'>
                            <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 0.833008C4.92525 0.833008 0 5.75826 0 11.833C0 17.9078 4.92525 22.833 11 22.833C17.0748 22.833 22 17.9078 22 11.833C22 5.75826 17.0748 0.833008 11 0.833008ZM6.87133 5.78576C7.64317 5.78576 8.15742 6.30001 8.15742 6.98567C8.15742 7.67134 7.64317 8.18559 6.78608 8.18559C6.01425 8.18651 5.5 7.67134 5.5 6.98567C5.5 6.30001 6.01425 5.78576 6.87133 5.78576ZM8.25 16.4163H5.5V9.08301H8.25V16.4163ZM17.4167 16.4163H14.828V12.4087C14.828 11.3004 14.1378 11.0447 13.8793 11.0447C13.6208 11.0447 12.7572 11.2152 12.7572 12.4087C12.7572 12.5792 12.7572 16.4163 12.7572 16.4163H10.0833V9.08301H12.7582V10.106C13.1028 9.50926 13.7931 9.08301 15.0874 9.08301C16.3818 9.08301 17.4167 10.106 17.4167 12.4087V16.4163Z" fill="#51311F" />
                            </svg>
                        </Link>
                        <Link href='/'>
                            <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect y="0.833008" width="22" height="22" rx="11" fill="#51311F" />
                                <path d="M13.9764 13.1276C13.8469 13.0629 13.0058 12.6746 12.8764 12.6099C12.7469 12.5452 12.6175 12.5452 12.4881 12.6746C12.3587 12.804 12.0999 13.1923 11.9705 13.3217C11.9058 13.4511 11.7764 13.4511 11.6469 13.3864C11.194 13.1923 10.7411 12.9334 10.3528 12.6099C10.0293 12.2864 9.70577 11.8982 9.44694 11.5099C9.38224 11.3805 9.44694 11.2511 9.51165 11.1864C9.57636 11.1217 9.64106 10.9923 9.77047 10.9276C9.83518 10.8629 9.89989 10.7334 9.89989 10.6687C9.96459 10.604 9.96459 10.4746 9.89989 10.4099C9.83518 10.3452 9.51165 9.56874 9.38224 9.24521C9.31753 8.79227 9.18812 8.79227 9.05871 8.79227H8.73518C8.60577 8.79227 8.41165 8.92168 8.34694 8.98639C7.95871 9.37462 7.76459 9.82756 7.76459 10.3452C7.8293 10.9276 8.02341 11.5099 8.41165 12.0276C9.12341 13.0629 10.0293 13.904 11.1293 14.4217C11.4528 14.5511 11.7117 14.6805 12.0352 14.7452C12.3587 14.8746 12.6822 14.8746 13.0705 14.8099C13.5234 14.7452 13.9116 14.4217 14.1705 14.0334C14.2999 13.7746 14.2999 13.5158 14.2352 13.257L13.9764 13.1276ZM15.594 7.23933C13.0705 4.7158 8.994 4.7158 6.47047 7.23933C4.39989 9.30992 4.01165 12.4805 5.43518 15.004L4.5293 18.304L7.95871 17.3982C8.9293 17.9158 9.96459 18.1746 10.9999 18.1746C14.5587 18.1746 17.4058 15.3276 17.4058 11.7687C17.4705 10.0864 16.7587 8.46874 15.594 7.23933ZM13.8469 16.2982C13.0058 16.8158 12.0352 17.1393 10.9999 17.1393C10.0293 17.1393 9.12341 16.8805 8.28224 16.4276L8.08812 16.2982L6.08224 16.8158L6.59988 14.8746L6.47047 14.6805C4.91753 12.0923 5.694 8.85697 8.21753 7.23933C10.7411 5.62168 13.9764 6.46286 15.5293 8.92168C17.0822 11.4452 16.3705 14.7452 13.8469 16.2982Z" fill="white" />
                            </svg>
                        </Link>
                        <Link href='/'>
                            <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 0.833008C4.93477 0.833008 0 5.76778 0 11.833C0 17.8982 4.93477 22.833 11 22.833C17.0652 22.833 22 17.8982 22 11.833C22 5.76778 17.0652 0.833008 11 0.833008ZM8.17894 4.21762H13.8194C16.4636 4.21762 18.6154 6.36856 18.6154 9.01194V14.6524C18.6154 17.2966 16.4644 19.4484 13.8211 19.4484H8.18059C5.53636 19.4484 3.38462 17.2975 3.38462 14.6541V9.0136C3.38462 6.36937 5.53555 4.21762 8.17894 4.21762ZM8.17894 5.90993C6.46886 5.90993 5.07692 7.30267 5.07692 9.0136V14.6541C5.07692 16.3641 6.46967 17.7561 8.18059 17.7561H13.8211C15.5311 17.7561 16.9231 16.3633 16.9231 14.6524V9.01194C16.9231 7.30187 15.5303 5.90993 13.8194 5.90993H8.17894ZM14.9498 7.31964C15.2612 7.31964 15.5134 7.5718 15.5134 7.88319C15.5134 8.19457 15.2612 8.44839 14.9498 8.44839C14.6384 8.44839 14.3846 8.19457 14.3846 7.88319C14.3846 7.5718 14.6384 7.31964 14.9498 7.31964ZM11 7.60224C13.3328 7.60224 15.2308 9.50016 15.2308 11.833C15.2308 14.1659 13.3328 16.0638 11 16.0638C8.66715 16.0638 6.76923 14.1659 6.76923 11.833C6.76923 9.50016 8.66715 7.60224 11 7.60224ZM11 9.29455C10.3268 9.29455 9.68109 9.56199 9.20504 10.038C8.72898 10.5141 8.46154 11.1598 8.46154 11.833C8.46154 12.5062 8.72898 13.1519 9.20504 13.628C9.68109 14.104 10.3268 14.3715 11 14.3715C11.6732 14.3715 12.3189 14.104 12.795 13.628C13.271 13.1519 13.5385 12.5062 13.5385 11.833C13.5385 11.1598 13.271 10.5141 12.795 10.038C12.3189 9.56199 11.6732 9.29455 11 9.29455Z" fill="#51311F" />
                            </svg>
                        </Link>
                    </div>
                    <div className='flex w-full flex-col justify-center items-center mt-10'>
                        <p className='font-lexend font-semibold text-[#51311F]'>
                            download our app
                        </p>
                        <div className='flex space-x-5 mt-2'>
                            <Image src={PlayStore} alt='playStore' />
                            <Image src={AppleStore} alt='appleStore' />
                        </div>
                    </div>
                    <div className='flex flex-col w-full justify-center items-center md:hidden font-lexend font-light mb-8 mt-8'>
                        <p className='text-xs flex items-center'>
                            privacy policy
                            &nbsp;
                            &nbsp;
                            <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="4" height="4" fill="#51311F" />
                            </svg>
                            &nbsp;
                            &nbsp;
                            terms & conditions
                        </p>
                        <p className='text-[#A65E37] text-[10px] mt-2 text-center'>
                            ©2024 SPACEZ HOSPITALITY AND FOODS PRIVATE LIMITED.
                        </p>
                    </div>
                </div>
                <div className='md:block hidden'>
                    <hr />
                    <div className="text-start px-5 py-5 lg:px-10 lg:py-8 xl:px-20 xl:py-10 sm:flex sm:justify-between sm:text-left">
                        <div className='flex space-x-4'>
                            <Link href="#" className="">
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11 0C4.92525 0 0 4.92525 0 11C0 17.0748 4.92525 22 11 22C17.0748 22 22 17.0748 22 11C22 4.92525 17.0748 0 11 0ZM6.87133 4.95275C7.64317 4.95275 8.15742 5.467 8.15742 6.15267C8.15742 6.83833 7.64317 7.35258 6.78608 7.35258C6.01425 7.3535 5.5 6.83833 5.5 6.15267C5.5 5.467 6.01425 4.95275 6.87133 4.95275ZM8.25 15.5833H5.5V8.25H8.25V15.5833ZM17.4167 15.5833H14.828V11.5757C14.828 10.4674 14.1378 10.2117 13.8793 10.2117C13.6208 10.2117 12.7572 10.3822 12.7572 11.5757C12.7572 11.7462 12.7572 15.5833 12.7572 15.5833H10.0833V8.25H12.7582V9.273C13.1028 8.67625 13.7931 8.25 15.0874 8.25C16.3818 8.25 17.4167 9.273 17.4167 11.5757V15.5833Z" fill="#51311F" />
                                </svg>
                            </Link>
                            <Link href="#" className="">
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="22" height="22" rx="11" fill="#51311F" />
                                    <path d="M13.9764 12.2946C13.8469 12.2298 13.0058 11.8416 12.8764 11.7769C12.7469 11.7122 12.6175 11.7122 12.4881 11.8416C12.3587 11.971 12.0999 12.3593 11.9705 12.4887C11.9058 12.6181 11.7764 12.6181 11.6469 12.5534C11.194 12.3593 10.7411 12.1004 10.3528 11.7769C10.0293 11.4534 9.70577 11.0651 9.44694 10.6769C9.38224 10.5475 9.44694 10.4181 9.51165 10.3534C9.57636 10.2887 9.64106 10.1593 9.77047 10.0946C9.83518 10.0298 9.89989 9.90044 9.89989 9.83573C9.96459 9.77102 9.96459 9.64161 9.89989 9.57691C9.83518 9.5122 9.51165 8.73573 9.38224 8.4122C9.31753 7.95926 9.18812 7.95926 9.05871 7.95926H8.73518C8.60577 7.95926 8.41165 8.08867 8.34694 8.15338C7.95871 8.54161 7.76459 8.99455 7.76459 9.5122C7.8293 10.0946 8.02341 10.6769 8.41165 11.1946C9.12341 12.2298 10.0293 13.071 11.1293 13.5887C11.4528 13.7181 11.7117 13.8475 12.0352 13.9122C12.3587 14.0416 12.6822 14.0416 13.0705 13.9769C13.5234 13.9122 13.9116 13.5887 14.1705 13.2004C14.2999 12.9416 14.2999 12.6828 14.2352 12.424L13.9764 12.2946ZM15.594 6.40632C13.0705 3.88279 8.994 3.88279 6.47047 6.40632C4.39989 8.47691 4.01165 11.6475 5.43518 14.171L4.5293 17.471L7.95871 16.5651C8.9293 17.0828 9.96459 17.3416 10.9999 17.3416C14.5587 17.3416 17.4058 14.4946 17.4058 10.9357C17.4705 9.25338 16.7587 7.63573 15.594 6.40632ZM13.8469 15.4651C13.0058 15.9828 12.0352 16.3063 10.9999 16.3063C10.0293 16.3063 9.12341 16.0475 8.28224 15.5946L8.08812 15.4651L6.08224 15.9828L6.59988 14.0416L6.47047 13.8475C4.91753 11.2593 5.694 8.02397 8.21753 6.40632C10.7411 4.78867 13.9764 5.62985 15.5293 8.08867C17.0822 10.6122 16.3705 13.9122 13.8469 15.4651Z" fill="#F9F8F7" />
                                </svg>
                            </Link>
                            <Link href="#" className="">
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11 0C4.93477 0 0 4.93477 0 11C0 17.0652 4.93477 22 11 22C17.0652 22 22 17.0652 22 11C22 4.93477 17.0652 0 11 0ZM8.17894 3.38462H13.8194C16.4636 3.38462 18.6154 5.53555 18.6154 8.17894V13.8194C18.6154 16.4636 16.4644 18.6154 13.8211 18.6154H8.18059C5.53636 18.6154 3.38462 16.4644 3.38462 13.8211V8.18059C3.38462 5.53636 5.53555 3.38462 8.17894 3.38462ZM8.17894 5.07692C6.46886 5.07692 5.07692 6.46967 5.07692 8.18059V13.8211C5.07692 15.5311 6.46967 16.9231 8.18059 16.9231H13.8211C15.5311 16.9231 16.9231 15.5303 16.9231 13.8194V8.17894C16.9231 6.46886 15.5303 5.07692 13.8194 5.07692H8.17894ZM14.9498 6.48663C15.2612 6.48663 15.5134 6.7388 15.5134 7.05018C15.5134 7.36157 15.2612 7.61538 14.9498 7.61538C14.6384 7.61538 14.3846 7.36157 14.3846 7.05018C14.3846 6.7388 14.6384 6.48663 14.9498 6.48663ZM11 6.76923C13.3328 6.76923 15.2308 8.66715 15.2308 11C15.2308 13.3328 13.3328 15.2308 11 15.2308C8.66715 15.2308 6.76923 13.3328 6.76923 11C6.76923 8.66715 8.66715 6.76923 11 6.76923ZM11 8.46154C10.3268 8.46154 9.68109 8.72898 9.20504 9.20504C8.72898 9.68109 8.46154 10.3268 8.46154 11C8.46154 11.6732 8.72898 12.3189 9.20504 12.795C9.68109 13.271 10.3268 13.5385 11 13.5385C11.6732 13.5385 12.3189 13.271 12.795 12.795C13.271 12.3189 13.5385 11.6732 13.5385 11C13.5385 10.3268 13.271 9.68109 12.795 9.20504C12.3189 8.72898 11.6732 8.46154 11 8.46154Z" fill="#51311F" />
                                </svg>
                            </Link>
                        </div>

                        <p className="mt-4 flex items-center text-xs lg:text-sm font-lexend text-[#51311F] font-normal sm:order-first sm:mt-0">
                            ©2024 SPACEZ HOSPITALITY AND FOODS PRIVATE LIMITED.
                            &nbsp;
                            &nbsp;
                            <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="4" height="4" fill="#51311F" />
                            </svg>
                            &nbsp;
                            &nbsp;
                            privacy policy
                            &nbsp;
                            &nbsp;
                            <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="4" height="4" fill="#51311F" />
                            </svg>
                            &nbsp;
                            &nbsp;
                            terms & conditions
                        </p>
                    </div>
                </div>
                <hr className='block md:hidden'/>
                <div className='flex w-full flex-col bg-white justify-center items-center space-y-5 font-lexend font-medium md:hidden px-5 py-5'>
                    <p className='text-[#33312F] text-center'>
                        ready to unlock your property’s value?
                    </p>
                    <button className='w-full py-3 bg-[#BD693D] text-[#FAF4EE] border border-[#E0AB8F]'>
                        list your home
                    </button>
                </div>
            </div>
        </>
    )
}

export default Footer
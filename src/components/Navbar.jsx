'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import Logo from '../../public/assets/spacez_logo.png'
import Link from 'next/link'

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <div className='lg:block hidden'>
                <div className='flex w-full font-lexend text-[#65605A] border justify-between px-10 xl:px-20 py-5 bg-white'>
                    <Image src={Logo} alt='Logo' />

                    <div className='flex space-x-4'>
                        <button className='flex border border-[#9B938A] rounded-sm space-x-3 px-4 py-2 items-center justify-center'>
                            <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.30775 9L6 12.3077L2.69225 9L3.4 8.29225L5.5 10.3808V5.69225H6.5V10.3808L8.6 8.29225L9.30775 9ZM4.23075 17.6538H7.76925V16.8845H4.23075V17.6538ZM1.6155 20C1.15517 20 0.770833 19.8458 0.4625 19.5375C0.154167 19.2292 0 18.8448 0 18.3845V1.6155C0 1.15517 0.154167 0.770833 0.4625 0.4625C0.770833 0.154167 1.15517 0 1.6155 0H10.3845C10.8448 0 11.2292 0.154167 11.5375 0.4625C11.8458 0.770833 12 1.15517 12 1.6155V18.3845C12 18.8448 11.8458 19.2292 11.5375 19.5375C11.2292 19.8458 10.8448 20 10.3845 20H1.6155ZM1 15.5385V18.3845C1 18.5385 1.06408 18.6796 1.19225 18.8078C1.32042 18.9359 1.4615 19 1.6155 19H10.3845C10.5385 19 10.6796 18.9359 10.8077 18.8078C10.9359 18.6796 11 18.5385 11 18.3845V15.5385H1ZM1 14.5385H11V3.5H1V14.5385ZM1 2.5H11V1.6155C11 1.4615 10.9359 1.32042 10.8077 1.19225C10.6796 1.06408 10.5385 1 10.3845 1H1.6155C1.4615 1 1.32042 1.06408 1.19225 1.19225C1.06408 1.32042 1 1.4615 1 1.6155V2.5Z" fill="#65605A" />
                            </svg>
                            <p>
                                get the spacez app
                            </p>
                        </button>
                        <button className='flex border border-[#9B938A] rounded-sm space-x-3 px-4 py-2 items-center justify-center'>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M13.3358 2.69417C11.9233 1.28 10.045 0.500833 8.04417 0.5C3.92083 0.5 0.564167 3.85583 0.5625 7.98083C0.5625 9.29917 0.906666 10.5858 1.56083 11.7208L0.5 15.5967L4.46583 14.5558C5.55917 15.1517 6.78917 15.4658 8.04083 15.4667H8.04417C12.1667 15.4667 15.5233 12.1108 15.525 7.98583C15.525 5.9875 14.7483 4.10833 13.3358 2.69417ZM8.04417 14.2042H8.04167C6.92583 14.2033 5.83167 13.9042 4.87667 13.3367L4.65 13.2017L2.29667 13.8192L2.92417 11.525L2.77667 11.29C2.15417 10.3 1.82583 9.15583 1.82583 7.98083C1.8275 4.5525 4.61667 1.76333 8.04667 1.76333C9.7075 1.76417 11.2683 2.41167 12.4425 3.58667C13.6158 4.7625 14.2625 6.32417 14.2617 7.98583C14.26 11.4142 11.4708 14.2042 8.04417 14.2042ZM11.455 9.54667C11.2675 9.4525 10.3492 9.00083 10.1775 8.93833C10.0067 8.87583 9.8825 8.845 9.7575 9.03167C9.6325 9.21833 9.27417 9.63917 9.165 9.76417C9.05583 9.88917 8.94667 9.90417 8.76 9.81083C8.57333 9.7175 7.97083 9.52 7.25667 8.88333C6.70083 8.3875 6.32583 7.77583 6.21667 7.58833C6.1075 7.40083 6.205 7.3 6.29917 7.20667C6.38333 7.12333 6.48583 6.98833 6.57917 6.87917C6.6725 6.77 6.70333 6.6925 6.76583 6.5675C6.82833 6.4425 6.7975 6.33333 6.75 6.24C6.70333 6.14583 6.32917 5.22583 6.17333 4.85167C6.0225 4.48917 5.86833 4.5375 5.75333 4.5325C5.645 4.5275 5.52 4.52583 5.39583 4.52583C5.27083 4.52583 5.06833 4.5725 4.89667 4.75917C4.725 4.94667 4.2425 5.39833 4.2425 6.31833C4.2425 7.23833 4.9125 8.1275 5.00583 8.2525C5.09917 8.3775 6.32417 10.265 8.19917 11.075C8.64583 11.2675 8.99417 11.3825 9.265 11.4692C9.7125 11.6117 10.12 11.5908 10.4425 11.5433C10.8017 11.49 11.5483 11.0917 11.7042 10.655C11.86 10.2183 11.86 9.84417 11.8133 9.76583C11.7667 9.6875 11.6408 9.64 11.455 9.54667Z" fill="#65605A" />
                            </svg>
                            <p>
                                8608600718
                            </p>
                        </button>
                    </div>
                </div>
            </div>
            <div className='lg:hidden block'>
                <div className='flex w-full font-lexend text-[#65605A] border justify-between px-5 py-5 bg-white'>
                    <Image src={Logo} className='h-8 w-32' alt='Logo' />

                    <div className='flex space-x-4'>
                        <button onClick={() => setIsOpen(true)} className='flex items-center justify-center'>
                            <svg width="22" height="17" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.76823 0.666573C1.65701 0.665284 1.54659 0.682115 1.44339 0.716087C1.34018 0.750059 1.24625 0.800495 1.16705 0.864463C1.08785 0.928431 1.02495 1.00466 0.982026 1.08871C0.939098 1.17276 0.916992 1.26296 0.916992 1.35407C0.916992 1.44518 0.939098 1.53539 0.982026 1.61944C1.02495 1.70349 1.08785 1.77971 1.16705 1.84368C1.24625 1.90765 1.34018 1.95809 1.44339 1.99206C1.54659 2.02603 1.65701 2.04286 1.76823 2.04157H20.2324C20.3436 2.04286 20.4541 2.02603 20.5573 1.99206C20.6605 1.95809 20.7544 1.90765 20.8336 1.84368C20.9128 1.77971 20.9757 1.70349 21.0186 1.61944C21.0616 1.53539 21.0837 1.44518 21.0837 1.35407C21.0837 1.26296 21.0616 1.17276 21.0186 1.08871C20.9757 1.00466 20.9128 0.928431 20.8336 0.864463C20.7544 0.800495 20.6605 0.750059 20.5573 0.716087C20.4541 0.682115 20.3436 0.665284 20.2324 0.666573H1.76823ZM1.76823 7.99991C1.65701 7.99862 1.54659 8.01545 1.44339 8.04942C1.34018 8.08339 1.24625 8.13383 1.16705 8.1978C1.08785 8.26177 1.02495 8.33799 0.982026 8.42204C0.939098 8.50609 0.916992 8.5963 0.916992 8.68741C0.916992 8.77852 0.939098 8.86872 0.982026 8.95277C1.02495 9.03682 1.08785 9.11305 1.16705 9.17702C1.24625 9.24098 1.34018 9.29142 1.44339 9.32539C1.54659 9.35936 1.65701 9.37619 1.76823 9.37491H20.2324C20.3436 9.37619 20.4541 9.35936 20.5573 9.32539C20.6605 9.29142 20.7544 9.24098 20.8336 9.17702C20.9128 9.11305 20.9757 9.03682 21.0186 8.95277C21.0616 8.86872 21.0837 8.77852 21.0837 8.68741C21.0837 8.5963 21.0616 8.50609 21.0186 8.42204C20.9757 8.33799 20.9128 8.26177 20.8336 8.1978C20.7544 8.13383 20.6605 8.08339 20.5573 8.04942C20.4541 8.01545 20.3436 7.99862 20.2324 7.99991H1.76823ZM1.76823 14.8749C1.65701 14.8736 1.54659 14.8904 1.44339 14.9244C1.34018 14.9584 1.24625 15.0088 1.16705 15.0728C1.08785 15.1368 1.02495 15.213 0.982026 15.297C0.939098 15.3811 0.916992 15.4713 0.916992 15.5624C0.916992 15.6535 0.939098 15.7437 0.982026 15.8278C1.02495 15.9118 1.08785 15.988 1.16705 16.052C1.24625 16.116 1.34018 16.1664 1.44339 16.2004C1.54659 16.2344 1.65701 16.2512 1.76823 16.2499H20.2324C20.3436 16.2512 20.4541 16.2344 20.5573 16.2004C20.6605 16.1664 20.7544 16.116 20.8336 16.052C20.9128 15.988 20.9757 15.9118 21.0186 15.8278C21.0616 15.7437 21.0837 15.6535 21.0837 15.5624C21.0837 15.4713 21.0616 15.3811 21.0186 15.297C20.9757 15.213 20.9128 15.1368 20.8336 15.0728C20.7544 15.0088 20.6605 14.9584 20.5573 14.9244C20.4541 14.8904 20.3436 14.8736 20.2324 14.8749H1.76823Z" fill="#51311F" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {
                isOpen ?
                    <div className='bg-white -mt-20 absolute z-50'>
                        <div className="h-screen transition-all duration-500 ease-out">
                            <div className='flex w-screen justify-between items-center px-6 py-4'>
                                <div>
                                    <Image src={Logo} className='h-8 w-32' alt='Logo' />
                                </div>
                                <div onClick={() => { setIsOpen(false) }} className='cursor-pointer transform transition-transform duration-100 ease-in-out hover:scale-110'>
                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 1L14 14" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M1 14L14 1" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                            </div>

                            <hr />

                            <nav className='flex flex-col justify-center items-center h-screen text-sm font-semibold space-y-10 -mt-14'>
                                <button className='flex border border-[#9B938A] rounded-sm space-x-3 px-4 py-2 items-center justify-center'>
                                    <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.30775 9L6 12.3077L2.69225 9L3.4 8.29225L5.5 10.3808V5.69225H6.5V10.3808L8.6 8.29225L9.30775 9ZM4.23075 17.6538H7.76925V16.8845H4.23075V17.6538ZM1.6155 20C1.15517 20 0.770833 19.8458 0.4625 19.5375C0.154167 19.2292 0 18.8448 0 18.3845V1.6155C0 1.15517 0.154167 0.770833 0.4625 0.4625C0.770833 0.154167 1.15517 0 1.6155 0H10.3845C10.8448 0 11.2292 0.154167 11.5375 0.4625C11.8458 0.770833 12 1.15517 12 1.6155V18.3845C12 18.8448 11.8458 19.2292 11.5375 19.5375C11.2292 19.8458 10.8448 20 10.3845 20H1.6155ZM1 15.5385V18.3845C1 18.5385 1.06408 18.6796 1.19225 18.8078C1.32042 18.9359 1.4615 19 1.6155 19H10.3845C10.5385 19 10.6796 18.9359 10.8077 18.8078C10.9359 18.6796 11 18.5385 11 18.3845V15.5385H1ZM1 14.5385H11V3.5H1V14.5385ZM1 2.5H11V1.6155C11 1.4615 10.9359 1.32042 10.8077 1.19225C10.6796 1.06408 10.5385 1 10.3845 1H1.6155C1.4615 1 1.32042 1.06408 1.19225 1.19225C1.06408 1.32042 1 1.4615 1 1.6155V2.5Z" fill="#65605A" />
                                    </svg>
                                    <p>
                                        get the spacez app
                                    </p>
                                </button>
                                <button className='flex border border-[#9B938A] rounded-sm space-x-3 px-9 py-2 items-center justify-center'>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M13.3358 2.69417C11.9233 1.28 10.045 0.500833 8.04417 0.5C3.92083 0.5 0.564167 3.85583 0.5625 7.98083C0.5625 9.29917 0.906666 10.5858 1.56083 11.7208L0.5 15.5967L4.46583 14.5558C5.55917 15.1517 6.78917 15.4658 8.04083 15.4667H8.04417C12.1667 15.4667 15.5233 12.1108 15.525 7.98583C15.525 5.9875 14.7483 4.10833 13.3358 2.69417ZM8.04417 14.2042H8.04167C6.92583 14.2033 5.83167 13.9042 4.87667 13.3367L4.65 13.2017L2.29667 13.8192L2.92417 11.525L2.77667 11.29C2.15417 10.3 1.82583 9.15583 1.82583 7.98083C1.8275 4.5525 4.61667 1.76333 8.04667 1.76333C9.7075 1.76417 11.2683 2.41167 12.4425 3.58667C13.6158 4.7625 14.2625 6.32417 14.2617 7.98583C14.26 11.4142 11.4708 14.2042 8.04417 14.2042ZM11.455 9.54667C11.2675 9.4525 10.3492 9.00083 10.1775 8.93833C10.0067 8.87583 9.8825 8.845 9.7575 9.03167C9.6325 9.21833 9.27417 9.63917 9.165 9.76417C9.05583 9.88917 8.94667 9.90417 8.76 9.81083C8.57333 9.7175 7.97083 9.52 7.25667 8.88333C6.70083 8.3875 6.32583 7.77583 6.21667 7.58833C6.1075 7.40083 6.205 7.3 6.29917 7.20667C6.38333 7.12333 6.48583 6.98833 6.57917 6.87917C6.6725 6.77 6.70333 6.6925 6.76583 6.5675C6.82833 6.4425 6.7975 6.33333 6.75 6.24C6.70333 6.14583 6.32917 5.22583 6.17333 4.85167C6.0225 4.48917 5.86833 4.5375 5.75333 4.5325C5.645 4.5275 5.52 4.52583 5.39583 4.52583C5.27083 4.52583 5.06833 4.5725 4.89667 4.75917C4.725 4.94667 4.2425 5.39833 4.2425 6.31833C4.2425 7.23833 4.9125 8.1275 5.00583 8.2525C5.09917 8.3775 6.32417 10.265 8.19917 11.075C8.64583 11.2675 8.99417 11.3825 9.265 11.4692C9.7125 11.6117 10.12 11.5908 10.4425 11.5433C10.8017 11.49 11.5483 11.0917 11.7042 10.655C11.86 10.2183 11.86 9.84417 11.8133 9.76583C11.7667 9.6875 11.6408 9.64 11.455 9.54667Z" fill="#65605A" />
                                    </svg>
                                    <p>
                                        8608600718
                                    </p>
                                </button>
                                <button className='bg-[#BD693D] text-[#FAF4EE] border border-[#E0AB8F] px-10 py-2'>
                                    List your home
                                </button>
                                <button className='bg-white text-[#51311F] border border-[#9B938A] px-14 py-2'>
                                    contact us
                                </button>
                            </nav>
                        </div>
                    </div> : ""
            }
        </>
    )
}

export default Navbar
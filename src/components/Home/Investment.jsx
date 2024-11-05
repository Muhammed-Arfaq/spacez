import React from 'react';
import icon_12 from '../../../public/assets/icon_12.png'
import icon_13 from '../../../public/assets/icon_13.png'
import Image from 'next/image';

const Investment = () => {
    const features = [
        {
            icon: icon_12,
            title: "smart-rates technology",
            points: [
                "analyses billions of data points daily.",
                "factors in seasonality, demand, calender availability and guest reviews",
                "automatically adjusts rates and policies to lock in the most bookings"
            ]
        },
        {
            icon: icon_13,
            title: "our revenue experts",
            points: [
                "asses your property as soon as you sign up",
                "create a competitive strategy that makes your home more competitive",
                "closely monitor your performance over time"
            ]
        }
    ];

    return (
        <div className="px-5 py-10 lg:px-10 lg:py-10 xl:px-20 xl:py-20">
            {/* Header Section */}
            <div className="text-center mb-12">
                <h1 className="text-3xl md:text-4xl font-SandeMore_SemiBold md:font-SandeMore_medium text-[#51311F] mb-1">
                    make your investment pay for itself
                </h1>
                <p className="text-[#9B938A] text-xs md:text-base font-lexend font-medium">
                    when optimising your revenue, we believe in going high-tech with human touch.
                </p>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-3.5">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="border rounded-md bg-[url('/assets/Frame_5.png')] bg-cover bg-center p-3 md:p-8 shadow-sm"
                    >
                        {/* Feature Header */}
                        <div className="flex items-center gap-4 mb-6">
                            <Image src={feature.icon} className='w-[50px] h-[50px] md:w-fit md:h-fit' alt='icon' />
                            <h2 className="text-base md:text-2xl font-lexend font-bold md:font-medium text-[#2B1C13]">
                                {feature.title}
                            </h2>
                        </div>

                        {/* Feature Points */}
                        <ul className="font-lexend">
                            {feature.points.map((point, pointIndex) => (
                                <li
                                    key={pointIndex}
                                    className="flex items-center gap-2 text-[#9B938A]"
                                >
                                    <span className="text-gray-400">→</span>
                                    <span className='text-xs md:text-base'>{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Investment;
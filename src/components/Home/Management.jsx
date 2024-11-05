import React from 'react';
import icon_14 from '../../../public/assets/icon_14.png'
import icon_15 from '../../../public/assets/icon_15.png'
import icon_16 from '../../../public/assets/icon_16.png'
import icon_17 from '../../../public/assets/icon_17.png'
import icon_18 from '../../../public/assets/icon_18.png'
import icon_19 from '../../../public/assets/icon_19.png'
import Image from 'next/image';

const Management = () => {
  const services = [
    {
      icon: icon_14,
      title: "property evaluation",
      description: "maximize your property's potential with our expert evaluation, ensuring optimal pricing and enhancements to attract high-value guests and maximize your earnings."
    },
    {
      icon: icon_15,
      title: "1 yr lock-in promise",
      description: "enjoy guaranteed income stability with our 1-year lock-in promise, giving you peace of mind and consistent profit from your property."
    },
    {
      icon: icon_16,
      title: "agreement signing",
      description: "experience a seamless, transparent partnership with our clear, comprehensive agreements—designed to protect your interests and ensure smooth, profitable collaboration."
    },
    {
      icon: icon_17,
      title: "property refurbishment",
      description: "transform your property with our premium refurbishment services, elevating its value and appeal to attract top-tier guests and boost your earnings."
    },
    {
      icon: icon_18,
      title: "ota listing",
      description: "we handle all the online travel agency listings, placing your property in front of a global audience and driving consistent bookings."
    },
    {
      icon: icon_19,
      title: "profit earning",
      description: "sit back and enjoy the rewards as we turn your property into a high-demand, profitable asset, ensuring you reap the maximum financial benefits."
    }
  ];

  return (
    <div className="bg-[#FBF7F2]">
      <div className="px-5 py-10 lg:px-10 lg:py-10 xl:px-20 xl:py-20">
        <div className="md:text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-SandeMore_medium text-[#442208] mb-4">
            how we work around properties at spacez
          </h1>
          <p className="text-[#65605A] text-xs md:text-base font-lexend font-medium max-w-3xl mx-auto">
            at spacez, we expertly manage, enhance, and elevate properties, turning them into premium, high-demand accommodations across india.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-6 gap-8 mt-12">
          {services.map((service, index) => (
            <div key={index} className='flex justify-center items-center'>
              <div className="flex flex-col items-start space-y-3">
                <div className="flex items-center space-x-3">
                  <Image src={service.icon} className='lg:w-[40px] lg:h-[40px] xl:w-[50px] xl:h-[50px]' alt='icon' />
                  <h3 className="text-[#2B1C13] text-base md:text-xl lg:text-lg font-lexend font-bold">
                    {service.title.includes("ota") ? (
                      <>
                        ota <br className='xl:block hidden' /> listing
                      </>
                    ) : (
                      service.title
                    )}
                  </h3>
                </div>
                <p className="text-[#9B938A] lg:max-w-[290px] font-lexend text-xs md:text-sm lg:text-xs leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Management;
import Image from 'next/image';
import React from 'react';
import icon_6 from '../../../public/assets/icon_6.png'
import icon_7 from '../../../public/assets/icon_7.png'
import icon_8 from '../../../public/assets/icon_8.png'
import icon_9 from '../../../public/assets/icon_9.png'
import icon_10 from '../../../public/assets/icon_10.png'
import icon_11 from '../../../public/assets/icon_11.png'

const StatItem = ({ icon, value, description }) => (
    <div className="flex flex-col items-center text-center">
        <div className="flex items-center justify-center space-x-2 mb-2">
            <div className="xl:w-16 xl:h-16 lg:w-10 lg:h-10 w-8 h-8 flex items-center justify-center">
                <Image src={icon} alt='icon' />
            </div>
            <div className="font-semibold text-xl md:text-[28px] xl:text-[39px] text-[#51311F] font-libreBaskerville">{value}</div>
        </div>
        <div className="text-[#65605A] max-w-[160px] font-lexend lg:font-medium leading-tight text-xs md:text-sm xl:text-base">
            {description}
        </div>
    </div>
);

const CheckMarkIconWeb = () => (
    <svg width="38" height="29" viewBox="0 0 38 29" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-6">
        <path d="M34.7857 1.25093L34.7855 1.25094C34.232 1.26743 33.7066 1.49797 33.3197 1.89391L12.625 22.5886L4.42482 14.3884C4.22899 14.186 3.99511 14.0243 3.73658 13.9126C3.47547 13.7997 3.19446 13.7401 2.91001 13.7372C2.62556 13.7343 2.3434 13.7882 2.08004 13.8957C1.81668 14.0032 1.57743 14.1622 1.37628 14.3634L1.90478 14.8919L1.37628 14.3634C1.17514 14.5645 1.01615 14.8038 0.908628 15.0671C0.801108 15.3305 0.747217 15.6127 0.750111 15.8971C0.753005 16.1816 0.812626 16.4626 0.925482 16.7237C1.03722 16.9822 1.19893 17.2161 1.40129 17.4119L11.1133 27.1239L11.1134 27.124C11.5144 27.5248 12.0581 27.75 12.625 27.75C13.192 27.75 13.7357 27.5248 14.1367 27.124L14.1368 27.1239L36.3433 4.91746C36.65 4.61772 36.8595 4.23265 36.9445 3.81225C37.03 3.38994 36.9858 2.95168 36.8179 2.55489C36.65 2.1581 36.3661 1.82129 36.0035 1.58861C35.6408 1.35593 35.2164 1.23823 34.7857 1.25093Z" fill="#3EA920" stroke="#3EA920" strokeWidth="1.5" />
    </svg>
);

const CrossMarkIconWeb = () => (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
        <path d="M4.09119 0.000383607C3.74228 0.000383607 3.39298 0.133292 3.12708 0.399876L0.399876 3.12708C-0.133292 3.66025 -0.133292 4.52349 0.399876 5.0553L10.3446 15L0.399876 24.9447C-0.133292 25.4779 -0.133292 26.3411 0.399876 26.8729L3.12708 29.6001C3.66025 30.1333 4.52349 30.1333 5.0553 29.6001L15 19.6554L24.9447 29.6001C25.4765 30.1333 26.3411 30.1333 26.8729 29.6001L29.6001 26.8729C30.1333 26.3398 30.1333 25.4765 29.6001 24.9447L19.6554 15L29.6001 5.0553C30.1333 4.52349 30.1333 3.65888 29.6001 3.12708L26.8729 0.399876C26.3398 -0.133292 25.4765 -0.133292 24.9447 0.399876L15 10.3446L5.0553 0.399876C4.78871 0.133292 4.4401 0.000383607 4.09119 0.000383607Z" fill="#9E0F0F" />
    </svg>
);

const CheckMarkIconMob = () => (
    <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.3681 1.00048L15.368 1.00048C15.0837 1.00895 14.8139 1.1272 14.6151 1.3303L5.80398 10.1414L2.38851 6.72593C2.28803 6.62239 2.16815 6.53962 2.03567 6.48237C1.90141 6.42434 1.75692 6.39368 1.61066 6.39219C1.4644 6.3907 1.31931 6.41841 1.1839 6.4737C1.04848 6.52899 0.925454 6.61074 0.822028 6.71416C0.718601 6.81759 0.636851 6.94061 0.581565 7.07603C0.526279 7.21144 0.498569 7.35653 0.500057 7.50279C0.501545 7.64905 0.532202 7.79354 0.590231 7.92781C0.647489 8.06028 0.73026 8.18017 0.833805 8.28065L5.02662 12.4735L5.02669 12.4735C5.23287 12.6796 5.51246 12.7954 5.80398 12.7954C6.0955 12.7954 6.37508 12.6796 6.58126 12.4735L6.58133 12.4735L16.1698 2.88498C16.3271 2.73097 16.4345 2.53328 16.4782 2.31749L15.9881 2.21834L16.4782 2.31748C16.5221 2.10034 16.4994 1.87499 16.4131 1.67096C16.3267 1.46694 16.1807 1.29375 15.9943 1.17411C15.8078 1.05447 15.5896 0.993947 15.3681 1.00048Z" fill="#3EA920" stroke="#3EA920" />
    </svg>
);

const CrossMarkIconMob = () => (
    <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.04559 0.500192C1.87114 0.500192 1.69649 0.566646 1.56354 0.699938L0.199938 2.06354C-0.066646 2.33012 -0.066646 2.76175 0.199938 3.02765L5.17229 8L0.199938 12.9724C-0.066646 13.2389 -0.066646 13.6706 0.199938 13.9365L1.56354 15.3001C1.83012 15.5666 2.26175 15.5666 2.52765 15.3001L7.5 10.3277L12.4724 15.3001C12.7383 15.5666 13.1706 15.5666 13.4365 15.3001L14.8001 13.9365C15.0666 13.6699 15.0666 13.2383 14.8001 12.9724L9.82771 8L14.8001 3.02765C15.0666 2.76175 15.0666 2.32944 14.8001 2.06354L13.4365 0.699938C13.1699 0.433354 12.7383 0.433354 12.4724 0.699938L7.5 5.67229L2.52765 0.699938C2.39436 0.566646 2.22005 0.500192 2.04559 0.500192Z" fill="#9E0F0F" />
    </svg>
);

const Comparison = () => {
    const features = [
        {
            title: "guaranteed on-time rent payment",
            description: "say goodbye to payment delays; enjoy consistent, worry-free income every month",
        },
        {
            title: "full-service management",
            description: "the saga ends here. put your journey to prime urban escapes and luxury stays begins with spacez. discover our homestays, hostels, and luxe hotels across india's most sought-after locations. your next profitable adventure awaits",
        },
        {
            title: "premium property upgrades",
            description: "boost your property's market appeal with our top-tier refurbishment services, designed to increase its value and attract high-paying tenants effortlessly",
        },
        {
            title: "strict guest screening",
            description: "we meticulously vet every guest with rigorous background checks, ensuring only trustworthy and responsible tenants occupy your property",
        },
        {
            title: "seamless compliance",
            description: "focus on your profits while we handle all legal and regulatory requirements, keeping your property compliant and hassle-free",
        },
        {
            title: "trusted industry experts",
            description: "with over 15 years of industry experience, spacez is your trusted partner in achieving smooth, profitable, and worry-free property management",
        },
        {
            title: "property caretaker service",
            description: "our dedicated caretakers ensure your property is meticulously maintained daily, preserving its value and appearance at all times",
        },
        {
            title: "high demand in prime locations",
            description: "your property is placed in the heart of high-demand areas, guaranteeing consistent guest inflow and maximizing your rental income potential.",
        },
        {
            title: "24-hour safety line",
            description: "if you ever feel unsafe, our app provides one-tap access to specially trained safety agents, day or night.",
        },
    ];

    const stats = [
        {
            icon: icon_6,
            value: "25+",
            description: "premium properties managed"
        },
        {
            icon: icon_7,
            value: "100%",
            description: "on time rent payouts"
        },
        {
            icon: icon_8,
            value: "25+",
            description: "landlords revamped their property"
        },
        {
            icon: icon_9,
            value: "45%",
            description: "net margin to property owners"
        },
        {
            icon: icon_10,
            value: "5+",
            description: "high-demand metro cities"
        },
        {
            icon: icon_11,
            value: "15 yr",
            description: "industry expertise"
        }
    ];

    return (
        <>
            <div className="max-w-7xl mx-auto px-4 py-12 md:px-6 lg:px-8">
                {/* Logo and Header */}
                <div className="text-start lg:text-center lg:mt-20">
                    <h1 className="text-3xl md:text-6xl font-SandeMore font-semibold text-[#51311F] tracking-[0.15em] ml-2.5">SPACEZ</h1>
                    <p className="text-2xl text-[#9B938A] font-lexend font-medium">for property owners</p>
                    <h2 className="text-2xl md:text-5xl text-[#51311F] font-SandeMore_medium mt-8">
                        get your property rented out by spacez
                    </h2>
                </div>

                {/* Column Headers */}
                <div className="grid grid-cols-12 gap-4 mt-4 lg:mt-24 mb-4 lg:mb-10 text-center items-center lg:px-8">
                    <div className="col-span-7" />
                    <div className="flex col-span-5 justify-around items-center">
                        <div className="text-[#51311F] text-sm md:text-[22px] font-SandeMore_SemiBold">SPACEZ</div>
                        <div className="text-[#9B938A] text-xs md:text-lg font-lexend">other <br className='block md:hidden'/> tenants</div>
                    </div>
                </div>
                {/* <div className="grid grid-cols-12 mt-4 lg:mt-24 mb-10 items-center lg:px-8">
                    <div className="col-span-8 ">
                        <p>

                        </p>
                    </div>
                    <div className="col-span-4 text-center flex justify-between items-center">

                    </div>
                </div> */}

                {/* Features List */}
                <div className="space-y-8">
                    {features.map((feature, index) => (
                        <>
                            <hr key={index} className='bg-[#E5E5E5]' />
                            <div className="grid grid-cols-12 gap-4 items-center lg:px-8 font-lexend">
                                <div className="col-span-7">
                                    <h3 className="md:text-lg font-semibold text-[#51311F] mb-2">{feature.title}</h3>
                                    <p className="text-xs md:text-sm text-[#9B938A] pr-4">{feature.description}</p>
                                </div>
                                <div className="md:flex hidden col-span-5 justify-around items-center">
                                    <CheckMarkIconWeb />
                                    <CrossMarkIconWeb />
                                </div>
                                <div className="md:hidden flex col-span-5 justify-around items-center">
                                    <CheckMarkIconMob />
                                    <CrossMarkIconMob />
                                </div>
                            </div>
                        </>
                    ))}
                </div>

                <hr className='mt-10' />

                {/* Footer Note */}
                <div className="mt-5 text-xs text-gray-400 lg:px-8">
                    *comparison is based on public information
                </div>

            </div>
            <div className="w-full bg-[#faf7f5] px-5 py-5 lg:py-12 lg:px-10">
                <div className="max-w-8xl mx-auto">
                    <div className="grid grid-cols-3 lg:grid-cols-6 gap-8 md:gap-6">
                        {stats.map((stat, index) => (
                            <StatItem
                                key={index}
                                icon={stat.icon}
                                value={stat.value}
                                description={stat.description}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Comparison;
import image13 from '../../../public/assets/image13.png'
import image14 from '../../../public/assets/image14.png'
import image15 from '../../../public/assets/image15.png'
import image16 from '../../../public/assets/image16.png'
import Image from 'next/image';

const CaseStudies = () => {

    const caseStudies = [
        {
            id: 1,
            title: 'namma woodland',
            image: image13
        },
        {
            id: 2,
            title: "juggler's rest",
            image: image14
        },
        {
            id: 3,
            title: 'urban escape',
            image: image15
        },
        {
            id: 4,
            title: 'heritage heaven',
            image: image16
        },
        {
            id: 5,
            title: 'heritage heaven',
            image: image16
        },
        {
            id: 6,
            title: 'heritage heaven',
            image: image16
        }
    ];

    return (
        <>
            <div className="relative pl-5 py-12 lg:pl-10 lg:py-10 xl:pl-20 xl:py-20 flex flex-col mb-3.5">
                {/* Header Section */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-SandeMore_medium text-[#51311F] mb-1">
                        read our case studies
                    </h2>
                    <p className="text-[#65605A]  font-lexend font-medium">
                        see how our investors are earning through our property range
                    </p>
                </div>
                <div className="flex overflow-x-scroll space-x-5 hide-scroll-bar">
                    {caseStudies.map((study) => (
                        <div key={study.id} className="flex flex-nowrap">
                            <div className="max-w-md w-64 transform transition hover:scale-95 duration-300 ease-in-out">
                                <div className="flex flex-col ">
                                    <div>
                                        <div className="relative">
                                            <Image src={study.image} alt={study.title} className="object-cover rounded-sm" />
                                            <div className="absolute top-2 right-2 bg-white px-3 py-1 text-sm">
                                                {study.title}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default CaseStudies;
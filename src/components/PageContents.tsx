import Image from 'next/image';

interface PageContentsProps {
    heading: string;
    subheading: string;
    textSections: string[];
    imageSrcs: string[];
}

export default function PageContents({ heading, subheading, textSections, imageSrcs }: PageContentsProps) {
    return (
        <div className="flex-1 p-5 bg-white overflow-x-auto">
            <div className="mx-auto relative flex flex-col lg:flex-row lg:gap-8">
                {/* Text Content */}
                <div className="relative w-full lg:w-[60%] max-w-[760px]">
                    <div className="text-[#523f7b] text-[56px] font-semibold leading-[70px] mb-8">{heading}</div>
                    <div className="text-[#52407b] text-[32px] font-semibold leading-[70px] mb-8">{subheading}</div>
                    {textSections.map((text, index) => (
                        <div key={index} className="text-black text-lg mb-8">
                            {text}
                            <br /><br />
                        </div>
                    ))}
                </div>
                {/* Image/Data Placeholders */}
                <div className="lg:w-[40%] flex flex-col lg:gap-8">
                    {imageSrcs.map((src, index) => (
                        <div key={index} className="border-8 border-black h-[413px] flex items-center justify-center mb-8">
                            <Image src={src} alt={`Image ${index + 1}`} layout="fill" objectFit="cover" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

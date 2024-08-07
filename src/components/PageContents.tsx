import Image from 'next/image'; // Import Image component

export default function PageContents() {
    return (
        <div className="flex-1 p-5 bg-white overflow-x-auto">
            <div className="mx-auto relative flex flex-col lg:flex-row lg:gap-8">
                {/* Text Content */}
                <div className="relative w-full lg:w-[60%] max-w-[760px]">
                    <div className="text-[#523f7b] text-[56px] font-semibold leading-[70px] mb-8">Heading</div>
                    <div className="text-[#52407b] text-[32px] font-semibold leading-[70px] mb-8">Subheading</div>
                    <div className="text-black text-lg mb-8">
                        Lorem ipsum odor amet, consectetuer adipiscing elit. Accumsan porttitor placerat inceptos tempor; consectetur diam. Lacinia habitasse mi a elit purus convallis vulputate. Nisi facilisi per non cras ullamcorper mattis venenatis ornare. Ligula pellentesque habitasse ultrices quisque tempor hendrerit. Curae fames bibendum turpis vivamus sapien ex tempus duis phasellus! Ipsum integer lobortis nulla etiam mi. Mauris vitae risus pulvinar eget tempus ac.
                        <br /><br />
                    </div>
                    {/* Repeat for other text sections */}
                    <div className="text-black text-lg mb-8">
                        Lorem ipsum odor amet, consectetuer adipiscing elit. Accumsan porttitor placerat inceptos tempor; consectetur diam. Lacinia habitasse mi a elit purus convallis vulputate. Nisi facilisi per non cras ullamcorper mattis venenatis ornare. Ligula pellentesque habitasse ultrices quisque tempor hendrerit. Curae fames bibendum turpis vivamus sapien ex tempus duis phasellus! Ipsum integer lobortis nulla etiam mi. Mauris vitae risus pulvinar eget tempus ac.
                        <br /><br />
                    </div>
                    <div className="text-black text-lg mb-8">
                        Lorem ipsum odor amet, consectetuer adipiscing elit. Accumsan porttitor placerat inceptos tempor; consectetur diam. Lacinia habitasse mi a elit purus convallis vulputate. Nisi facilisi per non cras ullamcorper mattis venenatis ornare. Ligula pellentesque habitasse ultrices quisque tempor hendrerit. Curae fames bibendum turpis vivamus sapien ex tempus duis phasellus! Ipsum integer lobortis nulla etiam mi. Mauris vitae risus pulvinar eget tempus ac.
                        <br /><br />
                    </div>
                    <div className="text-black text-lg mb-8">
                        Lorem ipsum odor amet, consectetuer adipiscing elit. Accumsan porttitor placerat inceptos tempor; consectetur diam. Lacinia habitasse mi a elit purus convallis vulputate. Nisi facilisi per non cras ullamcorper mattis venenatis ornare. Ligula pellentesque habitasse ultrices quisque tempor hendrerit. Curae fames bibendum turpis vivamus sapien ex tempus duis phasellus! Ipsum integer lobortis nulla etiam mi. Mauris vitae risus pulvinar eget tempus ac.
                        <br /><br />
                    </div>
                </div>
                {/* Image/Data Placeholders */}
                <div className="lg:w-[40%] flex flex-col lg:gap-8">
                    <div className="border-8 border-black h-[413px] flex items-center justify-center mb-8">
                        <div className="text-black text-xl font-semibold">Image/Data Placeholder</div>
                    </div>
                    <div className="border-8 border-black h-[413px] flex items-center justify-center">
                        <div className="text-black text-xl font-semibold">Image/Data Placeholder</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

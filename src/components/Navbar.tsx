import PULPLogo from '../assets/Logo.svg'
import Image from 'next/image'

export default function Navbar() {
    return (
        <div className="w-full h-[61px] px-7 py-2 bg-white border-b-1 border-black flex items-center justify-between">
            <div className="relative flex items-center gap-2.5">
                <Image className="w-[91px] h-6" src={PULPLogo} alt="Pulp Logo"/>
                <div className="text-black text-[32px] font-bold leading-[48px]">101</div>
            </div>
            <div className="flex items-center gap-10">
                <div className="text-[#475467] text-base font-semibold">Home</div>
                <div className="text-[#475467] text-base font-semibold">Support</div>
                <div className="px-4 py-2.5 bg-[#7e56d8] rounded-lg shadow border border-[#7e56d8] text-white text-base font-semibold">
                    Log In
                </div>
            </div>
        </div>
    )
}
import PULPLogo from '../assets/Logo.svg'
import Image from 'next/image'

export default function Navbar() {
    return (
        <div className="w-full h-[61px] px-7 py-2 bg-white border-b border-black flex items-center justify-between">
            {/* Logo and '101' */}
            <div className="relative flex items-center gap-2.5 group">
                {/* Logo */}
                <div className="transition-opacity duration-300 group-hover:opacity-80">
                    <Image className="w-[91px] h-6" src={PULPLogo} alt="Pulp Logo" />
                </div>
                {/* '101' Text */}
                <div className="relative text-black text-[32px] font-bold leading-[48px] duration-300 group-hover:text-[#7e56d8]">
                    <span className="relative top-[-10px] text-[20px]">101</span>
                </div>
            </div>
            {/* Navigation and Log In */}
            <div className="flex items-center gap-10">
                <div className="text-[#475467] text-base font-semibold transition-colors duration-300 hover:text-[#7e56d8]">
                    Home
                </div>
                <div className="text-[#475467] text-base font-semibold transition-colors duration-300 hover:text-[#7e56d8]">
                    Support
                </div>
                <div className="px-4 py-2.5 bg-[#7e56d8] rounded-lg shadow border border-[#7e56d8] text-white text-base font-semibold transition-colors duration-300 hover:bg-[#6c41d0]">
                    Log In
                </div>
            </div>
        </div>
    )
}

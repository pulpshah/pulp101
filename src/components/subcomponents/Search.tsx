"use client";

import SearchIcon from '../../assets/Search.svg';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

export default function Search() {
    // State to manage popup visibility and input text
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [hasFocus, setHasFocus] = useState(false);

    // Reference to the search box element
    const searchBoxRef = useRef<HTMLDivElement>(null);

    // Function to handle click on the search box to show popup
    const handleSearchBoxClick = () => setIsPopupVisible(true);

    // Function to handle clicks outside the search box to close the popup
    const handleClickOutside = (event: MouseEvent) => {
        if (searchBoxRef.current && !searchBoxRef.current.contains(event.target as Node)) {
            setIsPopupVisible(false);
        }
    };

    // Effect to add or remove click event listener based on popup visibility
    useEffect(() => {
        if (isPopupVisible) {
            document.addEventListener('click', handleClickOutside);
        } else {
            document.removeEventListener('click', handleClickOutside);
        }
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isPopupVisible]);

    return (
        <div ref={searchBoxRef} className="w-full">
            {/* Search Box */}
            <div 
                className="w-full p-2.5 bg-white rounded-bl-lg rounded-br-lg border border-black flex items-center gap-2"
                onClick={handleSearchBoxClick}
            >
                {/* Icon */}
                <Image
                    src={SearchIcon}  // Replace with the path to your icon
                    alt="Search Icon"
                    className="w-6 h-6" // Adjust size as needed
                />
                <div className="h-6 flex items-center gap-2.5">
                    <div className="w-[54px] text-[#667085] text-base font-normal leading-normal">Search</div>
                </div>
            </div>

            {/* Popup */}
            {isPopupVisible && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-start pt-[80px]">
                    <div className="bg-white p-8 rounded-lg shadow-lg relative w-[90%] max-w-3xl">
                        {/* Close Button */}
                        <div 
                            className="text-[#000000] w-[29px] h-[29px] absolute top-6 right-6 cursor-pointer" 
                            onClick={() => setIsPopupVisible(false)}
                        >
                            X
                        </div>
                        {/* Popup Content */}
                        <div className="flex-col gap-1.5">
                            <div className="text-[#000000] text-sm font-medium leading-tight">Search</div>
                            <input
                                type="text"
                                value={searchText}
                                onFocus={() => setHasFocus(true)}
                                onBlur={() => setHasFocus(false)}
                                onChange={(e) => setSearchText(e.target.value)}
                                placeholder={!hasFocus && searchText === '' ? 'Go to...' : ''}
                                className="w-full px-3.5 py-2.5 bg-white rounded-lg shadow border border-[#d0d5dd] text-black"
                            />
                            {/* Search Results */}
                            {searchText && (
                                <div className="mt-4">
                                    <div className="flex flex-col gap-2">
                                        <div className="text-[#000000] p-2 bg-gray-100 rounded-lg hover:bg-gray-200 cursor-pointer">
                                            {searchText}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

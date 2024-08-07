"use client";

import React, { useState } from 'react';
import Link from 'next/link'; // Import Link from Next.js
import Search from "./subcomponents/Search";

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [collapsedSections, setCollapsedSections] = useState<{ [key: string]: boolean }>({});

  const handleClick = (index: string) => {
    setActiveItem(index);
  };

  const toggleSection = (sectionIndex: string) => {
    setCollapsedSections(prevState => ({
      ...prevState,
      [sectionIndex]: !prevState[sectionIndex]
    }));
  };

  const sections = [
    { title: 'Introduction', items: ['Company Overview', 'Core Values', 'Lead Members', 'Achievements'] },
    { title: 'Projects', items: ['TextMRI', 'Expository Data Analysis', 'Gloria'] },
    { title: 'API Keys', items: ['NextJS', 'CLI', 'Server Hosts', 'Figma'] },
    { title: 'Authentication', items: ['Auth0', 'Google Identity Platform'] },
    { title: 'Accounts', items: ['Creation', 'Account Types', 'Management', 'Security'] },
    { title: 'Metadata', items: ['Overview', 'Metadata Types', 'Standards and Protocols', 'Integration'] },
    { title: 'Maintenance', items: ['Data Upkeep', 'Service Logs', 'Scheduled Tasks'] },
    { title: 'Version History', items: ['Changelog', 'Archived Files'] },
    { title: 'Webhooks', items: ['Webhook Configuration', 'Event Listeners', 'Error Logs'] }
  ];

  return (
    <div className="w-[280px] bg-white border-r-2 border-black flex flex-col h-full">
      <div className="sticky top-0 z-10 bg-white w-full">
        <Search />
      </div>
      <div className="flex-1 overflow-y-auto w-full p-4">
        {sections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="section w-full">
            <div
              className="self-stretch h-8 justify-start items-center gap-2 inline-flex cursor-pointer w-full hover:bg-gray-100 p-2 rounded-lg"
              onClick={() => toggleSection(sectionIndex.toString())}
            >
              <div className="text-[#101828] text-lg font-semibold font-['Inter'] leading-normal">{section.title}</div>
            </div>
            {!collapsedSections[sectionIndex.toString()] && (
              <div className="section-items flex flex-col gap-1 mt-1 w-full pl-4">
                {section.items.map((item, itemIndex) => {
                  const index = `${sectionIndex}-${itemIndex}`;
                  const slug = item.toLowerCase().replace(/\s+/g, '-'); // Create a URL-friendly slug
                  return (
                    <Link key={index} href={`/info/${slug}`} 
                          className={`sidebarItem w-full pr-2 rounded-lg justify-start items-center inline-flex ${activeItem === index ? 'active' : ''}`}
                          onClick={() => handleClick(index)}>
                        <div className="text-[#6840c6] text-sm font-semibold leading-tight">{item}</div>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

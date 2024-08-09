// src/components/Sidebar.tsx
import React, { useState } from 'react';
import Link from 'next/link'; // Import Link from next/link
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
    { title: 'Introduction', items: [
      { name: 'Overview', id: 'pulp101' },
      { name: 'Core Values', id: 'core-values' },
      { name: 'Achievements', id: 'achievements' },
    ]},
    { title: 'Neo4J', items: [
      { name: 'Overview', id: 'neo4j-overview' },
      { name: 'Important Structures', id: 'neo4j-structures' },
      { name: 'Functions', id: 'neo4j-functions' },
      { name: 'Advantages', id: 'neo4j-advantages' },
      { name: 'Cypher', id: 'cypher' }
    ]},
    { title: 'Diffbot', items: [
      { name: 'Overview', id: 'diffbot-overview' },
      { name: 'Extract API', id: 'extract-api' },
      { name: 'Knowledge Graph', id: 'knowledge-graph' },
      { name: 'Bulk & Crawl', id: 'bulk-crawl' },
      { name: 'Natural Language Processing', id: 'nlp' }
    ]},
    { title: 'OCR Script', items: [
      { name: 'Overview', id: 'ocr-overview' },
      { name: 'Functions', id: 'ocr-functions' },
      { name: 'Installation Guide', id: 'ocr-installation' },
      { name: 'Running the Script', id: 'ocr-running-script' }
    ]},
    { title: 'TextMRI', items: [
      { name: 'Modules', id: 'textmri-modules' },
      { name: 'UI Elements', id: 'textmri-ui-elements' },
      { name: 'Screens', id: 'textmri-screens' },
      { name: 'Annotations', id: 'textmri-annotations' },
      { name: 'Gloria', id: 'textmri-gloria' }
    ]}
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
                  const index = `${sectionIndex}-${itemIndex}`; // Fixed string interpolation
                  return (
                    <Link href={`/${item.id}`} key={index}> {/* Linking to the dynamic [slug] page */}
                      <div
                        className={`sidebarItem w-full pr-2 rounded-lg justify-start items-center inline-flex ${activeItem === index ? 'active' : ''}`}
                        onClick={() => handleClick(index)}
                      >
                        <div className="text-[#6840c6] text-sm font-semibold leading-tight">{item.name}</div>
                      </div>
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

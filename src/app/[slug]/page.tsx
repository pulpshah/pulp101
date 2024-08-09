"use client"

// src/app/[slug]/page.tsx
import { usePathname } from 'next/navigation';
import PageContents from '../../components/PageContents';

const contentMap = {
  'pulp101': {
    heading: 'PULP 101',
    subheading: 'Introduction to Pulp',
    textSections: [
      'Pulp 101 is the foundational course for understanding the core principles of our platform.',
      'You will learn about our mission, vision, and the unique features that set us apart.',
      'This course is designed to give you a comprehensive overview, from the basic concepts to advanced features.'
    ],
    imageSrcs: ['../../public/placeholder-image1.svg', '../../public/placeholder-image2.svg'],
  },
  'core-values': {
    heading: 'Core Values',
    subheading: 'What We Stand For',
    textSections: [
      'Our core values define the essence of our organization.',
      'We are committed to integrity, innovation, and excellence in everything we do.',
      'These values guide our decisions and shape our culture.'
    ],
    imageSrcs: ['../../public/placeholder-image1.svg', '../../public/placeholder-image2.svg'],
  },
  'achievements': {
    heading: 'Achievements',
    subheading: 'Our Milestones',
    textSections: [
      'Over the years, we have achieved significant milestones that reflect our growth and impact.',
      'From awards to successful projects, our achievements speak to our commitment to excellence.',
      'Join us as we continue to break new ground and set new standards in our industry.'
    ],
    imageSrcs: ['../../public/placeholder-image1.svg', '../../public/placeholder-image2.svg'],
  },
  'neo4j-overview': {
    heading: 'Neo4J Overview',
    subheading: 'Understanding Neo4J',
    textSections: [
      'Neo4J is a powerful graph database that allows for efficient management of connected data.',
      'In this section, you will learn about the core concepts and benefits of using Neo4J in your projects.',
      'Explore the various use cases and see how Neo4J can transform your data management approach.'
    ],
    imageSrcs: ['../../public/placeholder-image1.svg', '../../public/placeholder-image2.svg'],
  },
  'neo4j-structures': {
    heading: 'Important Structures in Neo4J',
    subheading: 'Key Data Models',
    textSections: [
      'Understanding the key data structures in Neo4J is crucial for effective data management.',
      'We will cover nodes, relationships, properties, and how they interconnect to form a graph.',
      'This section provides a deep dive into how Neo4J structures data for optimal performance.'
    ],
    imageSrcs: ['../../public/placeholder-image1.svg', '../../public/placeholder-image2.svg'],
  },
  'neo4j-functions': {
    heading: 'Neo4J Functions',
    subheading: 'Powerful Querying Capabilities',
    textSections: [
      'Neo4J provides a range of functions that enhance its querying capabilities.',
      'Learn about the most commonly used functions and how they can simplify complex queries.',
      'This section will help you leverage Neo4J’s full potential for efficient data retrieval.'
    ],
    imageSrcs: ['../../public/placeholder-image1.svg', '../../public/placeholder-image2.svg'],
  },
  'neo4j-advantages': {
    heading: 'Advantages of Neo4J',
    subheading: 'Why Choose Neo4J?',
    textSections: [
      'Neo4J offers several advantages over traditional databases, especially when dealing with connected data.',
      'Its graph-based approach allows for more natural and efficient data modeling.',
      'Discover the unique benefits of Neo4J and how it can improve your data management strategy.'
    ],
    imageSrcs: ['../../public/placeholder-image1.svg', '../../public/placeholder-image2.svg'],
  },
  'cypher': {
    heading: 'Cypher Query Language',
    subheading: 'Mastering Cypher',
    textSections: [
      'Cypher is the query language used by Neo4J, designed for efficient graph traversal and manipulation.',
      'This section will teach you the syntax and best practices for writing effective Cypher queries.',
      'From basic to advanced queries, you will learn how to harness the full power of Cypher in Neo4J.'
    ],
    imageSrcs: ['../../public/placeholder-image1.svg', '../../public/placeholder-image2.svg'],
  },
  'diffbot-overview': {
    heading: 'Diffbot Overview',
    subheading: 'Unlocking Web Data',
    textSections: [
      'Diffbot is a powerful tool for extracting and structuring web data.',
      'Learn how Diffbot can be used to access structured data from unstructured web pages.',
      'This section provides an overview of Diffbot’s capabilities and how it can enhance your data projects.'
    ],
    imageSrcs: ['../../public/placeholder-image1.svg', '../../public/placeholder-image2.svg'],
  },
  'extract-api': {
    heading: 'Extract API',
    subheading: 'Automated Data Extraction',
    textSections: [
      'The Extract API is one of Diffbot’s key features, allowing for automated data extraction from web pages.',
      'Learn how to use the Extract API to pull structured data from a variety of sources.',
      'This section covers the setup, usage, and best practices for using Diffbot’s Extract API.'
    ],
    imageSrcs: ['../../public/placeholder-image1.svg', '../../public/placeholder-image2.svg'],
  },
  'knowledge-graph': {
    heading: 'Diffbot Knowledge Graph',
    subheading: 'Comprehensive Web Data',
    textSections: [
      'The Diffbot Knowledge Graph is a vast, automatically structured collection of web data.',
      'Learn how to access and use this powerful resource for your data-driven projects.',
      'This section provides an overview of the Knowledge Graph’s features and benefits.'
    ],
    imageSrcs: ['../../public/placeholder-image1.svg', '../../public/placeholder-image2.svg'],
  },
  'bulk-crawl': {
    heading: 'Bulk & Crawl',
    subheading: 'Scaling Data Extraction',
    textSections: [
      'Diffbot’s Bulk & Crawl features allow you to scale data extraction across multiple pages and sites.',
      'Learn how to set up and manage large-scale data extraction projects with Diffbot.',
      'This section covers best practices for using Bulk & Crawl to maximize efficiency and data accuracy.'
    ],
    imageSrcs: ['../../public/placeholder-image1.svg', '../../public/placeholder-image2.svg'],
  },
  'nlp': {
    heading: 'Natural Language Processing',
    subheading: 'Extracting Meaning from Text',
    textSections: [
      'Diffbot’s NLP features enable you to extract meaningful information from unstructured text.',
      'Learn how to leverage NLP for tasks such as sentiment analysis, entity recognition, and more.',
      'This section covers the basics of Diffbot’s NLP capabilities and how they can be applied to your data projects.'
    ],
    imageSrcs: ['../../public/placeholder-image1.svg', '../../public/placeholder-image2.svg'],
  },
  'ocr-overview': {
    heading: 'OCR Overview',
    subheading: 'Converting Images to Text',
    textSections: [
      'Optical Character Recognition (OCR) technology allows for the conversion of images to text.',
      'Learn how OCR can be used to digitize printed or handwritten documents.',
      'This section provides an overview of OCR technology and its various applications.'
    ],
    imageSrcs: ['../../public/placeholder-image1.svg', '../../public/placeholder-image2.svg'],
  },
  'ocr-functions': {
    heading: 'OCR Functions',
    subheading: 'Key Features and Capabilities',
    textSections: [
      'Explore the key functions of OCR and how they can be used to enhance your projects.',
      'Learn about text extraction, layout analysis, and other OCR features.',
      'This section covers the technical aspects of OCR and how to implement them effectively.'
    ],
    imageSrcs: ['../../public/placeholder-image1.svg', '../../public/placeholder-image2.svg'],
  },
  'ocr-installation': {
    heading: 'OCR Installation Guide',
    subheading: 'Setting Up OCR',
    textSections: [
      'This guide walks you through the installation process for OCR software.',
      'Learn how to set up OCR on your system and configure it for optimal performance.',
      'This section provides step-by-step instructions for installing OCR on various platforms.'
    ],
    imageSrcs: ['../../public/placeholder-image1.svg', '../../public/placeholder-image2.svg'],
  },
  'ocr-running-script': {
    heading: 'Running the OCR Script',
    subheading: 'Executing OCR Tasks',
    textSections: [
      'Learn how to run OCR scripts to automate the text extraction process.',
      'This section covers the basics of script execution and troubleshooting.',
      'Explore how to customize and optimize your OCR scripts for different tasks.'
    ],
    imageSrcs: ['../../public/placeholder-image1.svg', '../../public/placeholder-image2.svg'],
  },
  'textmri-modules': {
    heading: 'TextMRI Modules',
    subheading: 'Modular Analysis Tools',
    textSections: [
      'TextMRI provides a range of modules for in-depth text analysis.',
      'Learn about the different modules and how they can be used in your projects.',
      'This section covers the key features of each module and how to integrate them effectively.'
    ],
    imageSrcs: ['../../public/placeholder-image1.svg', '../../public/placeholder-image2.svg'],
  },
  'textmri-ui-elements': {
    heading: 'TextMRI UI Elements',
    subheading: 'User Interface Components',
    textSections: [
      'Explore the UI elements provided by TextMRI for building interactive applications.',
      'Learn how to implement these components in your projects.',
      'This section covers best practices for UI design using TextMRI’s elements.'
    ],
    imageSrcs: ['../../public/placeholder-image1.svg', '../../public/placeholder-image2.svg'],
  },
  'textmri-screens': {
    heading: 'TextMRI Screens',
    subheading: 'Pre-built Screens for Quick Setup',
    textSections: [
      'TextMRI offers a range of pre-built screens to speed up development.',
      'Learn how to customize these screens for your specific needs.',
      'This section covers the features and customization options for TextMRI’s screens.'
    ],
    imageSrcs: ['../../public/placeholder-image1.svg', '../../public/placeholder-image2.svg'],
  },
  'textmri-annotations': {
    heading: 'TextMRI Annotations',
    subheading: 'Enhancing Text Data',
    textSections: [
      'Annotations are a powerful feature in TextMRI for adding metadata to text.',
      'Learn how to create and manage annotations in your projects.',
      'This section covers the different types of annotations and their applications.'
    ],
    imageSrcs: ['../../public/placeholder-image1.svg', '../../public/placeholder-image2.svg'],
  },
  'textmri-gloria': {
    heading: 'TextMRI Gloria',
    subheading: 'Advanced Text Analysis',
    textSections: [
      'Gloria is a specialized tool within TextMRI for advanced text analysis.',
      'Learn how to leverage Gloria’s features for in-depth data insights.',
      'This section covers the key capabilities of Gloria and how to use them effectively.'
    ],
    imageSrcs: ['../../public/placeholder-image1.svg', '../../public/placeholder-image2.svg'],
  }
};

export default function DynamicPage() {
  const pathname = usePathname();
  const slug = pathname?.split('/').pop();

  // Fetch the content based on the slug
  const pageContent = contentMap[slug as keyof typeof contentMap];

  if (!pageContent) {
    return <div className="p-5">Content not found for this page.</div>;
  }

  return (
    <div>
      <PageContents 
        heading={pageContent.heading}
        subheading={pageContent.subheading}
        textSections={pageContent.textSections}
        imageSrcs={pageContent.imageSrcs}
      />
    </div>
  );
}

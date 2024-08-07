import PageContents from '../../components/PageContents';
import { useRouter } from 'next/router';

// Example data mapping
const contentMap = {
  'company-overview': {
    heading: 'Company Overview',
    subheading: 'Learn More About Us',
    textSections: [
      'Our company was founded in 2000 with the vision to innovate.',
      'We are committed to sustainable practices and community engagement.'
    ],
    imageSrcs: ['/images/company1.jpg', '/images/company2.jpg']
  },
  'core-values': {
    heading: 'Core Values',
    subheading: 'What We Stand For',
    textSections: [
      'Integrity, Excellence, and Innovation are at the heart of our business.',
      'We believe in creating value for our stakeholders and empowering our employees.'
    ],
    imageSrcs: ['/images/values1.jpg', '/images/values2.jpg']
  },
  // Add other mappings as necessary
};

export default function DynamicPage() {
  const router = useRouter();
  const { id } = router.query;  // This retrieves the dynamic part of the URL

  // Retrieve content based on the id from the URL
  const pageData = contentMap[id];

  // Optional: Handle case where no data exists for the given id
  if (!pageData) {
    return <p>Page not found!</p>;
  }

  return (
    <PageContents 
      heading={pageData.heading}
      subheading={pageData.subheading}
      textSections={pageData.textSections}
      imageSrcs={pageData.imageSrcs}
    />
  );
}

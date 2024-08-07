import PageContents from '../components/PageContents';

const textSections = [
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Accumsan porttitor placerat inceptos tempor; consectetur diam.",
    "Lacinia habitasse mi a elit purus convallis vulputate. Nisi facilisi per non cras ullamcorper mattis venenatis ornare.",
    "Ligula pellentesque habitasse ultrices quisque tempor hendrerit. Curae fames bibendum turpis vivamus sapien ex tempus duis phasellus!",
    "Ipsum integer lobortis nulla etiam mi. Mauris vitae risus pulvinar eget tempus ac."
];

// Make sure images are in the public directory or use correct paths
const imageSrcs = [
    '../../public/Vercel.svg',
    '../../public/Vercel.svg'
];

export default function Home() {
    return (
        <div>
            <PageContents 
                heading="PULP101"
                subheading="Slogan"
                textSections={textSections}
                imageSrcs={imageSrcs}
            />
        </div>
    );
}

import { Div } from '@/libs/motion';
import Image from 'next/image';
import CoreValues from './CoreValues';

type ArrayData = {
  id: number
  x: number
  y: number
  imageUrl: string
  heading: string
  body: string
  position: 'left' | 'right';
}[]

const Infographic = () => {
  const coreValues: ArrayData = [
    {
      id: 1,
      x: -423,
      y: -333,
      imageUrl: "/aboutus/aboutus66/T.png",
      heading: "Transparency",
      body: "Being honest in our communication.",
      position: 'left'
    }, // Top-left
    {
      id: 2,
      x: 25,
      y: -320,
      imageUrl: "/aboutus/aboutus66/H.png",
      heading: "Humility",
      body: "Humble in our achievements.",
      position: 'right'
    },  // Top-right
    {
      id: 3,
      x: 135,
      y: -130,
      imageUrl: "/aboutus/aboutus66/R.png",
      heading: "Reliability",
      body: "Establishing trust with our clients.",
      position: 'right'
    },             // Right
    {
      id: 4,
      x: 24,
      y: 79,
      imageUrl: "/aboutus/aboutus66/E1.png",
      heading: "Excellence",
      body: "Delivering exceptional services to our clients.",
      position: 'right'
    },        // Bottom-right
    {
      id: 5,
      x: -422,
      y: 92,
      imageUrl: "/aboutus/aboutus66/E2.png",
      heading: "Empathy",
      body: "Looking after our own.",
      position: 'left'
    },      // Bottom-left
    {
      id: 6,
      x: -555,
      y: -130,
      imageUrl: "/aboutus/aboutus66/U.png",
      heading: "Unwavering",
      body: "Executing with firm determination.",
      position: 'left'
    },  // Left
  ];

  // Variants for the central circle animation
  const centerVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
  };

  // Variants for outer circles to start at center and move to final position
  const circleVariants = (x: number, y: number) => ({
    hidden: {
      x: 0, // Start at center
      y: 0,
      opacity: 0,
    },
    visible: {
      x: `${x}px`, // Move to final position
      y: `${y}px`,
      opacity: 1,
    },
    hiddden: {
      x: -210, // Start at center
      y: -150,
      opacity: 0,
    }
  });

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-[#ED3224]/60 text-white">
      {/* Central Circle */}
      <Div
        className="absolute flex items-center justify-center w-72 h-72 rounded-full z-10"
        variants={centerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
          <h2 className='absolute top-16 text-2xl'>THREEU</h2>
        <Image src="/aboutus/aboutus6/middleCircle.png" alt='middle' height={500} width={500} className='w-72 h-72 rounded-ful' />
      </Div>

      {/* Outer Circles */}
      {coreValues.map((value, index) => (
        <Div
          key={value.id}
          className="absolute flex flex-col items-center justify-center w-[420px] h-60 transition-transform transform"
          initial="hiddden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={circleVariants(value.x, value.y)}
          transition={{ type: 'spring', stiffness: 100, damping: 50 }}
          style={{ top: '50%', left: '50%' }} // Start from center
        >
          <CoreValues imageurl={value.imageUrl} body={value.body} heading={value.heading} position={value.position} numbering={value.id} />
        </Div>
      ))}
    </div>
  );
};

export default Infographic;
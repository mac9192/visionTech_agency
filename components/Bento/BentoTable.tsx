import React from "react";
import Image from 'next/image'
import { BentoGrid, BentoGridItem } from "../Bento/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import museum from '.././../public/white1.png'
import style from '../../components/Bento/style.module.css'
import {BackgroundGradient} from '../BgGradient/background-gradient'

export function BentoGridDemo() {
  return (
<BentoGrid className="w-full   container">
{items.map((item, i) => (
  <BackgroundGradient key={i}>
    <BentoGridItem
      title={item.title}
      description={item.description}
      header={item.header}
 
      className={i === 3 || i === 6 ? "md:col-span-2" : ""}
    />
  </BackgroundGradient>
))}

</BentoGrid>

  );
}
const Skeleton = () => (
  <div className="flex  bg-black h-full  text-black flex-1 w-full h-full min-h-[6rem] rounded-xl  bg-hero bg-cover">
   
  </div>
);
const SkeletonTwo = () => (
     <div className="flex   text-black flex-1 w-full h-full min-h-[6rem] rounded-xl  bg-hero bg-cover">
              
     </div>
   
 
  );
const items = [
  {
    title: "Web Development",
    description: "Custom website design and development tailored to your business needs.",
    header: <Skeleton />,
     
  },
  {
    title: "SEO Services",
    description: "Comprehensive SEO strategies to improve your website's visibility on search engines.",
    header: <Skeleton />,
    
  },
  {
    title: "Design Services",
    description: "Creative and unique graphic design solutions for web and mobile applications.",
    header: <Skeleton />,
  
  },
  {
    title: "CMS Integration",
    description: "Integration of content management systems for easy content updates and management.",
    header: <SkeletonTwo />,
 
  },
  {
    title: "Custom Application Development",
    description: "Development of custom web and mobile applications tailored to your specific requirements.",
    header: <Skeleton />,
   
  },
  {
    title: "Hosting and Maintenance",
    description: "Reliable hosting services and ongoing maintenance for your website.",
    header: <Skeleton />,
 
  },
 
];

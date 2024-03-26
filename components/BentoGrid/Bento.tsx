import { cn } from "@/utils/cn";
import React from "react";
import { BentoGrid, BentoGridItem } from "../BentoGrid/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

export function BentoGridDemoOne() {
  return (
    <div className=" md:container mx-auto">
     
      <div className="text-white    md:container pt-7 border-custom-gray border-t-2 text-xl sm:mx-auto">
      <p className="text-white text-xl sm:text-center md:text-left">Services</p>
      </div>
         <BentoGrid  className="max-w-7xl mx-auto bg-black text-white p-10  " >
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
    
          className={i === 3 || i === 6 ? "md:col-span-2  text-white bg-black border-white border-custom-gray " : "bg-black border-custom-gray "}
        />
      ))} 
    </BentoGrid>
    </div>
 
  ); 
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl text-white bg-comp bg-cover dark:from-neutral-900 dark:to-neutral-800 to-neutral-100" ></div>
);

const SkeletonOne = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl  bg-seo bg-cover dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);

const SkeletonTwo = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl  bg-design bg-cover dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const SkeletonThree = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl  bg-cms bg-cover dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);

const SkeletonFour = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl  bg-application bg-cover dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const SkeletonFive = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl  bg-application bg-hosting bg-cover dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const SkeletonSix = () => (
  <div  className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl  bg-application bg-cover  bg-digital dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);




const items = [
  {
    title: "Web Development",
    description: "Tailored website design and development for a standout online presence.",
    header: <Skeleton />,
    icon: <IconClipboardCopy className="h-4 w-4 text-white" />,
  },
  {
    title: "SEO Services",
    description: "Boosting website visibility and traffic with comprehensive SEO strategies.",
    header: <SkeletonOne />,
    icon: <IconFileBroken className="h-4 w-4 text-white" />,
  },
  {
    title: "Design Solutions",
    description: "Creative graphic design for logos, branding, and user interfaces.",
    header: <SkeletonTwo />,
    icon: <IconSignature className="h-4 w-4 text-white" />,
  },
  {
    title: "CMS Integration",
    description:
      "Easy content management through seamless CMS integration.",
    header: <SkeletonThree />,
    icon: <IconTableColumn className="h-4 w-4 text-white" />,
  },
  {
    title: "Custom Application Development",
    description: "Developing unique web and mobile applications tailored to your needs.",
    header: <SkeletonFour />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-white" />,
  },
  {
    title: "Hosting and Maintenance",
    description: "Reliable hosting and regular maintenance to keep your website running smoothly.",
    header: <SkeletonFive />,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 ttext-white" />,
  },
  {
    title: "Digital Marketing",
    description: "Targeted strategies to enhance your online presence and reach your audience effectively.",
    header: <SkeletonSix />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-white" />,
  },
];

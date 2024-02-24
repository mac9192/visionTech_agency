'use client';
import React, {useState} from 'react'
import { Canvas } from '@react-three/fiber'
import Model from '../models/FloatingShape';
import { Environment } from '@react-three/drei'
import FloatingShape from '../components/Hero/FloatingShape'
import Navigation from '../components/Navigation/Navigation'
import { motion, AnimatePresence } from 'framer-motion';
 
import {MacbookScroll} from '../components/Macbook/macbook-scroll'
import { WavyBackground} from '../components/Waves/wavy-background'
import Title from '../components/Hero/Title'
//import { BentoGrid, BentoGridItem } from "../components/Bento/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
 import Name from '../components/Hero/Name'
 import About from '../components/About/About'
 import { HoveredLink, Menu, MenuItem, ProductItem } from '../components/Navbar-menu/navbar-menu'
import {cn} from '../utils/cn'
import {InfiniteMovingCards} from '../components/MovingCards/moving-cards'
import {testimonials} from '../components/MovingCards/cardsData'
import {StickyScroll} from '../components/Stickyscroll/Sticky-scroll'
import {content} from '../components/Stickyscroll/Stickydata'
import Project from '../components/Portfolio/Project'
import {projects} from '../components/Portfolio/projectsData'
import  styles from '../components/Portfolio/style.module.css'
import Modal from '../components/Portfolio/Modal/Modal'
import {TabsDemo} from '../components/Tabs/TabsUi'
  
function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Products">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Algochurn"
              href="https://algochurn.com"
              src="https://res.cloudinary.com/algochurn/image/upload/v1700109138/framer%20motion%20components/290shots_so_gruelx.png"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Tailwind Master Kit"
              href="https://tailwindmasterkit.com"
              src="https://res.cloudinary.com/algochurn/image/upload/v1700109138/framer%20motion%20components/155shots_so_acab66.png"
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Moonbeam"
              href="https://gomoonbeam.com"
              src="https://res.cloudinary.com/algochurn/image/upload/v1700109138/framer%20motion%20components/53shots_so_wygjpf.png"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Rogue"
              href="https://userogue.com"
              src="https://res.cloudinary.com/algochurn/image/upload/v1700109139/framer%20motion%20components/356shots_so_hwpzvs.png"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Pricing">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default function Home() {

  const [isActive, setIsActive] = useState(false);
  const [modal, setModal] = useState({active: false, index: 0})

  return (
    <div>
 
      <div className="h-[1500px]">
        <div className="  ">
          <Name />
          <Navbar />
      <FloatingShape />
      <About />
      <div className="h-[40rem]  flex flex-col antialiased bg-black dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
   
     
 
 <div className="pb-20 bg-black">
       <Title />
    </div>

    <main className={styles.main}>

<div className={styles.body}>

  {

    projects.map( (project, index) => {

      return <Project index={index} title={project.title} setModal={setModal} key={index}/>

    })

  }

</div>

<Modal modal={modal} projects={projects}/>

</main>
<div className="bg-black pt-1 pb-1">
  <TabsDemo />
</div>


      <div className=" h-screen  pb-10  mx-auto" style={{ background: "#000000" }}>
      <MacbookScroll
        title={
          <span>
            Top Web Design Studio <br /> To Bring Your Vision to Life.
          </span>
        }
        
        src={`/white1.png`}
        showGradient={false}
      />

      </div>
      
        </div>
          
      
            
      </div>
    </div>
    
  )
}

/*
     <MacbookScroll
        title={
          <span>
            This Macbook is built with Tailwindcss. <br /> No kidding.
          </span>
        }
        
        src={`/linear.webp`}
        showGradient={false}
      />

*/
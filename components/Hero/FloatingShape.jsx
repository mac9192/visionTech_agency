import React, { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import Model from '../../models/FloatingShape';
import { Environment } from '@react-three/drei';
import { useMotionValue, useSpring } from "framer-motion";

export default function Index() {
  const [isOpen, setIsOpen] = useState(true);
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0)
  };

  const smoothMouse = {
    x: useSpring(mouse.x, { stiffness: 75, damping: 100, mass: 3 }),
    y: useSpring(mouse.y, { stiffness: 75, damping: 100, mass: 3 })
  };

  useEffect(() => {
    const manageMouse = (e) => {
      const { innerWidth, innerHeight } = window;
      const { clientX, clientY } = e;
      const x = clientX / innerWidth;
      const y = clientY / innerHeight;
      mouse.x.set(x);
      mouse.y.set(y);
    };

    window.addEventListener("mousemove", manageMouse);
    return () => window.removeEventListener("mousemove", manageMouse);
  }, [mouse.x, mouse.y]);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-black">
      <div className="md:min-h-[500px] lg:min-h-[700px] sm:min-h-[800px] rounded-xl rounded md:relative md:mx-auto md:container">
        <div className="md:block sm:hidden absolute inset-0 max-w-1/2 mt-10">
          <Canvas className="rounded-3xl z-2" style={{ background: "#21262D" }} orthographic camera={{ position: [0, 0, 200], zoom: 10 }}>
            <Model mouse={smoothMouse} />
            <Environment preset="studio" />
          </Canvas>
        </div>
        <div className="md:absolute inset-x-0 bottom-0 p-12 lg:pb-[105px] rounded pt-[90px] backdrop-blur-sm bg-custom-gray/70">
          <p className="md:text-[100px] pb-6 text-white sm:text-[70px]">Bringing Your Vision</p>
          <p className="md:text-8xl text-white sm:text-[70px]">To Life</p>
          <p className="p-3 max-w-[600px] pt-10 text-white text-lg">We specialize in modern web development, branding, marketing, and custom applications to elevate your online presence and engage your audience</p>
          <div className="flex space-x-4 pt-6">
            <button className="p-[3px] relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
              <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
                Lit up borders
              </div>
            </button>
            <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              Shimmer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

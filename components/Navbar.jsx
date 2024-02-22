import Image from 'next/image';
import circle from '../public/assets/circle.png'
import triangle from '../public/assets/triangle.png'

const Navbar = () => {
    return (
        <div className="sticky top-0 bg-black z-10 ">
 
            <div className=" r pt-10 mx-auto container mx-auto">
                <div className="flex justify-between items-center rounded   border-gray-700 rounded-3xl ">
                    <div className="flex space-x-6">
                        <a className="text-md text-white underline-relative">Home</a>
                        <a className="text-md text-white  underline-relative">Services</a>
                        <a className="text-md text-white  underline-relative">Plans</a>
                        <a className="text-md text-white  underline-relative">Contact</a>
                    </div>
                    <div className="text-2xl text-black">VisionTech</div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

/*

   <div className="w-1/2 p-1 bg-white">
            <div className="flex flex-row justify-around gap-4">
                <div className="p-2 border rounded-xl w-1/6 border-black bg-white flex border-2  justify-between items-center">
                    <div className="flex   flex-row justify-between">
                        <Image src={circle} width={40} height={50} />
                      
                    </div>
                    <h1 className="flex justify-end text-xl">
                     Vision Tech
                    </h1>
                </div>
                <div className="p-3 border  rounded-xl w-1/6 border-black border-2 bg-gray-300 flex justify-center items-center">
                    <h2 className="text-white text-xl">ABOUT</h2>
                </div>
                <div className="p-3 border  rounded-xl w-1/6 border-black bg-gray-300 border-2 flex justify-center items-center">
                    <h2 className="text-white text-xl">OUR SERVICES</h2>
                </div>
                <div className="p-3 border  rounded-xl w-1/6 border-black flex justify-center border-2  items-center">
                    <h2 className="text-black text-xl">+ BECOME A CLIENT</h2>
                </div>
                <div className="p-3 border bg-white rounded-xl w-2/6 border-black flex justify-between border-2  items-center">
                     <h1 className="flex justify-end text-black text-xl">
                     MENU
                    </h1>
                    <div className="flex   flex-row justify-between">
                        <Image className="text-black" src={circle} width={40} height={50} />
                      
                    </div>
                   
                </div>
            </div>
        </div>

*/
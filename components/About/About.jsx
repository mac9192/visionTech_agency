import {AnimatedTooltip} from '../Tooltip/animated-tooltip'
const people = [
    {
      id: 1,
      name: "John Doe",
      designation: "Software Engineer",
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    },
    {
      id: 2,
      name: "Robert Johnson",
      designation: "Product Manager",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 3,
      name: "Jane Smith",
      designation: "Data Scientist",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 4,
      name: "Emily Davis",
      designation: "UX Designer",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 5,
      name: "Tyler Durden",
      designation: "Soap Developer",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    },
    {
      id: 6,
      name: "Dora",
      designation: "The Explorer",
      image:
        "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
    },
  ];
   

const About = () => {

    return (
        <div className=" bg-black">
            <div className="flex md:flex-row sm:flex-col md:container pt-20  mx-auto w-full gap-x-20 pb-10">
            <div className="text-white md:container md:mx-auto md:w-full  pt-7 border-custom-gray border-t-2 text-xl"> 
            
             <p className="sm:text-center md:text-left">About Us</p>
             <div className="flex flex-row  r mx-auto container text-center pt-10 mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
             
             <p className="pt-3 text-md text-white sm:text-center md:text-left sm:p-10 md:p-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut lorem ac neque convallis rutrum. Duis suscipit, ipsum eget lacinia placerat, magna justo elementum libero, at ullamcorper nunc velit id ligula. Aliquam erat volutpat. Integer eu tellus auctor, fermentum urna nec, consectetur ex. Vivamus suscipit sapien vel elit gravida, at interdum dui fringilla. In aliquet eleifend nunc, vel tempor purus fermentum nec. Sed vitae arcu id libero malesuada dictum.</p>
            </div>
            
            <div className="text-white container mx-auto sm:hidden md:block   w-1/2 p-1"> 
                <p className="p-12 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 rounded-3xl min-h-full"></p>
            </div>
            </div>
        
        </div>
    )
}

export default About
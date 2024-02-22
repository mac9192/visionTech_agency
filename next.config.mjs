/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        unoptimized: true,
          // 
        remotePatterns: [
            {
                hostname: "images.unsplash.com",
                protocol: "https"
            },
            {
                hostname: "directus-production-c512.up.railway.app",
                protocol:"https"
            },
            {
                hostname: "servicescardpub.s3.us-east-2.amazonaws.com",
                protocol:"https"
            },
            {
                hostname: "https://youtu.be/F1O_Tqa38JQ?si=ePLoehbOD4dWr0IN",
                protocol:"https"
            },
            {
                hostname: "https://youtube.com",
                protocol:"https"
            },


       
            
        ],
      
    },
};

export default nextConfig;

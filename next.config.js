/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:"https",
                hostname:"images.unsplash.com"
            },
            {
                protocol:"https",
                hostname:"cdn.pixabay.com"
            },
            {
                protocol:"https",
                hostname:"imgs.search.brave.com"
            },
            {
                protocol:"https",
                hostname:"*",
            },


        ]
    }
}

module.exports = nextConfig

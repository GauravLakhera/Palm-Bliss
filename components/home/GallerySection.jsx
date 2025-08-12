"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function GallerySection() {
  // Sample image data - replace with your actual image URLs
  const galleryImages = [
    {
      id: 1,
      src: "/Images/swissRooms/2.jpg",
      alt: "Peaceful meditation room with natural light",
      gridClass: "col-span-2 row-span-2",
    },
    {
      id: 2,
      src: "/Images/mudHouse/1.jpg",
      alt: "Cozy bedroom with mountain view",
      gridClass: "col-span-4 row-span-2",
    },
    {
      id: 3,
      src: "/Images/luxeryRooms/1.webp",
      alt: "Ayurvedic wellness space",
      gridClass: "col-span-3 row-span-2",
    },
    {
      id: 4,
      src: "/Images/mudHouse/2.jpg",
      alt: "Traditional yoga corner",
      gridClass: "col-span-3 row-span-3",
    },
    {
      id: 5,
      src: "/Images/familyRoom/1.webp",
      alt: "Serene bathroom with natural elements",
      gridClass: "col-span-3 row-span-1",
    },
    {
      id: 6,
         src: "/Images/luxeryRooms/2.webp",
      alt: "Reading nook with spiritual books",
      gridClass: "col-span-2 row-span-2",
    },
    {
      id: 7,
      src: "/Images/mudHouse/3.jpg",
      alt: "Balcony overlooking Shivalik ranges",
      gridClass: "col-span-4 row-span-2",
    },
    {
      id: 8,
      src: "/Images/familyRoom/3.webp",
      alt: "Minimalist sleeping area",
      gridClass: "col-span-2 row-span-2",
    },
    {
      id: 9,
        src: "/Images/luxeryRooms/4.webp",
      alt: "Natural wood furnishings",
      gridClass: "col-span-2 row-span-2",
    },
    {
      id: 10,
      src: "/Images/familyRoom/2.webp",
      alt: "Peaceful garden view from window",
      gridClass: "col-span-2 row-span-2",
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-yellow-50/30 to-white/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-[5vh] mx-auto mb-12"
        >
          <h2 className="text-[6vw] md:text-[2.8vw] capitalize text-yellow-700/90 font-playfair font-semibold leading-tight">
            Stay In <span>Harmony & Comfort</span>
          </h2>
          <div className="font-alegreya italic md:text-[1.2vw]">
            <p className="text-[2vh] md:text-[1.5vw] text-gray-700 leading-relaxed mx-auto">
              Our rooms are more than a place to rest —
            </p>
            <p>they're sanctuaries for deep sleep</p>
            <p>holistic healing, and spiritual calm.</p>
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="grid grid-cols-4 md:grid-cols-6 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[250px]"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              whileHover={{
              
                transition: { duration: 0.3 },
              }}
              className={`${image.gridClass} relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group`}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              />

              {/* Optional: Overlay text on hover */}
              {/* <div className="absolute bottom-4 left-4 right-4 z-20 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-white text-sm font-medium leading-tight">
                  {image.alt}
                </p>
              </div> */}
            </motion.div>
          ))}
        </motion.div>

        {/* Optional: View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <Link href='/rooms' className="bg-yellow-700/90 text-white p-3 rounded">
        
          
            View All Rooms
          </Link>
        </motion.div>
      </div>
      <hr className="mt-2"></hr>
    </section>
  );
}

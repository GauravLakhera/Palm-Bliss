"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Wifi, Car, Coffee, Tv, Wind, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
// Import your images here
import mud1 from "@/public/Images/AllPhotos/mud-house.webp";
import mud2 from "@/public/Images/mudHouse/1.jpg";
import mud3 from "@/public/Images/mudHouse/2.jpg";
import mud4 from "@/public/Images/mudHouse/3.jpg";
import mud5 from "@/public/Images/mudHouse/4.jpg";
import mud6 from "@/public/Images/mudHouse/5.jpg";
import mud7 from "@/public/Images/mudHouse/6.jpg";
import garden1 from "@/public/Images/AllPhotos/gardenView.webp";
import garden2 from "@/public/Images/AllPhotos/DSC06399.webp";
import swiss1 from "@/public/Images/swissRooms/1.jpg";
import swiss2 from "@/public/Images/swissRooms/2.jpg";
import swiss3 from "@/public/Images/AllPhotos/swiss.webp";
import luxury1 from "@/public/Images/luxeryRooms/1.webp";
import luxury2 from "@/public/Images/luxeryRooms/2.webp";
import luxury3 from "@/public/Images/luxeryRooms/3.webp";
import luxury4 from "@/public/Images/luxeryRooms/4.webp";
import family1 from "@/public/Images/familyRoom/3.webp";
import family2 from "@/public/Images/familyRoom/5.webp";
import family3 from "@/public/Images/familyRoom/4.webp";
import family4 from "@/public/Images/familyRoom/2.webp";
import family5 from "@/public/Images/familyRoom/1.webp";

const ALL_ROOMS = [
  {
    id: 2,
    title: "Mud Houses",
    description:
      "Experience rustic charm in our traditional mud house, featuring a separate living area and ample space.",
    price: "₹6,999",
    capacity: "2 Adults",
    amenities: ["Living Room", "Garden View", "Dining Area"],
    images: [mud3, mud2, mud1, mud4, mud5, mud6, mud7],
    features: [Wifi, Car, Coffee, Tv, Wind, Users],
  },
  {
    id: 4,
    title: "Swiss Cottages",
    description:
      "Relax in our luxurious Swiss cottages, where you'll find a comfortable bed, exclusive experiences, and all modern amenities.",
    price: "₹5,999",
    capacity: "2 Adults",
    amenities: ["Yoga Mat", "Meditation Corner", "Tv", "Sound System"],
    images: [swiss1, swiss2],
    features: [Wifi, Car, Coffee, Tv, Wind, Users],
  },
  {
    id: 6,
    title: "Family Suite",
    description:
      "Perfect for families with connecting rooms and child-friendly amenities.",
    price: "₹7,999",
    capacity: "2 Adults + 2 Children",
    amenities: [
      "Connecting Rooms",
      "Play Area",
      "Child Safety",
      "Family Dining",
    ],
    images: [family1, family2, family3, family4, family5],
    features: [Wifi, Car, Coffee, Tv, Wind, Users],
  },
  {
    id: 8,
    title: "Luxury Room",
    description:
      "Finest comfort with breathtaking mountain views, modern interiors, and exquisite service.",
    price: "₹8,999",
    capacity: "2 Adults",
    amenities: ["Mountain View", "Balcony", "King Bed", "Sitting Area"],
    images: [luxury1, luxury2, luxury3, luxury4],
    features: [Wifi, Car, Coffee, Tv, Wind, Users],
  },
];

// Auto-sliding room image slider for main grid cards & modal
function RoomImageSlider({ images }) {
  const [current, setCurrent] = useState(0);

  const prevImage = () => {
    setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  };

  const nextImage = () => {
    setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));
  };

  return (
    <div className="relative w-full h-[32rem]  bg-gray-100 rounded-xl overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <Image
            src={images[current]}
            alt="Room image"
            fill
            style={{ objectFit: "cover" }}
            className="w-full h-full"
          />
        </motion.div>
      </AnimatePresence>
      <button
        aria-label="Previous Image"
        onClick={(e) => {
          e.stopPropagation();
          prevImage();
        }}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 hover:bg-opacity-100 transition"
      >
        &#8678;
      </button>
      <button
        aria-label="Next Image"
        onClick={(e) => {
          e.stopPropagation();
          nextImage();
        }}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 hover:bg-opacity-100 transition"
      >
        &#8680;
      </button>
    </div>
  );
}

function RoomDetailModal({ room, open, onClose }) {
  if (!open || !room) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-2">
      <motion.div
        initial={{ scale: 0.94, opacity: 0, y: 100 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.94, opacity: 0, y: 100 }}
        className="bg-white shadow-2xl rounded-2xl w-full md:w-[80vw] lg:w-[60vw] max-w-4xl md:max-w-4xl p-0 overflow-hidden relative flex flex-col"
        style={{ maxHeight: "90vh" }}
      >
        <button
          onClick={onClose}
          className="absolute right-6 top-6 text-gray-400 text-2xl font-bold z-10"
          aria-label="Close Room Modal"
        >
          ×
        </button>
        <div className="w-full">
          <RoomImageSlider images={room.images} />
        </div>
        <div className="p-6 overflow-y-auto">
          <h3 className="text-2xl font-bold font-playfair text-[#A67A35] mb-2">
            {room.title}
          </h3>
          <div className="mb-1">
            <Badge className="bg-[#A67A35] text-black font-semibold">
              {room.price}/night
            </Badge>
          </div>
          <p className="text-gray-600 mb-4">{room.description}</p>
          <div className="flex items-center gap-2 mb-2">
            <Users className="h-5 w-5 text-[#A67A35]" />
            <span className="text-base">{room.capacity}</span>
          </div>
          <div className="mb-2">
            <h4 className="font-semibold mb-1">Amenities</h4>
            <div className="flex flex-wrap gap-2">
              {room.amenities.map((am, i) => (
                <Badge key={i} variant="outline">
                  {am}
                </Badge>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2 mt-3">
            {room.features.slice(0, 5).map((Feature, i) => (
              <Feature key={i} className="h-5 w-5 text-[#A67A35]" />
            ))}
          </div>
          <div className="mt-6">
            <Button
              className="w-full bg-[#A67A35] hover:bg-[#8c672d] text-black font-semibold"
              onClick={onClose}
            >
              {" "}
              Close{" "}
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function RoomsSection() {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <section className="bg-[#FBF7F0] py-[3vh] md:py-[12vh] px-3 md:px-[4vw]">
      <div className="text-center space-y-[5vh] mx-auto mb-12">
        <h2 className="text-[6vw] md:text-[2.8vw] font-playfair font-bold text-[#000] leading-tight">
          Stay In <span>Harmony & Comfort</span>
        </h2>
        <p className="text-[2vh] md:text-[1.2vw] text-gray-700 leading-relaxed mx-auto">
          Our rooms are more than a place to rest — they're sanctuaries for deep
          sleep, holistic healing, and spiritual calm.
        </p>
      </div>
      {/* 2x2 grid, full width */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
        {ALL_ROOMS.map((room, idx) => (
          <div
            key={room.id}
            className="cursor-pointer transition-all duration-200 "
            onClick={() => setOpenIdx(idx)}
          >
            <Card className="h-full bg-white border-gray-200 hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <RoomImageSlider images={room.images} />
              <CardContent className="p-6">
                <h3 className="text-xl md:text-2xl font-playfair font-bold text-black mb-2">
                  {room.title}
                </h3>
                <div className="mb-2">
                  <Badge className="bg-[#A67A35] text-black font-semibold">
                    {room.price}/night
                  </Badge>
                </div>
                <p className="text-gray-600 text-sm md:text-base mb-4">
                  {room.description}
                </p>
                <div className="flex items-center gap-2 mb-4">
                  <Users className="h-4 w-4 text-[#A67A35]" />
                  <span className="text-sm text-gray-600">{room.capacity}</span>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold text-black mb-2">Amenities</h4>
                  <div className="flex flex-wrap gap-1">
                    {room.amenities.slice(0, 4).map((am, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {am}
                      </Badge>
                    ))}
                    {room.amenities.length > 4 && (
                      <Badge variant="outline" className="text-xs">
                        +{room.amenities.length - 4} more
                      </Badge>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  {room.features.slice(0, 4).map((Feature, i) => (
                    <Feature key={i} className="h-4 w-4 text-[#A67A35]" />
                  ))}
                </div>
                <Button
                  onClick={(e) => {
                    e.stopPropagation();
                    // router.push(`/contact?id=${room.id}`);
                  }}
                  className="bg-[#A67A35] hover:bg-[#8c672d] text-black font-semibold"
                >
                  Book Now
                </Button>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
      {/* Render the modal ONCE, after the grid */}
      <RoomDetailModal
        room={typeof openIdx === "number" ? ALL_ROOMS[openIdx] : null}
        open={typeof openIdx === "number"}
        onClose={() => setOpenIdx(null)}
      />
      {/* <div className="text-center mt-[10vh]">
        <button
          onClick={() => {
           
          }}
          className="bg-[#3c2f23] text-white text-[2.1vh] md:text-[1.2vw] font-medium px-8 py-3 md:px-[3vw] md:py-[1vw] rounded-full"
        >
          View All Rooms
        </button>
      </div> */}
    </section>
  );
}

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, X } from "lucide-react";
import {
  GiLotus,
  GiMeditation,
  GiMountainCave,
  GiHerbsBundle,
  GiFruitBowl,
  GiRadialBalance,
} from "react-icons/gi";
import { FaLeaf, FaSun, FaHandsHelping } from "react-icons/fa";
import { MdOutlineNature } from "react-icons/md";

const items = [
  {
    title: "Mud House Stay",
    image: "/Images/AllPhotos/mud-house.webp",
    description:
      "Experience traditional living in eco-friendly mud houses, blending comfort with nature's embrace.",
    detailedDescription:
      "Enjoy an immersive experience staying in eco-friendly mud houses built using natural materials. Comfortable amenities are integrated while maintaining rustic charm.",
    size: "col-span-2 row-span-2",
    delay: "0s",
    // Custom modal content for Mud House Stay
    modalContent: (
      <div className="text-gray-800 leading-relaxed">
        <p className="mb-4">
          Step into our handcrafted mud houses, where tradition meets comfort.
          Built with natural materials that breathe with you, these earthy
          sanctuaries remain cool in summer and warm in winter, connecting you
          deeply to nature's rhythm. The soft scent of clay, gentle textures,
          and calming silence create a cocoon of peace, letting you slow down,
          sleep deeply, and wake to birdsong and fresh air.
        </p>

        <p className="mb-6 font-medium text-gray-900">
          Here, you don't just stay—you return to the earth, to yourself.
        </p>

        <blockquote className="italic text-yellow-700 border-l-4 border-yellow-500 pl-6 py-4 mb-4 bg-yellow-50 rounded-r-lg">
          <div className="leading-relaxed space-y-3">
            <p>
              Within these walls of living clay,
              <br />
              Soft winds sing and petals sway.
              <br />
              Sunlight dances on earthen hues,
              <br />
              Cradling dreams in morning dews.
            </p>

            <p>
              Cool as dawn, warm as dusk,
              <br />
              Breathing earth in every musk.
              <br />
              A nest where silence softly weaves,
              <br />
              Stories of rain and rustling leaves.
            </p>

            <p>
              Here, time unfolds like jasmine bloom,
              <br />
              Stars pour light into your room.
              <br />
              Barefoot heart upon soft sod,
              <br />
              You touch the earth, you touch God.
            </p>

            <p>
              In these quiet mud homes you'll find,
              <br />
              A gentle stillness for your mind—
              <br />
              A hush that heals, a breath so deep,
              <br />
              Here, the earth will rock you to sleep.
            </p>
          </div>
        </blockquote>
      </div>
    ),
  },
  {
    title: "Wellness Retreat & Yoga",
    image:
      "https://plus.unsplash.com/premium_photo-1683141079053-917e36624b28?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fGluZGlhJTIweW9nYXxlbnwwfHwwfHx8MA%3D%3D",
    description:
      "Rejuvenate your mind and body with daily yoga sessions and personalized Ayurvedic therapies.",
    detailedDescription:
      "Join daily yoga sessions suitable for all levels and personalized Ayurvedic therapies that detoxify and balance your body and mind in serene surroundings.",
    size: "col-span-2 row-span-3",
    delay: "0.1s",
    // Example: Custom modal content for Wellness Retreat
    modalContent: (
      <div className="text-gray-800 leading-relaxed">
        <p className="mb-4">
          Join daily yoga sessions suitable for all levels and personalized
          Ayurvedic therapies that detoxify and balance your body and mind in
          serene surroundings.
        </p>

        <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
          <h4 className="font-bold text-green-800 mb-2">What's Included:</h4>
          <ul className="list-disc list-inside text-green-700 space-y-1">
            <li>Daily sunrise yoga sessions</li>
            <li>Personalized Ayurvedic consultations</li>
            <li>Traditional meditation practices</li>
            <li>Herbal wellness treatments</li>
          </ul>
        </div>

        <p className="italic text-gray-600">
          "In the embrace of nature, find your inner peace and restore your
          natural balance."
        </p>
      </div>
    ),
  },
  {
    title: "Ayush Dining",
    image: "/Images/AllPhotos/ayushDining.webp",
    description:
      "Savor wholesome, healthy meals crafted with Ayurvedic principles, nourishing your well-being.",
    detailedDescription:
      "Dine on meals prepared using time-honored Ayurvedic recipes focusing on balance and nourishment. All ingredients are fresh and locally sourced.",
    size: "col-span-2 row-span-4",
    delay: "0.2s",
    modalContent: (
      <div className="text-gray-800 leading-relaxed">
        <p className="mb-4 font-semibold text-lg text-yellow-700/80">
          Ayush Dining – A Sacred Meal, A Healing Moment
        </p>

        <p className="">
          At Palm Bliss Resort & Atharva Ayurveda Wellness Retreat
        </p>
        <p className="my-1">
          Step into Ayush Dining, where food becomes medicine, memory, and
          meditation. Rooted in Ayurvedic principles and crafted with love, each
          meal is a celebration of purity, balance, and seasonal nourishment.
        </p>
        <p className="my-1">
          Savor traditional Pahadi thalis, sattvic delicacies, and herbal
          infusions — all prepared with fresh, local ingredients, infused with
          healing intent. From copper vessels to clay pots, every detail honors
          ancient wisdom and mindful living.
        </p>

        <p className="my-1">
          Dine under the open sky or in calming, earth-toned interiors — where
          every bite restores your body, quiets your mind, and uplifts your
          soul.
        </p>

        <p className="my-1">
          This isn’t just dining. It’s nourishment aligned with nature, culture,
          and your inner rhythm.
        </p>

        <p className="my-3 ">
          Welcome to Ayush — where you eat to heal, live to glow.
        </p>
      </div>
    ),
    // This item will use default detailedDescription (no modalContent specified)
  },
  {
    title: "Trekking & Jungle Safari",
    image: "/Images/AllPhotos/about-us-1.jpg",
    description:
      "Explore the pristine nature trails and embark on thrilling jungle safaris (available upon request).",
    detailedDescription:
      "Embark on a serene tracking journey into the lush jungle hills of Thano, where mist-laced trails wind through ancient sal forests, echoing with birdsong and the whispers of the breeze. Just steps from Palm Bliss Resort, this walk into the wild leads you through emerald canopies, hidden streams, and the earthy scent of rain-kissed leaves, reconnecting your soul with the untouched rhythms of nature.",
    size: "col-span-2 row-span-2",
    delay: "0.3s",
    // Example: Custom adventure-themed content
    modalContent: (
      <div className="text-gray-800 leading-relaxed">
        <p className="mb-4 font-semibold text-lg text-yellow-700/90">
          Adventure Awaits in Nature's Playground
        </p>

        <p className="mb-4">
          Embark on a serene tracking journey into the lush jungle hills of
          Thano, where mist-laced trails wind through ancient sal forests,
          echoing with birdsong and the whispers of the breeze.
        </p>
{/* 
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-bold text-green-800 mb-2">🥾 Trekking</h4>
            <ul className="text-sm text-green-700 space-y-1">
              <li>• Guided nature walks</li>
              <li>• Bird watching tours</li>
              <li>• Photography sessions</li>
            </ul>
          </div>
          <div className="bg-orange-50 p-4 rounded-lg">
            <h4 className="font-bold text-orange-800 mb-2">🦌 Safari</h4>
            <ul className="text-sm text-orange-700 space-y-1">
              <li>• Wildlife spotting</li>
              <li>• Expert guides</li>
              <li>• Available on request</li>
            </ul>
          </div>
        </div> */}

        <blockquote className="italic text-gray-600 border-l-4 border-green-500 pl-4">
          "Just steps from Palm Bliss Resort, this walk into the wild leads you
          through emerald canopies, hidden streams, and the earthy scent of
          rain-kissed leaves, reconnecting your soul with the untouched rhythms
          of nature."
        </blockquote>
      </div>
    ),
  },
  // Continue with other items...
  {
    title: "Activities",
    image: "/Images/AllPhotos/indoorGame1.webp",
    description: "Fun activities for all ages — indoor and outdoor!",
    detailedDescription:
      "Indulge in fun-filled moments at The Palm Bliss with a variety of indoor and outdoor games. Enjoy a friendly match of chess, carrom, or table tennis indoors, or step outside for badminton, volleyball, cricket, and open-lawn activities under the fresh skies. Perfect for families, friends, and all who wish to add a spark of play to their stay",
    size: "col-span-1 row-span-2",
    delay: "0.4s",
  },
  {
    title: "Garden Dining",
    image: "/Images/AllPhotos/outdoorDining.webp",
    description: "Enjoy meals under the open sky, surrounded by lush greenery.",
    detailedDescription:
      "Dine in our beautiful garden setting where meals are served under the open sky amidst lush plants, creating a perfect ambiance.",
    size: "col-span-1 row-span-2",
    delay: "0.5s",
  },
  {
    title: "Cycling Through Serenity",
    image: "/Images/cycling.webp",
    description:
      "Cycle through the serene jungle paths and find peace, freshness, and freedom with every ride.",

    modalContent: (
      <div className="text-gray-800 leading-relaxed">
        <p className="mb-4 font-semibold text-lg text-yellow-700/90">
          Cycling Through Serenity
        </p>

        <p className="mb-4">
          Glide through winding jungle paths, where sunlight dances on dewy
          leaves and the air is rich with the scent of wild herbs. At Palm Bliss
          Resort, cycling is more than just movement — it's a soulful journey
          through nature's untouched beauty.
        </p>

        <p>
          Feel the cool breeze kiss your face as you ride past bamboo groves,
          chirping birds, and whispering trees.
        </p>
        <p>
          Whether you're an early riser seeking a sunrise trail or a sunset
          explorer chasing golden light, each ride brings peace, freshness, and
          a deep breath of freedom.
        </p>
      </div>
    ),
    size: "col-span-2 row-span-2",
    delay: "0.6s",
  },
];

const DetailModal = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
      role="dialog"
      aria-modal="true"
      tabIndex={-1}
      onClick={onClose}
      onKeyDown={(e) => {
        if (e.key === "Escape") onClose();
      }}
    >
      <div
        className="bg-white rounded-lg max-w-4xl w-full p-6 relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 text-gray-700 hover:text-gray-900 z-10"
        >
          <X size={24} />
        </button>

        <h3 className="text-3xl font-bold mb-6 text-yellow-700/90 pr-10">
          {item.title}
        </h3>

        <div className="w-full aspect-[16/9] relative rounded-lg overflow-hidden mb-6 shadow-lg">
          <Image
            src={item.image}
            alt={item.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* Flexible content rendering - Custom modalContent or fallback to detailedDescription */}
        {item.modalContent ? (
          item.modalContent
        ) : (
          <p className="text-gray-800 leading-relaxed text-lg">
            {item.detailedDescription}
          </p>
        )}
      </div>
    </div>
  );
};

const FacilitiesGrid = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <section className="p-4 md:p-8 overflow-hidden" id="facilities">
      <div className=" w-full md:max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl  font-semibold text-yellow-700/90 mb-12 text-center  tracking-tight leading-tight">
          Discover The Unique Experiences At <br className="md:hidden" />
          <span>Palm Bliss</span>
        </h2>
        <div className="  lg:px-10 py-5 font-inter text-lg leading-relaxed space-y-2 text-start">
          <p>
            At Palm Bliss Resort with Atharva Ayurveda Wellness Step into a
            sanctuary where every moment is a celebration of stillness, And
            every experience whispers the promise of renewal.
          </p>

          <p>
            <FaLeaf className="inline-block text-green-700 mr-2" size={20} />
            Step into a world where time slows down, Where the rustling leaves
            sing lullabies of peace, And the scent of sacred herbs lingers in
            the air.
          </p>
          <p>
            <GiMountainCave
              className="inline-block text-gray-700 mr-2"
              size={22}
            />
            At Palm Bliss Resort, nature holds you in its quiet embrace —
            Cradled by forest winds, kissed by Himalayan light, and soothed by
            sacred silence.
          </p>
          <p>
            <FaSun className="inline-block text-yellow-500 mr-2" size={22} />
            Here, the mornings begin with golden light kissing the hills, And
            the evenings melt into stillness beneath a sky full of stars. The
            earth beneath your feet hums with ancient wisdom, And every breeze
            carries the quiet song of balance and renewal.
          </p>
          <p>
            <MdOutlineNature
              className="inline-block text-green-500 mr-2"
              size={22}
            />
            Stay wrapped in the warm embrace of nature, Where luxury wears the
            robe of simplicity, And comfort flows gently like a mountain stream.
          </p>
          <p className="text-center italic py-2 text-yellow-700 font-alegreya  text-2xl">
            At Palm Bliss and Atharva, You don’t just stay — You heal, You
            breathe, You become whole again.
          </p>
          <p>
            Let your spirit rest. Let your soul rise. Let harmony and comfort
            become your way of life.
          </p>
          <p>With Atharva Wellness, ancient healing meets mindful luxury:</p>
          <ul className="pl-10 list-disc rounded-lg shadow-sm py-3">
            <li>
              Awaken your senses with warm herbal therapies and traditional
              Abhyanga
            </li>
            <li>
              Realign your energy through personalized Panchakarma journeys
            </li>
            <li>
              Meditate beneath whispering trees or practice yoga at sunrise
            </li>
            <li>
              {" "}
              Nourish your being with pure, sattvic meals grown from the earth
              around you
            </li>
            <li>
              {" "}
              Each breath becomes deeper. Each step, lighter. Each day, a
              retreat into wholeness.
            </li>
          </ul>
          <p>
            This is more than a stay. It’s a return to balance. A rediscovery of
            self. A journey woven with wisdom, warmth, and quiet joy.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-3 gap-4 auto-rows-fr">
          {items.map((item, idx) => (
            <div
              key={idx}
              tabIndex={0}
              role="button"
              onClick={() => setSelectedItem(item)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") setSelectedItem(item);
              }}
              className={`
                relative rounded-2xl overflow-hidden shadow-xl
                flex items-end p-3 md:p-6
                transition-all duration-500 ease-in-out
                transform hover:scale-[1.02] hover:shadow-2xl
                group cursor-pointer
                ${item.size} animate-fade-in
                focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2
              `}
              style={{ animationDelay: item.delay }}
              aria-label={`View details about ${item.title}`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
                style={{ objectFit: "cover" }}
                className="absolute inset-0 z-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
              <div className="relative z-20 text-white md:p-2">
                <h3 className="text-xl md:text-2xl font-sans font-bold mb-2 drop-shadow-md">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-200 leading-relaxed drop-shadow-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
          <div
            className={`
              relative rounded-2xl overflow-hidden 
              flex items-end p-3 md:p-6
              border border-gray-500
              transition-all duration-500 ease-in-out
              col-span-2 row-span-1
              animate-fade-in
            `}
          >
            <div className="relative z-20 text-black md:p-1">
              <Link
                href="/contact"
                className="text-xl flex items-center gap-2 md:text-2xl font-sans font-bold mb-2 border rounded-sm my-2 px-4 border-yellow-700 py-2 hover:bg-yellow-700 hover:text-white transition-all duration-300"
              >
                Book Now
                <ExternalLink />
              </Link>
              <p className="text-sm text-gray-800 leading-relaxed drop-shadow-sm">
                Get the best deals and offers
              </p>
            </div>
          </div>
        </div>
      </div>
      {selectedItem && (
        <DetailModal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </section>
  );
};

export default FacilitiesGrid;

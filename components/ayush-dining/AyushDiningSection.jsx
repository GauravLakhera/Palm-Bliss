"use client";

import { motion } from "framer-motion";
import { FaLeaf, FaHeart, FaSun, FaUtensils, FaSeedling, FaMountain } from "react-icons/fa";
import { GiMeditation, GiLotus, GiBowlOfRice, GiFlowerPot, GiTreeBranch, GiDew  } from "react-icons/gi";
import { MdSpa, MdNaturePeople, MdOutlineEco } from "react-icons/md";
import { BiLeaf } from "react-icons/bi";
import Link from "next/link";

export default function AyushDiningSection() {
  return (
    <section className="relative min-h-screen flex py-10 items-center justify-center bg-yellow-50/50 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-6">
        {/* Hero Section with Side Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side - Main Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-yellow-200">
              <GiLotus className="w-5 h-5 text-yellow-700/90" />
              <span className="text-yellow-700/80 font-medium">
                Sacred Dining Experience
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-yellow-700/90 text-5xl lg:text-7xl font-bold leading-tight">
                Ayush Dining
              </h1>
              <h2 className="text-yellow-700/80 text-2xl lg:text-3xl font-semibold">
                A Sacred Meal, A Healing Moment
              </h2>
              {/* <p className="text-black text-lg lg:text-xl ">
                At Palm Bliss Resort & Atharva Ayurveda Wellness Retreat
              </p> */}
            </div>

            {/* Main Description */}
            <div className="bg-white/60 backdrop-blur-sm px-8 py-4 rounded-2xl shadow-lg border border-white/70">
              <p className="text-gray-800 text-lg lg:text-xl leading-relaxed">
                Step into Ayush Dining, where food becomes Healthy, memory, and
                meditation.
              </p>
              <p className="text-yellow-700 text-lg lg:text-xl leading-relaxed mt-4 font-medium">
                Rooted in Ayurvedic principles and crafted with love, each meal
                is a celebration of purity, balance, and seasonal nourishment.
              </p>
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-gradient-to-r from-yellow-600 to-yellow-700/90 text-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 font-bold text-lg"
            >
              <a href="/contact">Experience Ayush Dining</a>
            </motion.button>
          </motion.div>

          {/* Right Side - Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Feature Card 1 */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-4 border border-yellow-700/90 rounded-full">
                  <FaLeaf className="w-6 h-6 text-yellow-600" />
                </div>
                <p className="text-gray-800 text-base lg:text-lg leading-relaxed">
                  Savor traditional Pahadi thalis, sattvic delicacies, and
                  herbal infusions — all prepared with fresh, local ingredients,
                  infused with healing intent.
                </p>
              </div>
            </motion.div>

            {/* Feature Card 2 */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-4  border border-yellow-700/90 rounded-full">
                  <GiBowlOfRice className="w-6 h-6 text-yellow-600" />
                </div>
                <p className="text-gray-800 text-base lg:text-lg leading-relaxed">
                  Every detail—from ingredient selection to preparation
                  methods—honors ancient wisdom and mindful living, transforming
                  each meal into a healing journey rooted in Ayush traditions.
                </p>
              </div>
            </motion.div>

            {/* Feature Card 3 */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-4  border border-yellow-700/90 rounded-full">
                  <FaSun className="w-6 h-6 text-yellow-600" />
                </div>
                <p className="text-gray-800 text-base lg:text-lg leading-relaxed">
                  Dine under the open sky or in calming, earth-toned interiors —
                  where every bite restores your body, quiets your mind, and
                  uplifts your soul.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Section - Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-20 text-center"
        >
          {/* Philosophy Cards */}
          {/* <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-white/80 to-yellow-50/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-white/60"
            >
              <div className="flex justify-center mb-4">
                <div className="p-4  rounded-full">
                  <GiMeditation className="w-8 h-8 text-yellow-600" />
                </div>
              </div>
              <p className="text-gray-800 text-lg lg:text-xl leading-relaxed font-medium">
                This isn't just dining. It's nourishment aligned with nature,
                culture, and your inner rhythm.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className=" backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-white/60"
            >
              <div className="flex justify-center mb-4">
                <div className="p-4  rounded-full">
                  <FaHeart className="w-8 h-8 text-yellow-700/90" />
                </div>
              </div>
              <p className="text-gray-800 text-lg lg:text-xl leading-relaxed font-medium">
                Welcome to Ayush — where you eat to heal, live to glow.
              </p>
            </motion.div>
          </div> */}
        </motion.div>

        {/* New Additional Content Sections */}
        
        {/* Nourishment for Body & Soul Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-6">
              <MdSpa className="w-8 h-8 text-yellow-600" />
              <h3 className="text-yellow-700/90 text-4xl lg:text-5xl font-bold">
                Nourishment for Body & Soul
              </h3>
              <MdSpa className="w-8 h-8 text-yellow-600" />
            </div>
            <p className="text-gray-800 text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed">
              Immerse yourself in a culinary journey where every dish is crafted with fresh, local ingredients and ancient wellness wisdom.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white/70 backdrop-blur-sm p-8 rounded-3xl shadow-lg border border-white/50"
            >
              <div className="flex items-center gap-3 mb-4">
                <FaSeedling className="w-6 h-6 text-yellow-600" />
                <h4 className="text-yellow-700/90 text-2xl font-bold">
                  Pure, Wholesome, Natural
                </h4>
              </div>
              <p className="text-gray-800 text-lg leading-relaxed">
                Experience the goodness of nature on your plate – pure vegetarian, organic, and soul-satisfying meals that celebrate the art of mindful eating.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white/70 backdrop-blur-sm p-8 rounded-3xl shadow-lg border border-white/50"
            >
              <div className="flex items-center gap-3 mb-4">
                <MdNaturePeople className="w-6 h-6 text-yellow-600" />
                <h4 className="text-yellow-700/90 text-2xl font-bold">
                  Where Wellness Meets Flavor
                </h4>
              </div>
              <p className="text-gray-800 text-lg leading-relaxed">
                Each meal is a quiet symphony of nature's bounty, infused with the wisdom of Ayurveda and the purity of organic harvests.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Flavors & Harmony Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16"
        >
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-white/80 to-yellow-50/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/50"
            >
              <div className="flex items-center gap-3 mb-4">
                <GiFlowerPot className="w-6 h-6 text-yellow-600" />
                <h4 className="text-yellow-700/90 text-xl font-bold">
                  Flavors That Heal
                </h4>
              </div>
              <p className="text-gray-800 text-base leading-relaxed">
                Here, every bite whispers wellness, every sip carries the breath of the mountains, and every plate is a poem of nourishment.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-white/80 to-yellow-50/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/50"
            >
              <div className="flex items-center gap-3 mb-4">
                <FaMountain className="w-6 h-6 text-yellow-600" />
                <h4 className="text-yellow-700/90 text-xl font-bold">
                  Dining in Harmony
                </h4>
              </div>
              <p className="text-gray-800 text-base leading-relaxed">
                Beneath the gentle embrace of the Shivalik ranges, we serve not just food, but a celebration of balance, vitality, and peace.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-white/80 to-yellow-50/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/50"
            >
              <div className="flex items-center gap-3 mb-4">
                <FaUtensils className="w-6 h-6 text-yellow-600" />
                <h4 className="text-yellow-700/90 text-xl font-bold">
                  A Feast for the Senses
                </h4>
              </div>
              <p className="text-gray-800 text-base leading-relaxed">
                From the first aroma to the final taste, Ayush Dining is a mindful journey—where flavors bloom, hearts feel lighter, and the soul feels at home.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Final Wellness Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-16 mb-12"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white/60 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-white/70"
            >
              <div className="flex items-center gap-3 mb-4">
                <GiDew  className="w-6 h-6 text-yellow-600" />
                <h4 className="text-yellow-700/90 text-2xl font-bold">
                  A Taste of Wellness
                </h4>
              </div>
              <p className="text-gray-800 text-lg leading-relaxed">
                From sunrise breakfasts to serene sunset dinners, Ayush Dining offers flavors that heal, energize, and delight.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white/60 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-white/70"
            >
              <div className="flex items-center gap-3 mb-4">
                <GiTreeBranch className="w-6 h-6 text-yellow-600" />
                <h4 className="text-yellow-700/90 text-2xl font-bold">
                  Nature-Inspired Flavors
                </h4>
              </div>
              <p className="text-gray-800 text-lg leading-relaxed">
                Savor food prepared with love, guided by Ayurveda and served in the calming ambience of our wellness retreat.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

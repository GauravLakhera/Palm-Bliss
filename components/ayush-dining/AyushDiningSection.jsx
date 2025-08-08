"use client";

import { motion } from "framer-motion";
import { FaLeaf, FaHeart, FaSun } from "react-icons/fa";
import { GiMeditation, GiLotus, GiBowlOfRice } from "react-icons/gi";
import Link from "next/link";

export default function AyushDiningSection() {
  return (
    <section className="relative min-h-screen flex py-10 items-center justify-center bg-yellow-50/50 overflow-hidden">
      {/* Floating background elements */}
      {/* <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-200/30 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-16 w-24 h-24 bg-teal-200/40 rounded-full animate-bounce"></div>
        <div className="absolute bottom-1/4 left-1/4 w-20 h-20 bg-cyan-200/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-16 right-20 w-28 h-28 bg-yellow-300/20 rounded-full animate-bounce"></div>
      </div> */}

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
              <p className="text-black text-lg lg:text-xl ">
                At Palm Bliss Resort & Atharva Ayurveda Wellness Retreat
              </p>
            </div>

            {/* Main Description */}
            <div className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/70">
              <p className="text-gray-800 text-lg lg:text-xl leading-relaxed">
                Step into Ayush Dining, where food becomes medicine, memory, and
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
                <div className="p-4 bg-yellow-100 rounded-full">
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
                <div className="p-4 bg-yellow-100 rounded-full">
                  <GiBowlOfRice className="w-6 h-6 text-yellow-600" />
                </div>
                <p className="text-gray-800 text-base lg:text-lg leading-relaxed">
                  From copper vessels to clay pots, every detail honors ancient
                  wisdom and mindful living.
                </p>
              </div>
            </motion.div>

            {/* Feature Card 3 */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-4 bg-yellow-100 rounded-full">
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
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-white/80 to-yellow-50/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-white/60"
            >
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-yellow-100 rounded-full">
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
              className="bg-gradient-to-br from-white/80 to-teal-50/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-white/60"
            >
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-teal-100 rounded-full">
                  <FaHeart className="w-8 h-8 text-teal-600" />
                </div>
              </div>
              <p className="text-gray-800 text-lg lg:text-xl leading-relaxed font-medium">
                Welcome to Ayush — where you eat to heal, live to glow.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

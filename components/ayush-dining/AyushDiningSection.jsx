"use client";

import { motion } from "framer-motion";
import { FaLeaf, FaHeart, FaSun } from "react-icons/fa";
import { GiMeditation, GiLotus } from "react-icons/gi";

export default function AyushDiningSection() {
  return (
    <section className="relative py-16 lg:py-24 bg-gradient-to-br from-amber-50 to-yellow-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-yellow-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-amber-200/30 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 rounded-full border border-yellow-200 text-yellow-700 text-sm mb-6">
            <GiLotus className="w-4 h-4" />
            <span>Sacred Dining Experience</span>
          </div>
          
          <h2 className="text-yellow-700/90 text-4xl lg:text-6xl font-bold leading-tight mb-4">
            Ayush Dining
          </h2>
          <p className="text-yellow-700/80 text-xl lg:text-2xl font-medium">
            A Sacred Meal, A Healing Moment
          </p>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-xl border border-white/50"
        >
          
          {/* Subtitle */}
          <div className="text-center mb-8">
            <h3 className="text-black text-xl lg:text-2xl font-semibold">
              At Palm Bliss Resort & Atharva Ayurveda Wellness Retreat
            </h3>
          </div>

          {/* Content Paragraphs */}
          <div className="space-y-6 text-black leading-relaxed">
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg lg:text-xl font-medium text-center mb-8"
            >
              Step into Ayush Dining, where food becomes medicine, memory, and meditation.
              <br />
              <span className="text-yellow-700/80">Rooted in Ayurvedic principles and crafted with love, each meal is a celebration of purity, balance, and seasonal nourishment.</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid lg:grid-cols-2 gap-8 items-center"
            >
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-yellow-100 rounded-full">
                    <FaLeaf className="w-6 h-6 text-yellow-700" />
                  </div>
                  <p className="text-base lg:text-lg">
                    Savor traditional Pahadi thalis, sattvic delicacies, and herbal infusions — all prepared with fresh, local ingredients, infused with healing intent.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-amber-100 rounded-full">
                    <GiMeditation className="w-6 h-6 text-amber-700" />
                  </div>
                  <p className="text-base lg:text-lg">
                    From copper vessels to clay pots, every detail honors ancient wisdom and mindful living.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-orange-100 rounded-full">
                    <FaSun className="w-6 h-6 text-orange-700" />
                  </div>
                  <p className="text-base lg:text-lg">
                    Dine under the open sky or in calming, earth-toned interiors — where every bite restores your body, quiets your mind, and uplifts your soul.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-green-100 rounded-full">
                    <FaHeart className="w-6 h-6 text-green-700" />
                  </div>
                  <p className="text-base lg:text-lg">
                    This isn't just dining. It's nourishment aligned with nature, culture, and your inner rhythm.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Closing Statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center mt-12 p-8 bg-gradient-to-r from-yellow-50 to-amber-50 rounded-2xl border-l-4 border-yellow-500"
            >
              <p className="text-xl lg:text-2xl font-bold text-yellow-700/90 mb-2">
                Welcome to Ayush
              </p>
              <p className="text-lg text-black italic">
                Where you eat to heal, live to glow.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <button className="px-8 py-4 bg-yellow-700/90 text-white rounded-2xl hover:bg-yellow-700 transition-all duration-300 hover:scale-105 hover:shadow-xl font-semibold text-lg">
            Experience Ayush Dining
          </button>
        </motion.div>
      </div>
    </section>
  );
}

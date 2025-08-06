"use client";

import { motion } from "framer-motion";
import { FaLeaf, FaHeart, FaSun } from "react-icons/fa";
import { GiMeditation, GiLotus, GiBowlOfRice } from "react-icons/gi";
import { MdSpa, MdNaturePeople } from "react-icons/md";

export default function AyushWellnessProgramSection() {
  return (
    <section className="relative py-16 lg:py-24 bg-yellow-50/50 overflow-hidden">
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-yellow-700/90 text-4xl lg:text-6xl font-bold leading-tight mb-4">
            Ayush Wellness Program
          </h1>
          <h2 className="text-yellow-600 text-2xl lg:text-3xl font-semibold mb-8">
            A Journey Into Balance, Born From The Roots Of Nature
          </h2>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-12"
        >
          
          {/* Introduction */}
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-lg border border-white/50">
            <p className="text-black text-lg lg:text-xl leading-relaxed mb-6">
              At Palm Bliss Resort & Atharva Ayurveda Wellness Retreat, the AYUSH Wellness Program is more than a retreat — it's a soulful reset, guided by India's timeless healing sciences:
              Ayurveda, Yoga, Unani, Siddha, and Homeopathy.
            </p>
            
            <p className="text-black text-lg lg:text-xl leading-relaxed">
              Cradled in the serene lap of the Shivalik and Lesser Himalayan ranges, this immersive program reconnects you to your true essence — in stillness, in strength, in silence.
            </p>
          </div>

          {/* What Awaits You Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-yellow-600 text-3xl lg:text-4xl font-semibold text-center mb-10">
             What Awaits You:
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              
              {/* Feature Item 1 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-md border border-white/40"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-yellow-100 rounded-full">
                    <MdSpa className="w-6 h-6 text-yellow-700" />
                  </div>
                  <div>
                    <h4 className="text-yellow-600 font-semibold text-lg mb-2">
                       Personal Wellness Consultations
                    </h4>
                    <p className="text-black leading-relaxed">
                      Discover your inner balance through Ayurvedic diagnosis and ancient pulse reading
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Feature Item 2 */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-md border border-white/40"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-yellow-100 rounded-full">
                    <GiMeditation className="w-6 h-6 text-yellow-700" />
                  </div>
                  <div>
                    <h4 className="text-yellow-600 font-semibold text-lg mb-2">
                       Daily Yoga & Meditation
                    </h4>
                    <p className="text-black leading-relaxed">
                      Awaken your prana (life force) with sunrise yoga and sunset stillness
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Feature Item 3 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-md border border-white/40"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-yellow-100 rounded-full">
                    <GiLotus className="w-6 h-6 text-yellow-700" />
                  </div>
                  <div>
                    <h4 className="text-yellow-600 font-semibold text-lg mb-2">
                       Detox Rituals & Panchakarma
                    </h4>
                    <p className="text-black leading-relaxed">
                      Cleanse your body and mind with traditional therapies guided by Vaidyas
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Feature Item 4 */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-md border border-white/40"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-yellow-100 rounded-full">
                    <GiBowlOfRice className="w-6 h-6 text-yellow-700" />
                  </div>
                  <div>
                    <h4 className="text-yellow-600 font-semibold text-lg mb-2">
                       Ayush Dining
                    </h4>
                    <p className="text-black leading-relaxed">
                      Experience sattvic food that heals from within, served with love and mountain air
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Feature Item 5 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-md border border-white/40"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-yellow-100 rounded-full">
                    <FaLeaf className="w-6 h-6 text-yellow-700" />
                  </div>
                  <div>
                    <h4 className="text-yellow-600 font-semibold text-lg mb-2">
                       Herbal Remedies & Healing Therapies
                    </h4>
                    <p className="text-black leading-relaxed">
                      Rooted in nature, aligned with your needs
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Feature Item 6 */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-md border border-white/40"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-yellow-100 rounded-full">
                    <MdNaturePeople className="w-6 h-6 text-yellow-700" />
                  </div>
                  <div>
                    <h4 className="text-yellow-600 font-semibold text-lg mb-2">
                       Forest Walks, Mud Therapy, Sound Healing
                    </h4>
                    <p className="text-black leading-relaxed">
                      A curated blend of traditional and natural treatments
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Inspirational Quote */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-lg border border-white/60 text-center"
          >
            <p className="text-black text-lg lg:text-xl leading-relaxed italic mb-8">
              Here, time slows down, breath deepens, and nature speaks — gently guiding you back to yourself.
            </p>
            
            <div className="border-t border-yellow-200 pt-8">
              <h4 className="text-yellow-600 text-2xl lg:text-3xl font-semibold mb-4">
                Let The Ayush Wellness Program Be Your Sacred Pause.
              </h4>
              <p className="text-black/70 text-lg lg:text-xl leading-relaxed">
                a time to breathe. a space to heal. a path to wholeness.
              </p>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="text-center"
          >
            <button className="px-10 py-4 bg-yellow-700/90 text-white rounded-2xl hover:bg-yellow-700 transition-all duration-300 hover:scale-105 hover:shadow-xl font-semibold text-lg">
              Begin Your Ayush Journey
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

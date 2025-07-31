// components/FounderVisions.js

import Image from "next/image";

export default function FounderVisions({ founders }) {
  return (
    <section className="w-full py-20 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-2 flex justify-center">
          <img
            src="/Images/founder.jpeg"
            alt="Founder of Palm Bliss Resort"
            className="rounded-xl shadow-lg max-h-72 object-cover"
          />
        </div>
        <h1 className="text-center">Ms. Shivani Agarwal</h1>
        <h2 className="font-black text-4xl text-center mb-6 text-black tracking-tight leading-tight">
          Vision of the Founder
        </h2>
        <p className="text-center text-xl font-thin italic mb-6 text-yellow-700 tracking-wide">
          The Palm Bliss Resort  “Arivandha – Where Peace Finds You.
        </p>
        <p className="text-justify text-md md:text-lg text-black leading-relaxed mb-5 font-normal">
          At the heart of every leaf, every breeze, and every sunrise within
          Palm Bliss Resort lies the vision of its founder — a dreamer deeply
          rooted in nature, inspired by the healing silence of the jungle.
          Established with the essence of Arivandha, a soulful path toward
          awareness and inner balance, this retreat is more than just a
          destination — it’s a return to self.
        </p>

        <div className="my-6">
          <p className="text-md md:text-lg text-black leading-relaxed font-normal mb-3">
            In a world rushing ahead, the founder envisioned a sacred pause —
          </p>
          <div className="mb-3 space-y-1">
            <div className="flex items-center gap-2">
              <img
                src="/images/icons/forest-wind.png"
                alt="Forest Whispers"
                className="w-6 h-6"
              />
              <span className="font-semibold text-black">
                A space surrounded by forest whispers
              </span>
            </div>
            <div className="flex items-center gap-2">
              <img
                src="/images/icons/leaf.png"
                alt="Pure Oxygen"
                className="w-6 h-6"
              />
              <span className="font-semibold text-black">
                Breathing pure oxygen, untouched by noise
              </span>
            </div>
            <div className="flex items-center gap-2">
              <img
                src="/images/icons/heart-care.png"
                alt="Healing"
                className="w-6 h-6"
              />
              <span className="font-semibold text-black">
                Healing through stillness, simplicity, and soulful care
              </span>
            </div>
          </div>
          <p className="text-md md:text-lg text-black leading-relaxed font-normal mt-4">
            Palm Bliss is built not with bricks alone, but with intention — to
            nurture tired souls, awaken calmness, and rekindle the rhythm
            between humans and nature.
          </p>
          <div className="mt-4 space-y-1">
            <p className="text-black font-semibold">
              Here, the jungle doesn’t isolate — it embraces.
            </p>
            <p className="text-black font-semibold">
              Here, every corner breathes wellness.
            </p>
            <p className="text-black font-semibold">
              Here, you don’t just stay — you transform.
            </p>
          </div>
        </div>

        <p className="text-justify text-md md:text-lg text-black leading-relaxed mb-5 font-normal">
          <span className="italic">
            In Silence, You Heal. In Nature, You Awaken.
          </span>{" "}
          Palm Bliss Resort was born from the vision of its founder — a soul
          deeply moved by the ancient wisdom of Yoga and Naturopathy, and the
          need for true stillness in today’s chaotic world. Set deep within a
          jungle sanctuary, the resort breathes peace, offering a Syndrome
          Silence Area where the only sounds are those of birdsong, wind, and
          your own heartbeat. The founder’s dream was simple yet profound: To
          create a space where the body rests, the mind clears, and the soul
          realigns.
        </p>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10 mt-6">
          <div className="flex items-center gap-2">
            <img src="/images/icons/yoga.png" alt="Yoga" className="w-6 h-6" />
            <span className="font-semibold">
              Here, Yoga isn’t just exercise — it’s inner alignment.
            </span>
          </div>
          <div className="flex items-center gap-2">
            <img
              src="/images/icons/leaf.png"
              alt="Naturopathy"
              className="w-6 h-6"
            />
            <span className="font-semibold">
              Naturopathy heals not only the symptoms but the source.
            </span>
          </div>
          <div className="flex items-center gap-2">
            <img
              src="/images/icons/meditation.png"
              alt="Meditation"
              className="w-6 h-6"
            />
            <span className="font-semibold">
              Meditation becomes a gateway to inner truth.
            </span>
          </div>
          <div className="flex items-center gap-2">
            <img
              src="/images/icons/wind.png"
              alt="Spirituality"
              className="w-6 h-6"
            />
            <span className="font-semibold">
              Spirituality is felt in every breeze, every tree, every breath.
            </span>
          </div>
        </div>
        <p className="text-justify text-md md:text-lg text-black leading-relaxed font-normal">
          At Palm Bliss, the food served follows the path of Atharva —{" "}
          <span className="font-bold text-yellow-700">
            pure, organic, sattvic vegetarian meals
          </span>{" "}
          — gently prepared with love and balance, using ingredients that
          nourish and detoxify the body naturally.
        </p>
      </div>
    </section>
  );
}

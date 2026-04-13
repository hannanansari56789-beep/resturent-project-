'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function MenuPage() {
  const categories = ["All Items", "Starters", "Main", "Desserts", "Drinks"];

  return (
    <div className="bg-surface min-h-screen pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Header */}
      <header className="mb-20 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="max-w-2xl">
          <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Seasonal Selection</span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-on-surface mb-6 leading-[1.1]">
            The Digital <span className="text-primary">Hearth</span>
          </h1>
          <p className="text-tertiary text-lg md:text-xl font-light leading-relaxed">
            A curated catalog of flame-kissed flavors and artisanal spirits, designed for the modern epicurean.
          </p>
        </div>
        <div className="hidden md:flex gap-4">
          <div className="w-32 h-32 rounded-xl overflow-hidden rotate-3 shadow-lg shadow-tertiary/10 relative">
            <Image 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgcmzL5Fv1ua5oLGHvcVBQzwA3HNxMMyb7fGWkYVOchtVFtWUdrXX3yYCGwQLqcSdrIUXBx3Vyk1RSkfixiqWE8jlLAd5F8B9s41eI_UdnbAAwxhGnmLRywC0JXB8aiaMp9Ruqsyp8G6CZJKgGXghmL8tvAg4f3QyDy8AoPsrR2XPUB5bC-xrwOQ23xGOD0nK1dXHl0WLGRjb9LFB5fMwhBSPiOFPMUDr0AvOoG4XTyiUkNHX2hHkNM330GJ_Nzfy4WY-StalxBafq"
              alt="Grilled steak"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="w-32 h-32 rounded-xl overflow-hidden -rotate-6 shadow-lg shadow-tertiary/10 translate-y-4 relative">
            <Image 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB24O6iaEM7HIQgISDCrKR6rq72umlzrS5rXGVW-TEc7A2RbE1j0GPtemBR4O2btD5A5kbpah18qU56k3dAiRHiLOrSu_As5dP3YNrR-Nkj27omkBGGTVR57EffqtHZOYNUT4-jDD7xpa_TE6HQahqebI-s7H-aLFhjwr04YkOaFs-I9F5pGDg-IbMXJtHRqDSKeWuh9naIiMN0p3mQtOBupXT0Npqup1itTg6sWhSXsF5cfJItg_EjgNsXNbFNoSpcCxMMiDeVC7-z"
              alt="Cocktail"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </header>

      {/* Category Navigation */}
      <div className="sticky top-28 z-40 mb-16 bg-surface/80 backdrop-blur-md py-4 -mx-6 px-6 overflow-x-auto no-scrollbar flex items-center gap-3">
        {categories.map((cat, i) => (
          <button 
            key={cat}
            className={`${
              i === 0 ? 'bg-primary-fixed text-on-primary-fixed' : 'bg-surface-container-highest text-on-surface hover:bg-primary-fixed'
            } px-8 py-3 rounded-full font-bold whitespace-nowrap transition-colors`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Menu Sections */}
      <div className="space-y-32">
        {/* Starters */}
        <section>
          <div className="flex items-center gap-6 mb-12">
            <h2 className="text-3xl font-black tracking-tight text-on-surface italic">Starters</h2>
            <div className="h-[1px] flex-grow bg-outline-variant/30"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-7 group"
            >
              <div className="bg-surface-container-lowest rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-tertiary/5 relative">
                <div className="aspect-[16/9] w-full relative overflow-hidden">
                  <Image 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaZEsV4SjMBXJ-7dsHU1fCcp8l6bhbdq40is-zFST1XrXjmjrOl3PleSvKMa2KmMtZeV6HqeXyujg3YQ2szJfLPID7P9iTYNkyMxeC_LgIPzRTbWAmKFu808b5Tn888bROMXPxGJuqKqRG3jeX808qBM0A6EFp9B3Iqr0FjKcqxaLzFJq7USbbIzNICbW8bqfz83n79SulpFYp5_CzvJnVpCIr6G4Z5PKBOnfRaFtJo2QmaRFkiXHp7Hdsw57lqW0m1M6EI0HhjUmC"
                    alt="Smoked Burrata"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-on-surface">Smoked Burrata & Heirloom</h3>
                    <span className="text-primary-container font-black text-xl">$18</span>
                  </div>
                  <p className="text-tertiary font-light leading-relaxed mb-6">Oak-smoked Italian burrata, compressed heirloom tomatoes, basil chlorophyll, and aged balsamic pearls.</p>
                  <button className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest hover:gap-4 transition-all">
                    Add to Table <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
            <div className="md:col-span-5 flex flex-col gap-8">
              {[
                { title: "Charred Octopus", price: "$22", desc: "Chorizo oil, potato foam, pimentón.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDvjUHf_hoPAlBQitHzBKTAVRYV1LDrkt4cGEl8Koj7uhhWAbb1ujEU2ZMQE44hWpYw7YTAnMImL6HxQrqBf-K0uGYPpH24_dYOTFnf939smjIn1xWFjr4z652O9APGJL9xtI4pzWVOcSoreKi2RdrDF-6pghO5TBFozrH3ryG86cAq98O5wLqcfajb8u2IIrVUYD7pRK57-v7Bjk7FHLyuTzsFZumR-H0FqNw_WAS2Zn83HPJZfV0jzt5JS2tVLbszKx3kU4JJsycq" },
                { title: "Bone Marrow Brûlée", price: "$19", desc: "Sourdough crisp, caper jam.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCYbHQy4mfdCGLdW1UnG28xl_Kug1ztrOPKyQLjncJtpWc3nFS9iZYlfb3s4iM-KJY0AwQAKp_6A2ZC2hr47eaQsLQl49xj33QnO86QuCqt88hLJGc3J2m-u8FNwBlb1QNbPtm96APle1lKFb7N01ROQZM6Qr2jWT8V3NzOS86was9QcBYZVWdc22vMKVgbiD-o33gHv_hbny5Sbtk7Nl9Y1qC_ZydxBdUkElL_610Ebub58Ob3jHd01jiDl99p6nFY5SVDRsFsXvLI" }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="bg-surface-container-low p-8 rounded-2xl flex gap-6 items-center"
                >
                  <div className="flex-grow">
                    <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                    <p className="text-tertiary text-sm font-light mb-2">{item.desc}</p>
                    <span className="text-primary-container font-bold">{item.price}</span>
                  </div>
                  <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 relative">
                    <Image 
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Course */}
        <section>
          <div className="flex items-center gap-6 mb-12">
            <div className="h-[1px] flex-grow bg-outline-variant/30"></div>
            <h2 className="text-3xl font-black tracking-tight text-on-surface italic">Main</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Prime Dry-Aged Ribeye", price: "$54", desc: "45-day aged, roasted garlic bone butter, truffle fries.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC7Q5fbfeDCcjt10zD48hlKTvrwNJOF_RaNbgYQ4NKnn2HcOuf-eRqd_vktD234EcG9mK-_mQnxrsH5fMuuLCtJ7vFYPK5IiJmNhbG5GuGfDypuHNvvGuHcR720Xfkqnp90CFi5wIYgZodRVTWJ3H4gQYe6do2z7LkfNpIKQUJByQ3dMSSpRDTQ_kcSUlMFLj4WS-OdMjOzyu22GmnHmqIEiaXZOeHPnzwj1oO7Id06AMb6iHt6i1ekANdTl4lYkl8J817dnSrO95rG" },
              { title: "Miso-Glazed King Salmon", price: "$38", desc: "Wild-caught, ginger dashi, charred bok choy.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDfYvv0Po_RZ3iyfHN5f6PxtDpZ5-0VUMGZy4X5LVpesAgDMS2qv6VtYswfbq3rMo0FGljLITsQvOFUEJEdcGt2TOnl7XhcyOw92sRAGHVzKCcFrz1m3TVzHMCoDzMO54uhMetbHvHyb_4crckBzpnkMdzgFfwTup8SJoHS-7PR6WiDYJgHVmgmj1JcJIBMlOnGJpIT2KX1oF5MwJoD0Bz72gwjMwVtetZQ5Osb0h5t25RBUXhaGh_pbD7tupgn-4QiEncn1fIs8y67" },
              { title: "Truffle Forest Pasta", price: "$29", desc: "Hand-rolled pappardelle, seasonal mushrooms, pecorino.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCGGkaxcl59n2J5bNbpnhqFrOaDGDvJisG1Tz7DIDAhKeCsFRog7IMLspwEIJMXml-kZw40bmZOxHhLE1cNnKEyBQ_-PXV9srWqN7BUW2Wk1_5lDlD7JybUN3xCxllp1u790lZc1eXtfN92nTlJImo4TKVGxAENEy3HJQctEIwopnwGfzdPyzO8E6G6hzVtkOVMs-etVL9q5eA9SlAjwzGg7k-XnSnzT1QspR0DVJy8mwsarfGX10b9V2iNb_ajT0lUmdO4V1Ym-JeV" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className={`space-y-6 ${i === 1 ? 'md:translate-y-12' : ''}`}
              >
                <div className="rounded-3xl overflow-hidden h-80 relative">
                  <Image 
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="px-2">
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-tertiary font-light mb-4">{item.desc}</p>
                  <span className="text-primary-container font-black text-2xl tracking-tighter">{item.price}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Desserts & Drinks */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-black tracking-tight text-on-surface italic mb-12">Desserts</h2>
            <div className="space-y-10">
              {[
                { title: "Deconstructed Tiramisu", price: "$14", desc: "Espresso soil, mascarpone cloud, gold leaf." },
                { title: "Lava Soufflé", price: "$16", desc: "70% dark chocolate, salted caramel heart." },
                { title: "Yuzu Tart", price: "$13", desc: "Meringue peaks, toasted coconut, mint syrup." }
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-start group">
                  <div className="max-w-[70%]">
                    <h4 className="font-bold text-xl mb-1 group-hover:text-primary transition-colors">{item.title}</h4>
                    <p className="text-tertiary text-sm font-light">{item.desc}</p>
                  </div>
                  <span className="text-primary-container font-bold text-lg">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-surface-container-high p-12 rounded-2xl relative overflow-hidden">
            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-primary-container/10 rounded-full blur-3xl"></div>
            <h2 className="text-3xl font-black tracking-tight text-on-surface italic mb-12">Signature Sips</h2>
            <div className="space-y-10 relative z-10">
              {[
                { id: "01", title: "The Smoke Stack", desc: "Mezcal • Agave • Hickory Smoke", price: "$18" },
                { id: "02", title: "Midnight Martini", desc: "Cold Brew • Vodka • Vanilla Bean", price: "$17" },
                { id: "03", title: "Ember & Spice", desc: "Bourbon • Cinnamon • Orange Oil", price: "$19" }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <span className="text-primary font-black">{item.id}</span>
                  <div>
                    <h4 className="font-bold">{item.title}</h4>
                    <p className="text-tertiary text-xs uppercase tracking-widest mt-1 mb-2">{item.desc}</p>
                    <span className="text-primary-container font-bold">{item.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

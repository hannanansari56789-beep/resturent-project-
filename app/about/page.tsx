'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { Flame, Leaf, Sparkles } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-surface text-on-surface antialiased pt-24">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="z-10"
          >
            <span className="uppercase tracking-[0.2em] text-sm font-semibold text-primary mb-6 block">Our Origin Story</span>
            <h1 className="text-6xl md:text-7xl font-bold tracking-tighter leading-[1.1] mb-8 text-on-surface">
              The Soul of the <span className="text-primary">Ancient Hearth</span>
            </h1>
            <p className="text-lg md:text-xl text-tertiary leading-relaxed font-light max-w-xl mb-10">
              Food Cafe began with a simple observation: fire doesn&apos;t just cook food; it transforms it. Our founder, Elias Thorne, spent a decade trailing nomadic chefs through the Pyrenees, learning the delicate art of the open flame.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-[1px] bg-outline-variant/40"></div>
              <span className="italic text-tertiary">Crafting warmth since 2014</span>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-xl shadow-2xl relative z-20">
              <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDM1UBpSyBOHUIJUxm9lYuZ4uHpVTx9sCXJF8st43I98pVtPlhulQxmtItQKlH8ohhGtsK-Yj5KZ-crlt_ahPFemRq2wpX7rNxsNgkpwEdcB5dIbe9SGJg2lgjrajN6qdP3h0fOwlgUIEXt85OGK-lJp6sqSjclxBEqCjDRV007xL2gNXBGNTyWkwsjhxvygD2B5ep7FF7nO74ccCwbF7T7S4QZN_WbbwIvmr2OSl5rcKCgKXKWuUjhcE0EnIdwz11YHpDkVRYyw192"
                alt="Chef at hearth"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-secondary-container/20 rounded-full blur-3xl -z-10"></div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-32 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-bold tracking-tight mb-6">Our Philosophy</h2>
            <p className="text-tertiary font-light leading-relaxed">We believe in the harmony of three elements: Primitive Heat, Honest Sourcing, and Progressive Platework. Our kitchen is a laboratory of tradition.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: <Flame size={32} />, title: "Primitive Methods", desc: "No gas, no electricity for the main course. We rely exclusively on oak, cherry, and hickory wood to define our flavor profiles." },
              { icon: <Leaf size={32} />, title: "Radical Transparency", desc: "We know the name of every farmer we partner with. If it's not in season within 100 miles, it's not on our menu." },
              { icon: <Sparkles size={32} />, title: "The Guest's Journey", desc: "Hospitality isn't a service; it's an exchange. We treat every table like a seat at our own family hearth." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="p-10 bg-surface-container-lowest rounded-2xl group hover:scale-[1.02] transition-transform duration-500"
              >
                <div className="w-14 h-14 rounded-full bg-primary-fixed mb-8 flex items-center justify-center text-on-primary-fixed">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-tertiary text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Chefs */}
      <section className="py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-5xl font-bold tracking-tighter mb-4">The Hands Behind <br/>the Flame</h2>
              <p className="text-tertiary font-light">A collective of culinary visionaries dedicated to the art of smoke and seasoning.</p>
            </div>
            <button className="text-on-primary-fixed-variant font-medium border-b border-on-primary-fixed-variant/30 hover:border-primary transition-all pb-1">Join Our Kitchen Team</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Elias Thorne", role: "Executive Chef", desc: "Master of open-air gastronomy and the architect of our signature hearth.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDJDA_WssKjXLMYStQZHd_UY35x9-jxvUYwsaxz73XHU995IESbL4OlxtWaTZ_fq2A3HdlGziirU5VQviFKp_tI4i05VQVDVQ_xqZ4bZvjdjcEiKT3OKHy6TsZNDOgngPjTqAhDTJ0j_chdqLwws9wF2ogbiMS6lmdjDDJ8ZfpruMddLRS-bByCNjctLO81OFecwTL02e-n9S2OHDHGmaE8vhNLYxc37nGnBgy2Jm3ZHVDZKQqpuWjOsIrpyhniT6Zr86wpUxeGzO1H" },
              { name: "Sasha Moretti", role: "Pastry Lead", desc: "Infusing charred fruits and smoked sugars into award-winning desserts.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDTqQ0oA5YfDuscUtJ5ATbosbUPDcvA7vYv5MhLbNdO0NlEB1HcgaluzMnFWH1U-UY6qix4rLXRGYdFQaNY1R-iGC67S9D619u9D1W-owF_EeTxeBkRcPng4k59UUe3W9KVViNZTvez9HhOYhpB1uQ6JCOOPQTojzpz4UBkXEFp-P3BNmDDZWPRU_ag1BCgLO0jhADJ11BZa4258FXbNkqKeydxNags4XmVIWTgSBcro5a_zdaoMNx4BYs_dhbuXRgpdhUcZaLVwS4E" },
              { name: "Julian Vane", role: "Sous Chef", desc: "The engine of our kitchen, ensuring every sear is precise and every plate perfect.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCNevclwy6khyG3vRzTrdYdUFbZTDIimHSdMf3LWZ8Hm0PtHwo526bB4bNkIYSd_pBqkI_-n9Y502P93QnQ62MJrgcKh_tzHHedBja3Og7CZdUGC3DhYPRkuWPxpRBksCRrEKog1b4lgFZrPXYi1UNtJ6l5vndh6cOHvASzxfF-OnDwxn637Q5u42p6jMPmOWF7NcnI6GdSoMYM46dMbUHKkbwv0-M7fTzvI0BFee6b-VoRjzW3rK5B2ajkBMPgXBay_MhWeflF0ZMN" },
              { name: "Marcus Chen", role: "Sommelier", desc: "Curating a cellar that mirrors the boldness of our fire-roasted flavors.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAUus27-OISumltdGbc4McgQ8asi5kn3gnQXs2wCsUHCbWVqZYWDxKGAOGxKXAFNzwiu206A9ksZsRCZesGG0brWWdVxLJpPwfCLlt62PIqqQLqZ08lWbRRR7FMenZHv843-i6EveBOcwSp63exOU2OtsGD0LolafVRERZ9Ej_IQdqgHx9ttpf81-Ej1oNXIXHxFkjLw1kDdV-6dOrNUG2uB8UwUe9WolrycaK8woveDYl4cGbOXOCF3fSSmr_nE1yirdceejbf-ku_" }
            ].map((chef, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm"
              >
                <div className="aspect-square overflow-hidden rounded-tl-3xl rounded-br-3xl mb-6 relative">
                  <Image 
                    src={chef.img}
                    alt={chef.name}
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h4 className="text-lg font-bold">{chef.name}</h4>
                <p className="text-primary text-xs uppercase tracking-widest font-semibold mb-3">{chef.role}</p>
                <p className="text-tertiary text-sm font-light">{chef.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sourcing */}
      <section className="py-32 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-4">Radically Local</h2>
            <p className="text-tertiary font-light max-w-xl">We believe the best ingredients don&apos;t travel far. Our network of 14 local farms provides 90% of our seasonal pantry.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
            <div className="md:col-span-8 relative rounded-2xl overflow-hidden group">
              <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCczTu9itLiHsVJ0xD9dNntQIrxsik7W4_7zO8eXN8_rsy5Ym2qDt34D6JNxTKB2wqSVIj4IcdmlXCdROblri6jH0R2WVyaGyEllrzBakDbr24uT9IZ1iGyu0UkoXSH86A2dOip1HTonGS1Y7Oigpo1n9u9cOU6TiJUV24rj_RpUrqlInF_39-u8kLQ3E2Y-_c1KVG81TlK2i25n930Q0BG-KlpnYLt7yRBiEylqtK4SjXJMRNQyoWx1TIGbgUghLYvmWtq6-Udi6c1"
                alt="Farm sunrise"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-10">
                <h4 className="text-white text-3xl font-bold mb-2">Heritage Valley Farms</h4>
                <p className="text-white/80 max-w-md">Our primary partner for heirloom root vegetables and cold-pressed oils, located just 12 miles from our kitchen.</p>
              </div>
            </div>
            <div className="md:col-span-4 bg-primary text-white p-10 rounded-2xl flex flex-col justify-center">
              <span className="text-5xl font-black mb-4">98%</span>
              <h4 className="text-xl font-bold mb-4">Plastic Free</h4>
              <p className="text-primary-fixed/80 leading-relaxed">Our commitment extends beyond food. Our supply chain is 98% plastic-free, utilizing compostable packaging and circular waste management.</p>
            </div>
            <div className="md:col-span-4 relative rounded-2xl overflow-hidden h-64 md:h-auto">
              <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMCnxNGrHagcCbJfs_RtfZB6BSl470-YBcI2txvjyCSihzgveVJAqyltcl_7xOpG7Fp0-4uMXrCK_1Lq6p0rZ2YwvP9ndd9dLbcue9lKTUButnjavrfba1wZMpPAL97qg2dY-aXKBNvBsU5NCZjrGpfelpSSu5iCDvG06mPRHOc7veAf_A0fA5yl0q9HuZvHEAQMAVRoglAdIge_2E2HUHc-XKu62xPa9eI99SpK_EfbU5h7DmdwQJwYT2Epy1CEHAKmYYxA912YrH"
                alt="Fresh vegetables"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="md:col-span-8 bg-surface-container-lowest p-10 rounded-2xl flex flex-col justify-center border border-outline-variant/10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { label: "Partner Farms", val: "14" },
                  { label: "Freezers Used", val: "0" },
                  { label: "Renewable Oak", val: "100%" },
                  { label: "Daily Fresh", val: "Fresh" }
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <p className="text-primary font-bold text-2xl mb-1">{stat.val}</p>
                    <p className="text-xs uppercase tracking-widest text-tertiary">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

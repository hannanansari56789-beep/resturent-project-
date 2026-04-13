'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { MapPin, Phone, Clock, Flame } from 'lucide-react';

export default function LocationsPage() {
  return (
    <div className="bg-surface text-on-surface pt-24">
      {/* Hero */}
      <section className="pt-32 pb-24 md:py-48 px-8 overflow-hidden">
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-full md:w-1/2"
          >
            <span className="text-secondary font-medium tracking-[0.2em] uppercase text-sm block mb-6">Experience the Hearth</span>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-on-surface leading-[0.9] mb-8">
              Find the <br/><span className="text-primary">Hearth</span>
            </h1>
            <p className="text-lg md:text-xl text-tertiary font-light leading-relaxed max-w-lg">
              Our locations are more than just restaurants. They are sanctuaries of smoke, fire, and radical localism.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full md:w-1/2 relative"
          >
            <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl transform md:rotate-2 relative">
              <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCemqGYuz7KEetkNyAlC2cwYIWDoQBMPkombSSvAtaGR9-rmKRbNjmvuA1kt5Dj6CSi61nzTiseVOuti0bxzO6N0fVTyAVvZiFuYOBP3K4FTSMgTYbWrubTnK_nnre43Nli1Bf9mVGFxjMmQrFHrflVmIkdOGdNSvJ20XP9mell2u5-Q4_tCCHmI27hzQxnj_N2DQj-748wA4IpeyWwPmA70nqnZIY02V8IPncbRGllqZhPEToVNStUjzod5Pq20ODFdbzI2RLAjpbS"
                alt="Restaurant interior"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-secondary-container rounded-lg -z-10 opacity-20 blur-2xl"></div>
          </motion.div>
        </div>
      </section>

      {/* Location Detail */}
      <section className="py-32 bg-surface-container-low">
        <div className="max-w-screen-2xl mx-auto px-8 grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5 space-y-12">
            <div>
              <h2 className="text-4xl font-bold tracking-tight mb-4">The Flagship Hearth</h2>
              <div className="space-y-4 text-lg text-tertiary">
                <div className="flex items-start gap-4">
                  <MapPin className="text-primary mt-1" size={24} />
                  <p>842 Culinary Way, Arts District<br/>San Francisco, CA 94103</p>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="text-primary" size={24} />
                  <p>+1 (415) 555-0198</p>
                </div>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm">
              <h3 className="text-sm font-bold uppercase tracking-widest text-secondary mb-8">Dining Hours</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center border-b border-outline-variant/15 pb-4">
                  <span className="font-medium">Mon - Thu</span>
                  <span className="text-tertiary">5:00 PM — 10:00 PM</span>
                </div>
                <div className="flex justify-between items-center border-b border-outline-variant/15 pb-4">
                  <span className="font-medium text-primary">Fri - Sat</span>
                  <span className="text-primary font-bold">5:00 PM — 12:00 AM</span>
                </div>
                <div className="flex justify-between items-center pb-2">
                  <span className="font-medium">Sunday</span>
                  <span className="text-tertiary">4:00 PM — 9:00 PM</span>
                </div>
              </div>
            </div>
            <button className="w-full signature-gradient text-white py-5 rounded-lg font-bold text-lg hover:shadow-xl hover:shadow-primary/20 transition-all duration-300">
              Book a Table
            </button>
          </div>
          <div className="md:col-span-7 h-full min-h-[500px]">
            <div className="w-full h-full rounded-2xl overflow-hidden shadow-sm relative group bg-surface-container-high">
              <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9iPyFHd7HvOnnX7jymAHs0ASCiKLZ5dktiiLkjNecuYGMjd4UDFY9g1sXiQDVqugKHp5lceI-nKr8neXjCCcYASReMHsVAa4J98wEDqz0auZIczlOf1_ZGvuzb8Uq6EeCrY93q2dxD0wnPha9jIq1pDIxDiGSj0pd-LDW15PoVjLuz6zzfMigZN17KVWSLRAM47XeGSAiq9V00WxPlkST8fcojJ4uZH4rA4TnoXpI3GxRMi4m3Tp9FtxvAKuOqxrosuZlMFXzbLeN"
                alt="Map"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply pointer-events-none"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="w-12 h-12 bg-primary rounded-full animate-ping absolute opacity-75"></div>
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center relative shadow-xl">
                    <Flame className="text-white" size={24} fill="currentColor" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem */}
      <section className="py-32 px-8 bg-on-surface text-surface">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
            <div className="md:w-2/3">
              <span className="text-secondary-container font-medium tracking-[0.2em] uppercase text-sm block mb-6">Our Ecosystem</span>
              <h2 className="text-5xl md:text-7xl font-black tracking-tight leading-tight">Radically Local.</h2>
            </div>
            <div className="md:w-1/3">
              <p className="text-slate-400 text-lg font-light leading-relaxed">
                We don&apos;t just exist in the Arts District; we breathe with it. Our partners define the flavor of our flame.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Wild Yeasts Bakery", desc: "Daily delivered naturally leavened breads for our table service.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDA7i3Nn69MWMyoIiBBCe6P_CHv0zzCHYgCyYLEYT6gbIgjLSqtH39xeBK_QSU22LWMdN1dkpUULXXZanxVvzIRYyNJjSClI0u1Pbr3G-mLHhDEpBb6YsgPkm8AuYaAg_fPYTDOxriO3XmP_myiqpntYVJKVUESjvmVe6eq-LN3B8nY7tM-45brAyWUjB2nLyvgNWMnpTmVb5nE852UOeGnnkXqgDLkJNDKPhezlPk0YkWU8WGkL6EzxgK5d44m1BYiKzgedgQD8FVd" },
              { title: "Canyon Vintners", desc: "Exclusive small-batch pairings from the rolling hills of Northern California.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCpoVptjnXJZlJjHY69gybzzhxeDREcnya-JsiLmB8EYBiKpAU0A-jK1EFEoAPtJr_6UzXIdYiq-u8PJW75PS69CLIS5Ov5Ug6XNqpt397r46qYbDHrfzSfUhkwDoIV-YPp9hofTDUlAvQ7cJV4RzjyMQhxvi7h0xBMerTI5OCHgr9edg_p_uRZRH0mxYLSnlFk2enCu-f2cER4Eb8p3Pr2DIXGuw-x4Zie7Ox0m-SlOKcqNjA2g3STFg-20uMlSMrk_s599Stc7D3m" },
              { title: "Root & Soil Farm", desc: "Regenerative produce picked at dawn and served by dusk.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCkthZlVy-P-QzlFmfWUPuxM2YUrwc3sBNWm3b2Rn5dUxK1LoadFwvNzASRWyGHktZ_O0-nVlQZMd02SIzsxWT0xIFs_NLQh-40ixAoyZEr8o3Mln_aHztWOa1HFizN4-jJFbku79gA9OMpU4g1WnQ_QQXKf1jXm-FMoxG6eI3KBIGZ5H5V3pYG7K-YiCTeLYgn0kQCs4JdUhXHzeI9Qqp83oa_0kfuudQqGHVci7qpFio45r4k5pxlmyTiVx1o_XIFhLorFHRpSY0S" }
            ].map((partner, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className={`group cursor-pointer ${i === 1 ? 'md:pt-12' : ''}`}
              >
                <div className="aspect-square rounded-2xl overflow-hidden mb-6 bg-tertiary/20 relative">
                  <Image 
                    src={partner.img}
                    alt={partner.title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h4 className="text-xl font-bold mb-2">{partner.title}</h4>
                <p className="text-slate-400 font-light">{partner.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

export default function ReviewsPage() {
  const reviews = [
    {
      name: "Sarah Mitchell",
      role: "Verified Dinner Guest",
      text: "The smoky infusion technique is unparalleled in this city. From the moment we walked in, the aroma of burning oak and roasted spices welcomed us. The service was impeccable—each course was timed to perfection. The charred ribeye is a masterpiece of texture and heat.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuATqKuME2E1Dp8sCxyDC8CZpp23MAwkLp9GWuVFWNwuXZMdbyzi0g4-QZCSUnKtzpc86MWf88YTUyVRlAhsV2sJkBMiL6Bi9Q2LZr375gbI4ozFqY-I8EBX3wZzuEfgxV2fDIexprWHFvShdBAAVi83M1gR_vmUQscYaRmc5JQGlF6hFil-EpBqVP918j02rg5W-r3mLaqoN8GP_IZTjHuDhf6Hdpc6uU6qnTSh-2agrUl5naCNrP-cFUFITWb_4VNrBNOdgmEst3WU",
      large: true
    },
    {
      name: "James Chen",
      role: "Gourmet Traveler",
      text: "Best anniversary spot. They remembered my allergy from 2 years ago. Truly elite hospitality.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuACaiOmgzvMunfs4_7B0U19yurqnGaV3SY6t0BxeJER5Vu5VSLNzLtC9td71KlFomhS-P4zoa0QwioPH5Rb9EvJlwUqMnPnUtCfrrbMStjK2IWl7Ji36S5wLfkysUZ-bZqvaGVLGQ0c4NrZ2icMDMx4g4628-wpEGbz3ejB3R3O2R2Zk22GT1a9Xld-UDGANi74EBx-5uKFW8MNkAkExft30C0L-HI5_972pS5X1YjBWzJm_Q8N9wWYdjomx1dYaWQhjvXjgpTbtMXX"
    },
    {
      name: "Mark K.",
      role: "Local Guide",
      text: "The beverage pairing was unexpected but brilliant. The charred pineapple cocktail with the pork belly was a revelation.",
      initials: "MK"
    }
  ];

  return (
    <div className="bg-surface text-on-surface pt-24">
      {/* Hero Section */}
      <section className="px-8 pt-16 pb-32 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="w-full md:w-1/2 space-y-8">
          <span className="uppercase tracking-widest text-xs font-semibold text-primary">Testimonials</span>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-on-surface leading-[0.9]">Voices From Our <span className="text-primary-container">Cafe</span></h1>
          <p className="text-lg text-tertiary leading-relaxed max-w-md font-light">
            Every dish tells a story, but our guests write the ending. Discover the experiences shared by our global community of culinary enthusiasts.
          </p>
          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-12 h-12 rounded-full border-2 border-surface-container-lowest overflow-hidden relative">
                  <Image 
                    src={`https://picsum.photos/seed/user${i}/100/100`}
                    alt="User"
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <p className="text-sm font-medium text-tertiary">4.9/5 based on 2,400+ reviews</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 relative">
          <div className="aspect-[4/5] rounded-xl overflow-hidden relative shadow-2xl">
            <Image 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUvC6taZHvNYllsn8XFECuehvqmh3ZduijKMxBS-3A-EUF4YtsKsry1PJU3bG4KkWVdlaftjumuen9uqfv98lujw5vomYEgZvqpLsEOZqhjf1EfC46nnXpyaxs1skO-4Wq1LG_g-iNDUmyhauRzP3rCwgj6C9EpatSBC-76N-P5HOQ48R4VKJO4BMlm1xGeKIms3gJ5mUG2i_2K01nku-m9LV5tLC2cvUFPRO24skUH8GoNDFRfvrTnYova2SRLaupN3u-qURC7DqI"
              alt="Dining room"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-8 left-8 right-8 p-6 glass-header bg-white/40 rounded-lg">
              <p className="italic text-on-surface text-lg">&quot;The wood-fired octopus was life-changing. An atmosphere that feels like a warm hug.&quot;</p>
              <p className="mt-4 font-bold text-primary">— Elena Rossi, Food Critic</p>
            </div>
          </div>
          <div className="absolute -top-6 -right-6 w-32 h-32 flame-gradient rounded-full flex items-center justify-center text-white font-bold text-center leading-tight -rotate-12 shadow-xl">
            MICHELIN GUIDE 2024
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="px-8 py-32 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className={`bg-surface-container-lowest p-8 rounded-2xl shadow-sm flex flex-col justify-between space-y-6 ${review.large ? 'sm:col-span-2' : ''}`}
              >
                <div className="flex items-center gap-1 text-secondary">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <h3 className={`${review.large ? 'text-3xl' : 'text-xl'} font-bold tracking-tight text-on-surface`}>
                  {review.large ? review.text.split('.')[0] + '.' : review.text}
                </h3>
                {review.large && <p className="text-tertiary leading-relaxed text-lg">{review.text.split('.').slice(1).join('.')}</p>}
                
                <div className="flex items-center gap-4">
                  {review.img ? (
                    <div className="w-14 h-14 rounded-full overflow-hidden relative">
                      <Image src={review.img} alt={review.name} fill className="object-cover" referrerPolicy="no-referrer" />
                    </div>
                  ) : (
                    <div className="w-14 h-14 rounded-full bg-primary-fixed flex items-center justify-center font-bold text-on-primary-fixed">
                      {review.initials}
                    </div>
                  )}
                  <div>
                    <h4 className="font-bold text-on-surface">{review.name}</h4>
                    <p className="text-sm text-tertiary">{review.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-900 text-white p-8 rounded-2xl shadow-sm flex flex-col justify-center space-y-6 sm:col-span-2 relative overflow-hidden"
            >
              <div className="relative z-10">
                <h3 className="text-4xl font-black tracking-tighter mb-4">A sensory journey unlike any other.</h3>
                <p className="text-slate-400 text-lg max-w-xl">Food Cafe doesn&apos;t just cook; they perform. Watching the chefs work the hearth is like watching a choreographed dance of fire and finesse.</p>
              </div>
              <Quote className="absolute -bottom-4 -right-4 text-8xl opacity-10 text-white" size={120} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 py-32 max-w-7xl mx-auto">
        <div className="bg-surface-container-lowest rounded-3xl shadow-sm p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="space-y-6 max-w-lg">
            <h2 className="text-4xl font-bold tracking-tight text-on-surface">Share your spark.</h2>
            <p className="text-lg text-tertiary font-light">Whether it was the ambiance, the wine list, or that one dish you can&apos;t stop thinking about—we want to hear your story.</p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="flame-gradient text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-transform">Write a Review</button>
              <Link href="/gallery">
                <button className="bg-surface-container-high text-on-surface px-8 py-4 rounded-full font-bold hover:bg-surface-container-highest transition-colors">View Gallery</button>
              </Link>
            </div>
          </div>
          <div className="w-full max-w-md bg-surface p-8 rounded-2xl border border-outline-variant/10">
            <div className="space-y-4">
              <div className="flex gap-2 mb-4 text-secondary">
                {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-widest text-tertiary">Experience Rating</label>
                <div className="h-1 w-full bg-surface-container-highest rounded-full overflow-hidden">
                  <div className="h-full w-[98%] flame-gradient"></div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-xl bg-surface-container-low text-center">
                  <span className="block text-2xl font-bold text-on-surface">4.9</span>
                  <span className="text-[10px] uppercase font-bold text-tertiary">Food</span>
                </div>
                <div className="p-4 rounded-xl bg-surface-container-low text-center">
                  <span className="block text-2xl font-bold text-on-surface">5.0</span>
                  <span className="text-[10px] uppercase font-bold text-tertiary">Service</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

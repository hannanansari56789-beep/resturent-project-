'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowRight, Flame, Leaf, Wine, Utensils, CheckCircle, Star, Quote } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col md:flex-row items-center pt-32 pb-20 px-6 md:px-12 lg:px-20 bg-surface-container-low">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 flex flex-col items-start gap-8"
        >
          <div className="inline-block px-4 py-1 rounded-full bg-primary-fixed text-on-primary-fixed-variant text-xs font-bold tracking-widest uppercase">
            Premium Dining
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-on-surface leading-[0.9] -ml-1 tracking-tighter">
            Taste That Stays With You
          </h1>
          <p className="text-lg md:text-xl text-tertiary max-w-md font-light leading-relaxed">
            Fresh, modern dining experience crafted with passion in our open-fire kitchen.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Link href="/booking">
              <button className="signature-gradient text-white px-8 py-4 rounded-lg font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-transform">
                Book Table
              </button>
            </Link>
            <Link href="/menu">
              <button className="border-2 border-outline/20 text-on-surface px-8 py-4 rounded-lg font-bold hover:bg-surface-container-high transition-colors">
                View Menu
              </button>
            </Link>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 mt-16 md:mt-0 relative"
        >
          <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl rotate-2 aspect-[4/5] md:aspect-auto md:h-[600px]">
            <Image 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8xqXfCJ4nll4nIcx6BTeb8GB_E6P0SL9cichR18LaUaxKUiWOtFy4N7WCyKz08_3QueTkLnbblKc_I28tVDzL6D0ElG1RUR5Igd3mqAwefmvlomQnq2g-ZfpGKp44s7EpWMWH0Swz1_SHLA9ObP5I3sfNjctdKAx7R-qti1jtNixrCFzz6iqDl8StgRsRAZ_LE0HmAmkBMjdXfYruMOvb_qIVPUw3BmzufaMMB5048EM1mmZ-Hfh4ERHvsdT0g877LukdHPGcJmZf"
              alt="Gourmet steak dish"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -top-10 -right-10 w-48 h-48 signature-gradient rounded-full blur-3xl opacity-20 -z-10"></div>
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-secondary-container rounded-full blur-3xl opacity-20 -z-10"></div>
        </motion.div>
      </section>

      {/* Featured Dishes */}
      <section className="py-24 px-6 md:px-12 lg:px-20 bg-surface">
        <div className="flex justify-between items-end mb-16">
          <div>
            <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs">Curated Selection</span>
            <h2 className="text-4xl md:text-5xl font-black mt-2 text-on-surface tracking-tight">Chef&apos;s Recommendations</h2>
          </div>
          <Link href="/menu" className="hidden md:block text-primary font-semibold border-b-2 border-primary/20 hover:border-primary transition-all pb-1">
            View Full Menu
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {[
            {
              title: "Citrus Glazed Salmon",
              price: "$32",
              desc: "Atlantic salmon, blood orange reduction, charred asparagus, and quinoa pearls.",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB4RIc4moUfQ5h4Lkc1Uh69GTp4XgVTC1TIKTomHdsVH9UPEbGpGCDiuUiJJN-wf0qY1Ji5nWPP1KH5MnPe5IlYvEIXJZWARsFHKXK7LUXGaKA5MtQP1S7xmeP1ctaUMLjme9YLxbhsReFMjM1D09J6y9yMDHgoSrahPf2MrbC_vCFZ709AwycA3IjqqTGFeO6jmcBuyGYaxWUInBxE4p4o3H9Gg0hWodnYS_WOD28Aqjpy_Q8UYifkBQ734Le2Q8XZuDqUdBG0EChp"
            },
            {
              title: "Truffle Pappardelle",
              price: "$28",
              desc: "Hand-cut pasta, wild forest mushrooms, black truffle oil, and aged parmesan.",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCzAZ4OKXX_oKvFnVTlYmSsngBbeDcQ9M3s2gkJbLZcERDRN1JjehPmEXYcVGCgGWENgeLY_tsDN90OtmeGFztqO9MwfxIDt4_rN6soVnzxfaz_u9E-AyAJg8f8WdEHFiVq0BG_Hc3hJKCWKW1ZL-Kew5fq2nJEiOXytMFjJKTbXGnY8aJC_n4iVNcjWsS1uJr8bWqaBPKLo2Fwa3CO-mcHg0JOHFQf4xIhKAT6G_yUju0a3XHmfkBikIxopQbXAzRW8QH9LAY6aLrG"
            },
            {
              title: "Smoked Short Rib",
              price: "$45",
              desc: "12-hour slow smoked rib, parsnip puree, and red wine jus with micro-herbs.",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAOTDqI9LUQu6I7wvra3moJ-aj4VUDlG38iRMieXMwds1WsoIOZbFqLJNc1Qo16x1sN-jwXZEsD2Xm61QAHtGRpzI4aJpGob1mJwhE_owTOjsR3a8D9N3AVnewp0fx6T6yllvOL66U1xl2XDbiTr2qxyO4mzsau7uCunl5rZG6M5Jecs4l5dgLzGpIUxZQSn8PWX-743MgSMovLsPvXpC1t0hsHMrtgrqYXU0Iu2mMZ6qQ4XFpVBf8R4oPBoPh6Y33VOK9K-59h8BWf"
            }
          ].map((dish, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-surface-container-lowest rounded-2xl group overflow-hidden transition-all duration-500 hover:-translate-y-2 shadow-sm hover:shadow-xl"
            >
              <div className="h-80 overflow-hidden relative">
                <Image 
                  src={dish.img}
                  alt={dish.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-on-surface">{dish.title}</h3>
                  <span className="text-primary font-bold">{dish.price}</span>
                </div>
                <p className="text-tertiary font-light mb-6">{dish.desc}</p>
                <button className="text-on-primary-fixed-variant font-bold flex items-center gap-2 group/btn">
                  Order Now <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-6 md:px-12 lg:px-20 bg-surface-container-low">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-[#2A2C41] mb-6">A Hearth For Every Soul</h2>
          <p className="text-lg text-tertiary font-light">We believe dining is more than just food; it&apos;s a sensory journey defined by quality and hospitality.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {[
            { icon: <Flame size={32} />, title: "Open Hearth", desc: "Traditional fire-roasting techniques that seal in natural juices and flavors." },
            { icon: <Leaf size={32} />, title: "Farm Fresh", desc: "Daily deliveries from local organic growers ensuring peak nutritional value." },
            { icon: <Wine size={32} />, title: "Expert Pairings", desc: "Curated cellar selection with sommeliers ready to elevate your meal." },
            { icon: <Utensils size={32} />, title: "Chef's Table", desc: "An intimate front-row seat to our kitchen’s choreography and passion." }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-8"
            >
              <div className="w-16 h-16 bg-primary-fixed rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold mb-3 text-[#2A2C41]">{item.title}</h4>
              <p className="text-sm text-tertiary leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center gap-16 bg-surface-container-lowest">
        <div className="w-full md:w-1/2 relative">
          <div className="rounded-xl overflow-hidden h-[500px] relative">
            <Image 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-Ne1GYCo0Jg4GjAk5axpsx3zjb9ydL4yrOq2sHSGqsJEsnXIJGE5_MD3P2nwoEu1miB-OeNWRJDNTySc11ndJwgAISG5JtXVI571Zr2ULun8x1sMiXr5O8-nrrA8zUPVYv1IlMK9ZK3RkaWMpQm-8GA4VWxLS16F5QYsSSk09EFbv-7QbfCG_PQe-ZQFAehzTw6ek3_Ulvy9JCjQwF_5EBCZ2OG7uQClH6x7BO_WSXjlxMQZI1Gpf2ILGqA31FJu34-bntHii2AaL"
              alt="Restaurant interior"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="absolute -bottom-10 -right-10 bg-white p-8 rounded-lg shadow-xl max-w-xs hidden lg:block"
          >
            <p className="italic text-tertiary font-serif text-lg">&quot;The ambiance is just as flavorful as the menu. A true architectural feast.&quot;</p>
            <div className="mt-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-200"></div>
              <div>
                <p className="text-sm font-bold">Architectural Digest</p>
                <p className="text-xs text-slate-400">Design Review 2024</p>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-black text-on-surface mb-8 leading-tight">Beyond The Plate: A Masterclass in Atmosphere</h2>
          <p className="text-lg text-tertiary font-light mb-8 leading-relaxed">Our space was designed with the same care as our menu. From the custom-built hearth to the hand-stitched leather seating, every detail is tuned to create an atmosphere of modern warmth and understated luxury.</p>
          <ul className="space-y-4 mb-10">
            {["Intimate Booth Seating", "Private Dining Mezzanine", "Heated Outdoor Terrace"].map((item, i) => (
              <li key={i} className="flex items-center gap-4 text-on-surface font-semibold">
                <CheckCircle size={20} className="text-primary" />
                {item}
              </li>
            ))}
          </ul>
          <button className="border-b-2 border-primary text-primary font-bold px-1 py-2 hover:bg-primary/5 transition-all">Explore The Space</button>
        </div>
      </section>

      {/* Reviews Preview */}
      <section className="py-24 px-6 md:px-12 lg:px-20 bg-surface">
        <h2 className="text-center text-4xl font-black mb-16 text-on-surface">Voices From Our Table</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Sarah Jenkins",
              role: "Food Critic",
              text: "The smoked short rib literally melted away. I haven&apos;t experienced flavors this concentrated and pure in a very long time.",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBWUYuKpLllJ17ujo_CWK1Tf5fyN7iQBXtRtawHo-D-nWs8uL8hnQeWdPyx_XTTuOlO7OS1_R6nghCWvn-xwDn_qB09gjUnWdhVhlSP9gdxJCGePwb2myN4c2Ycamt2SZ5ydrBsc3gW_FyboAmxLBeWH12HO0h6_sbIVz4giZ8BEIvmWnfT6NwlpR16J1B39Es05SoIzprkZ5hnY7ifUX5YKFWHmk1my0y-IWf0iL6DWecaDLHFZ4IY9rxH4FKfuD_X-IbgKtEYrr5r"
            },
            {
              name: "Marcus Thorne",
              role: "Local Guide",
              text: "A masterclass in modern hospitality. From the moment we walked in, we felt like honored guests at a private estate.",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAK0iNlFmo1Kg__pa878lno8Ca52B5wNu6R3JNorMVjGUXgY6vW3DjYsfxaqawnH1wNfC_SQae6MpzmOUnW422M9p3O3ZpE0xw1X56UD41mYSkB9YzxN3r-dFPChsohSDiLw0G8JanYq5PJyKJKJv4j1BtHF1XOTMhkzBSYT0iIaU0M_xICXRMwMoe3TP-Z-jUk2X6Ws7mXV-zqgtD9dYNJjw_oWp8GXTAFNvqLC6-Z6Z-WK9eBeqIJvkjuC8YnplEUhjHr912fiHk5"
            },
            {
              name: "Elena Rodriguez",
              role: "Sommelier Enthusiast",
              text: "The wine list is phenomenal. The sommelier suggested a vintage that paired perfectly with our truffle pasta.",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDe1uixc3ckU2lRaFCH9eBG_nZrQtk5ySG3ujGPMTgoRrnlyvr2A0CKzoZfQIpvsRo3N1_C-f_iKOJdJ33gjjjV3DL5_ign3J2vzEd9Hsm3LVHHTjnJop_1FBfO5ehmyl3R1DP3Y64QAaAoVColvWJMgSrNoYSwBQRFKUVFxDgqKL879B4eTa_ksuyrHPLyMnhZKnrC_Zr60ITUUwjh114X5bFA60s05qVrubJ2ZFrYCGnMULoxVY2gySzoqn4GJLGIg0qOZPf9AuPQ"
            }
          ].map((review, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-surface-container-high p-10 rounded-lg relative overflow-hidden"
            >
              <div className="flex gap-1 mb-6 text-[#FDBF50]">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-on-surface italic mb-8 leading-relaxed">&quot;{review.text}&quot;</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden relative">
                  <Image 
                    src={review.img}
                    alt={review.name}
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <p className="font-bold">{review.name}</p>
                  <p className="text-xs text-tertiary uppercase tracking-widest">{review.role}</p>
                </div>
              </div>
              <Quote className="absolute -bottom-4 -right-4 text-8xl opacity-5" size={96} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden relative min-h-[500px] flex items-center justify-center">
          <div className="absolute inset-0 signature-gradient opacity-90 z-10"></div>
          <Image 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2AoThUKF73JnAanoxhaUCP0Rty7ttC09C2qb5EI0xqbMdRXBRFwER5GVzzBQ2KbG2F3yVST6bcDRu1n-UCjUHdJMGigibqAQgtZTS6iJgoka7LvMBSSf1m1s5469LmlZhLHIzoWSYT8lkbjAHPD5NMhhZ4x2GVU7qwHegBy055DDw1w3AWcCzyqE8C1pckh-zIdxaN3Sx-aL2xi9JBnIqknHcAuHJ6LGtscLmgS5bhbV_KfDwBSGgIKVyOfbLPB4jE-AYKfJAUhMu"
            alt="Kitchen hearth"
            fill
            className="object-cover mix-blend-overlay"
            referrerPolicy="no-referrer"
          />
          <div className="relative z-20 p-12 md:p-24 text-center">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">Reserve your table today</h2>
            <p className="text-white/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light">Join us for an unforgettable evening where fire and finesse meet. Limited tables available for the weekend.</p>
            <Link href="/booking">
              <button className="bg-white text-primary px-12 py-5 rounded-full font-black text-lg hover:scale-105 transition-transform shadow-xl shadow-black/20">
                Book Now
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

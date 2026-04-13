'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export default function GalleryPage() {
  const categories = ["All Moments", "Signature Dishes", "The Interior", "Behind the Scenes", "Cocktail Craft"];

  const images = [
    { title: "The Ember Steak", cat: "Signature", size: "large", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCEL6PcwSy7tLLxbFzp9b1zx3W7p5oEn5_p7Na-kTCfGqJHZ0G8ZFZTlKgbvpqFfcUJWW5HCPpmH2r2eHkDSgnwJlV20OpBY_TsMjPj2go1oZxQXGdUYZ9-i3UhD1-1IR_5lI7Sae_2Xx9TMQXJ7r5SzX4_8fVd8lMWqGq_-tfTPkk6_P0jvPlvsvKDKkONkF_WYy131-tX_MTnGIb5sQtkc9JgMbaoC7nlX2HzbQa7iOirlCSy9nH99EyBJT9RkTfbbJpT6szC1Wo1" },
    { title: "Craft Cocktail", cat: "Drinks", size: "tall", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAA-5yFHDLxIHuEmwmC13_x__om1ASISHq1vQqkXAFkzlGPD-mgoWGcEu6_FvCT-Y6tLIdDDzF3RGsTHkQhVFQVWYEvj4V3F1ah0gI_lPkHAp1NSSa3VK7LWNXVeJTF2BkJu8yVb__U5wm5N6gMxy9Ebunl_ewmFgvBAQfITx6l52DW9y_8eVbQ12tR0fGRkHO0XXpLG3ERALapeB3VQyPF5KoJtz3FQ_edtlwM_pANSY6Cd3KTv-sWYHedYYioxc4rrv8P_VBRVq9N" },
    { title: "Modern Interior", cat: "Space", size: "standard", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDqiNlTsjF3YKL7W5wzEiYphk8PkWDsgbnSsy3uEjZMN0yuCSI7XhWqNgClLREHpjV2jgYUbEqQqgRAImiNPOPKH-a6B0gxA0WxjcF1569AP_sc4WhB3ZIJA2iyn-LGeXuv5XyBr_ySf-eumL1JpRuoA8ZUSrtb3XDY7NeXZDghy3aMmsalkhEImbhjxntPkulfhwqyhjq1vRBn4FGmuARrfFDlXj-pyH0s71zYxnOBbUkQ4ElW1hut59hVgAJkwwwZoK15b3AaWiQg" },
    { title: "Chef's Precision", cat: "Behind", size: "standard", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJLxwWMUG7tcckCIq4J49B4jfpCICq_hF0t8oGgIx1Z37nYi2tMURYjoCPPjq-Xe6jdPHypN42zXcJ4sTIrb7GGEGdnwSf7Gcvreme7l12zc1daxipBPyTQ98zWYA3CtpRVFHVKihdBvVmJn9apy2F5d9R2f8IedTuYGyj06dyRzmZ_sEEE1qTcUokh50_HrTCIL9sk8TZXbmnrtkkRREPFLttqhhedaPngglUbLkRAwynyB4H92BnrxVKoPAahkQWPw_EP0nQ2vb-" },
    { title: "Dining Joy", cat: "Moments", size: "wide", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAnR3pijYfJ54N5PZevyjejOzOJNVzSR3tiA8Am5ASzl78ONI85zo4DAf5WLLB-yjUdNZmo2mV1x4yqk28ltp0Qr3Vs6Fy-x8cAMNWhFT4ImAaOm91R8fJqxNVDPBccSDbUYnu6ZC9qIIEcaI9yD8YQ3POzocQGNHSMYR-yYIe46Bm7zkC_ECVLGwT1ovyCIaPDLOBbbNwvJLim6X3d4rL4fpvPXlmc3wq26kKNG5D-oyb71uaPODPuiC0kVKXOiuWb3tAmQvISGQtn" },
    { title: "Lava Cake", cat: "Dessert", size: "tall", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAuJWJgdKEVJLG9-7Q1_7FMoYqUzobcCkv7ghYms_OomfKI-cueKoko6WQnz7cI_RU8tCvGxXLBLXGem3pSZCzP0eqelKPps8PdiwObK0v-HhBP2zkFWDi-piET5zYBS2POYGF_nao1WiWMkWaGp7WhLxkg3i7_UlcQYKXNdmq249exXsKF40Hwn6Fw9s5zyrKCFPE_KFLfCrSG1fNONmu2NAnxoEtMSRMAa9SJbAkRS1mFFEXqSHFFsMRYdOhJv47eUvTsLXS63w4b" },
    { title: "Bar Glow", cat: "Space", size: "standard", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDWPyx4nQdDlLThSQ2ALsjB_RZZsNguFwl5SYOXmhHyJmhFeWDth3LOC9gnSA-8uQlwypc9X7K2-fxiauzW4Rd_LhMlF22VFHJljSILlIfnhLQim3NhFv9L2ZzFFyuEhlZSBjOcOBAxYFyedppIkN93TW8Z2a1NsjcqoNKe5n9tKuvewq_LpWPJiZYhyo7JMOHW5yVKeU-Okr65BYBwEj7o1VXHGYD2I8dYuMGaQp5hVmG9etrgnFRutSwrPE3MmFSIDa_5SZ-zdCBw" },
    { title: "Grilled Harvest", cat: "Sides", size: "wide", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAY_DDwFmMnj8EmSqTExUBZW7LIpSmzHwg3AOy-peycxEju7dSnhma_csnIWSKDd9skeqrtCRlF9Q0ck-wXkxi1hPe7SnEOB6Uk2UYUVBDj70OcO4DqMSdktvFKH8iIqyAYCm4yN0pzVxVQiM0IjP-H-0anJLPu3ng8rPgKiMuqD1Pdkz33CjKzkE9wO3jelNQGoA2JPjiMB25Sxd8KXlDoqCLcA8Q8TD-RSlS7_mv70yksOCtLBA00oKkzNcPAaf9MZLiOH_HONpD0" }
  ];

  return (
    <div className="bg-surface text-on-surface pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      <header className="mb-16">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-on-surface mb-4">The Visual Feast</h1>
        <p className="text-lg md:text-xl text-tertiary max-w-2xl font-light leading-relaxed">A curated collection of moments from our kitchen to your table. Experience the warmth of the hearth through our lens.</p>
      </header>

      <div className="flex flex-wrap gap-3 mb-12">
        {categories.map((cat, i) => (
          <button 
            key={cat}
            className={`${
              i === 0 ? 'bg-primary-fixed text-on-primary-fixed' : 'bg-surface-container-highest text-on-surface hover:bg-primary-fixed/50'
            } px-6 py-2 rounded-full font-medium transition-all`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[250px] gap-6">
        {images.map((img, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`overflow-hidden rounded-2xl group relative ${
              img.size === 'large' ? 'sm:col-span-2 sm:row-span-2' : 
              img.size === 'tall' ? 'sm:col-span-1 sm:row-span-2' : 
              img.size === 'wide' ? 'sm:col-span-2 sm:row-span-1' : ''
            }`}
          >
            <Image 
              src={img.img}
              alt={img.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
              <span className="text-white/70 text-sm uppercase tracking-widest mb-1">{img.cat}</span>
              <h3 className="text-white text-2xl font-bold">{img.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-20 flex justify-center">
        <button className="flex items-center gap-3 px-10 py-4 bg-surface-container-highest text-on-surface rounded-full font-bold hover:bg-primary-fixed transition-colors">
          Discover More Moments
          <ChevronDown size={20} />
        </button>
      </div>
    </div>
  );
}

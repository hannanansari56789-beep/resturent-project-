import Link from 'next/link';
import { Instagram, Facebook, Twitter, Globe, Utensils, Wine } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full py-20 px-12 grid grid-cols-1 md:grid-cols-3 gap-12 bg-[#2A2C41] dark:bg-[#1a1b29]">
      <div className="flex flex-col gap-6">
        <div className="text-3xl font-black text-white">Food Cafe</div>
        <p className="text-slate-400 font-sans text-sm leading-relaxed max-w-xs">
          Crafting digital and culinary experiences that ignite the senses. From our farm to your soul.
        </p>
      </div>
      
      <div className="grid grid-cols-2 gap-8">
        <div className="flex flex-col gap-4">
          <span className="text-primary-container font-sans text-sm uppercase tracking-widest font-bold">Discover</span>
          <Link href="/menu" className="text-slate-400 hover:text-white transition-all text-sm">Menu</Link>
          <Link href="/about" className="text-slate-400 hover:text-white transition-all text-sm">Our Story</Link>
          <Link href="/locations" className="text-slate-400 hover:text-white transition-all text-sm">Locations</Link>
        </div>
        <div className="flex flex-col gap-4">
          <span className="text-primary-container font-sans text-sm uppercase tracking-widest font-bold">Legal</span>
          <Link href="#" className="text-slate-400 hover:text-white transition-all text-sm">Privacy Policy</Link>
          <Link href="#" className="text-slate-400 hover:text-white transition-all text-sm">Terms of Service</Link>
          <Link href="#" className="text-slate-400 hover:text-white transition-all text-sm">Careers</Link>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <span className="text-primary-container font-sans text-sm uppercase tracking-widest font-bold">Follow Us</span>
        <div className="flex gap-6">
          <Link href="#" className="text-white opacity-80 hover:opacity-100 transition-all">
            <Instagram size={24} />
          </Link>
          <Link href="#" className="text-white opacity-80 hover:opacity-100 transition-all">
            <Facebook size={24} />
          </Link>
          <Link href="#" className="text-white opacity-80 hover:opacity-100 transition-all">
            <Twitter size={24} />
          </Link>
        </div>
        <div className="flex gap-4 text-slate-400">
          <Globe size={20} />
          <Utensils size={20} />
          <Wine size={20} />
        </div>
        <p className="text-slate-400 font-sans text-xs uppercase tracking-widest mt-auto">
          © 2024 FOOD CAFE. CRAFTED FOR THE DIGITAL HEARTH.
        </p>
      </div>
    </footer>
  );
}

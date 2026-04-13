'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { MapPin, Phone, Clock, Send } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="bg-surface text-on-surface pt-24">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-8 pt-20 pb-32">
        <div className="relative overflow-hidden rounded-3xl bg-surface-container-low min-h-[400px] flex items-center p-12 md:p-24">
          <div className="absolute inset-0 z-0">
            <Image 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhO3B7SN6b24kqCw7id3BYKJUc4xSUH71dfIGKSBcd2OoTov1g0aTf98zt0e7AT-0qPXbAqH_DY8jtfevEVYH1B3m03IEFRKZCGqOfiiASCpcI4WxEW3S8cI8locIjrE9Mw49qeyUvt3i6OKwPSbO7gsjGTZBq2iCG2kkPH6yzvgOOtqsyrDEzIQxqUeX_nmR8kJP9TL_URoS4-itu4CURwVgV4hPhYQE6Xqgv3YzhsilinqE2Yzpb3kSqK79ZeL6XZjXctaZhzVMh"
              alt="Restaurant interior"
              fill
              className="object-cover opacity-15 grayscale"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="relative z-10 max-w-2xl">
            <span className="uppercase tracking-[0.2em] text-primary font-bold text-xs mb-6 block">Inquiries</span>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-on-surface leading-[0.9] mb-8">
              Reach Out <br/>to the Hearth
            </h1>
            <p className="text-lg md:text-xl text-tertiary leading-relaxed font-light max-w-lg">
              Whether you&apos;re planning a private event, looking for reservation details, or simply want to share your experience, our team is here to listen.
            </p>
          </div>
          <div className="hidden lg:block absolute -right-20 -bottom-20 w-96 h-96 bg-secondary-container/20 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Contact Split */}
      <section className="max-w-7xl mx-auto px-8 pb-32">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="flex-1">
            <div className="mb-12">
              <h2 className="text-4xl font-bold tracking-tight mb-4">Send a Message</h2>
              <p className="text-tertiary font-light">Fields marked with an asterisk are required.</p>
            </div>
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-on-surface-variant">Full Name *</label>
                  <input className="w-full bg-surface-container-high border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-primary/40 transition-all outline-none" placeholder="Julian Vane" type="text" required />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-on-surface-variant">Email Address *</label>
                  <input className="w-full bg-surface-container-high border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-primary/40 transition-all outline-none" placeholder="julian@example.com" type="email" required />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-on-surface-variant">Subject</label>
                <select className="w-full bg-surface-container-high border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-primary/40 transition-all text-on-surface outline-none appearance-none">
                  <option>General Inquiry</option>
                  <option>Private Dining & Events</option>
                  <option>Media & Press</option>
                  <option>Career Opportunities</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-on-surface-variant">Your Message *</label>
                <textarea className="w-full bg-surface-container-high border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-primary/40 transition-all outline-none resize-none" placeholder="Tell us how we can help..." rows={6} required></textarea>
              </div>
              <button className="flame-gradient text-white text-lg font-bold py-5 px-12 rounded-full shadow-lg shadow-primary/10 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all flex items-center gap-2" type="submit">
                Send Message <Send size={20} />
              </button>
            </form>
          </div>

          <div className="flex-1 lg:max-w-md">
            <div className="space-y-16">
              <div className="space-y-10">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-primary-fixed rounded-full flex items-center justify-center shrink-0 text-on-primary-fixed">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">The Flagship Hearth</h3>
                    <p className="text-tertiary font-light leading-relaxed">842 Culinary Way, Arts District<br/>San Francisco, CA 94103</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-primary-fixed rounded-full flex items-center justify-center shrink-0 text-on-primary-fixed">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Direct Line</h3>
                    <p className="text-tertiary font-light leading-relaxed">+1 (415) 555-0128<br/>reservations@foodcafe.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-primary-fixed rounded-full flex items-center justify-center shrink-0 text-on-primary-fixed">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Dining Hours</h3>
                    <div className="grid grid-cols-2 gap-x-8 gap-y-1 text-sm">
                      <span className="text-on-surface-variant font-bold">Mon - Thu</span>
                      <span className="text-tertiary font-light">5 PM - 10 PM</span>
                      <span className="text-on-surface-variant font-bold">Fri - Sat</span>
                      <span className="text-tertiary font-light">5 PM - 11 PM</span>
                      <span className="text-on-surface-variant font-bold">Sunday</span>
                      <span className="text-tertiary font-light">4 PM - 9 PM</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative group h-72 rounded-3xl overflow-hidden shadow-2xl shadow-tertiary/5">
                <Image 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdsLO7W-USyryjvmOgF76258iEDfZQFtnFNUYc4k0q4N5Pw03xa54uzL1B7Ym4cwKVa0nMK2AiZRutdGWkt5fn1KGkd5SMdteshb-VkDQdRU2QI43qyrXSzl7M48CJOCPt0CZdCWX4B9pmPBgaI-gwMpfIX_GRTRIKVcRThJug_plgF-o5bVVuuDTTGLVoB-e6_nzEd07LyDpB20K1OX0Ag8fHNweEhfUNYYMD9yxvsJzVmOBycEO7be6Y16FEWQHw2NC1nmGdoW8E"
                  alt="Map"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                    <div className="w-4 h-4 bg-primary rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

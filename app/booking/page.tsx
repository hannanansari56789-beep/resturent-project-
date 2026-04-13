'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { User, Phone, Users, Calendar, Clock, ArrowRight } from 'lucide-react';

export default function BookingPage() {
  return (
    <div className="bg-surface-container-low min-h-screen flex flex-col pt-32 pb-20 px-6">
      <main className="flex-grow flex items-center justify-center">
        <div className="relative w-full max-w-4xl">
          <div className="absolute -top-12 -left-12 w-48 h-48 bg-primary-container/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-secondary-container/10 rounded-full blur-3xl"></div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row"
          >
            <div className="hidden md:block md:w-1/3 relative">
              <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpDu9VK0f2qeNGvZF_d4ScNcjLvcN4eVUr-sB6GlbXI8cPewm3lgUqBgFIFEpbGk-uNbX27ig73ahiAg2S-4JA-kA_rh3mtsDrW2hxIKhNMNkrX6fgYB7Qjwe0ShH8yKYGRjcPyyl5fQH0HsdJ3BIV81ML8_iI1_16wfQ-dOi7SbyJPPYQkxVPoxIns38hmqg5gFTqT0YDzls8aiEa3DxeSuirmEEcCzqFLJe8WrL7DWkDq4MKmaZUlrkDszuV_iRXqLChbQ5Bdp5J"
                alt="Restaurant interior"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-8">
                <h2 className="text-white text-3xl font-bold tracking-tight">Reserve Your Hearth</h2>
                <p className="text-white/80 text-sm mt-2">Join us for an unforgettable culinary journey defined by fire and finesse.</p>
              </div>
            </div>

            <div className="w-full md:w-2/3 p-8 md:p-12">
              <div className="mb-10 text-center md:text-left">
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary mb-2 block">Reservations</span>
                <h1 className="text-4xl font-extrabold tracking-tight text-on-surface">Book a Table</h1>
                <p className="text-tertiary mt-2 font-light">Secure your spot at the digital hearth tonight.</p>
              </div>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-tertiary ml-1">Full Name</label>
                  <div className="relative group">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-tertiary/40 group-focus-within:text-primary-container transition-colors" size={20} />
                    <input className="w-full pl-12 pr-4 py-4 bg-surface-container-high border-none rounded-2xl focus:ring-2 focus:ring-primary-container/40 focus:bg-white transition-all outline-none text-on-surface font-medium placeholder:text-tertiary/30" placeholder="John Doe" type="text" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-tertiary ml-1">Phone Number</label>
                    <div className="relative group">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-tertiary/40 group-focus-within:text-primary-container transition-colors" size={20} />
                      <input className="w-full pl-12 pr-4 py-4 bg-surface-container-high border-none rounded-2xl focus:ring-2 focus:ring-primary-container/40 focus:bg-white transition-all outline-none text-on-surface font-medium placeholder:text-tertiary/30" placeholder="+1 (555) 000-0000" type="tel" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-tertiary ml-1">Guests</label>
                    <div className="relative group">
                      <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-tertiary/40 group-focus-within:text-primary-container transition-colors" size={20} />
                      <select className="w-full pl-12 pr-4 py-4 bg-surface-container-high border-none rounded-2xl focus:ring-2 focus:ring-primary-container/40 focus:bg-white transition-all outline-none text-on-surface font-medium appearance-none">
                        <option>2 Guests</option>
                        <option>4 Guests</option>
                        <option>6 Guests</option>
                        <option>Large Party (8+)</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-tertiary ml-1">Date</label>
                    <div className="relative group">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-tertiary/40 group-focus-within:text-primary-container transition-colors" size={20} />
                      <input className="w-full pl-12 pr-4 py-4 bg-surface-container-high border-none rounded-2xl focus:ring-2 focus:ring-primary-container/40 focus:bg-white transition-all outline-none text-on-surface font-medium" type="date" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-tertiary ml-1">Time</label>
                    <div className="relative group">
                      <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-tertiary/40 group-focus-within:text-primary-container transition-colors" size={20} />
                      <input className="w-full pl-12 pr-4 py-4 bg-surface-container-high border-none rounded-2xl focus:ring-2 focus:ring-primary-container/40 focus:bg-white transition-all outline-none text-on-surface font-medium" type="time" />
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <button className="w-full py-5 rounded-full flame-gradient text-white font-bold text-lg shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3" type="submit">
                    <span>Confirm Reservation</span>
                    <ArrowRight size={20} />
                  </button>
                  <p className="text-center text-[11px] text-tertiary/60 mt-4 px-4">
                    By confirming, you agree to our booking policy. A confirmation email will be sent shortly.
                  </p>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}

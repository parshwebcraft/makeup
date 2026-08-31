"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, MessageCircle } from "lucide-react";
import { BRAND_DATA } from "@/data/content";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export function BookingModal({ isOpen, onClose, initialService = "" }: BookingModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    timeSlot: "Morning (8 AM - 12 PM)",
    service: initialService || "HD Bridal Package (₹15,000)",
    location: "",
    notes: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = "Please enter your name";
    if (!formData.phone.trim()) newErrors.phone = "Please enter your phone number";
    if (!formData.date) newErrors.date = "Please select your preferred date";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const messageText = `Hi Jiya Vadhwani! I found Bright & Beauty online and would like to book an appointment:

👤 *Name*: ${formData.name.trim()}
📞 *Phone*: ${formData.phone.trim()}
📅 *Event Date*: ${formData.date}
⏰ *Preferred Time*: ${formData.timeSlot}
✨ *Package / Service*: ${formData.service}
📍 *Venue/Location*: ${formData.location.trim() || "Udaipur"}
${formData.notes.trim() ? `💬 *Notes*: ${formData.notes.trim()}` : ""}

Please confirm your availability for my date!`;

    const encodedMessage = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/${BRAND_DATA.whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-espresso/85 backdrop-blur-md">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0"
          onClick={onClose}
        />

        {/* Modal Window matching Reference Design */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative z-10 w-full max-w-lg bg-[#181311] border border-gold/40 text-ivory p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-5 right-5 text-ivory/60 hover:text-gold transition-colors p-1"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-gold" />
              <span className="text-[11px] uppercase tracking-[0.25em] text-gold font-medium">
                Bright & Beauty Booking
              </span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-gold font-normal">
              Book an Appointment
            </h3>
            <p className="text-xs text-ivory/70 font-light mt-1">
              Select your package & date to confirm booking directly with Jiya Vadhwani via WhatsApp.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-ivory/90 mb-1.5 font-light">
                Name <span className="text-gold">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                className={`w-full bg-[#231B18] border ${
                  errors.name ? "border-red-400" : "border-gold/30 focus:border-gold"
                } text-ivory text-sm px-4 py-2.5 outline-none transition-colors rounded-none placeholder:text-ivory/40`}
              />
              {errors.name && <p className="text-[11px] text-red-400 mt-1">{errors.name}</p>}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-ivory/90 mb-1.5 font-light">
                Phone Number <span className="text-gold">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 80056 49056"
                className={`w-full bg-[#231B18] border ${
                  errors.phone ? "border-red-400" : "border-gold/30 focus:border-gold"
                } text-ivory text-sm px-4 py-2.5 outline-none transition-colors rounded-none placeholder:text-ivory/40`}
              />
              {errors.phone && <p className="text-[11px] text-red-400 mt-1">{errors.phone}</p>}
            </div>

            {/* Preferred Date & Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-ivory/90 mb-1.5 font-light">
                  Preferred Date <span className="text-gold">*</span>
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className={`w-full bg-[#231B18] border ${
                    errors.date ? "border-red-400" : "border-gold/30 focus:border-gold"
                  } text-ivory text-sm px-3 py-2.5 outline-none transition-colors rounded-none color-scheme-dark`}
                />
                {errors.date && <p className="text-[11px] text-red-400 mt-1">{errors.date}</p>}
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-ivory/90 mb-1.5 font-light">
                  Preferred Time Slot
                </label>
                <select
                  name="timeSlot"
                  value={formData.timeSlot}
                  onChange={handleChange}
                  className="w-full bg-[#231B18] border border-gold/30 focus:border-gold text-ivory text-sm px-3 py-2.5 outline-none transition-colors rounded-none"
                >
                  <option value="Morning (8 AM - 12 PM)">Morning (8 AM - 12 PM)</option>
                  <option value="Afternoon (12 PM - 4 PM)">Afternoon (12 PM - 4 PM)</option>
                  <option value="Evening (4 PM - 9 PM)">Evening (4 PM - 9 PM)</option>
                  <option value="Full Day Event">Full Day Event</option>
                </select>
              </div>
            </div>

            {/* Purpose / Package */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-ivory/90 mb-1.5 font-light">
                Package / Service Required <span className="text-gold">*</span>
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full bg-[#231B18] border border-gold/30 focus:border-gold text-ivory text-sm px-4 py-2.5 outline-none transition-colors rounded-none"
              >
                <optgroup label="Bridal Packages">
                  <option value="HD Bridal Package (₹15,000)">HD Bridal Package — ₹15,000</option>
                  <option value="Basic Bridal Package (₹10,000)">Basic Bridal Package — ₹10,000</option>
                </optgroup>
                <optgroup label="Pre-Wedding Shoots">
                  <option value="1-Day Pre-Wedding Shoot (₹8,000)">1-Day Pre-Wedding Shoot — ₹8,000</option>
                  <option value="2-Day Pre-Wedding Shoot (₹15,000)">2-Day Pre-Wedding Shoot — ₹15,000</option>
                </optgroup>
                <optgroup label="Family & Guest Makeup">
                  <option value="Premium Party Glam (₹7,000)">Premium Party Glam — ₹7,000</option>
                  <option value="Premium Sider Makeup (₹5,000)">Premium Sider Makeup — ₹5,000</option>
                  <option value="Basic Guest Makeup (₹2,500)">Basic Guest Makeup — ₹2,500</option>
                </optgroup>
                <optgroup label="Custom & Destination">
                  <option value="Destination Wedding Travel">Destination Wedding Travel</option>
                  <option value="Model Shoot Makeup">Model Shoot Makeup</option>
                </optgroup>
              </select>
            </div>

            {/* Location / Venue */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-ivory/90 mb-1.5 font-light">
                Venue / City Location
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="e.g. Oberoi Udaivilas, Udaipur / Jaipur / Mumbai"
                className="w-full bg-[#231B18] border border-gold/30 focus:border-gold text-ivory text-sm px-4 py-2.5 outline-none transition-colors rounded-none placeholder:text-ivory/40"
              />
            </div>

            {/* Notes */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-ivory/90 mb-1.5 font-light">
                Special Notes / Requirements
              </label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                rows={2}
                placeholder="Mention outfit colors, hair preferences, or family member count..."
                className="w-full bg-[#231B18] border border-gold/30 focus:border-gold text-ivory text-sm px-4 py-2.5 outline-none transition-colors rounded-none placeholder:text-ivory/40 resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-3">
              <button
                type="submit"
                className="w-full py-3.5 bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#9E7B3B] hover:opacity-95 text-white font-medium text-xs uppercase tracking-[0.25em] shadow-gold-glow flex items-center justify-center gap-2 transition-all active:scale-[0.99]"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Book Appointment via WhatsApp</span>
              </button>
            </div>
          </form>

          {/* Footer Note */}
          <div className="mt-4 text-center">
            <p className="text-[11px] text-champagne/70 font-light">
              Direct Contact: <span className="text-gold font-medium">{BRAND_DATA.phoneNumberDisplay}</span> • Titardi, Udaipur
            </p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

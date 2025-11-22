'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { restaurantInfo } from '../lib/data';
import { Calendar, Clock, Users, MapPin, Phone, Mail, CheckCircle } from 'lucide-react';

export default function BookingSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    message: '',
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');

    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
      // Reset form after success
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          date: '',
          time: '',
          guests: '2',
          message: '',
        });
        setFormStatus('idle');
      }, 3000);
    }, 1500);
  };

  return (
    <section id="booking" className="section relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[rgb(var(--primary))]/5 rounded-full blur-3xl -z-10" />

      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Reservations
          </span>
          <h2 className="mt-2 text-4xl md:text-5xl font-bold mb-6">
            Book Your Table
          </h2>
          <p className="text-foreground-muted text-lg">
            Reserve your spot for an unforgettable dining experience. For large groups or special events, please contact us directly.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info Cards */}
          <div className="lg:col-span-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card p-8 rounded-2xl"
            >
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-[rgb(var(--primary))]/20 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground mb-1">Location</div>
                    <div className="text-foreground-muted text-sm">{restaurantInfo.address}</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-[rgb(var(--primary))]/20 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground mb-1">Phone</div>
                    <div className="text-foreground-muted text-sm">{restaurantInfo.phone}</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-[rgb(var(--primary))]/20 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground mb-1">Email</div>
                    <div className="text-foreground-muted text-sm">{restaurantInfo.email}</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-card p-8 rounded-2xl"
            >
              <h3 className="text-xl font-bold mb-4">Opening Hours</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-3 border-b border-glass-border">
                  <span className="text-foreground-muted">Weekdays</span>
                  <span className="font-medium">{restaurantInfo.hours.weekdays}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-foreground-muted">Weekends</span>
                  <span className="font-medium">{restaurantInfo.hours.weekends}</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Booking Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 md:p-10 rounded-3xl space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground-muted ml-1">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-background-light/50 border border-glass-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-foreground-muted ml-1">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-background-light/50 border border-glass-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground-muted ml-1">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-background-light/50 border border-glass-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label htmlFor="date" className="text-sm font-medium text-foreground-muted ml-1 flex items-center gap-2">
                    <Calendar className="w-4 h-4" /> Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full bg-background-light/50 border border-glass-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all scheme-dark"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="time" className="text-sm font-medium text-foreground-muted ml-1 flex items-center gap-2">
                    <Clock className="w-4 h-4" /> Time
                  </label>
                  <input
                    type="time"
                    id="time"
                    name="time"
                    required
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full bg-background-light/50 border border-glass-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all scheme-dark"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="guests" className="text-sm font-medium text-foreground-muted ml-1 flex items-center gap-2">
                    <Users className="w-4 h-4" /> Guests
                  </label>
                  <select
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full bg-background-light/50 border border-glass-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all appearance-none"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, '8+'].map((num) => (
                      <option key={num} value={num} className="bg-background-light text-foreground">
                        {num} {num === 1 ? 'Person' : 'People'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground-muted ml-1">Special Requests (Optional)</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-background-light/50 border border-glass-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                  placeholder="Allergies, special occasion, seating preference..."
                />
              </div>

              <button
                type="submit"
                disabled={formStatus === 'submitting' || formStatus === 'success'}
                className={`w-full btn-primary py-4 text-lg flex items-center justify-center space-x-2 ${
                  formStatus === 'success' ? 'bg-green-600 border-green-600' : ''
                }`}
              >
                {formStatus === 'submitting' ? (
                  <span className="inline-block w-6 h-6 border-2 border-background border-t-transparent rounded-full animate-spin" />
                ) : formStatus === 'success' ? (
                  <>
                    <CheckCircle className="w-6 h-6" />
                    <span>Reservation Confirmed!</span>
                  </>
                ) : (
                  <span>Confirm Reservation</span>
                )}
              </button>
              
              {formStatus === 'success' && (
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-500 text-center text-sm mt-2"
                >
                  We've sent a confirmation email to {formData.email}
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

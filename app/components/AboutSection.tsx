"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { restaurantInfo } from "../lib/data";
import {
  UtensilsCrossed,
  ChefHat,
  Leaf,
  Sparkles,
  Phone,
  Clock,
} from "lucide-react";

export default function AboutSection() {
  const features = [
    {
      icon: <UtensilsCrossed className="w-8 h-8 text-primary" />,
      title: "Authentic Cuisine",
      description:
        "Traditional recipes passed down through generations with a modern twist",
    },
    {
      icon: <ChefHat className="w-8 h-8 text-primary" />,
      title: "Expert Chefs",
      description:
        "Skilled culinary artists dedicated to creating memorable dining experiences",
    },
    {
      icon: <Leaf className="w-8 h-8 text-primary" />,
      title: "Fresh Ingredients",
      description:
        "Locally sourced, organic ingredients for the highest quality dishes",
    },
    {
      icon: <Sparkles className="w-8 h-8 text-primary" />,
      title: "Premium Ambiance",
      description:
        "Elegant atmosphere perfect for any occasion, from casual to special events",
    },
  ];

  return (
    <section id="about" className="section relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[rgb(var(--primary))]/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[rgb(var(--accent))]/10 rounded-full blur-3xl -z-10" />

      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-64 rounded-2xl overflow-hidden glass-card">
                  <Image
                    src="/assets/dabali_image_1.jpeg"
                    alt="Restaurant interior"
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="relative h-48 rounded-2xl overflow-hidden glass-card">
                  <Image
                    src="/assets/dabali_image_2.jpeg"
                    alt="Delicious food"
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative h-48 rounded-2xl overflow-hidden glass-card">
                  <Image
                    src="/assets/dabali_image_3.jpeg"
                    alt="Chef preparing food"
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="relative h-64 rounded-2xl overflow-hidden glass-card">
                  <Image
                    src="/assets/dabali_image_4.jpeg"
                    alt="Restaurant ambiance"
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-6 -right-6 glass-card p-6 text-center rounded-2xl"
            >
              <div className="text-4xl font-bold text-gradient mb-1">10+</div>
              <div className="text-sm text-foreground-muted">
                Years of
                <br />
                Excellence
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                About Us
              </span>
              <h2 className="mt-4 mb-6 text-4xl md:text-5xl font-bold">
                Crafting Culinary Excellence Since 2014
              </h2>
              <p className="text-foreground-muted text-lg leading-relaxed mb-4">
                At {restaurantInfo.name}, we believe that great food brings
                people together. Our journey began with a simple vision: to
                create a dining experience that combines authentic flavors with
                modern culinary techniques.
              </p>
              <p className="text-foreground-muted text-lg leading-relaxed">
                Every dish we serve is a testament to our commitment to quality,
                creativity, and the joy of sharing exceptional food with our
                guests. We source the finest ingredients and prepare each meal
                with passion and precision.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  className="glass-card p-6 rounded-2xl"
                >
                  <div className="mb-3">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-foreground-muted text-sm">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-[rgb(var(--primary))]/20 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-foreground-muted">Call Us</div>
                  <div className="font-semibold text-foreground">
                    {restaurantInfo.phone}
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-[rgb(var(--accent))]/20 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="text-sm text-foreground-muted">
                    Opening Hours
                  </div>
                  <div className="font-semibold text-foreground">
                    {restaurantInfo.hours.weekdays}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

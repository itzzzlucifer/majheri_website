"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { restaurantInfo } from "../lib/data";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center pt-32 pb-20 overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/dabali_image_1.jpeg"
          alt="Hero Background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/70 to-black/90" />

        {/* Animated Gradient Overlay */}
        <motion.div
          className="absolute inset-0 bg-linear-to-r from-[rgb(var(--primary))]/20 to-[rgb(var(--accent))]/20"
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </div>

      {/* Content */}
      <div className="container relative z-10 text-center px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block"
          >
            <div className="glass-card px-6 py-3 inline-flex items-center space-x-2 rounded-full">
              <motion.span
                className="w-2 h-2 bg-primary rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-sm font-medium text-foreground-muted">
                Now Open for Reservations
              </span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold"
          >
            <span className="block text-foreground mb-4">
              {restaurantInfo.name}
            </span>
            <span className="block text-gradient">
              {restaurantInfo.tagline}
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-foreground-muted max-w-2xl mx-auto leading-relaxed"
          >
            {restaurantInfo.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="#booking">
              <button className="btn-primary text-lg px-8 py-4">
                <span>Reserve Your Table</span>
              </button>
            </Link>
            <Link href="#menu">
              <button className="btn-outline text-lg px-8 py-4">
                View Our Menu
              </button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-12"
          >
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient mb-2">10+</div>
              <div className="text-sm text-foreground-muted">
                Years Experience
              </div>
            </div>
            <div className="text-center border-x border-glass-border">
              <div className="text-4xl font-bold text-gradient mb-2">50+</div>
              <div className="text-sm text-foreground-muted">
                Signature Dishes
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient mb-2">1000+</div>
              <div className="text-sm text-foreground-muted">
                Happy Customers
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1, duration: 0.5 },
          y: { duration: 2, repeat: Infinity },
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:block"
      >
        <Link href="#about">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2 cursor-pointer hover:border-accent transition-colors">
            <motion.div
              className="w-1 h-2 bg-primary rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </Link>
      </motion.div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { menuCategories } from "../lib/data";

export default function MenuSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="menu" className="section relative bg-background-light">
      {/* Background Decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[rgb(var(--primary))]/5 rounded-full blur-3xl -z-10" />

      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Our Menu
          </span>
          <h2 className="mt-4 mb-6 text-4xl md:text-5xl font-bold">
            Discover Our Signature Dishes
          </h2>
          <p className="text-foreground-muted text-lg">
            Each dish is carefully crafted using the finest ingredients and
            traditional cooking methods to bring you an unforgettable culinary
            experience.
          </p>
        </motion.div>

        {/* Menu Categories */}
        {menuCategories.map((category) => (
          <div key={category.id} className="mb-16">
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-8 text-center text-gradient"
            >
              {category.name}
            </motion.h3>

            {/* Dishes Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {category.dishes.map((dish) => (
                <motion.div
                  key={dish.id}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  className="glass-card overflow-hidden rounded-2xl group"
                >
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={dish.image}
                      alt={dish.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Price Badge */}
                    <div className="absolute top-4 right-4 glass px-4 py-2 rounded-full">
                      <span className="font-bold text-primary">
                        {dish.price}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                      {dish.name}
                    </h4>
                    <p className="text-foreground-muted text-sm leading-relaxed mb-4">
                      {dish.description}
                    </p>

                    {/* Order Button */}
                    <button className="w-full py-3 rounded-full border-2 border-[rgb(var(--primary))]/30 text-primary font-semibold hover:bg-primary hover:text-[rgb(var(--background))] transition-all duration-300 hover:border-primary">
                      Order Now
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}

        {/* View Full Menu CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="btn-outline text-lg px-8 py-4">
            View Full Menu
          </button>
        </motion.div>
      </div>
    </section>
  );
}

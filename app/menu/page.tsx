"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { menuData, type MenuCategory } from "../lib/menuData";
import { Search, ChevronDown, ChevronUp } from "lucide-react";

export default function MenuPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set(menuData.map((cat) => cat.category))
  );

  const toggleCategory = (category: string) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(category)) {
      newExpanded.delete(category);
    } else {
      newExpanded.add(category);
    }
    setExpandedCategories(newExpanded);
  };

  const filteredMenuData = menuData
    .map((category) => ({
      ...category,
      items: category.items.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((category) => category.items.length > 0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section className="section relative">
      <div className="container">
        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto mb-12"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground-muted w-5 h-5" />
            <input
              type="text"
              placeholder="Search for dishes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-2xl glass border-2 border-[rgb(var(--primary))]/20 focus:border-[rgb(var(--primary))] outline-none transition-all duration-300 text-foreground placeholder:text-foreground-muted"
            />
          </div>
        </motion.div>

        {/* Menu Categories */}
        <div className="space-y-8">
          {filteredMenuData.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-foreground-muted text-lg">
                No dishes found matching &quot;{searchQuery}&quot;
              </p>
            </motion.div>
          ) : (
            filteredMenuData.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIndex * 0.05 }}
                className="glass-card rounded-3xl overflow-hidden"
              >
                {/* Category Header */}
                <button
                  onClick={() => toggleCategory(category.category)}
                  className="w-full px-6 md:px-8 py-6 flex items-center justify-between hover:bg-[rgb(var(--primary))]/5 transition-colors duration-300"
                >
                  <div className="flex items-center gap-4">
                    {/* Placeholder for category image */}
                    <div className="w-16 h-16 rounded-xl bg-linear-to-br from-[rgb(var(--primary))]/20 to-[rgb(var(--primary))]/5 flex items-center justify-center">
                      <span className="text-2xl">🍽️</span>
                    </div>
                    <div className="text-left">
                      <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                        {category.category}
                      </h2>
                      <p className="text-sm text-foreground-muted mt-1">
                        {category.items.length} items
                      </p>
                    </div>
                  </div>
                  {expandedCategories.has(category.category) ? (
                    <ChevronUp className="w-6 h-6 text-primary" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-primary" />
                  )}
                </button>

                {/* Category Items */}
                {expandedCategories.has(category.category) && (
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="px-6 md:px-8 pb-6"
                  >
                    <div className="grid gap-4">
                      {category.items.map((item, itemIndex) => (
                        <motion.div
                          key={`${item.name}-${itemIndex}`}
                          variants={itemVariants}
                          className="group"
                        >
                          <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-[rgb(var(--primary))]/5 transition-all duration-300">
                            {/* Placeholder for item image */}
                            <div className="shrink-0 w-20 h-20 rounded-lg bg-linear-to-br from-[rgb(var(--primary))]/10 to-[rgb(var(--primary))]/5 border-2 border-[rgb(var(--primary))]/20 group-hover:border-[rgb(var(--primary))]/40 transition-colors duration-300 flex items-center justify-center">
                              <span className="text-3xl opacity-50">🍴</span>
                            </div>

                            {/* Item Details */}
                            <div className="flex-1 min-w-0">
                              <div className="flex items-start justify-between gap-4">
                                <div className="flex-1">
                                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                                    {item.name}
                                  </h3>
                                  {item.description && (
                                    <p className="text-sm text-foreground-muted mt-1 leading-relaxed">
                                      {item.description}
                                    </p>
                                  )}
                                </div>
                                <div className="shrink-0">
                                  <span className="inline-block px-4 py-2 rounded-full bg-linear-to-r from-[rgb(var(--primary))]/10 to-[rgb(var(--primary))]/5 border border-[rgb(var(--primary))]/30 text-primary font-bold">
                                    Rs. {item.price}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))
          )}
        </div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-foreground-muted text-sm">
            Prices are subject to change. Please ask our staff for any dietary
            requirements or allergies.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

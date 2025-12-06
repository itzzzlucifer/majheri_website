import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu - Dabali Cafe",
  description:
    "Explore our extensive menu featuring authentic Nepali cuisine, momos, thali sets, pizzas, beverages, and more. From traditional dishes to modern favorites.",
};

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      {/* Menu Header */}
      <section className="relative py-20 bg-linear-to-br from-[rgb(var(--primary))]/10 via-background to-background-light overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-72 h-72 bg-[rgb(var(--primary))] rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[rgb(var(--primary))] rounded-full blur-3xl" />
        </div>

        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Our Complete Menu
            </span>
            <h1 className="mt-4 mb-6 text-5xl md:text-6xl font-bold text-gradient">
              Discover Our Flavors
            </h1>
            <p className="text-foreground-muted text-lg leading-relaxed">
              From traditional Nepali delicacies to international favorites,
              explore our carefully curated selection of dishes crafted with
              passion and the finest ingredients.
            </p>
          </div>
        </div>
      </section>

      {/* Menu Content */}
      {children}
    </div>
  );
}

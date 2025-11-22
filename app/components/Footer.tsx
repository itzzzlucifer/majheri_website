"use client";

import Link from "next/link";
import { restaurantInfo } from "../lib/data";
import {
  Facebook,
  Instagram,
  Twitter,
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background-lighter pt-16 pb-8 border-t border-glass-border">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-bold text-gradient">
              {restaurantInfo.name}
            </Link>
            <p className="text-foreground-muted leading-relaxed">
              {restaurantInfo.description}
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href={restaurantInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-glass-border flex items-center justify-center text-foreground hover:bg-primary hover:text-background transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={restaurantInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-glass-border flex items-center justify-center text-foreground hover:bg-primary hover:text-background transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-glass-border flex items-center justify-center text-foreground hover:bg-primary hover:text-background transition-all duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-foreground">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                "Home",
                "About",
                "Menu",
                "Gallery",
                "Testimonials",
                "Contact",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-foreground-muted hover:text-primary transition-colors duration-300 flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 opacity-0 hover:opacity-100 transition-opacity"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-foreground">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-foreground-muted">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                <span>{restaurantInfo.address}</span>
              </li>
              <li className="flex items-center space-x-3 text-foreground-muted">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>{restaurantInfo.phone}</span>
              </li>
              <li className="flex items-center space-x-3 text-foreground-muted">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>{restaurantInfo.email}</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-foreground">
              Opening Hours
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-foreground-muted">
                <Clock className="w-5 h-5 text-primary shrink-0 mt-1" />
                <div>
                  <div className="font-medium text-foreground">Weekdays</div>
                  <div className="text-sm">{restaurantInfo.hours.weekdays}</div>
                </div>
              </li>
              <li className="flex items-start space-x-3 text-foreground-muted">
                <Clock className="w-5 h-5 text-primary shrink-0 mt-1" />
                <div>
                  <div className="font-medium text-foreground">Weekends</div>
                  <div className="text-sm">{restaurantInfo.hours.weekends}</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-glass-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-foreground-muted text-sm text-center md:text-left">
            &copy; {currentYear} {restaurantInfo.name}. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-foreground-muted">
            <Link href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

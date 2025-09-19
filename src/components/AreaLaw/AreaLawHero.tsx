"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BookOpen, Scale } from "lucide-react";

export default function AreaLawHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute w-96 h-96 bg-blue-200/40 rounded-full blur-3xl top-20 left-10"
          animate={{ x: [0, 20, -20, 0], y: [0, -20, 20, 0] }}
          transition={{ repeat: Infinity, duration: 20 }}
        />
        <motion.div
          className="absolute w-80 h-80 bg-indigo-200/40 rounded-full blur-3xl bottom-20 right-10"
          animate={{ x: [0, -20, 20, 0], y: [0, 20, -20, 0] }}
          transition={{ repeat: Infinity, duration: 25 }}
        />
      </div>

      {/* Content */}
      <div className="max-w-3xl text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-center gap-3 mb-6">
            <Scale className="w-12 h-12 text-blue-600" />
            <BookOpen className="w-12 h-12 text-indigo-600" />
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Haat Ma <span className="text-blue-600">Kanun</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Understanding Nepal’s Constitution and Laws made simple — accessible
            to everyone, anytime.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="px-6 py-3 text-lg rounded-2xl">
              Explore Constitution
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-6 py-3 text-lg rounded-2xl"
            >
              Browse Acts
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

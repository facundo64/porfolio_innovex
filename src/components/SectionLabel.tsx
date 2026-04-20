"use client";

import { motion } from "framer-motion";

export default function SectionLabel({
  number,
  title,
}: {
  number: string;
  title: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="inline-flex items-center gap-3 text-xs font-mono tracking-[0.25em] uppercase text-[#3A3A3A] mb-6"
    >
      <span className="rounded-full border border-[#1E2A47]/15 bg-white/70 backdrop-blur-md px-3 py-1 text-[#1E2A47]">
        {number}
      </span>
      <span>{title}</span>
    </motion.div>
  );
}

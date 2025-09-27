// components/SectionLabel.tsx
"use client";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

interface SectionLabelProps {
    icon?: React.ElementType;
    text: string;
}

export default function SectionLabel({
    icon: Icon = Sparkles,
    text,
}: SectionLabelProps) {
    return (
        <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-6 py-3 
                 bg-green-100 text-green-700 
                 text-2xl md:text-3xl lg:text-4xl font-bold 
                 rounded-full border border-green-200 
                 leading-snug mb-6"
        >
            <Icon className="w-6 h-6 mr-3 text-green-600" />
            {text}
        </motion.h2>
    );
}
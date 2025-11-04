"use client";
import { motion } from "framer-motion";

interface LeadParagraphProps {
    children: React.ReactNode;
}

export default function LeadParagraph({ children }: LeadParagraphProps) {
    return (
        <motion.div
            className="max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
        >
            <p className="text-lg md:text-xl font-serif leading-relaxed text-gray-800 italic font-semibold">
                {children}
            </p>
        </motion.div>
    );
}

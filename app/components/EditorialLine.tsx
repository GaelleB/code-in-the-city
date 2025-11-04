"use client";

interface EditorialLineProps {
    children: React.ReactNode;
}

export default function EditorialLine({ children }: EditorialLineProps) {
    return (
        <div className="flex items-center justify-center my-12 md:my-16">
            <div className="flex-grow h-px bg-gradient-to-r from-transparent via-gray-400 to-gray-400" />
            <span className="px-6 typo-small uppercase tracking-[0.3em] font-bold text-gray-700">
                {children}
            </span>
            <div className="flex-grow h-px bg-gradient-to-l from-transparent via-gray-400 to-gray-400" />
        </div>
    );
}

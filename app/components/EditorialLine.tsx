"use client";

interface EditorialLineProps {
    children: React.ReactNode;
}

export default function EditorialLine({ children }: EditorialLineProps) {
    return (
        <div className="flex items-center justify-center my-12 md:my-16">
            <div className="flex-grow h-[1px] bg-gradient-to-r from-transparent via-gray-400 to-gray-400"></div>
            <h2 className="px-6 text-xs md:text-sm uppercase tracking-[0.3em] font-bold text-gray-700">
                {children}
            </h2>
            <div className="flex-grow h-[1px] bg-gradient-to-l from-transparent via-gray-400 to-gray-400"></div>
        </div>
    );
}

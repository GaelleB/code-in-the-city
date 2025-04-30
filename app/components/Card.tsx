interface CardProps {
    children: React.ReactNode;
    className?: string;
}

export default function Card({ children, className = "" }: CardProps) {
    return (
        <div
            className={`rounded-lg border border-[var(--color-secondary)] bg-white/90 p-6 shadow-md transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg ${className}`}
            >
            {children}
        </div>
    );
}
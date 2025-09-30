import dynamic from "next/dynamic";

// Dynamic import pour GSAP animations (composant lourd)
const About = dynamic(() => import("@/components/About"), {
    loading: () => (
        <div className="max-w-4xl mx-auto px-4 py-20 animate-pulse">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="w-40 h-40 bg-gray-200 rounded-xl" />
                <div className="flex-1 space-y-4">
                    <div className="h-8 bg-gray-200 rounded w-1/3" />
                    <div className="h-4 bg-gray-200 rounded" />
                    <div className="h-4 bg-gray-200 rounded" />
                    <div className="h-4 bg-gray-200 rounded w-5/6" />
                </div>
            </div>
        </div>
    ),
});

export default function AboutPage() {
    return <About />;
}
import { useEffect } from 'react';
import gsap from 'gsap';
import Location from "../assets/mark.svg";

export default function Info( { imageUrl, title, description, location, mapUrl } ) {


    useEffect(() => {
        // Add hover effect to all elements with the 'info-card' class
        const cards = document.querySelectorAll(".info-card");

        cards.forEach((card) => {
            const handleMouseEnter = () => {
                gsap.to(card, { scale: 1.08, duration: 1 });
            };

            const handleMouseLeave = () => {
                gsap.to(card, { scale: 1, duration: 1, y: 0 });
            };

            card.addEventListener("mouseenter", handleMouseEnter);
            card.addEventListener("mouseleave", handleMouseLeave);

            // Cleanup event listeners
            return () => {
                card.removeEventListener("mouseenter", handleMouseEnter);
                card.removeEventListener("mouseleave", handleMouseLeave);
            };
        });
    }, []);

    return (
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-4xl mt-5 mb-10 info-card">
            <div className="md:flex ">
                <div className="md:shrink-0">
                    <img
                        className="h-48 w-full object-cover md:h-full md:w-48 cursor-pointer"
                        src={imageUrl}
                        alt={title}
                    />
                </div>
                <div className="p-8">
                    <div className="flex items-center justify-start gap-2">
                        <img src={Location} alt="location icon" />
                        <p className="uppercase">{location}</p>
                        {mapUrl && (
                            <p className="text-slate-400 hover:underline block cursor-pointer">
                                <a href={mapUrl} target="_blank" rel="noopener noreferrer">
                                    View on Google Maps
                                </a>
                            </p>
                        )}
                    </div>
                    <a
                        href="#"
                        className="block mt-1 text-3xl leading-tight font-bold text-black hover:underline"
                    >
                        {title}
                    </a>
                    <p className="mt-2 text-slate-500">{description}</p>
                </div>
            </div>
        </div>
    );
}

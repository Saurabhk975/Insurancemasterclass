import React, { useState, useEffect } from 'react';

const StickyCTA = ({ onRegister }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const aboutSection = document.getElementById('about-section');
            if (aboutSection) {
                const rect = aboutSection.getBoundingClientRect();
                // Show CTA when the bottom of the about section is above the viewport
                if (rect.bottom < 0) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            } else {
                // Fallback if section is not found
                if (window.scrollY > 1200) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Initial check
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div
            className={`fixed bottom-0 left-0 w-full bg-blue-50 border-t border-blue-100 py-4 px-4 z-[100] shadow-lg transition-all duration-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                }`}
        >
            <div className="container mx-auto">
                <div className="flex items-center justify-between gap-3 md:gap-6 max-w-6xl mx-auto">
                    {/* Left Side: Image + Text */}
                    <div className="flex items-center gap-3 md:gap-6">
                        {/* Mentor Image - Hidden on mobile */}
                        <img
                            src="/mentor-nobg.png"
                            alt="Saurabh Kulkarni"
                            className="hidden md:block w-16 h-16 md:w-20 md:h-20 object-cover object-top rounded-full border-2 border-blue-200"
                        />
                        {/* Text */}
                        <div>
                            <p className="text-[10px] md:text-sm text-blue-600 uppercase font-semibold tracking-wide">
                                INVESTMENT MASTERCLASS
                            </p>
                            <h3 className="text-sm md:text-xl font-bold text-gray-900 leading-tight">
                                Decode the Secret to Wealth Creation
                            </h3>
                        </div>
                    </div>

                    {/* Right Side: Button */}
                    <button
                        onClick={onRegister}
                        className="btn-primary py-2 px-4 md:py-4 md:px-10 text-sm md:text-lg font-bold whitespace-nowrap min-w-[120px]"
                    >
                        Register Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default StickyCTA;
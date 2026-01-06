import React, { useState } from 'react';
import TermsModal from './TermsModal';

const Footer = () => {
    const [isTermsOpen, setIsTermsOpen] = useState(false);

    return (
        <footer className="bg-white border-t border-gray-200 py-12 pb-24">
            <div className="container px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {/* Logo and Description */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <img src="/sk-logo.png" alt="SK Dynamics 360" className="h-10 w-auto" />
                            <span className="text-2xl font-extrabold text-gray-900">SK Dynamics 360</span>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            With SK Dynamics 360, you don't just learn about insurance. You understand it. You master it. And you make better coverage decisions for lasting security.
                        </p>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-bold text-gray-900 mb-4">Contact Us</h3>
                        <div className="space-y-2 text-sm text-gray-600">
                            <p>📧 <a href="mailto:sk360dynamics@gmail.com" className="text-gray-600 hover:text-blue-600 transition-colors">sk360dynamics@gmail.com</a></p>
                            <a
                                href="https://www.google.com/maps/place/Sk+360+Dynamics/@18.6627105,73.805989,17z/data=!4m6!3m5!1s0x3bc2b9f7caa282b1:0x82f6becbe5d6adea!8m2!3d18.6627105!4d73.8104951!16s%2Fg%2F11mlxzhdn7?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA2N0gBUAM%3D"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-start gap-2 text-xs leading-relaxed hover:text-blue-600 transition-colors group"
                            >
                                <img src="/google-maps-icon.png" alt="Location" className="w-4 h-4 mt-0.5 object-contain group-hover:scale-110 transition-transform flex-shrink-0" />
                                <span>Address: Sk 360 Dynamics</span>
                            </a>
                            <a
                                href="https://www.instagram.com/sk360dynamics/?hl=en"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-xs leading-relaxed hover:text-pink-600 transition-colors group"
                            >
                                <img src="/instagram-logo.png" alt="Instagram" className="w-4 h-4 object-contain group-hover:scale-110 transition-transform flex-shrink-0" />
                                <span>Instagram: sk360dynamics</span>
                            </a>
                        </div>
                    </div>

                    {/* Policies */}
                    <div>
                        <h3 className="font-bold text-gray-900 mb-4">Policies</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li>
                                <button
                                    onClick={() => setIsTermsOpen(true)}
                                    className="hover:text-blue-600 transition-colors text-left"
                                >
                                    Terms and Conditions
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-200 text-center">
                    <p className="text-xs text-gray-500">
                        All rights reserved © 2025 SK Dynamics 360.
                    </p>
                </div>
            </div>

            <TermsModal
                isOpen={isTermsOpen}
                onClose={() => setIsTermsOpen(false)}
            />
        </footer>
    );
};

export default Footer;

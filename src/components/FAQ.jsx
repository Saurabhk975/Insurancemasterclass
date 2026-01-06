import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const faqs = [
        {
            question: "Will there be a recording available?",
            answer: "No. Recordings will not be shared to ensure the exclusivity and value of the live interaction."
        },
        {
            question: "How is this different from other investment webinars?",
            answer: "This masterclass focuses on practical, wealth-building strategies rather than complex theory. You'll learn how to build a real-world portfolio and manage risks effectively."
        },
        {
            question: "Do I need to have prior knowledge of the stock market?",
            answer: "Not at all! This masterclass is designed for beginners and intermediates. We break down complex financial concepts into simple, easy-to-understand steps."
        },
        {
            question: "Can I ask questions during the session?",
            answer: "Absolutely! We encourage interactive learning and will have dedicated segments for Q&A to help clarify your investment doubts."
        },
        {
            question: "Will this help me start my investment journey?",
            answer: "Yes! You'll gain the confidence and knowledge needed to pick the right investment instruments and start building your wealth systematically."
        }
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="container px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
                    Frequently asked questions
                </h2>

                <div className="max-w-3xl mx-auto space-y-3">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-white rounded-xl overflow-hidden border border-gray-200">
                            <button
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                            >
                                <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                                <span className="flex-shrink-0 text-gray-400">
                                    {activeIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                                </span>
                            </button>
                            {activeIndex === index && (
                                <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;

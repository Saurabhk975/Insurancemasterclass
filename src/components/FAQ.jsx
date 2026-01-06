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
            question: "How is this different from other insurance webinars?",
            answer: "This masterclass focuses on the practical reality of claims and policy terms rather than just selling you a plan. You'll learn how to actually get your claim paid."
        },
        {
            question: "Do I need to have prior knowledge of insurance?",
            answer: "Not at all! We start from the basics and explain complex terms like 'Co-pay', 'Deductibles', and 'Waiting Periods' in simple language."
        },
        {
            question: "Can I ask questions during the session?",
            answer: "Absolutely! We encourage questions and will have dedicated segments to clear your doubts about your existing or new policies."
        },
        {
            question: "Will this help me choose the right policy?",
            answer: "Yes! You'll gain the framework to compare plans effectively and pick one that actually covers you when you need it."
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

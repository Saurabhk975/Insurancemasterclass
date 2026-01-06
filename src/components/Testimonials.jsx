import React from 'react';

const Testimonials = () => {
    const testimonials = [
        {
            name: "Swapnil wagh",
            role: "LINK ASIA",
            text: "Thank you SK Dynamics 360 for such an insightful insurance webinar. The team is spreading the right awareness, and with their help, I've finally understood how to choose the right coverage and secure my family's future systematically.",
            avatar: "/swapnil-wagh.png"
        },
        {
            name: "Sanjay Rathod",
            role: "MOBILE REVIEW",
            text: "Very honest and practical approach to insurance. They didn't push any policies, just gave pure knowledge on how claims work. I hope they continue these sessions for many more people looking to secure their health and life.",
            avatar: "/sanjay-rathod.png",
            imgPos: "object-[50%_15%] origin-center",
            scale: "scale-110"
        },
        {
            name: "Suraj Takale",
            role: "FINEDITION",
            text: "Just attended an amazing webinar by Saurabh Kulkarni on Insurance 101. My biggest takeaway was the importance of waiting periods and how to pick quality health plans. Truly eye-opening!",
            avatar: "/suraj-takale.png"
        }
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="container px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
                    Hear from Those Who've Already Attended
                </h2>
                <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                    Join thousands of satisfied learners who transformed their financial knowledge.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="card-sk p-6 hover:shadow-xl transition-shadow">
                            <p className="text-gray-700 text-sm leading-relaxed mb-6 italic">
                                "{testimonial.text}"
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                                    <img
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                        className={`w-full h-full object-cover ${testimonial.scale || 'scale-150'} ${testimonial.imgPos || 'object-top origin-top'}`}
                                    />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-sm">{testimonial.name}</h4>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

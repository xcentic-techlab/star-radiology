import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Teacher",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Excellent service and very professional staff. The MRI scan was done quickly and the reports were delivered on time. Highly recommend Lifeline Diagnostics for anyone looking for quality healthcare services.",
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    role: "Business Owner",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "I was impressed by the cleanliness and modern equipment at the center. The doctors explained everything clearly and the staff was very caring. Will definitely come back for future checkups.",
  },
  {
    id: 3,
    name: "Anjali Patel",
    role: "Software Engineer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Very convenient online appointment booking and minimal waiting time. The whole process was smooth and the results were accurate. Great experience overall!",
  },
  {
    id: 4,
    name: "Dr. Arun Mehta",
    role: "Physician",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "As a referring physician, I trust Lifeline Diagnostics for their accuracy and professionalism. Their detailed reports help me provide better care to my patients.",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-accent text-primary rounded-full text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What Our Patients
            <span className="text-gradient block">Say About Us</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear from our satisfied patients about their experience with our diagnostic services.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-card rounded-3xl shadow-xl p-8 md:p-12 relative"
            >
              <Quote className="absolute top-8 right-8 h-16 w-16 text-primary/10" />
              
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-shrink-0">
                  <img
                    src={testimonials[current].image}
                    alt={testimonials[current].name}
                    className="w-24 h-24 rounded-2xl object-cover shadow-lg"
                  />
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <div className="flex justify-center md:justify-start gap-1 mb-4">
                    {[...Array(testimonials[current].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-warning text-warning" />
                    ))}
                  </div>
                  
                  <p className="text-foreground text-lg leading-relaxed mb-6">
                    "{testimonials[current].text}"
                  </p>
                  
                  <div>
                    <h4 className="font-display font-semibold text-foreground">
                      {testimonials[current].name}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {testimonials[current].role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full bg-card shadow-md flex items-center justify-center hover:bg-accent transition-colors"
            >
              <ChevronLeft className="h-5 w-5 text-foreground" />
            </button>
            
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === current
                      ? "bg-primary w-8"
                      : "bg-border hover:bg-primary/50"
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-card shadow-md flex items-center justify-center hover:bg-accent transition-colors"
            >
              <ChevronRight className="h-5 w-5 text-foreground" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

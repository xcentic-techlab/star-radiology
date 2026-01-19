import { useRef } from "react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Teacher",
    image:
      "https://www.fujitsu.com/global/Images/Srinita_1_tcm100-3656043.jpg",
    rating: 5,
    text: "Excellent service and very professional staff. Highly recommended.",
  },
  {
    name: "Rajesh Kumar",
    role: "Business Owner",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/049/174/246/small/a-smiling-young-indian-man-with-formal-shirts-outdoors-photo.jpg",
    rating: 5,
    text: "Clean facility, modern machines and caring staff.",
  },
  {
    name: "Anjali Patel",
    role: "Software Engineer",
    image:
      "https://thumbs.dreamstime.com/b/vertical-portrait-happy-young-business-lady-indian-ethnicity-standing-confident-pose-looking-camera-profile-picture-339154738.jpg",
    rating: 5,
    text: "Online booking was smooth and reports were accurate.",
  },
  {
    name: "Rohit Verma",
    role: "Designer",
    image:
      "https://img.freepik.com/free-photo/closeup-young-hispanic-man-casuals-studio_662251-600.jpg",
    rating: 5,
    text: "Very fast service and polite staff.",
  },
];

const loopTestimonials = [...testimonials, ...testimonials];

const CARD_WIDTH = 300; 

const TestimonialsSection = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({
      left: -CARD_WIDTH,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({
      left: CARD_WIDTH,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-28 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold mb-3">
            What Our <span className="text-blue-900">Patients Say</span>
          </h2>
          <p className="text-gray-600">
            Trusted feedback from our happy patients.
          </p>
        </div>
        <div className="relative">
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10
                       w-11 h-11 rounded-full bg-white shadow-lg border
                       flex items-center justify-center
                       hover:scale-110 active:scale-95 transition"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10
                       w-11 h-11 rounded-full bg-white shadow-lg border
                       flex items-center justify-center
                       hover:scale-110 active:scale-95 transition"
          >
            <ChevronRight />
          </button>
          <div
            ref={sliderRef}
            className="relative overflow-x-auto scroll-smooth no-scrollbar py-6 px-14"
          >
            <motion.div
              className="flex gap-8 w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                repeat: Infinity,
                duration: 35,
                ease: "linear",
              }}
            >
              {loopTestimonials.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -20, scale: 1.06 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                  }}
                  className="min-w-[220px] h-[260px] bg-white rounded-2xl 
                             shadow-lg p-5 flex flex-col items-center 
                             text-center cursor-pointer"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 rounded-full object-cover mb-4 ring-4 ring-blue-100"
                  />
                  <div className="flex gap-1 mb-2">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-3">
                    “{item.text}”
                  </p>
                  <h4 className="font-semibold text-gray-900">
                    {item.name}
                  </h4>
                  <span className="text-xs text-gray-500">
                    {item.role}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

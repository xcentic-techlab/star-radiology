import { motion } from "framer-motion";
import { 
  Clock, 
  Award, 
  Users, 
  Shield, 
  Microscope, 
  HeartPulse,
  CheckCircle2
} from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Quick Results",
    description: "Get your diagnostic reports within 24-48 hours with our efficient processing system.",
  },
  {
    icon: Award,
    title: "NABL Accredited",
    description: "Our laboratories are certified and accredited for the highest quality standards.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Experienced doctors and technicians dedicated to accurate diagnostics.",
  },
  {
    icon: Shield,
    title: "Data Security",
    description: "Your health records are secure with our advanced data protection systems.",
  }
];

const achievements = [
  "50,000+ Satisfied Patients",
  "100+ Diagnostic Centers",
  "500+ Healthcare Professionals",
  "25+ Years of Excellence",
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-accent">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Trusted Healthcare Partner for
              <span className="text-gradient block">Accurate Diagnostics</span>
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              We combine cutting-edge technology with compassionate care to deliver 
              accurate diagnostic results. Our commitment to quality and patient 
              satisfaction has made us a trusted name in healthcare diagnostics.
            </p>

            <ul className="space-y-4 mb-8">
              {achievements.map((achievement, index) => (
                <motion.li
                  key={achievement}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0" />
                  <span className="text-foreground font-medium">{achievement}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 
  flex items-center justify-center mb-4 shadow-sm">
  <feature.icon className="h-5 w-5 text-primary stroke-[2.2]" />
</div>

                <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

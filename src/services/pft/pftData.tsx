import heroImg from "../../../src/assets/ptf/heroImg.webp";
import machine1 from "../../../src/assets/ptf/machine1.jpg";
import machine2 from "../../../src/assets/ptf/machine2.jpg";
import machine3 from "../../../src/assets/ptf/machine3.jpg";

export const pftData = {
  title: "PFT Test in Noida | Pulmonary Function Testing | Star Radiology",

  subtitle: "Accurate Lung Capacity Evaluation • Non-Invasive",

  description: `
Pulmonary Function Test (PFT) in Noida measures lung airflow, volume and oxygen efficiency to diagnose asthma, COPD and respiratory disorders.
`,

  heroImage: heroImg,

  equipment: [
    {
      name: "Computerized Spirometry System",
      description:
        "Measures airflow speed and lung volume with high precision.",
      image: machine1,
    },
    {
      name: "Diffusion Capacity Analyzer",
      description:
        "Evaluates oxygen transfer efficiency in lungs.",
      image: machine2,
    },
    {
      name: "Calibration & Quality Control Unit",
      description:
        "Ensures consistent accuracy of lung measurements.",
      image: machine3,
    },
  ],

  benefits: [
    { title: "Accurate Lung Health Assessment", desc: "Measures breathing capacity." },
    { title: "Early Disease Detection", desc: "Detects asthma and COPD." },
    { title: "Non-Invasive Procedure", desc: "Safe and painless." },
    { title: "Treatment Monitoring", desc: "Tracks disease progression." },
    { title: "Fast Reporting", desc: "Immediate results." },
  ],

  faqs: [
    { question: "What does PFT measure?", answer: "Lung airflow and capacity." },
    { question: "Is PFT safe?", answer: "Yes, completely safe." },
    { question: "How long does test take?", answer: "20–30 minutes." },
    { question: "Do I need fasting?", answer: "No fasting required." },
    { question: "Can children take PFT?", answer: "Yes under supervision." },
    { question: "When will report be available?", answer: "Same day." },
  ],
};

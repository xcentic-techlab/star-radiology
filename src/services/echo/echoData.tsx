import heroImg from "../../../src/assets/echo/heroImg.png";
import machine1 from "../../../src/assets/echo/machine1.jpg";
import machine2 from "../../../src/assets/echo/machine2.jpg";
import machine3 from "../../../src/assets/echo/machine3.jpg";

export const echoData = {
  title: "Echo Test in Noida | Advanced Cardiac Imaging | Star Radiology",

  subtitle: "Non-Invasive • High Resolution • Accurate Heart Assessment",

  description: `
Get advanced Echocardiogram (Echo Test) in Noida for detailed evaluation of heart chambers, valves, blood flow and cardiac performance using high-resolution ultrasound imaging systems.
`,
  heroImage: heroImg,

  equipment: [
    {
      name: "High Frequency Cardiac Ultrasound System",
      description:
        "Provides ultra-clear imaging of heart chambers, valves and surrounding structures with advanced Doppler technology for accurate measurement of blood flow and cardiac motion.",
      image: machine1,
    },
    {
      name: "Color Doppler Imaging Module",
      description:
        "Enables real-time visualization of blood flow direction, speed and turbulence, helping detect valve leakage, blockages and congenital abnormalities with high accuracy.",
      image: machine2,
    },
    {
      name: "3D Cardiac Imaging Workstation",
      description:
        "Creates three-dimensional reconstructions of heart anatomy for advanced evaluation, surgical planning and complex cardiac diagnosis.",
      image: machine3,
    },
  ],

  benefits: [
    { title: "Non-Invasive Procedure", desc: "No injections or radiation exposure." },
    { title: "Real-Time Heart Visualization", desc: "Live assessment of heart motion." },
    { title: "Early Disease Detection", desc: "Detects valve disease and heart weakness." },
    { title: "High Diagnostic Accuracy", desc: "Precise cardiac measurements." },
    { title: "Quick Reporting", desc: "Fast digital report delivery." },
  ],

  faqs: [
    { question: "What does Echo test evaluate?", answer: "Heart structure, valves and pumping efficiency." },
    { question: "Is Echo safe?", answer: "Yes, it uses ultrasound and has no radiation." },
    { question: "How long does Echo take?", answer: "Usually 20–30 minutes." },
    { question: "Is fasting required?", answer: "No fasting is required." },
    { question: "Can elderly patients undergo Echo?", answer: "Yes, it is safe for all age groups." },
    { question: "When will I receive the report?", answer: "Same day digital reports are provided." },
  ],
};

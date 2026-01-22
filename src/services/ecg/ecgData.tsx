import heroImg from "../../../src/assets/ecg/heroImg.jpg";
import machine1 from "../../../src/assets/ecg/machine1.jpg";
import machine2 from "../../../src/assets/ecg/machine2.jpg";
import machine3 from "../../../src/assets/ecg/machine3.jpg";

export const ecgData = {
  title: "ECG Test in Noida | Digital Heart Rhythm Analysis",

  subtitle: "Quick • Safe • Non-Invasive Cardiac Screening",

  description: `
ECG test in Noida records the electrical activity of the heart to detect rhythm disorders, heart attacks, electrolyte imbalance and cardiac stress.
`,
  heroImage: heroImg,

  equipment: [
    {
      name: "12-Channel Digital ECG Machine",
      description:
        "Captures precise heart electrical signals with high sensitivity and accuracy.",
      image: machine1,
    },
    {
      name: "Automated Signal Analysis Software",
      description:
        "Instant waveform interpretation reduces human error.",
      image: machine2,
    },
    {
      name: "High-Speed Thermal Printer",
      description:
        "Generates clear ECG tracings for immediate diagnosis.",
      image: machine3,
    },
  ],

  benefits: [
    { title: "Fast Test Completion", desc: "Completed within 5–10 minutes." },
    { title: "Detects Heart Rhythm Disorders", desc: "Identifies arrhythmias." },
    { title: "Completely Safe", desc: "No radiation exposure." },
    { title: "Accurate Digital Recording", desc: "High signal clarity." },
    { title: "Immediate Reporting", desc: "Quick diagnosis." },
  ],

  faqs: [
    { question: "Is ECG painful?", answer: "No, it is painless." },
    { question: "How long does ECG take?", answer: "5–10 minutes." },
    { question: "Does ECG require fasting?", answer: "No preparation required." },
    { question: "Can ECG detect heart attack?", answer: "Yes, abnormal patterns can indicate heart attack." },
    { question: "Is ECG safe for children?", answer: "Yes, completely safe." },
    { question: "When will I get report?", answer: "Immediately after test." },
  ],
};

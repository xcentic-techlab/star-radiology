import heroImg from "../../../src/assets/tmt/heroImg.png";
import machine1 from "../../../src/assets/tmt/machine1.jpg";
import machine2 from "../../../src/assets/tmt/machine2.webp";
import machine3 from "../../../src/assets/tmt/machine3.jpg";

export const tmtData = {
  title: "TMT Test in Noida | Cardiac Stress Test | Star Radiology",

  subtitle: "Exercise ECG • Cardiac Performance Evaluation",

  description: `
Treadmill Test (TMT) in Noida evaluates heart response during physical activity to detect coronary artery disease, rhythm abnormalities and exercise tolerance.
`,
  heroImage: heroImg,   

  equipment: [
    {
      name: "Medical Grade Motorized Treadmill",
      description:
        "Controlled speed and incline adjustments allow safe graded exercise testing under medical supervision.",
      image: machine1,
    },
    {
      name: "12-Lead Digital ECG Monitoring System",
      description:
        "Continuously records heart rhythm and electrical activity during exercise for accurate detection of abnormalities.",
      image: machine2,
    },
    {
      name: "Automated Blood Pressure Monitoring Unit",
      description:
        "Monitors blood pressure response during exertion ensuring patient safety.",
      image: machine3,
    },
  ],

  benefits: [
    { title: "Detects Hidden Heart Disease", desc: "Identifies blocked arteries early." },
    { title: "Real-Time Monitoring", desc: "Live ECG and BP monitoring." },
    { title: "Safe Medical Supervision", desc: "Conducted under trained professionals." },
    { title: "Functional Heart Assessment", desc: "Evaluates exercise tolerance." },
    { title: "Fast Report Availability", desc: "Same-day reporting." },
  ],

  faqs: [
    { question: "Who needs TMT?", answer: "Patients with chest pain or heart risk factors." },
    { question: "Is TMT safe?", answer: "Yes, supervised testing ensures safety." },
    { question: "How long does test take?", answer: "Approximately 20–30 minutes." },
    { question: "Do I need fasting?", answer: "Light meal recommended before test." },
    { question: "Can elderly patients take TMT?", answer: "Doctor evaluation is required." },
    { question: "When will report be available?", answer: "Same day digital reports." },
  ],
};

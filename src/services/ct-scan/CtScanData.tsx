
import heroImg from "../../../src/assets/ct-scan/hero.jpg";
import machine1 from "../../../src/assets/ct-scan/machine1.jpg";
import machine2 from "../../../src/assets/ct-scan/machine2.jpg";
import machine3 from "../../../src/assets/ct-scan/machine3.jpg";

export const ctScanData = {
  title: "CT Scan in Noida | Star Radiology & Diagnostics Centre",

  subtitle: "High Precision • Low Radiation • Rapid Diagnostic Imaging",

  description: `
Get advanced CT scan services near me in Noida at Star Radiology & Diagnostics Centre — painless, accurate imaging for head, abdomen, chest, spine & more.
`,

  heroImage: heroImg,

  equipment: [
    {
      name: "128-Slice Multi-Detector CT Scanner",
      description:
        "This high-speed multi-detector CT scanner captures ultra-thin image slices in seconds, allowing precise visualization of organs, blood vessels, brain structures and bones. It supports advanced cardiac imaging, trauma assessment and oncology diagnostics with excellent spatial accuracy and reduced motion artifacts.",
      image: machine1,
    },
    {
      name: "Low-Dose Radiation Optimization System",
      description:
        "Automatically adjusts radiation exposure based on patient size and scan region, significantly reducing radiation dose while preserving diagnostic image quality. This system ensures enhanced patient safety for routine and follow-up examinations.",
      image: machine2,
    },
    {
      name: "Advanced 3D Reconstruction & AI Software",
      description:
        "Generates high-resolution 3D models of organs, blood vessels and skeletal structures, helping clinicians plan surgeries, evaluate vascular diseases and detect hidden abnormalities with greater precision.",
      image: machine3,
    },
  ],

  benefits: [
    {
      title: "Ultra-Fast Scanning",
      desc: "Captures high-resolution images within seconds for emergency and trauma diagnosis."
    },
    {
      title: "Low Radiation Safety",
      desc: "Optimized dose control ensures minimal radiation exposure without compromising clarity."
    },
    {
      title: "High Diagnostic Accuracy",
      desc: "Detailed cross-sectional imaging enables precise detection of internal abnormalities."
    },
    {
      title: "Comprehensive Body Imaging",
      desc: "Ideal for brain, chest, abdomen, vascular and orthopedic evaluations."
    },
    {
      title: "Advanced 3D Visualization",
      desc: "Supports surgical planning and complex disease assessment using 3D reconstructions."
    },
  ],

  faqs: [
    {
      question: "What is a CT scan and how does it work?",
      answer:
        "A CT scan uses X-rays and advanced computer processing to create detailed cross-sectional images of the body. It allows doctors to view internal organs, bones, blood vessels and soft tissues with much greater detail than standard X-rays.",
    },
    {
      question: "Is CT scanning safe for patients?",
      answer:
        "Modern CT scanners use optimized low-dose radiation technology to minimize exposure while maintaining diagnostic quality. The benefits of accurate diagnosis usually outweigh the minimal radiation risk. Our team follows strict safety protocols for every scan.",
    },
    {
      question: "How long does a CT scan take?",
      answer:
        "Most CT scans are completed within 5–15 minutes. Actual scanning time may only take a few seconds, but preparation and positioning may take slightly longer.",
    },
    {
      question: "Do I need any preparation before a CT scan?",
      answer:
        "Some CT scans may require fasting or the use of contrast dye. Our staff will inform you in advance about any specific preparation instructions based on the type of scan you are undergoing.",
    },
    {
      question: "Will I feel any pain during the CT scan?",
      answer:
        "CT scans are completely painless and non-invasive. You will simply lie on a scanning table while the machine rotates around you to capture images.",
    },
    {
      question: "When will I receive my CT scan report?",
      answer:
        "Reports are usually available within a few hours to one working day depending on the complexity of the study. Digital access and printed copies are available for your convenience.",
    },
  ],
};

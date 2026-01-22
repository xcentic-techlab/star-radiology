""
import heroImg from "../../../src/assets/xray/hero.jpg";
import machine1 from "../../../src/assets/xray/machine1.jpg";
import machine2 from "../../../src/assets/xray/machine2.png";
import machine3 from "../../../src/assets/xray/machine3.jpg";

export const xrayData = {
  title: "X-Ray Services in Noida | Digital X-Ray | Star Radiology",

  subtitle: "Fast, Accurate & Low Radiation Diagnostic Imaging",

  description: `
Advanced X-Ray services near me in Noida at Star Radiology & Diagnostics — digital imaging for bones, chest, spine & joints with fast, accurate reports.
`,

  heroImage: heroImg,

  equipment: [
    {
      name: "Digital Radiography X-Ray System",
      description:
        "This high-performance digital radiography system captures detailed skeletal and chest images with exceptional clarity while maintaining ultra-low radiation exposure. Instant image processing enables doctors to detect fractures, infections, lung disorders and joint abnormalities with speed and confidence.",
      image: machine1,
    },
    {
      name: "Mobile X-Ray Unit",
      description:
        "Our mobile X-ray unit allows bedside imaging for emergency patients, intensive care units and immobile patients. It delivers reliable imaging quality with flexible positioning, enabling fast diagnosis in trauma and critical care environments.",
      image: machine2,
    },
    {
      name: "Advanced Image Processing Workstation",
      description:
        "This workstation enhances raw X-ray images using intelligent processing algorithms to improve contrast, sharpness and diagnostic accuracy. Radiologists can analyze, annotate and securely transmit reports digitally for rapid clinical decision-making.",
      image: machine3,
    },
  ],


  benefits: [
    {
      title: "Instant Digital Imaging",
      desc: "Images are processed instantly, allowing rapid diagnosis and reduced patient waiting time."
    },
    {
      title: "Low Radiation Exposure",
      desc: "Advanced detectors minimize radiation dose while maintaining image clarity and safety."
    },
    {
      title: "Fast Emergency Diagnosis",
      desc: "Ideal for trauma cases, fractures and chest emergencies requiring immediate evaluation."
    },
    {
      title: "High Image Resolution",
      desc: "Detailed visualization of bones, lungs and joints ensures accurate clinical assessment."
    },
    {
      title: "Affordable & Accessible",
      desc: "Cost-effective imaging solution with walk-in availability for routine diagnostics."
    },
  ],

  faqs: [
    {
      question: "Is digital X-ray safe for repeated use?",
      answer:
        "Digital X-ray uses significantly lower radiation compared to traditional film X-rays, making it safer for routine and follow-up examinations. However, unnecessary exposure is always avoided and protective measures are used whenever required.",
    },
    {
      question: "How long does it take to complete an X-ray scan?",
      answer:
        "The X-ray imaging process usually takes only a few minutes. Including positioning and setup, most patients complete their examination within 10–15 minutes.",
    },
    {
      question: "Do I need any preparation before an X-ray?",
      answer:
        "Most X-ray examinations do not require special preparation. You may be asked to remove metal objects, jewelry or clothing with buttons or zippers that could interfere with image quality.",
    },
    {
      question: "What conditions can X-ray detect?",
      answer:
        "X-ray imaging is commonly used to detect fractures, arthritis, lung infections, spinal alignment issues, dental problems, foreign objects and certain tumors.",
    },
    {
      question: "When will I receive my X-ray report?",
      answer:
        "Digital X-ray reports are typically available within a few hours on the same day. Reports can be accessed digitally or collected in printed format based on patient preference.",
    },
    {
      question: "Can children and elderly patients undergo X-ray safely?",
      answer:
        "Yes, X-ray imaging can be safely performed for children and elderly patients with proper shielding and optimized exposure settings. Our technicians follow strict safety protocols to ensure minimal radiation exposure.",
    },
  ],
};

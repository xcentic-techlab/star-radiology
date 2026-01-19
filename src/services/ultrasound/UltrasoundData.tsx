
import heroImg from "../../../src/assets/ultrasound/hero.jpg";
import machine1 from "../../../src/assets/ultrasound/machine1.jpg";
import machine2 from "../../../src/assets/ultrasound/machine2.jpg";
import machine3 from "../../../src/assets/ultrasound/machine3.jpg";

export const ultrasoundData = {
  title: "Advanced Ultrasound Diagnostic Services",

  subtitle: "Safe, Radiation-Free & Real-Time Imaging",
  description: `
Star Radiology provides advanced ultrasound diagnostic services using high-resolution Doppler and real-time imaging technology. Ultrasound enables safe visualization of internal organs, blood flow, pregnancy development and musculoskeletal structures without radiation exposure.

Our experienced sonographers perform precise examinations while maintaining maximum patient comfort and safety. Ultrasound plays a crucial role in early disease detection, pregnancy monitoring, abdominal assessment and vascular evaluation.
`,
  heroImage: heroImg,

  equipment: [
    {
      name: "High Resolution Doppler Ultrasound System",
      description:
        "This advanced Doppler ultrasound system enables detailed visualization of blood flow, cardiac motion and organ perfusion. It supports accurate diagnosis of vascular blockages, varicose veins, liver disease, kidney disorders and thyroid abnormalities with excellent clarity and sensitivity.",
      image: machine1,
    },
    {
      name: "3D / 4D Pregnancy Imaging Unit",
      description:
        "The 3D/4D ultrasound system provides lifelike fetal imaging for accurate assessment of growth, development and anatomical structure. Expectant parents can visualize facial features, movements and heart activity, while doctors monitor fetal health and detect early abnormalities.",
      image: machine2,
    },
    {
      name: "Portable Ultrasound Scanner",
      description:
        "Our portable ultrasound scanner allows bedside imaging for emergency cases, intensive care monitoring and outpatient evaluations. It delivers reliable imaging quality with rapid deployment, making it ideal for trauma assessment, pregnancy follow-ups and critical care situations.",
      image: machine3,
    },
  ],


  benefits: [
    {
      title: "Radiation-Free Safety",
      desc: "Ultrasound uses sound waves instead of radiation, making it safe for all age groups including pregnant women."
    },
    {
      title: "Real-Time Imaging",
      desc: "Live visualization allows doctors to assess organ motion, blood flow and fetal activity instantly."
    },
    {
      title: "Pregnancy Monitoring",
      desc: "Essential for tracking fetal growth, development and early detection of abnormalities."
    },
    {
      title: "Doppler Vascular Assessment",
      desc: "Evaluates blood circulation, blockages and vascular health with high precision."
    },
    {
      title: "Fast & Comfortable Scans",
      desc: "Non-invasive, painless and quick procedure with immediate image availability."
    },
  ],


  faqs: [
    {
      question: "Is ultrasound completely safe for pregnant women and children?",
      answer:
        "Yes, ultrasound is extremely safe as it uses sound waves instead of radiation. It is widely used during pregnancy to monitor fetal development and is also safe for infants, children and elderly patients without any long-term side effects.",
    },
    {
      question: "How long does an ultrasound scan usually take?",
      answer:
        "Most ultrasound examinations take between 15 to 30 minutes depending on the area being scanned and the complexity of the examination. Some specialized scans may take slightly longer.",
    },
    {
      question: "Do I need any special preparation before an ultrasound?",
      answer:
        "Preparation depends on the type of ultrasound. Abdominal scans may require fasting, while pelvic scans may require a full bladder. Our staff will inform you clearly about preparation guidelines before your appointment.",
    },
    {
      question: "What conditions can ultrasound help diagnose?",
      answer:
        "Ultrasound helps diagnose liver disease, kidney stones, gallbladder problems, thyroid disorders, pregnancy development, vascular blockages, soft tissue injuries and many other conditions.",
    },
    {
      question: "When will I receive my ultrasound report?",
      answer:
        "Most ultrasound reports are available the same day or within a few hours depending on the complexity of the study. Digital reports can be accessed securely online or collected from the center.",
    },
    {
      question: "Is ultrasound painful or uncomfortable?",
      answer:
        "Ultrasound is completely painless and non-invasive. Mild pressure may be applied with the probe during scanning, but it does not cause discomfort for most patients.",
    },
  ],
};

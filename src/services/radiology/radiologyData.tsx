
import heroImg from "../../../src/assets/radiology_img/hero.jpg";
import machine1 from "../../../src/assets/radiology_img/machine1.jpg";
import machine2 from "../../../src/assets/radiology_img/machine2.jpg";
import machine3 from "../../../src/assets/radiology_img/machine3.jpg";

export const radiologyData = {
  title: "Digital Radiology Services",


  subtitle: "High Precision Imaging with Secure Digital Reporting",

  description: `
Star Radiology provides comprehensive digital radiology services powered by advanced imaging systems and secure digital infrastructure. Our radiology department supports accurate diagnosis for bone, chest, abdominal, trauma, vascular and interventional studies.

By utilizing optimized low-radiation protocols and high-speed digital processing, we ensure maximum patient safety while delivering clear and reliable imaging results. All studies are interpreted by experienced radiologists who maintain strict clinical accuracy and reporting standards.
`,


  heroImage: heroImg,


  equipment: [
    {
      name: "Digital Radiography (DR) System",
      description:
        "Our Digital Radiography system delivers high-resolution images with significantly reduced radiation exposure. It enables rapid image acquisition, immediate preview and accurate visualization of skeletal structures, chest conditions and trauma cases. The system enhances workflow efficiency while ensuring superior diagnostic reliability.",
      image: machine1,
    },
    {
      name: "Fluoroscopy Imaging Unit",
      description:
        "This advanced fluoroscopy unit provides real-time imaging for dynamic diagnostic and interventional procedures. It is widely used for gastrointestinal studies, vascular assessments and guided procedures, enabling clinicians to observe movement, contrast flow and functional behavior with excellent clarity and minimal radiation dose.",
      image: machine2,
    },
    {
      name: "PACS & Cloud Reporting System",
      description:
        "Our PACS and cloud-based reporting system ensures secure storage, fast retrieval and seamless sharing of imaging data. Doctors can access reports remotely, collaborate with specialists and maintain long-term digital records, improving clinical efficiency and continuity of care.",
      image: machine3,
    },
  ],

  benefits: [
    {
      title: "High Resolution Imaging",
      desc: "Delivers crystal-clear digital images for accurate diagnosis across multiple clinical specialties."
    },
    {
      title: "Low Radiation Safety",
      desc: "Optimized protocols minimize radiation exposure while maintaining image quality."
    },
    {
      title: "Fast Digital Reporting",
      desc: "Instant image processing and quick report delivery reduce patient waiting time."
    },
    {
      title: "Secure Cloud Access",
      desc: "Reports and images are safely stored and accessible anytime from anywhere."
    },
    {
      title: "Clinical Collaboration",
      desc: "Supports seamless sharing between doctors, specialists and hospitals."
    },
  ],

  faqs: [
    {
      question: "What types of radiology tests are available at Star Radiology?",
      answer:
        "We provide a wide range of radiology services including digital X-rays, fluoroscopy studies, chest imaging, orthopedic imaging, trauma imaging and interventional guidance. Our services support accurate diagnosis across multiple medical specialties.",
    },
    {
      question: "Is digital radiology safe in terms of radiation exposure?",
      answer:
        "Yes, our imaging systems use optimized low-dose radiation protocols that prioritize patient safety while maintaining excellent image clarity. Our technologists strictly follow safety guidelines and quality control measures.",
    },
    {
      question: "How quickly will I receive my radiology report?",
      answer:
        "Most digital radiology reports are available within a few hours. Emergency and priority cases are handled immediately. Digital reports are accessible online for quick review and sharing.",
    },
    {
      question: "Can doctors access reports remotely?",
      answer:
        "Yes, our PACS and cloud reporting system allows secure remote access for doctors and specialists, enabling fast consultations and second opinions when required.",
    },
    {
      question: "Do I need any preparation before a radiology test?",
      answer:
        "Most X-ray and digital radiology procedures do not require special preparation. However, certain fluoroscopy or contrast studies may require fasting or specific instructions. Our staff will inform you in advance.",
    },
    {
      question: "Are reports stored digitally for future reference?",
      answer:
        "Yes, all imaging data and reports are securely archived digitally, allowing patients and doctors to access previous studies whenever required.",
    },
  ],
};

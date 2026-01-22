import heroImg from "../../../src/assets/pathology/hero.jpg";
import machine1 from "../../../src/assets/pathology/machine1.jpg";
import machine2 from "../../../src/assets/pathology/machine2.jpg";
import machine3 from "../../../src/assets/pathology/machine3.jpg";

export const pathologyData = {
  title: "Best Pathology Lab & Diagnostic Tests in Noida | Star Radiology",

  subtitle: "Accurate, Reliable & NABL Compliant Diagnostic Testing",

  description: `
Comprehensive pathology lab services in Noida — blood tests, urine/stool analysis, biochemistry, immunology & health checkups at Star Radiology & Diagnostics Centre near me.
`,
  heroImage: heroImg,


  equipment: [
    {
      name: "Fully Automated Biochemistry Analyzer",
      description:
        "Our high-performance biochemistry analyzer processes large volumes of samples with exceptional accuracy and consistency. It performs essential investigations such as liver function tests, kidney function tests, lipid profile, electrolytes and glucose monitoring. Automation minimizes manual errors, reduces turnaround time and ensures reliable clinical results for faster diagnosis and treatment planning.",
      image: machine1,
    },
    {
      name: "Hematology Cell Counter",
      description:
        "This advanced hematology analyzer provides complete blood count (CBC), hemoglobin measurement and differential analysis with high precision. It helps detect anemia, infections, inflammatory conditions and blood disorders efficiently. The system supports high throughput testing while maintaining excellent accuracy and reproducibility.",
      image: machine2,
    },
    {
      name: "Immunoassay Analyzer",
      description:
        "The immunoassay analyzer delivers highly sensitive testing for hormones, tumor markers, fertility parameters and infectious diseases. It enables early disease detection, treatment monitoring and risk assessment with excellent analytical reliability and consistency.",
      image: machine3,
    },
  ],

  benefits: [
    {
      title: "High Accuracy Diagnostics",
      desc: "Fully automated systems ensure precise and consistent test results with minimal human error."
    },
    {
      title: "Fast Turnaround Time",
      desc: "Routine investigations are reported on the same day for quick clinical decision making."
    },
    {
      title: "Wide Test Coverage",
      desc: "Comprehensive blood, urine, hormone, infection and preventive health testing under one roof."
    },
    {
      title: "Digital Report Access",
      desc: "Secure online access to reports anytime, enabling easy sharing with doctors and family."
    },
    {
      title: "Home Sample Collection",
      desc: "Convenient doorstep sample collection for elderly and busy patients."
    },
  ],

  faqs: [
    {
      question: "What types of tests are available in your pathology laboratory?",
      answer:
        "Our laboratory offers a wide range of diagnostic tests including blood tests, urine tests, biochemistry panels, thyroid profile, diabetes monitoring, hormone testing, infection screening and preventive health check packages. We continuously expand our test menu to meet clinical requirements.",
    },
    {
      question: "How quickly will I receive my pathology test reports?",
      answer:
        "Most routine tests are reported on the same day. Specialized tests may take 24 to 48 hours depending on processing complexity and quality validation requirements. Digital reports are instantly accessible once finalized.",
    },
    {
      question: "Is home sample collection available?",
      answer:
        "Yes, we provide safe and hygienic home sample collection services for patient convenience, especially beneficial for senior citizens, working professionals and patients with mobility limitations.",
    },
    {
      question: "Are your laboratory processes NABL compliant?",
      answer:
        "Yes, our laboratory follows NABL compliant quality standards with strict internal audits, calibration protocols and quality control measures to ensure reliable and accurate results.",
    },
    {
      question: "Do I need to fast before blood tests?",
      answer:
        "Some tests such as lipid profile or fasting blood sugar may require fasting for 8–12 hours, while many other tests do not require fasting. Our staff will clearly guide you based on your prescribed test.",
    },
    {
      question: "How can I access my reports?",
      answer:
        "Reports can be accessed digitally through our secure online portal or collected in printed format from the center. Digital access allows easy sharing with your consulting doctor.",
    },
  ],
};

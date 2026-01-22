import ServicesLayout from "../ServicesLayout";
import { pathologyData } from "./pathologyData";
import { useEffect, useState } from "react";  
import { Helmet } from "react-helmet-async";


// const API = import.meta.env.VITE_API_URL;
const PathologyPage = () => {
    const [backendImages, setBackendImages] = useState({});
  
    useEffect(() => {
    fetch(`/api/images/services/pathology`)
      .then(res => res.json())
      .then(data => {
        const obj = {};
        data.forEach(img => {
          obj[img.key] = img.url;
        });
        setBackendImages(obj);
      });
  }, []);
  
  

  return (
<>
        <Helmet>
        <title>Best Pathology Lab & Diagnostic Tests in Noida | Star Radiology</title>

        <meta
          name="description"
          content="Comprehensive pathology lab services in Noida — blood tests, urine/stool analysis, biochemistry, immunology & health checkups at Star Radiology & Diagnostics Centre near me."
        />

        <meta
          name="keywords"
          content="pathology lab in noida, pathology services near me in noida, diagnostic pathology tests in noida, blood tests in noida, clinical lab near me noida, lab test centre in noida, star radiology pathology services, health checkup tests in noida, routine blood tests noida"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://starradiodiagnostic.com/services/pathology" />
        <meta
          property="og:title"
          content="Best Pathology Lab & Diagnostic Tests in Noida | Star Radiology"
        />
        <meta
          property="og:description"
          content="Comprehensive pathology lab services in Noida — blood tests, urine/stool analysis, biochemistry, immunology & health checkups at Star Radiology & Diagnostics Centre near me."
        />
        <meta property="og:site_name" content="Star Radiology & Diagnostics Centre" />
        <meta property="og:locale" content="en_IN" />
        <meta
          property="og:image"
          content="https://starradiodiagnostic.com/assets/hero-DIkjDJOg.jpg"
        />
        <meta
          property="og:image:alt"
          content="Pathology Lab & Diagnostic Tests at Star Radiology Noida"
        />
      </Helmet>

  
  <ServicesLayout {...pathologyData} backendImages={backendImages}/>;
  </>
  )
};

export default PathologyPage;

import ServicesLayout from "../ServicesLayout";
import { radiologyData } from "./radiologyData";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";


// const API = import.meta.env.VITE_API_URL;

export default function RadiologyPage() {
    const [backendImages, setBackendImages] = useState({});
  
    useEffect(() => {
    fetch(`/api/images/services/radiology`)
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
        <title>Best Radiology Reporting Services in Noida | Star Radiology</title>

        <meta
          name="description"
          content="Top radiology services near me in Noida — CT Scan, MRI, Digital X-Ray, Ultrasound & Mammography at Star Radiology & Diagnostics Centre with fast, accurate reports."
        />

        <meta
          name="keywords"
          content="radiology services in noida, radiology centre near me in noida, ct scan in noida, mri scan in noida, digital x-ray in noida, mammography in noida, ultrasound imaging near me, diagnostic imaging centre in noida, star radiology radiology services"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://starradiodiagnostic.com/services/radiology" />
        <meta
          property="og:title"
          content="Best Radiology Reporting Services in Noida | Star Radiology"
        />
        <meta
          property="og:description"
          content="Top radiology services near me in Noida — CT Scan, MRI, Digital X-Ray, Ultrasound & Mammography at Star Radiology & Diagnostics Centre with fast, accurate reports."
        />
        <meta property="og:site_name" content="Star Radiology & Diagnostics Centre" />
        <meta property="og:locale" content="en_IN" />
        <meta
          property="og:image"
          content="https://starradiodiagnostic.com/assets/hero-cWpVoSoH.jpg"
        />
        <meta
          property="og:image:alt"
          content="Radiology Reporting Services at Star Radiology Noida"
        />
      </Helmet>


    <ServicesLayout {...radiologyData} backendImages={backendImages} />;
    </>
  )
  
  
}

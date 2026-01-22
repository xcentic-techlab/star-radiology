import ServicesLayout from "../ServicesLayout";
import { ultrasoundData } from "./UltrasoundData";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";


// const API = import.meta.env.VITE_API_URL;

export default function UltrasoundPage() {
    const [backendImages, setBackendImages] = useState({});
  
    useEffect(() => {
    fetch(`/api/images/services/ultrasound`)
      .then(res => res.json())
      .then(data => {
        const obj = {};
        data.forEach(img => {
          obj[img.key] = img.url;
        });
        setBackendImages(obj);
      });
  }, []);
  
  
  return(
    <>
          <Helmet>
        <title>Ultrasound Services in Noida | Star Radiology & Diagnostics Centre</title>

        <meta
          name="description"
          content="Advanced ultrasound services near me in Noida at Star Radiology & Diagnostics Centre — high-quality sonography for abdomen, pelvis, pregnancy & general health exams."
        />

        <meta
          name="keywords"
          content="ultrasound services in noida, ultrasound near me in noida, sonography centre in noida, abdominal ultrasound in noida, pelvis ultrasound near me, obstetric ultrasound noida, diagnostic ultrasound services, star radiology ultrasound"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://starradiodiagnostic.com/services/ultrasound" />
        <meta
          property="og:title"
          content="Ultrasound Services in Noida | Star Radiology & Diagnostics Centre"
        />
        <meta
          property="og:description"
          content="Advanced ultrasound services near me in Noida at Star Radiology & Diagnostics Centre — high-quality sonography for abdomen, pelvis, pregnancy & general health exams."
        />
        <meta property="og:site_name" content="Star Radiology & Diagnostics Centre" />
        <meta property="og:locale" content="en_IN" />
        <meta
          property="og:image"
          content="https://starradiodiagnostic.com/assets/hero-ocVJNrro.jpg"
        />
        <meta
          property="og:image:alt"
          content="Ultrasound & Sonography Services at Star Radiology & Diagnostics Centre Noida"
        />
      </Helmet>
      <ServicesLayout {...ultrasoundData} backendImages={backendImages} />;
    </>
  ) 
}

import ServicesLayout from "../ServicesLayout";
import { xrayData } from "./xrayData";
import { useEffect, useState } from "react";  
import { Helmet } from "react-helmet-async";


// const API = import.meta.env.VITE_API_URL;

export default function XRayPage() {

    const [backendImages, setBackendImages] = useState({});
  
    useEffect(() => {
    fetch(`/api/images/services/xray`)
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
        <title>X-Ray Services in Noida | Digital X-Ray | Star Radiology</title>

        <meta
          name="description"
          content="Advanced X-Ray services near me in Noida at Star Radiology & Diagnostics — digital imaging for bones, chest, spine & joints with fast, accurate reports."
        />

        <meta
          name="keywords"
          content="x-ray services in noida, digital x-ray in noida, x-ray near me in noida, x-ray imaging centre noida, bone x-ray tests in noida, chest x-ray in noida, spinal x-ray noida, diagnostic x-ray services noida, star radiology x-ray services"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://starradiodiagnostic.com/services/x-ray" />
        <meta
          property="og:title"
          content="X-Ray Services in Noida | Digital X-Ray | Star Radiology"
        />
        <meta
          property="og:description"
          content="Advanced X-Ray services near me in Noida at Star Radiology & Diagnostics — digital imaging for bones, chest, spine & joints with fast, accurate reports."
        />
        <meta property="og:site_name" content="Star Radiology & Diagnostics Centre" />
        <meta property="og:locale" content="en_IN" />
        <meta
          property="og:image"
          content="https://starradiodiagnostic.com/assets/hero-NISnX8-p.jpg"
        />
        <meta
          property="og:image:alt"
          content="Digital X-Ray Services at Star Radiology & Diagnostics Centre Noida"
        />
      </Helmet>

      <ServicesLayout {...xrayData}  backendImages={backendImages} />;
    </>
  ) 
}

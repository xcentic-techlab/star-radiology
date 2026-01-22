import ServicesLayout from "../ServicesLayout";
import { ctScanData } from "./CtScanData";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";


// const API = import.meta.env.VITE_API_URL;

export default function CTScanPage() {
  const [backendImages, setBackendImages] = useState({});

  useEffect(() => {
fetch(`/api/images/services/ctscan`)
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
        <title>CT Scan in Noida | Star Radiology & Diagnostics Centre</title>

        <meta
          name="description"
          content="Get advanced CT scan services near me in Noida at Star Radiology & Diagnostics Centre — painless, accurate imaging for head, abdomen, chest, spine & more."
        />

        <meta
          name="keywords"
          content="ct scan in noida, ct scan near me in noida, ct scan services in noida, ct imaging centre in noida, computed tomography scan noida, ct scan tests near me, diagnostic ct scan noida, advanced ct scan services, star radiology ct scan"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://starradiodiagnostic.com/services/ct-scan" />
        <meta
          property="og:title"
          content="CT Scan in Noida | Star Radiology & Diagnostics Centre"
        />
        <meta
          property="og:description"
          content="Get advanced CT scan services near me in Noida at Star Radiology & Diagnostics Centre — painless, accurate imaging for head, abdomen, chest, spine & more."
        />
        <meta property="og:site_name" content="Star Radiology & Diagnostics Centre" />
        <meta property="og:locale" content="en_IN" />
        <meta
          property="og:image"
          content="https://starradiodiagnostic.com/assets/hero-oe59VsBj.jpg"
        />
        <meta
          property="og:image:alt"
          content="CT Scan Imaging Services at Star Radiology & Diagnostics Centre Noida"
        />
      </Helmet>
  <ServicesLayout
    {...ctScanData}
    backendImages={backendImages}
  />

  </>
);

}

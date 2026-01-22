// import ServicesLayout from "../ServicesLayout";
// import { mriData } from "./mriData";
// import { useEffect, useState } from "react";
// import { Helmet } from "react-helmet-async";


// // const API = import.meta.env.VITE_API_URL;

// export default function MRIPage() {
//     const [backendImages, setBackendImages] = useState({});
  
//     useEffect(() => {
//     fetch(`/api/images/services/mri`)
//       .then(res => res.json())
//       .then(data => {
//         const obj = {};
//         data.forEach(img => {
//           obj[img.key] = img.url;
//         });
//         setBackendImages(obj);
//       });
//   }, []);
  

//   return(
//     <>
//           <Helmet>
//         <title>MRI Scan in Noida | Star Radiology & Diagnostics Centre</title>

//         <meta
//           name="description"
//           content="Get advanced MRI scans near me in Noida at Star Radiology & Diagnostics Centre — high-resolution imaging for head, spine, chest, abdomen, joints & more."
//         />

//         <meta
//           name="keywords"
//           content="mri scan in noida, mri near me in noida, mri services in noida, star radiology mri, magnetic resonance imaging noida, mri head scan noida, mri spine scan noida, mri knee scan noida, diagnostic imaging mri noida"
//         />

//         <meta property="og:type" content="website" />
//         <meta property="og:url" content="https://starradiodiagnostic.com/services/mri" />
//         <meta
//           property="og:title"
//           content="MRI Scan in Noida | Star Radiology & Diagnostics Centre"
//         />
//         <meta
//           property="og:description"
//           content="Get advanced MRI scans near me in Noida at Star Radiology & Diagnostics Centre — high-resolution imaging for head, spine, chest, abdomen, joints & more."
//         />
//         <meta property="og:site_name" content="Star Radiology & Diagnostics Centre" />
//         <meta property="og:locale" content="en_IN" />
//         <meta
//           property="og:image"
//           content="https://starradiodiagnostic.com/assets/hero-DRysA6Mu.jpg"
//         />
//         <meta
//           property="og:image:alt"
//           content="MRI Scan Services at Star Radiology & Diagnostics Centre Noida"
//         />
//       </Helmet>

//       <ServicesLayout {...mriData}  backendImages={backendImages} />;
//     </>
//   )
  
// }

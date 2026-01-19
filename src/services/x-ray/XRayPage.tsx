import ServicesLayout from "../ServicesLayout";
import { xrayData } from "./xrayData";
import { useEffect, useState } from "react";  

export default function XRayPage() {

    const [backendImages, setBackendImages] = useState({});
  
    useEffect(() => {
    fetch("http://localhost:5000/api/images/services/xray")
      .then(res => res.json())
      .then(data => {
        const obj = {};
        data.forEach(img => {
          obj[img.key] = img.url;
        });
        setBackendImages(obj);
      });
  }, []);
  
  

  return <ServicesLayout {...xrayData}  backendImages={backendImages} />;
}

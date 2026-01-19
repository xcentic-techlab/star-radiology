import ServicesLayout from "../ServicesLayout";
import { ultrasoundData } from "./UltrasoundData";
import { useEffect, useState } from "react";

export default function UltrasoundPage() {
    const [backendImages, setBackendImages] = useState({});
  
    useEffect(() => {
    fetch("http://localhost:5000/api/images/services/ultrasound")
      .then(res => res.json())
      .then(data => {
        const obj = {};
        data.forEach(img => {
          obj[img.key] = img.url;
        });
        setBackendImages(obj);
      });
  }, []);
  
  
  return <ServicesLayout {...ultrasoundData} backendImages={backendImages} />;
}

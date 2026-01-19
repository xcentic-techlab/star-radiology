import ServicesLayout from "../ServicesLayout";
import { radiologyData } from "./radiologyData";
import { useEffect, useState } from "react";

const API = import.meta.env.VITE_API_URL;

export default function RadiologyPage() {
    const [backendImages, setBackendImages] = useState({});
  
    useEffect(() => {
    fetch(`${API}/api/images/services/radiology`)
      .then(res => res.json())
      .then(data => {
        const obj = {};
        data.forEach(img => {
          obj[img.key] = img.url;
        });
        setBackendImages(obj);
      });
  }, []);
  
  
  return <ServicesLayout {...radiologyData} backendImages={backendImages} />;
}

import ServicesLayout from "../ServicesLayout";
import { mriData } from "./mriData";
import { useEffect, useState } from "react";

const API = import.meta.env.VITE_API_URL;

export default function MRIPage() {
    const [backendImages, setBackendImages] = useState({});
  
    useEffect(() => {
    fetch(`${API}/api/images/services/mri`)
      .then(res => res.json())
      .then(data => {
        const obj = {};
        data.forEach(img => {
          obj[img.key] = img.url;
        });
        setBackendImages(obj);
      });
  }, []);
  

  return <ServicesLayout {...mriData}  backendImages={backendImages} />;
}

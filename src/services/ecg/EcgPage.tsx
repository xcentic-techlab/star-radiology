import ServicesLayout from "../ServicesLayout";
import { ecgData } from "./ecgData";
import { useEffect, useState } from "react";

export default function EcgPage() {
  const [backendImages, setBackendImages] = useState({});

  useEffect(() => {
    fetch(`/api/images/services/ecg`)
      .then(res => res.json())
      .then(data => {
        const obj:any = {};
        data.forEach((img:any) => (obj[img.key] = img.url));
        setBackendImages(obj);
      });
  }, []);

  return <ServicesLayout {...ecgData} backendImages={backendImages} />;
}

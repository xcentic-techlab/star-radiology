import ServicesLayout from "../ServicesLayout";
import { pftData } from "./pftData";
import { useEffect, useState } from "react";

export default function PftPage() {
  const [backendImages, setBackendImages] = useState({});

  useEffect(() => {
    fetch(`/api/images/services/pft`)
      .then(res => res.json())
      .then(data => {
        const obj:any = {};
        data.forEach((img:any) => (obj[img.key] = img.url));
        setBackendImages(obj);
      });
  }, []);

  return <ServicesLayout {...pftData} backendImages={backendImages} />;
}

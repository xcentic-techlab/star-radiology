import ServicesLayout from "../ServicesLayout";
import { ctScanData } from "./CtScanData";
import { useEffect, useState } from "react";

const API = import.meta.env.VITE_API_URL;

export default function CTScanPage() {
  const [backendImages, setBackendImages] = useState({});

  useEffect(() => {
fetch(`${API}/api/images/services/ctscan`)
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
  <ServicesLayout
    {...ctScanData}
    backendImages={backendImages}
  />
);

}
